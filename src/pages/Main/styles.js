import styled from 'styled-components/native';

export const Loading = styled.ActivityIndicator`
  color: #fff;
  size: 48px;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 60px;
  padding: 10px;
`;

export const ScrollableContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex: 1;
  height: 358px;
`;
export const ItemContainer = styled.View`
  background: #fff;
  height: 358px;
  width: 220px;
  margin: 0 15px;
`;
