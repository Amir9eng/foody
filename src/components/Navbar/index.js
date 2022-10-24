import {
  NavbarContainer,
  NavIcon,
  NavItem,
  NavLink,
  NavList
} from './NavbarStyle'
import { BsSun } from 'react-icons/bs'

export default function Navbar () {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <NavLink to='/'>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/'>Menu</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/'>Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/'>Reviews</NavLink>
        </NavItem>

        <NavItem>
          <NavLink to='/'>Chefs</NavLink>
        </NavItem>
        <NavIcon>
          <BsSun />
        </NavIcon>
      </NavList>
    </NavbarContainer>
  )
}