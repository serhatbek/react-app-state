import { useState, useEffect } from 'react';

/**
 * ! Hook yapıları (@useState, @useEffect...) asla if koşullandırmaları içerisinde olmamalı!
 * * useEffect ile state deki değişimleri yakalıyoruz.
 * ? useEffect(() => { }); Komponentdeki herhangi bir state güncellendiğinde yakalar
 * > useEffect(() => { }, []); Komponentin mount edildiği(oluşturulduğu, yüklendiği) anı yakalar
 * * useEffect(() => {}, [number, name]); İstediğimiz state değişimleri takibi için dependency array içinerisine stateleri ekliyoruz

 */

const MountComponent = () => {
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

export default MountComponent;
