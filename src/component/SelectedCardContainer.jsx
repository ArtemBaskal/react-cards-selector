import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { removeCard } from "../actions";
import "../styles/index.css";
import _ from "lodash";

class SelectedCardContainer extends React.Component {
  render() {
    let arr = _.countBy(this.props.selectedCards, "name");
    console.log(arr);
    console.log(this.props);
    console.log(arr[this.props.name]);

    //TODO: сделать отображение карты один раз, если она выбрана несколько раз

    if (!this.props.selectedCards.length) {
      return <div className="absence" />;
    } else {
      console.log(this.props.selectedCards.filter(el => arr[el.name] < 2));
      const renderedList = this.props.selectedCards
        .filter(el => arr[el.name] < 2)
        .map((card, i) => {
          if (arr[card.name] > 2) {
            console.log("more than 1");
          }
          return (
            <div className="SelectedCardContainer" key={card.name}>
              <i
                onClick={() => {
                  console.log(this.props);
                  this.props.removeCard(this.props.selectedCards[i].name);
                }}
                className="x icon"
              />
              <Card
                name={card.name}
                image={card.image}
                counter={card.counter}
              />
              <figcaption className="HeroName">{arr[card.name]}</figcaption>
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
  { removeCard }
)(SelectedCardContainer);
