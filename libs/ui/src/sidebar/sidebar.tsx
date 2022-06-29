import styled from 'styled-components';
import { Flexbox } from '../box';
import { Logotype } from '../logo';
import { deviceBreakpoints } from '@tilt-school/styles';
import { Menu } from './components';

const StyledSidebar = styled(Flexbox)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.elementsColor};
    transition: background-color ${({ theme: { variables } }) =>
      variables.changeThemeTransitionDuration +
      ' ' +
      variables.changeThemeTransitionTimingFunction};
    z-index: 50;
  }

  @media (${deviceBreakpoints.md}) {
    width: ${(props) => props.theme.variables.closedSidebarWidth};
    height: 100%;
    background-color: ${(props) => props.theme.colors.elementsColor};
    transition: background-color ${({ theme: { variables } }) =>
      variables.changeThemeTransitionDuration +
      ' ' +
      variables.changeThemeTransitionTimingFunction}, width 0.3s linear;
    padding: 20px 10px;
    overflow: hidden;

  &:hover {
    width: ${(props) => props.theme.variables.openSidebarWidth};
  }

  &::before {
    display: none;
  }
`;

const StyledContainer = styled(Flexbox)`
  width: 100%;

  @media (${deviceBreakpoints.md}) {
    width: ${(props) => props.theme.variables.openSidebarWidth};
    min-width: ${(props) => props.theme.variables.openSidebarWidth};
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }
`;
const StyledLogotype = styled(Logotype)`
  margin: 0 auto;

  @media (${deviceBreakpoints.xs}) {
    margin: 0 0 30px;
  }

  @media (${deviceBreakpoints.md}) {
    margin: 0 0 50px;
  }
`;

export function Sidebar() {
  return (
    <StyledSidebar>
      <StyledContainer justifyContent='center' alignItems='center'>
        <StyledLogotype />
        <Menu />
        LOGIN BUTTON
      </StyledContainer>
    </StyledSidebar>
  );
}

export default Sidebar;
