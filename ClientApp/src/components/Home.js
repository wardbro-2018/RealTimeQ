import React, { Component } from "react";
import image from '../images/366.jpg';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h2>Top Rides</h2>
        <div className = "cardContainer">
          <div className="card" style = {{width: "18rem"}}>
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card" style = {{width: "18rem"}}>
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card" style = {{width: "18rem"}}>
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <h2>Low Queues</h2>
        <div></div>
        <h2>Parks</h2>
        <div></div>
      </div>
    );
  }
}
