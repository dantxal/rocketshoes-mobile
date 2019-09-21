import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import {
  Loading,
  Container,
  ScrollableContainer,
  ItemContainer,
  ProductThumbnail,
  ProductTitle,
  ProductPrice,
  AddToCartButton,
  AddToCartButtonText,
  CartAmount,
  Amount,
} from './styles';

class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    this.setState({ products: data });
    // this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products').catch(err => {
      throw err;
    });

    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    this.setState({ products: data });
  };

  render() {
    const { loading, products } = this.state;

    return (
      <Container>
        <ScrollableContainer>
          {loading ? (
            <Loading />
          ) : (
            products.map(product => (
              <ItemContainer key={product.id}>
                <ProductThumbnail source={{ uri: product.image }} />

                <ProductTitle numberOfLines={2}>{product.title}</ProductTitle>
                <ProductPrice>{product.formattedPrice} </ProductPrice>

                <AddToCartButton>
                  <CartAmount>
                    <Icon name="shopping-basket" size={24} color="#fff" />
                    <Amount>2</Amount>
                  </CartAmount>
                  <AddToCartButtonText>ADICIONAR</AddToCartButtonText>
                </AddToCartButton>
              </ItemContainer>
            ))
          )}
        </ScrollableContainer>
      </Container>
    );
  }
}

export default Main;
