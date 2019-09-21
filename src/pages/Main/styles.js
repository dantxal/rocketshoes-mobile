import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Loading = styled.ActivityIndicator`
  align-self: center;
  justify-self: center;
`;

export const Container = styled.View`
  flex-direction: row;
  margin-top: 60px;
  padding: 10px;
`;

export const ScrollableContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;
export const ItemContainer = styled.View`
  flex-direction: column;
  background: #fff;
  width: 220px;
  margin: 0 15px;
  padding: 10px;
  border-radius: 4px;
`;

export const ProductThumbnail = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16;
  margin-top: 10px;
  margin-left: 10px;
  line-height: 20px;
  color: #333;
`;
export const ProductPrice = styled.Text`
  font-size: 24;
  margin: 5px 0 20px 10px;
  font-weight: bold;
`;
export const AddToCartButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;

  background: #7159c1;
  margin: 5px 3px;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;
`;
export const AddToCartButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  flex: 1;
  text-align: center;
`;
export const CartAmount = styled.View`
  background: rgba(0, 0, 0, 0.1);
  flex-direction: row;
  align-items: center;
  padding: 12px;
`;
export const Amount = styled.Text`
  margin-left: 5px;
  color: #fff;
`;
