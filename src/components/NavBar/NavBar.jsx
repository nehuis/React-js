import CartWidget from '../CartWidget/CartWidget';
import '../NavBar/NavBar.css'
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const NavBar= () => {
  return (
    <div className='navbar'>
      <Link to={"/"} className='logo'>
      Caran Autopartes
      </Link>
      <Menu>
        <MenuButton>
          Categorias
        </MenuButton>
        <MenuList>
          <Link to={'/category/Autos'}>
          <MenuItem>Autos</MenuItem>
          </Link>
          <Link to={'/category/Motos'}>
          <MenuItem>Motos</MenuItem>
          </Link>
          <Link to={'/category/Camionetas'}>
          <MenuItem>Camionetas</MenuItem>
          </Link>
        </MenuList>
      </Menu>
      <Link to={"/cart"} className='cart'>
      <CartWidget/>
      </Link>
    </div>
  );
}

export default NavBar;