class Header extends React.Component{
  render(){
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Let your life in the keybord of a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component{
  render(){
    return(
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Option extends React.Component{
  render(){
    return (
      <div>
        <OptionOne/>
        <OptionTwo/>
      </div>
    );
  }
}

class OptionOne extends React.Component{
  render(){
    return (
      <div>
        <button>Press me</button>
      </div>
    );
  }
}
class OptionTwo extends React.Component{
  render(){
    return (
      <div>
        <button>Do not press me</button>
      </div>
    );
  }
}
class AddOption extends React.Component{
  render(){
    return (
      <div>
        <h1>Add component here</h1>
      </div>
    );
  }
}

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.handleAddone=this.handleAddone.bind(this);
    this.handleMinusone=this.handleMinusone.bind(this);
    this.handleReset=this.handleReset.bind(this);
    this.state={count : 0};
  }
  handleAddone(){
    this.setState((prevState)=>{
      return {
        count:prevState.count+1};
    });
  }
  handleMinusone(){
      this.setState((prevState)=>{
        return {
          count:prevState.count-1};
      });
    }
  handleReset(){
        this.setState({count: 0});
      }
  render(){
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddone}>+1</button>
        <button onClick={this.handleMinusone}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
class Fibonacci extends React.Component{
  constructor(props){
    super(props);
    //this.handleFib=this.handleFib.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleReset=this.handleReset.bind(this);
    this.state={fib: 0};
  }
  handleSubmit(e){
    e.preventDefault();
    let option =e.target.elements.Fib.value;

    if (option){
      console.log(option);
      this.setState((prevState)=>{
        return {fib: prevState.fib+parseInt(option)};
      });
      e.target.elements.Fib.value=this.state.fib;
    }
  };
  handleReset(){
        this.setState({fib: 0});
        e.target.elements.Fib.value=" ";
      }
  render(){
    return(
      <div>
        <h1>Fibonacci</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="Fib"/>
          <button>Add</button>
        </form>
        <button onClick={this.handleReset}>Reset</button>
        <h2>Number: {this.state.fib}</h2>
      </div>
    );
  }
}

const JSX=(
  <div>
    <h1>Title</h1>
    <Header/>
    <Action/>
    <Option/>
    <Counter/>
    <Fibonacci/>
  </div>
);

ReactDOM.render(JSX,document.getElementById("app"))
