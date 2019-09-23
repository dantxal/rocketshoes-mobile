import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ItemContainer,
  InfoContainer,
  Thumbnail,
  Details,
  TitleText,
  PriceText,
  RemoveFromCartButton,
  SubTotalContainer,
  AmountInputContainer,
  AmountButton,
  AmountText,
  SubTotalText,
  TotalText,
  TotalPriceText,
  FinishOrderButton,
  FinishOrderButtonText,
} from './styles';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

function Cart({ cart, removeFromCart, updateAmountRequest, total }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }
  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      {cart.map(product => (
        <ItemContainer key={product.id}>
          <InfoContainer>
            <Thumbnail
              source={{
                uri: product.image,
              }}
            />
            <Details>
              <TitleText>{product.title}</TitleText>
              <PriceText>{product.formattedPrice}</PriceText>
            </Details>
            <RemoveFromCartButton onPress={() => removeFromCart(product.id)}>
              <Icon name="delete-forever" size={24} color="#7159c1" />
            </RemoveFromCartButton>
          </InfoContainer>
          <SubTotalContainer>
            <AmountInputContainer>
              <AmountButton onPress={() => decrement(product)}>
                <Icon name="remove-circle-outline" size={20} color="#7159c1" />
              </AmountButton>
              <AmountText>{product.amount}</AmountText>
              <AmountButton onPress={() => increment(product)}>
                <Icon name="add-circle-outline" size={20} color="#7159c1" />
              </AmountButton>
            </AmountInputContainer>
            <SubTotalText>{product.subTotal}</SubTotalText>
          </SubTotalContainer>
        </ItemContainer>
      ))}

      <TotalText>TOTAL</TotalText>
      <TotalPriceText>{total}</TotalPriceText>
      <FinishOrderButton>
        <FinishOrderButtonText>FINALIZAR PEDIDO</FinishOrderButtonText>
      </FinishOrderButton>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
