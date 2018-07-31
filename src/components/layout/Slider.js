import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import data from "../../data.json";

export default class slider extends Component {
  render() {
    let slider = data.frontend_home_questionnaire.tasks.map(value => {
      return (
        <Carousel.Item key={value.id}>
          <img
            width={900}
            height={500}
            alt="900x500"
            src="http://hd.wallpaperswide.com/thumbs/black_background_leather-t2.jpg"
          />
          <Carousel.Caption>
            <h3>{value.taskName} </h3>
            <p>
              {" "}
              <a
                href={value.associatedFile}
                target="_blank"
                className="text-align:center"
              >
                {value.associatedFile}
              </a>
            </p>
            <h3>{value.taskType} </h3>
            <p>{value.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });

    return (
      <div>
        <Carousel>{slider}</Carousel>
      </div>
    );
  }
}
