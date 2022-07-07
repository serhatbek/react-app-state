import { useState, useEffect } from 'react';

const Counter2 = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('Serhat');

  useEffect(() => {
    console.log('Number State Güncellendi');
  }, []);

  useEffect(() => {
    console.log('Component Mount/ReRender Edildi');
  }, [number]);

  return (
    <div className='wrapper'>
      <p>{number}</p>
      <p>{name}</p>
      <button onClick={() => setNumber(number + 1)}>Increase</button>
      <button onClick={() => setName('Toprak')}>Add/Change Name</button>
    </div>
  );
};

export default Counter2;
