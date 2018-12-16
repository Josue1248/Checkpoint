console.log("App.js esta corriendo");

//JSX JavaScript XML
/*
var userName ="Choppa";
var userAge="22";
var userLocation="Tijuana";
*/

var user={
  name: "Choppa",
  age:"22",
  location:"Tijuana"
};
var template =(
  <div>
      <h1>Hello</h1>
  </div>
);
var templateDos=(
  <div>
      <h1>{user.name}</h1>
      <p>Edad: {user.age}</p>
      <p>Ubicación: {user.location}</p>
  </div>
);

var appRoot=document.getElementById("app");
ReactDOM.render(templateDos, appRoot);
