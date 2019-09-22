import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';

import logo from '../../assets/images/logo.png';

export const SafeView = styled.SafeAreaView`
  flex: 0;
  background: ${colors.dark};
  flex-direction: row;
  margin-bottom: 64px;
`;
export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const LogoButton = styled(RectButton)`
  width: 185px;
  height: 24px;
`;
export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;
export const CartContainer = styled(RectButton)`
  width: 24px;
  height: 24px;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;
export const CartCount = styled.Text`
  position: absolute;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  color: #fff;
  background: ${colors.primary};
  border-radius: 9px;
  padding: 2px;
  font-size: 12px;
  overflow: hidden;
  text-align: center;
`;
