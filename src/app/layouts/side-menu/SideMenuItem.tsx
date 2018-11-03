import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import { ISideMenuItemProps } from './SideMenuItem.interfaces';
import './SideMenuItem.scss';

class SideMenuItem extends React.Component<ISideMenuItemProps> {

  render() {
    const { path, className: css = '' } = this.props;
    return (
        <NavLink
          to={path}
          exact
          activeClassName="active"
          className={`ff-nav-item ${css}`}
        >
          <NavItem>
            {this.props.children}
          </NavItem>
        </NavLink>
    );
  }
}

export default SideMenuItem;