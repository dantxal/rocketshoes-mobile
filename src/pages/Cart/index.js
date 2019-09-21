import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ItemContainer,
  InfoContainer,
  Thumbnail,
  InfoView,
  TitleText,
  PriceText,
  RemoveFromCartButton,
  SubTotalContainer,
  AmountInputContainer,
  AmountButton,
  AmountText,
  SubTotalText,
} from './styles';

function Cart({ cart }) {
  return (
    <Container>
      <ItemContainer>
        <InfoContainer>
          <Thumbnail />
          <InfoView>
            <TitleText>Tênis de caminhada sensacional</TitleText>
            <PriceText>R$179.90</PriceText>
          </InfoView>
          <RemoveFromCartButton>
            <Icon name="delete-forever" size={24} color="#7159c1" />
          </RemoveFromCartButton>
        </InfoContainer>
        <SubTotalContainer>
          <AmountInputContainer>
            <AmountButton>
              <Icon name="remove-circle-outline" size={20} color="#7159c1" />
            </AmountButton>
            <AmountText>2</AmountText>
            <AmountButton>
              <Icon name="add-circle-outline" size={20} color="#7159c1" />
            </AmountButton>
          </AmountInputContainer>
          <SubTotalText>R$539.70</SubTotalText>
        </SubTotalContainer>
      </ItemContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
