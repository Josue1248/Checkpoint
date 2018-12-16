
console.log("App.js esta corriendo");
let hide=false;
let x;
const app={
  title: "Indecision app",
  subtitle: "Let your life in the keybord of a computer",
  text: " ",
  options:["One","Two","Tree","Four"],
  printOptions(){
    return this.options.map((r)=><li>{r}</li>);
  }
};
const hideText=()=>{
  if(hide){
    app.text=" ";
    hide=false;
    renderApp();
  }
  else{
    x=getRandomInt(0,app.options.length);
    app.text=app.options[x];
    hide=true;
    renderApp();
  }
};
const getRandomInt=(min, max)=>{
    return Math.floor(Math.random() * (max - min)) + min;
};
const clearOptions=()=>{
  app.options=[];
  renderApp();
}
const onFormSubmit=(e)=>{
  e.preventDefault();
  const option =e.target.elements.option.value;

  if (option){
    app.options.push(option);
    e.target.elements.option.value=" ";
    renderApp();
  }
};
const renderApp=()=>{
  const template =(
    <div>
      <h1>{app.title}</h1>
      {app.subtitle&&<p>{app.subtitle}</p>}
      <p>{app.options.length>0?"Here are your options:":"No options"}</p>
        <ol>
        {app.printOptions()}
        </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
      <p>Here is your button</p>
      <button onClick={clearOptions}>Clear options</button>
      <button onClick={hideText}>Click on me</button>
      <p>{app.text}</p>
    </div>
    );
    var appRoot=document.getElementById("app");
    ReactDOM.render(template, appRoot);
}
renderApp();
var appRoot=document.getElementById("app");
