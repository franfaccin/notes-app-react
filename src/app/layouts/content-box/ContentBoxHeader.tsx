import * as React from 'react';
import './ContentBoxHeader.scss';

class ContentBoxHeader extends React.Component {

  render() {
    return (
      <section className="ff-content-box-header">
        <h3>{this.props.children}</h3>
      </section>
    );
  }
}

export default ContentBoxHeader;