import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
// import { addToCart } from '../../store/reducers/cart/actions';
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

import * as CartActions from '../../store/modules/cart/actions';

class Main extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    this.setState({ products: data });
  };

  handleAddProduct = product => {
    const { addToCartRequest, navigation } = this.props;

    addToCartRequest(product.id);
    // navigation.navigate('Cart');
  };

  render() {
    const { loading, products } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        <ScrollableContainer>
          {loading ? (
            <Loading size="large" color="#fff" />
          ) : (
            products.map(product => (
              <ItemContainer key={product.id}>
                <ProductThumbnail source={{ uri: product.image }} />

                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.formattedPrice} </ProductPrice>

                <AddToCartButton onPress={() => this.handleAddProduct(product)}>
                  <CartAmount>
                    <Icon name="shopping-basket" size={24} color="#fff" />
                    <Amount>{amount[product.id] || 0}</Amount>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
