import React, { useState } from "react"
import menuIcon from '../images/menu-24x24.svg'
import closeIcon from '../images/close-24x24.svg'
import styled from 'styled-components'
import { Link } from "gatsby"

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  border-bottom: 1px solid #EBECF0;
`

const HeaderTitle = styled(Link)`
  color: #2f363d;
  text-decoration: none;
  font-size: 20px;
`

const DropdownMenu = styled.div`
  position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: white;
`

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
`
const HeaderLink = styled(Link)`
  color: #2f363d;
  text-decoration: none;
  font-weight: 500;
  margin: 8px 0;
`

const CloseMenuContainer = styled.div`
display: flex;
    justify-content: flex-end;
    padding: 12px 24px;

`

const Header = () => {
  const [ isMenuVisible, setIsMenuVisible ] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  return (<HeaderStyles>
    <HeaderTitle to="/">Brayden Killeen</HeaderTitle>
    <img src={menuIcon} onClick={toggleMenu} />
    {isMenuVisible && (
      <DropdownMenu>
        <CloseMenuContainer>
        <img src={closeIcon} onClick={toggleMenu} />

        </CloseMenuContainer>
          <NavList>
            <HeaderLink to="/">Blog</HeaderLink>
            <HeaderLink to="/">Projects</HeaderLink>
            <HeaderLink to="/">About</HeaderLink>
          </NavList>
      </DropdownMenu>
    )}
  </HeaderStyles>
)}

export default Header
