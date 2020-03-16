import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import Products from '../../components/CartPage/Products';

const CartPage = () => {
  const basket = useSelector(state => state.basketReducer.currentBasket);

  return basket ? (
    <Container>
      <div className="cart-page">
        <Row>
          <Col xs={8}>
            wgrgg
            <Products />
          </Col>
          <Col xs={4}>
          </Col>
        </Row>
      </div>
    </Container>
  ) : (
    <h1>Your Shopping Cart is Empty</h1>
  )
}

export default CartPage;
