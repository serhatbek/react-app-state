import './App.css';

import { useState } from 'react';
import Counter2 from './Counter2';
// import Name from './Name';
// import Input from './Input';
// import MountComponent from './MountComponent';

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className='App'>
      {isVisible && <Counter2 />}
      <br />
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Counter</button>
    </div>
  );
}

export default App;
