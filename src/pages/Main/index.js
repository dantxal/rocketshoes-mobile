import React, { Component } from 'react';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import {
  Loading,
  Container,
  ScrollableContainer,
  ItemContainer,
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
              <ItemContainer>
                {/* <ProductThumbnail />
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.formatPrice} </ProductPrice>
                <AddToCartButton>
                  <CartAmount>
                    <Icon />
                    <Amount>2</Amount>
                  </CartAmount>
                  <AddToCartButtonText>
                    ADICIONAR
                  </AddToCartButtonText>
                </AddToCartButton> */}
              </ItemContainer>
            ))
          )}
        </ScrollableContainer>
      </Container>
    );
  }
}

export default Main;
