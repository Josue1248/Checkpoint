import React from 'react';

//Styles
import '../../css/w3.css';
import '../../css/w3-theme-blue.css';
import '../../css/mycss.css';

var user={
    firstName: "Josué",
    lastName: "Montaño Aguilar",
    email:"josuem.inf@gmail.com",
    age: "22"
  };

var materias={
    mCal:['Fisica: 7','Matematicas: 7','Español: 7','Programacion: 7','Etica: 7']
}



function ListItem(props) {
    return <li>{props.value}</li>;
  }

function NumberList(props) {

    var x=0;
    const numbers = props.numbers;

    return (
      <ul>
        {numbers.map((number) =>
          <ListItem key={x++}
                    value={number} />
        )}
      </ul>
    );
  }

class MainUser extends React.Component {
  render(){
    return (
        <div className='contenedor-tabla'>
            <div className='user-info contenedor-columna'>
              <p>Nombre: {user.firstName}</p>
              <p>Apellidos: {user.lastName}</p>
              <p>E-Mail: {user.email}</p>
            </div>
            <div className='user-info contenedor-columna'>
                <h3>Calificaciones:</h3>
                <NumberList numbers={materias.mCal}/>
            </div>
        </div>
    );
  }
};

export default MainUser;