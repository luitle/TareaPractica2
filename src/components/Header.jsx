import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="container-header">
          <img
            width={600}
            src="https://danielasanchez.github.io/Tarea2React20232/static/media/logo.b5ce533abe2cfd32691b.jpg"
            alt="logo"
          />
          <div>
            <p>Por una Juventud Integrada al Desarrollo de México</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
