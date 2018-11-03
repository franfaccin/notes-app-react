import * as React from 'react';
import Nav from 'reactstrap/lib/Nav';
import SideMenuItem from './SideMenuItem';
import './SideMenu.scss';
import Icon from '../../components/icon/Icon.cmp';
import { IconEnum } from '../../components/icon/Icon.interfaces';

class SideMenu extends React.Component {

  render() {
    return (
      <Nav vertical className="mih(100vh) h(1/1) bgc(primary) ff-nav">
        <SideMenuItem
          path="/search"
        >
          <Icon icon={IconEnum.SEARCH} className="w(1/1)"/>
        </SideMenuItem>
        <SideMenuItem
          path="/all"
        >
          <Icon icon={IconEnum.LIST} className="w(1/1)"/>
        </SideMenuItem>
        <SideMenuItem
          path="/new"
        >
          <Icon icon={IconEnum.FILE_CREATE} className="w(1/1)"/>
        </SideMenuItem>
      </Nav>
    );
  }
}

export default SideMenu;