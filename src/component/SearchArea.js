import React, { Component } from "react";

export class SearchArea extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <section className="col s4 offset-s4">
            <form action="">
              <div className="input-field">
                <input placeholder="Seach Movie" type="text" />
              </div>
            </form>
          </section>
        </div>
      </div>
    );
  }
}
export default SearchArea;
