import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { savePaymentMethod } from '../actions/cartActions'

const Paymentscreen = ({ history }) => {
    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart

    if (!shippingAddress.address) {
        history.push('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('Cash')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <FormContainer>
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Select Method</Form.Label>
                    <Col>

                        <Form.Check
                            type='radio'
                            label='Cash on Delivery'
                            id='Cash'
                            name='paymentMethod'
                            value='Cash'
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        ></Form.Check>
                    </Col>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Continue
        </Button>
            </Form>
        </FormContainer>
    )
}

export default Paymentscreen