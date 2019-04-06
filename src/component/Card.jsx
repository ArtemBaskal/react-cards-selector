import React from "react";
import { connect } from "react-redux";
import { selectCards } from "../actions";

class Card extends React.Component {
  render() {
    return (
      <div className="Card"
        onClick={() => {
          this.props.selectCards(this.props);
          console.log(this.props)
        }}
      >
        <img src={this.props.image} alt={this.props.name} />
        <figcaption className="HeroName">{this.props.name}</figcaption>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedCards: state.selectedCards,
    searchHeroName: state.searchedName,
    heroes: state.foundHeroes,
    universe: state.selectedUniverse
  };
};

export default connect(
  mapStateToProps,
  { selectCards }
)(Card);
