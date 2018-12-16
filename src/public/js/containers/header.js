import React from 'react';

//Styles
import '../../css/w3.css';
import '../../css/w3-theme-blue.css';

class Header extends React.Component {

  render(){
    return (
      <header className='w3-container w3-theme-d5'>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </header>
    );
  }
};

export default Header;
