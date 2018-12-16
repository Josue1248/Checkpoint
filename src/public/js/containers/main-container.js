import React from 'react';

//Components
import MainUser from '../components/mainUser';
import Events from  '../components/events';


class MainContainer extends React.Component {
    render(){
        return(
          <div style={{paddingLeft: '12%'}}>
            <div><MainUser id='main-user'/></div>
            <div className='events contenedor-columna'><Events id='events'/></div>
          </div>
        );
    }
}

export default MainContainer;