import React from 'react'
import '../App.scss'
import EmptySearch from '../components/empty/EmptySearch';
import Pagination from '../components/paginate/Pagination';
import Items from '../components/PizzaBlock/Items';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';
import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterId, setSortObj } from '../redux/slices/filterSlice';

const Home = () => {
    const dispatch = useDispatch();
    const categoryId = useSelector((state) => state.filter.categoryId);
    const sortType = useSelector((state) => state.filter.sort.sortProperty);
    const { searchValue } = React.useContext(SearchContext);
    const itemsPerPage = 8;
    const [isLoading, setIsLoading] = React.useState(true);
    const [items, setItems] = React.useState([]);
    const [orderType, setOrderType] = React.useState('asc');
    const [currentPage, setCurrentPage] = React.useState(0);

    React.useEffect(() => {
        async function fetchItems() {
            try {
                const response = await fetch
                    ('https://649049651e6aa71680caf586.mockapi.io/Items');
                const item = await response.json();
                setItems(item);
                setIsLoading(false);
            } catch (error) {
                console.log('Error fetching items:', error);
            }
        }
        fetchItems();
    }, []);

    React.useEffect(() => {
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        async function categoryFilter() {
            try {
                const response = await fetch(
                    `https://649049651e6aa71680caf586.mockapi.io/Items?${category}&sortBy=${sortType}&order=${orderType}`);
                const item = await response.json();
                setItems(item);
            } catch (error) {
                console.log('Error fetching items:', error);
            } finally {
                setIsLoading(false);
            }
        }
        categoryFilter();
    }, [categoryId, sortType, orderType])


    const pizzas = items
        .filter(obj => obj.name.toLowerCase()
            .includes(searchValue.toLowerCase()))
        .map((obj) => <Items key={obj.id} {...obj} />);
    const skeletons = [...new Array(8)].map((_, index) => (<Skeleton key={index} />));

    const pageCount = Math.ceil(items.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;
    const currentItems = pizzas.slice(offset, offset + itemsPerPage);
    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };
    const onChangeCategory = (id) => {
        dispatch(setFilterId(id));
    }
   

    return (
        <div>
            <Sort
                onChangeCategory={onChangeCategory}
                onClickOrder={(order) => setOrderType(order)}
                categoryId={categoryId}
                sortType={sortType}
            />
            <h2 className="content__title">All pizzas</h2>

            <div className="content__items">
                {isLoading ? skeletons : currentItems}
            </div>
            {pizzas.length === 0 &&
                <EmptySearch />
            }
            <Pagination
                onPageChange={handlePageClick}
                pageCount={pageCount}
            />

        </div >
    );
};


export default Home;

