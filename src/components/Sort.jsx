import React from 'react'
import '../App.scss'
import './_sort.scss'
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../redux/slices/filterSlice';
const categories = [
    'All',
    'meat',
    'vegeterian',
    'grill',
    'spice',
    'closed',
];
const list = [{ name: 'popularity', sortProperty: 'rating' },
{ name: 'price', sortProperty: 'price' },
{ name: 'alphabet', sortProperty: 'title' },
];
const Sort = ({ categoryId, onChangeCategory, onClickOrder }) => {
    const dispatch = useDispatch();
    const sort = useSelector((state) => state.filter.sort)
    const [isOpen, setIsOpen] = React.useState(false);
    const [descending, setDescending] = React.useState(true);

    const orderChange = (orderType) => {
        setDescending(!descending)
        onClickOrder(orderType);
    }
    const categoryHandle = (index) => onChangeCategory(index);
    const sortHandle = (chosed) => {
        console.log(sort);
        dispatch(setSort(chosed));
        setIsOpen(false);
    }
    return (

        <div className="content__top">
            <div className="categories">
                <ul>
                    {categories.map((categoryType, index) =>
                        <li
                            key={index}
                            onClick={() => categoryHandle(index)}
                            className={categoryId === index ? 'active' : ''}>
                            {categoryType}
                        </li>
                    )}

                </ul>
            </div>
            <div className="sort">
                <div className="sort__label">
                    {descending ?
                        <svg
                            onClick={() => orderChange('asc')}
                            width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1C0 0.830729 0.061849 0.684241 0.185547 0.560547C0.309245 0.436849 0.455729 0.375 0.625 0.375H9.375C9.54427 0.375 9.69075 0.436849 9.81445 0.560547C9.93815 0.684241 10 0.830729 10 1C10 1.16927 9.93815 1.31576 9.81445 1.43945L5.43945 5.81445C5.31576 5.93815 5.16927 6 5 6C4.83073 6 4.68424 5.93815 4.56055 5.81445L0.185547 1.43945C0.061849 1.31576 0 1.16927 0 1Z" fill="#2C2C2C" />
                        </svg>
                        :
                        <svg
                            onClick={() => orderChange('desc')}
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                                fill="#2C2C2C" />
                        </svg>
                    }
                    <b>Sort by:</b>
                    <span onClick={() => setIsOpen(!isOpen)}>{sort.name}</span>

                </div>
                {isOpen &&
                    <div className="sort__popup">
                        <ul>
                            {list.map((sortChosed, index) =>
                                <li
                                    onClick={() => sortHandle(sortChosed)}
                                    key={index}
                                    className={sort.sortProperty === sortChosed.sortProperty ? 'active' : ''} //порівнюємо з тим, що у нас зберігається в батьківському компоненті з тим, що ми зараз рендеримо
                                >{sortChosed.name}</li>
                            )}
                        </ul>
                    </div>
                }


            </div>
        </div >
    )


}

export default Sort

