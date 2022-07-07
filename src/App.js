import './App.css';

import Name from './Name';
import Counter from './Counter';
import Input from './Input';
import MountComponent from './MountComponent';

function App() {
  return (
    <div className='App'>
      <Name />
      <br />
      <MountComponent />
      <br />
      <Input />
      <br />
      <Counter />
    </div>
  );
}

export default App;
