import React, { Component } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

class SectionCard extends Component {
  render() {
    return (
      <Card className="mt-4 p-2 shadow-1">
        <CardBody style={{ background: 'url(' + this.props.image + ') right no-repeat' || '' }}>
          <CardTitle>
            <h5>{this.props.title}</h5>
          </CardTitle>
        </CardBody>
      </Card>
    );
  }
}

export default SectionCard;
