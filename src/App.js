import React, { Component } from 'react';
import {ImageSearch} from './ImageSearch/ImageSearch';
import {ImageList} from './ImageList/ImageList';

const API_KEY = "16244904-b76f429eabdbad43dc83fbdce";

export class App extends Component {

  state = {
    images: []
  }

  handleGetRequest = async (e) => {

    e.preventDefault();

    const searchTerm = e.target.elements.searchValue.value;

    const url =  `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`;

    const request = await fetch(url);

    const response = await request.json();

    this.setState({ images: response.hits });

    console.log(response.hits);
  }

  render() {
    return (
      <div>
        <ImageSearch handleGetRequest={this.handleGetRequest}/>
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}

export default App
