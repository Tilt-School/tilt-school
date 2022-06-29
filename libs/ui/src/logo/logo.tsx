import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { Flexbox } from '../box';
import { LogoIcon } from '@tilt-school/assets';
import { deviceBreakpoints } from '@tilt-school/styles';

const Container = styled(Link)`
  text-decoration: none;
`;
const LogoContainer = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 20px;
  display: none;

  @media (${deviceBreakpoints.md}) {
    display: block;
  }
`;
const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
`;

export default function Logotype() {
  return (
    <Container href='/'>
      <Flexbox alignItems='center'>
        <LogoContainer>
          <Image src={LogoIcon} alt='logo' />
        </LogoContainer>
        <div>
          <Title>Tilt School</Title>
        </div>
      </Flexbox>
    </Container>
  );
}
