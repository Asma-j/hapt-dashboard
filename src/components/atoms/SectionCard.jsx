import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';

class SectionCard extends Component {
  render() {
    const { title, image, link, disabled } = this.props;
    return (
      <Link to={disabled || link} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card className="mt-4 p-2 shadow-1" style={{ opacity: disabled ? 0.5 : 1 }}>
          <CardBody style={{ background: `url(${image}) right no-repeat` || '' }}>
            <CardTitle>
              <h5>{title}</h5>
            </CardTitle>
          </CardBody>
        </Card>
      </Link>
    );
  }
}

export default SectionCard;
