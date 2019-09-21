import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import {
  Container,
  SafeView,
  Logo,
  CartContainer,
  CartCount,
  LogoButton,
} from './styles';

function Header({ cartSize, navigation }) {
  return (
    <SafeView>
      <Container>
        <LogoButton
          onPress={() => {
            navigation.navigate('Main');
          }}
        >
          <Logo />
        </LogoButton>
        <CartContainer
          onPress={() => {
            navigation.navigate('Cart');
          }}
        >
          <Icon name="shopping-basket" color="#fff" size={24} />
          <CartCount>{cartSize}</CartCount>
        </CartContainer>
      </Container>
    </SafeView>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  cartSize: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
