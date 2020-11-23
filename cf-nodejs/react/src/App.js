import React, { useState } from 'react';
import axios from 'axios';

import EmojiInput from './EmojiInput';
import EmojiPerson from './EmojiPerson';

const App = () => {
  const [people, setPeople] = useState([]);

  const onSubmit = async (names) => {
    try {
      const res = await axios.post('/emoji/api/emojify', names);

      setPeople(res.data);
    } catch (err) {
      alert('Oh hey. Something went wrong...');
    }
  };

  return (
    <div style={{
      padding: '15% 1rem 5rem',
      maxWidth: '30rem',
      margin: '0 auto'
    }}>
      <EmojiInput submit={onSubmit} />
      {people.map((person, i) => {
        return <EmojiPerson key={i} person={person}></EmojiPerson>
      })}
    </div>
  );
};

export default App;