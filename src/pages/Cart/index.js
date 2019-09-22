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

function Cart({ cart, removeFromCart }) {
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
              <AmountButton>
                <Icon name="remove-circle-outline" size={20} color="#7159c1" />
              </AmountButton>
              <AmountText>{product.amount}</AmountText>
              <AmountButton>
                <Icon name="add-circle-outline" size={20} color="#7159c1" />
              </AmountButton>
            </AmountInputContainer>
            <SubTotalText>R$539.70</SubTotalText>
          </SubTotalContainer>
        </ItemContainer>
      ))}

      <TotalText>TOTAL</TotalText>
      <TotalPriceText>R$ 1619.10</TotalPriceText>
      <FinishOrderButton>
        <FinishOrderButtonText>FINALIZAR PEDIDO</FinishOrderButtonText>
      </FinishOrderButton>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
