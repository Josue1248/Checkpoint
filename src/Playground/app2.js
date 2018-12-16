console.log("App.js esta corriendo");

const app={
  title: "Indecision app",
  subtitle: "Let your life in the keybord of a computer",
  options:[],
  printOptions(){
    return this.options.map((r)=><li>{r}</li>);
  }
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
      <button onClick={clearOptions}>Clear options</button>
      <button onClick={selectOption}>Select Option</button>
    </div>
      );
      var appRoot=document.getElementById("app");
      ReactDOM.render(template, appRoot);
}
renderApp();
var appRoot=document.getElementById("app");
