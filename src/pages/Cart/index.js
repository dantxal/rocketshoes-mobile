import React from 'react';
import { connect } from 'react-redux';
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

function Cart({ cart }) {
  return (
    <Container>
      <ItemContainer>
        <InfoContainer>
          <Thumbnail
            source={{
              uri:
                'https://static.netshoes.com.br/produtos/tenis-nike-sb-check-solar-cnvs-masculino/26/D12-2759-026/D12-2759-026_zoom1.jpg',
            }}
          />
          <Details>
            <TitleText>Tênis de caminhada sensacional</TitleText>
            <PriceText>R$179.90</PriceText>
          </Details>
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
      <ItemContainer>
        <InfoContainer>
          <Thumbnail
            source={{
              uri:
                'https://static.netshoes.com.br/produtos/tenis-nike-sb-check-solar-cnvs-masculino/26/D12-2759-026/D12-2759-026_zoom1.jpg',
            }}
          />
          <Details>
            <TitleText>Tênis de caminhada sensacional</TitleText>
            <PriceText>R$179.90</PriceText>
          </Details>
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

export default connect(mapStateToProps)(Cart);
