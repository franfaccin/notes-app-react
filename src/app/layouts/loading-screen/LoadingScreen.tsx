import * as React from 'react';
import Icon from '../../components/icon/Icon.cmp';
import { IconEnum } from '../../components/icon/Icon.interfaces';
import './LoadingScreen.scss';

class LoadingScreen extends React.Component {
  render() {
    return (
      <div className="ff-loading-screen">
        <Icon className="ff-loading-screen-icon" icon={IconEnum.LOADING}/>
      </div>
    );
  }
}

export default LoadingScreen;