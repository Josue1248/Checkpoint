import React from 'react';

//Styles
import '../css/w3.css';
import '../css/w3-theme-blue.css';

//Components
import Header from './containers/header';
import NavBar from './containers/navbar';
import MainContainer from './containers/main-container';

class App extends React.Component {
  render(){
    return(
      <div>
          <Header title="Checkpoint" subtitle='Welcome user'/>
          <NavBar />
          <MainContainer />
      </div>
    );
  }
};

export default App;
