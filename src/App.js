import React from 'react';
import Pallete from './Pallete.jsx';

let colorData = [{
  "displayName": "Flamingo Pink",
  "hexCode": '#fc8eac'
}, {
  "displayName": "Tomato",
  "hexCode": '#FF6347'
},{
  "displayName": "Hot Pink",
  "hexCode": '#FF69B4'
},{
  "displayName": "Deep Pink",
  "hexCode": '#FF1493'
},{
  "displayName": "Pale Violet Red",
  "hexCode": '#DB7093'
},{
  "displayName": "Medium Violet Red",
  "hexCode": '#C71585'
}]
function App() {
  return (
    <div className="App">
      <Pallete colorData={colorData} /> 
    </div>
  );
}

export default App;
