import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
  padding: 10px;
`;

export const ItemContainer = styled.View`
  width: 305px;
  height: 130px;
`;
export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Thumbnail = styled.Image`
  width: 80px;
  height: 80px;
`;
export const Details = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;
export const TitleText = styled.Text`
  font-size: 14;
`;
export const PriceText = styled.Text`
  font-size: 16;
  font-weight: bold;
`;
export const RemoveFromCartButton = styled.View`
  padding: 6px;
`;

export const SubTotalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 10px;
`;
export const AmountInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const AmountButton = styled.View``;
export const AmountText = styled.TextInput.attrs({
  readOnly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;
export const SubTotalText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
`;

export const TotalText = styled.Text`
  margin-top: 30px;
  margin-bottom: 5px;
  font-size: 16;
  font-weight: bold;
  color: #999;
`;
export const TotalPriceText = styled.Text`
  font-size: 30;
  font-weight: bold;
  margin-bottom: 30px;
`;
export const FinishOrderButton = styled.TouchableOpacity`
  background: ${colors.primary};

  align-items: center;
  justify-content: center;
  padding: 13px;
  margin: auto 10px 10px;
  border-radius: 4px;
`;
export const FinishOrderButtonText = styled.Text`
  color: #fff;
  font-size: 14;
  font-weight: bold;
`;
