import React from "react";
import Marquee from './slider'; // Adjust the import path accordingly

const App = () => {
  return (
    <div className="App">
      <Marquee repeat={2} className="bg-gray-100" pauseOnHover>
        <div className="p-4 bg-red-400">Item 1</div>
        <div className="p-4 bg-blue-400">Item 2</div>
        <div className="p-4 bg-green-400">Item 3</div>
        <div className="p-4 bg-yellow-400">Item 4</div>
      </Marquee>
    </div>
  );
};

export default App;
