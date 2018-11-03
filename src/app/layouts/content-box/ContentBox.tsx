import * as React from 'react';
import './ContentBox.scss';

class ContentBox extends React.Component {

  render() {
    return (
      <section className="ff-content-box">
        {this.props.children}
      </section>
    );
  }
}

export default ContentBox;