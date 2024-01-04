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
          <Link to={'/category/A'}>
          <MenuItem>Categoria A</MenuItem>
          </Link>
          <Link to={'/category/B'}>
          <MenuItem>Categoria B</MenuItem>
          </Link>
          <Link to={'/category/C'}>
          <MenuItem>Categoria C</MenuItem>
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