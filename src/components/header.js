import React, { useState } from "react"
import menuIcon from "../images/menu-24x24.svg"
import closeIcon from "../images/close-24x24.svg"
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderStyles = styled.header`
  width: 100%;
`

const HeaderNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 0.75rem;
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
  font-weight: 100;
  margin: 8px 0;
`

const CloseMenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 12px 24px;
`

const MenuButton = styled.button`
  border: none;
  background: white;
`

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  return (
    <HeaderStyles>
      <HeaderNav>
        <MenuButton>
          <img src={menuIcon} onClick={toggleMenu} />
        </MenuButton>
      </HeaderNav>

      {isMenuVisible && (
        <DropdownMenu>
          <CloseMenuContainer>
            <img src={closeIcon} onClick={toggleMenu} />
          </CloseMenuContainer>
          <NavList>
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/">Projects</HeaderLink>
            <HeaderLink to="/">About</HeaderLink>
          </NavList>
        </DropdownMenu>
      )}
    </HeaderStyles>
  )
}

export default Header
