import React from 'react'
import '../App.scss'
import EmptySearch from '../components/empty/EmptySearch';
import Pagination from '../components/paginate/Pagination';
import Items from '../components/PizzaBlock/Items';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';
import { SearchContext } from '../App';


const Home = () => {
    const { searchValue} = React.useContext(SearchContext);
    const itemsPerPage = 8;
    const [isLoading, setIsLoading] = React.useState(true);
    const [items, setItems] = React.useState([]);
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({
        name: 'popularity',
        sortProperty: 'rating'
    });
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
        async function categoryFilter() {
            try {
                const response = await fetch(
                    `https://649049651e6aa71680caf586.mockapi.io/Items?${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType.sortProperty}&order=${orderType}`);
                const item = await response.json();
                setItems(item);
            } catch (error) {
                console.log('Error fetching items:', error);
            } finally {
                setIsLoading(false);
            }
        }
        categoryFilter();
        console.log(orderType);
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

    return (
        <div>
            <Sort
                onClickCategory={(id) => setCategoryId(id)}
                onClickSort={(type) => setSortType(type)}
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

