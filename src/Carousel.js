import React, { Component } from "react";
import Card from "./Card";
import Arrow from "./Arrow";

export default class Carousel extends Component {
  state = {
    index: 0,
    cards: [{ img_url: "", img_caption: "" }]
  };

  BASE_API = "http://localhost:3000/";
  IMAGES = "images";

  componentDidMount() {
    fetch(this.BASE_API + this.IMAGES)
      .then(resp => resp.json())
      .then(images => {
        this.setState({ cards: images });
      });
  }

  changeCard = dir => {
    let newIndex = this.state.index + dir;
    debugger;
    if (newIndex >= this.state.cards.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = this.state.cards.length - 1;
    }

    this.setState({ index: newIndex });
  };

  render() {
    const card = this.state.cards[this.state.index];
    return (
      <div className="carousel">
        <Arrow dir="back" clickFunction={() => this.changeCard(-1)} />
        <Card img_url={card.img_url} img_caption={card.img_caption} />
        <Arrow dir="forward" clickFunction={() => this.changeCard(1)} />
      </div>
    );
  }
}
