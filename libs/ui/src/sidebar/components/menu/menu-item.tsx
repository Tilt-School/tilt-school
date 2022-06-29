import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Flexbox } from '../../../box';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { deviceBreakpoints } from '@tilt-school/styles';

interface MenuItemLinkProps {
  isActive: boolean;
}

const MenuItemLink = styled(Link)<MenuItemLinkProps>`
  position: relative;
  display: block;
  text-decoration: none;

  &:not(:last-child) {
    margin-bottom: 25px;

    //@include for-phone-landscape-only {
    //  margin-bottom: 17px;
    //}
  }

  @media (${deviceBreakpoints.md}) {
    padding-left: 25px;

    &::before {
      content: '';
      position: absolute;
      top: -10px;
      left: 0;
      width: calc(100% + 0px);
      height: calc(100% + 20px);
      background-color: var(--main-color);
      opacity: 0.3;
      transform: scaleX(0);
      transform-origin: right;
      //transition: transform $menu-item-transition linear $menu-item-transition;
    }

    &.active {
      &::before {
        transform: scaleX(1);
        transform-origin: left;
        //transition: transform $menu-item-transition linear;
      }
    }
  }
`;

const IconWrapper = styled(Flexbox)`
  width: 25px;
  height: 25px;
  margin-right: 20px;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 21px;
  color: var(--white);

  //@include for-phone-landscape-only {
  //  font-size: 18px;
  //}
`;

interface MenuItemProps {
  icon: string;
  path: string;
  alt: string;
  title: string;
  tabIndex: number;
}

export default function MenuItem({
  path,
  icon,
  alt,
  title,
  tabIndex,
}: MenuItemProps) {
  const router = useRouter();

  return (
    <MenuItemLink
      href={path}
      isActive={router.asPath === path}
      tabIndex={tabIndex}
    >
      <Flexbox alignItems='center'>
        <IconWrapper justifyContent='center' alignItems='center'>
          <Image src={icon} alt={alt} />
        </IconWrapper>
        <div
          role='none'
          // className={clsx(
          //   classes.body,
          //   sidebarClasses._sidebarClosedHide,
          //   sidebarClasses._sidebarClosedTranslate,
          //   sidebarClasses._sidebarClosedHideTranslate,
          // )}
        >
          <Title>{title}</Title>
        </div>
      </Flexbox>
    </MenuItemLink>
  );
}
