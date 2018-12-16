import React from 'react';

//Style
import '../../css/w3.css';
import '../../css/w3-theme-blue.css';
import '../../css/mycss.css';

//Components
import NavItem from '../components/nav-item';

class NavBar extends React.Component {
  render(){
    return(
      <nav className="w3-sidebar w3-theme w3-bar-block" style={{width:"11%"}}>
        <NavItem text="Resumen" />
        <NavItem text="Logros" />
      </nav>
    );
  }
};

export default NavBar;
