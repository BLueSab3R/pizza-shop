import React from 'react'
import '../_items.scss'
import '../../App.scss'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { addItem } from '../../redux/slices/cartSlice'
const Items = ({ id, name, price, imageUrl, sizes, types }) => {
  const typeNames = ['thin', 'traditional'];
  const cartItem = useSelector(state => state.cart.items.find(obj => obj.id === id));
  const addedItem = cartItem ? cartItem.count : 0;
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      id,
      name,
      price,
      sizes: activeSize,
      types: typeNames[activeType],
      imageUrl,
    }
    dispatch(addItem(item));
  }

  return (
    <div className="cover">
      <div className="pizza__block">
        <img className='pizza__block__image'
          src={imageUrl} width={260} >
        </img>
        <h4 className='pizza__block__title'>{name.toUpperCase()}</h4>
        <div className="pizza__block__selector">
          <ul>
            {types.map((typeId, index) =>
              <li key={index} onClick={() => setActiveType(typeId)} className={activeType === index ? 'active' : ''}>
                {typeNames[typeId]}
              </li>)}
          </ul>
          <ul>
            {
              sizes.map((size, index) =>
                <li key={index} onClick={() => setActiveSize(index)} className={activeSize === index ? 'active' : ''}>
                  {size}
                </li>)
            }
          </ul>
        </div>
        <div className="pizza__block__bottom">
          <div className="pizza__block__price">
            {price}$
          </div>
          <div onClick={onClickAdd} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="orange"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              />
            </svg>
            <span>Add</span>
            {addedItem > 0 &&  <i>{ addedItem }</i>}  
          </div>
        </div>
      </div>
    </div>

  )
}

export default Items
