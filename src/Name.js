import { useState } from 'react';

/**
 * ?[State]: Herhangi bir set fonksiyonu çalıştırırken ilk yapmamız gereken onun statenin default veri tipini belirlemek(object, array, string, number...)
 * *[State]: Array'e yeni bir değer ataması yaparken önceki verileri korumak istiyorsak ↙;
 * *[State]: State değiğimi yaparken 'spread' operatörü kullanmamız gerekir.
 * >[Example]: <button onClick={() => setFriends([...friends, 'Ali'])}>
 * *[State]: Spread operatörün yerini değiştirerek eklenen değerin başa ya da sona ekleneceğini belirleyebiliriz
 * >[Example]: <button onClick={() => setFriends(['Ali', ...friends])}>
 */

const Name = () => {
  const [name, setName] = useState('Serhat');
  const [age, setAge] = useState(28);
  const [friends, setFriends] = useState(['Zeynep', 'Luna', 'Salar', 'Toprak']);
  const [address, setAddress] = useState({
    city: 'Istanbul',
    zip: 345634,
    apartNo: 4,
  });

  return (
    <div className='wrapper'>
      <h1>Merhaba {name}</h1>
      <p>{age}</p>
      <button onClick={() => setName('Toprak')}>Change Name</button>
      <button onClick={() => setAge(36)}>Change Age</button>

      <hr />
      <br />
      <div>
        <strong>{`${name}'s Friends`}</strong>
        {friends.map((friend, index) => (
          <p key={index}>{friend}</p>
        ))}
        <button onClick={() => setFriends([...friends, 'Ali'])}>
          Add New Friend
        </button>
      </div>

      <hr />
      <br />
      <div>
        <strong>{`${name}'s Address`}</strong>
        <p>Şehir: {address.city}</p>
        <p>ZipKodu: {address.zip}</p>
        <p>Apt.No: {address.apartNo}</p>

        <button
          onClick={() =>
            setAddress({ ...address, city: 'Ankara', zip: 452334, apartNo: 6 })
          }
        >
          Change Address
        </button>
      </div>
    </div>
  );
};

export default Name;
