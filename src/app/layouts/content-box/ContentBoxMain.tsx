import * as React from 'react';
import './ContentBoxMain.scss';

class ContentBoxMain extends React.Component {

  render() {
    return (
      <section className="ff-content-box-main">
        {this.props.children}
      </section>
    );
  }
}

export default ContentBoxMain;