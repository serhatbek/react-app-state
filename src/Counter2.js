import { useState, useEffect } from 'react';

/**
 * ! Hook yapıları (@useState, @useEffect...) asla if koşullandırmaları içerisinde olmamalı!
 * * useEffect ile state deki değişimleri yakalıyoruz.
 * ? useEffect(() => { }); Komponentdeki herhangi bir state güncellendiğinde yakalar
 * > useEffect(() => { }, []); Komponentin mount edildiği(oluşturulduğu, yüklendiği) anı yakalar
 * ? useEffect(() => { }, []); Komponentin 'mount' edildiğini @useEffect'in başında 'unmount' edildiğini @useEffect'in sonunda yakalıyoruz
 * * useEffect(() => {}, [number, name]); İstediğimiz state değişimleri takibi için dependency array içinerisine stateleri ekliyoruz
 */

const Counter2 = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log('Component Mount/ReRender Edildi');

    const interval = setInterval(() => {
      // increaseNumber();
      setNumber((n) => n + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log('Number State Güncellendi');
  }, [number]);

  // const increaseNumber = () => {
  //   setNumber(number + 1);
  // };

  return (
    <div className='wrapper'>
      <p>{number}</p>
      {/* <button onClick={increaseNumber}>Increase</button> */}
      <button onClick={() => setNumber(number + 1)}>Increase</button>
    </div>
  );
};

export default Counter2;
