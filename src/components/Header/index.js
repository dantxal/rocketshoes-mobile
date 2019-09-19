import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, SafeView, Logo, CartContainer, CartCount } from './styles';

function Header({ navigation }) {
  return (
    <SafeView>
      <Container>
        <Logo />
        <CartContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#fff" size={24} />
          <CartCount>2</CartCount>
        </CartContainer>
      </Container>
    </SafeView>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Header;
