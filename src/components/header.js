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
  justify-content: space-between;
  padding: 0.75rem;
`

const DropdownMenu = styled.div`
  position: absolute;
  top: 54px;
  right: 0;
  width: 100%;
  height: 100%;
  background: white;
`

const NavList = styled.div`
  padding: 1rem;
  height: 10rem;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
`
const HeaderLink = styled(Link)`
  color: #000;
  font-size: 16px;
  text-decoration: none;
  font-weight: 600;
  margin: 1rem 2rem;

  &:hover {
    text-decoration: underline;
  }
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
        <Link to="/">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="contrastIconTitle"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="miter"
            fill="none"
            color="#000"
          >
            <title id="contrastIconTitle">Contrast control</title>
            <rect
              x="21"
              y="3"
              width="18"
              height="18"
              transform="rotate(90 21 3)"
            />
            <g strokeLinecap="round">
              <path d="M21 3L3 21" /> <path d="M16 3L3 16" />
              <path d="M11 3L3 11" /> <path d="M6 3L3 6" />
            </g>
          </svg>
        </Link>

        <MenuButton onClick={toggleMenu}>
          <img src={isMenuVisible ? closeIcon : menuIcon} alt="menu-button" />
        </MenuButton>
      </HeaderNav>

      {isMenuVisible && (
        <DropdownMenu>
          <NavList>
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/projects">Projects</HeaderLink>
            <HeaderLink to="/about">About</HeaderLink>
          </NavList>
        </DropdownMenu>
      )}
    </HeaderStyles>
  )
}

export default Header
