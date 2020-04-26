import React from 'react';

const API_KEY = "16244904-b76f429eabdbad43dc83fbdce";

const url =  `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo`

function App() {
  return (
    <div>
      <span role="img" aria-label="emoji">What up 😎</span>
    </div>
  );
}

export default App;
