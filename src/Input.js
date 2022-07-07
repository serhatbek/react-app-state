import { useState } from 'react';

const Input = () => {
  const [form, setForm] = useState({ name: '', surname: '' });

  const onInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className='wrapper'>
      <input name='name' value={form.name} onChange={onInputChange} />
      <input name='surname' value={form.surname} onChange={onInputChange} />
      <br />
      {form.name} {form.surname}
    </div>
  );
};

export default Input;
