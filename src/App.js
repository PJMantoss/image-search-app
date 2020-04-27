import React, { Component } from 'react';

const API_KEY = "16244904-b76f429eabdbad43dc83fbdce";

const url =  `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo`;

export class App extends Component {

  handleGetRequest = async () => {
    const request = await fetch(url);

    const response = await request.json();

    console.log(response);
  }

  componentDidMount(){
    this.handleGetRequest();
  }

  render() {
    return (
      <div>
        <div>App Component</div>
      </div>
    )
  }
}

export default App
