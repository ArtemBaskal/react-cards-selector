import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { selectCards, removeCard } from "../actions";
import "../styles/index.css";
import _ from "lodash";

class SelectedCardContainer extends React.Component {
  render() {
    console.log(this.props);
    if (!this.props.selectedCards.length) {
      return <div className="absence" />;
    } else {
      const renderedList = this.props.selectedCards.map((card, i) => {
        return (
          <div className="SelectedCardContainer" key={card.name}>
            <i
              onClick={() => {
                console.log(this.props);
                let arr = _.countBy(this.props.selectedCards, "name");
                console.log(arr);
                console.log(this.props);
                this.props.removeCard(this.props.selectedCards[i].name);
              }}
              className="x icon"
            />
            <Card name={card.name} image={card.image} />
          </div>
        );
      });

      return <div>{renderedList}</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    selectedCards: state.selectedCards
  };
};

export default connect(
  mapStateToProps,
  { selectCards, removeCard }
)(SelectedCardContainer);
