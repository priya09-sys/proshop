import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'


const Product = ({ product }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top'></Card.Img>
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <h5>{product.name}</h5>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>

                    <Rating value={product.rating} color='yellow' />
                    <strong>{product.numReviews} reviews</strong>
                </Card.Text>
                <Card.Text as='div'>
                    ${product.price}
                </Card.Text>


            </Card.Body>
        </Card>

    )
}



export default Product