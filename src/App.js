import React, { Component } from 'react';
import {ImageSearch} from './ImageSearch/ImageSearch';

const API_KEY = "16244904-b76f429eabdbad43dc83fbdce";

const url =  `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo`;

export class App extends Component {

  state = {
    images: []
  }

  handleGetRequest = async () => {
    const request = await fetch(url);

    const response = await request.json();

    this.setState({ images: response.hits });

    console.log(response.hits);
  }

  componentDidMount(){
    this.handleGetRequest();
  }

  render() {
    return (
      <div>
        <ImageSearch/>
      </div>
    )
  }
}

export default App
