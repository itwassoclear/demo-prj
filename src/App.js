import React from 'react';
import './App.css';
import Message from './components/Message.js'
import photo from './photo.png';

function App() {
  const data = [
    { id: 1, name: 'Petra', photo, title: 'How about dinner tomorrow?', text: 'Maybe at 9 am?'},
    { id: 2, name: 'Anna', photo, title: 'Hello!', text: 'How are you?'},
    { id: 3, name: 'Lucia', photo, title: 'Do you want to party?', text: 'I want to see you this friday!'},
    { id: 3, name: 'Monica', photo, title: 'Film premiere today!', text: 'Did you forget?'}
  ];

  return (
    <div className="App">
      {data.map(({ name, photo, title, text, id}) => {
        return (
          <Message 
            name={ name }
            photo={ photo }
            title={ title }
            text={ text }
            key={ id }
          />
        );
      })}
    </div>
  );
}

export default App;