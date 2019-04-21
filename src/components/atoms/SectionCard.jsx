import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

class SectionCard extends Component {
  render() {
    return (
    <Card className="mt-4 p-2">
        <CardBody style={{background: 'url('+this.props.image+') right no-repeat' || ''}}>
          <CardTitle><h5>{this.props.title}</h5></CardTitle>
        </CardBody>
      </Card>
    );
  }
}

export default SectionCard;
