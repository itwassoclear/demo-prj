import React from 'react';
import './Message.css';
// import { render } from '@testing-library/react';

class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isLiked, counter } = this.state;
    this.setState({ isLiked: !isLiked, counter: counter + 1 });
  }

  render() {
    const { name, photo, title, text} = this.props;
    const date = new Date();
    const displayDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const { counter } = this.state;
    const btnClassName = `message-header-button ${ counter >= 1 ? 'is-active' : '' }`

    return (
      <div className="message">
        <div className="message-header">
          <img className="message-header-image" src={ photo } alt="avatar" />
          <div className="message-header-text_block">
            <p className="message-header-title">{ name }</p>
            <span className="message-header-date">{ displayDate }</span>
          </div>
          <div className="message-header-container">
            <span className="message-header-counter">{ counter }</span>
            <button 
              className={ btnClassName } 
              onClick={ this.handleClick }
            />
          </div>
        </div>
        <div className="message-body">
          <h2 className="message-body-title">
            { title }
          </h2>
          <p className="message-body-content">
            { text }
          </p>
        </div>
      </div>
    );
  }
}

// function Message(props) {
//   const { name, logo, title, text} = props;
//   const date = new Date();
//   const displayDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
//   return (
//     <div className="message">
//       <div className="message-header">
//         <img className="message-header-image" src={ logo } alt="avatar" />
//         <div className="message-header-text_block">
//           <p className="message-header-title">{ name }</p>
//           <span className="message-header-date">{ displayDate }</span>
//         </div>
//       </div>
//       <div className="message-body">
//         <h2 className="message-body-title">
//           { title }
//         </h2>
//         <p className="message-body-content">
//           { text }
//         </p>
//       </div>
//     </div>
//   );
// }

export default Message;