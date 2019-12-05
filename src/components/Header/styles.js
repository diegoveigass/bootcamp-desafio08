import styled from 'styled-components/native';

import logo from '../../assets/logo.png';

import colors from '../../styles/colors';

export const Wrapper = styled.SafeAreaView`
  flex: none;
  background: ${colors.dark};
  flex-direction: row;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;
export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover'
})`
  width: 185px;
  height: 24px;
`;
export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: ${colors.primary};
  border-radius: 9px;
  padding: 2px;
  font-size: 12px;
  overflow: hidden;
  color: #fff;
`;
