import { useState } from 'react'
import './Product.css'
import Button from '../Button/Button';
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
import PropTypes from 'prop-types'


const Product = ({image, title, price, description, availability, category}) => {

    const[quantity, setQuantity] = useState(0);
    
    const increaseHandeler = () => {
        setQuantity(previousState => previousState + 1)
    }

    const decreaseHandeler = () => {
        setQuantity(quantity > 0 ? previousState => previousState - 1 : previousState => previousState = 0)
    }

        return (
        <div className='container'>
            <div className='imgContainer'>
                <img className="productImg" src={image} alt={title} />
                <FaSearch className = "zoomIcon"/>
            </div>
            <div className='description'>
                <div className='flexRow'>
                    <h1>{title}</h1>
                    <div className='arrowBtns flexRow'>
                        <span className='mg-r-15'><FaChevronLeft /></span>
                        <span><FaChevronRight /></span>
                    </div>
                </div>
                <div><span className='price'>{price}€</span></div>
                <div>
                    {description}
                </div>
                <div>
                    <p><strong>Availability:</strong> <span className='greenText'>{availability} in stock</span></p>
                </div>
                <div className='flexRow'>
                    <div className='counter mg-r-15'>
                        <span onClick={decreaseHandeler}>-</span>
                        <span>{quantity}</span>
                        <span onClick={increaseHandeler}>+</span>
                    </div>
                    <div>
                        <Button btnName="Add to cart"/>
                    </div>
                </div>
                <hr/>
                <div>
                    <span className='category'>Category: {category}</span>
                </div>
            </div>
        </div>
        )
}

Product.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.object,
    availability: PropTypes.number,
    category: PropTypes.string
}

export default Product