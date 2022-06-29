import styled from 'styled-components';
import { deviceBreakpoints } from '@tilt-school/styles';
import { useTranslate } from '@tilt-school/hooks';
import MenuItem from './menu-item';

interface MenuBodyProps {
  isMenuActive: boolean;
}

const MenuBody = styled.div<MenuBodyProps>`
  position: fixed;
  top: 0;
  left: -${(props) => props.theme.variables.openSidebarWidth};
  max-width: var(--sidebar-width);
  width: 100%;
  height: 100%;
  background-color: var(--elements-color);
  transition: all 0.3s linear 0.3s,
    background-color
      ${({ theme: { variables } }) =>
        variables.changeThemeTransitionDuration +
        ' ' +
        variables.changeThemeTransitionTimingFunction};
  padding: 80px 20px 20px;
  z-index: 49;

  @media (${deviceBreakpoints.md}) {
    position: initial;
    width: 100%;
    left: 0;
    padding: 0;
    transition: none;
    background-color: transparent;
  }

  ${({ isMenuActive }) =>
    isMenuActive &&
    `
    left: 0;
  `}
`;

const MenuList = styled.div`
  height: calc(100% - 50px); // 50 = 30 (theme selector height) + 20 (margin between)
  margin-bottom: 20px;
  overflow: auto;

  @media (${deviceBreakpoints.md}) {
    padding-top: 10px;
  }
}
`;

export default function Menu() {
  const { t, exists } = useTranslate();
  const routes = [] as Array<{ path: string; icon: string; titleKey: string }>;
  const isSidebarMenuActive = true;

  return (
    <nav>
      {/*<BurgerButton className={burgerClassName} />*/}
      <MenuBody isMenuActive={isSidebarMenuActive}>
        <MenuList>
          {routes.map(({ path, icon, titleKey }) => (
            <MenuItem
              key={path}
              path={path}
              title={exists(titleKey) ? t(titleKey) : titleKey}
              icon={'icon'}
              alt={'alt'}
              tabIndex={isSidebarMenuActive ? 0 : -1}
            />
          ))}
        </MenuList>
        {/*<div className={clsx(classes.themeSelector)}>*/}
        {/*  <ThemeSelector nonActiveClassName={sidebarClasses._sidebarClosedHide} />*/}
        {/*</div>*/}
      </MenuBody>
      {/*{overlayTransition((style, item) => item && <animated.div style={style} className={classes.overlay} />)}*/}
    </nav>
  );
}
