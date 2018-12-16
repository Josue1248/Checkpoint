const app={
  title: "Visibility app",
  subtitle: "Muéstrame la info detallada!",
  button: "Muéstrame Detalle"
};

class Header extends React.Component{
  constructor(props){
    super(props);
    this.handleState=this.handleState.bind(this);
    this.state={vis: 1};
  }
  handleState(){
    if(this.state.vis==1){
      app.button="Esconde Detalle!";
      app.subtitle="Esta es la info detallada!";
      this.setState({vis: 0});
      console.log(this.state.vis);
    }
    else{
      app.button="Muéstrame Detalle";
      app.subtitle="Muéstrame la info detallada!";
      this.setState({vis: 1});
      console.log(this.state.vis);
    }
  }
  render(){
    return (
      <div>
        <h1>{app.title}</h1>
        <h2>{app.subtitle}</h2>
        <button onClick={this.handleState}>{app.button}</button>
      </div>
    );
  }
}

const JSX=(
  <div>
    <Header/>
  </div>
);

ReactDOM.render(JSX,document.getElementById("app"))
