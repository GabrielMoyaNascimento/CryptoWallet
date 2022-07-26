import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import './SideBar.css'


const SideBar = () => {
  return (
      <ProSidebar>
        <Menu className='menu'>
          <SubMenu className='submenu' title="Dashboard">
            <MenuItem className='menuitem'>Início</MenuItem>
            <MenuItem className='menuitem'>Relatórios</MenuItem>
          </SubMenu>
        </Menu>
        <Menu className='menu' iconShape="square">
          <SubMenu className='submenu' title="Carteira">
            <MenuItem className='menuitem'>Minhas Carteiras</MenuItem>
            <MenuItem className='menuitem'>Cadastrar Nova</MenuItem>
          </SubMenu>
        </Menu>
        <Menu className='menu' iconShape="square">
          <SubMenu className='submenu' title="Moedas">
            <MenuItem className='menuitem'>Cadastrar Nova</MenuItem>
            <MenuItem className='menuitem'>Lista</MenuItem>
          </SubMenu>
        </Menu>
        <Menu className='menu' iconShape="square">
          <SubMenu className='submenu' title="Perfil">
            <MenuItem className='menuitem'>Meu Perfil</MenuItem>
          </SubMenu>
        </Menu>
        <Menu className='menu' iconShape="square">
          <SubMenu className='submenu' title="Configurações">
            <MenuItem className='menuitem'>Sair</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    )
  }

export default SideBar;