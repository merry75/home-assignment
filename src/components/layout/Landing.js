import React, { Component } from "react";
import data from "../../data.json";

import Slider from "./Slider";
import CountryDetails from "./CountryDetails";

class Landing extends Component {
  render() {
    console.log(data.frontend_home_questionnaire.tasks);
    return (
      <div className="books">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Result Home Assignment</h1>
              <div className="lead text-center" />
              <h3 className="text-center">Task 1</h3>
              <Slider />
              <h3 className="text-center">Task 2</h3>
              <CountryDetails />
              <h3 className="text-center">Task 3</h3>
              <p className="lead text-muted">
                This code example is done with Less a CSS pre-processor, meaning
                that it extends the CSS language, addind features that allow
                variblaes, mixins, functions and many other techniques that
                allow you to make CSS more maintainable and extendable. The code
                mentionned is manipulating box model by setting up various
                colors effects on different browsers.
              </p>
              <h3 className="text-center">Task 4</h3>
              <p className="lead text-muted">
                It's an inlined image (jpeg), encoded in base64. It can make a
                page faster: the browser doesn't have to query the server for
                the image data separately, saving a round trip. It can also make
                it slower if abused: these resources are not cached, so the
                bytes are included in each page load.
              </p>
              <h3 className="text-center">Task 5</h3>
              <p className="lead text-muted">
                Design wise, the website is well orchestrated. Components are
                grouped in a logical way. But the user is flooded with too much
                info which does not make it user friendly and very intuitive for
                newcomers. I would have Opted for a simplistic and minimal
                UI/UX.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
