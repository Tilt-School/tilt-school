import React from 'react';
import styled from 'styled-components';

type AlignItemsValues =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit';

type JustifyContentValues =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'initial'
  | 'inherit';

type FlexDirectionValues = 'row' | 'row-reverse' | 'column' | 'column-reverse';

type FlexWrapValues = 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial';

interface UiProps {
  children: React.ReactNode;
  alignItems?: AlignItemsValues;
  justifyContent?: JustifyContentValues;
  flexDirection?: FlexDirectionValues;
  flexWrap?: FlexWrapValues;
}

const Flexbox = styled.div<UiProps>`
  display: flex;
  align-items: ${(props) => props.alignItems || 'stretch'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  flex-wrap: ${(props) => props.flexWrap || 'nowrap'};
`;

export default Flexbox;
