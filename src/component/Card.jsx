import React from "react";

class Card extends React.Component {
  render() {
    return <><img className="Card" src={this.props.source} alt={this.props.name}/>
    <figcaption className="HeroName">{this.props.name}</figcaption></>;
  }
}


export default Card;