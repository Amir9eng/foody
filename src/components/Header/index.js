import { Container, StyledButton } from 'components/common/CommonStyle'
import Navbar from 'components/Navbar'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Hamburger, HeaderContainer, HeaderTitle, Wrapper } from './HeaderStyle'
export default function Header () {
  return (
    <Wrapper>
      <Container>
        <HeaderContainer>
          <HeaderTitle to='/'>Foody</HeaderTitle>
          <Navbar />
          <StyledButton>Reserve Table</StyledButton>

          <Hamburger>
            <GiHamburgerMenu />
          </Hamburger>
        </HeaderContainer>
      </Container>
    </Wrapper>
  )
}
