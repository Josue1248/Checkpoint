class Person{
  constructor(name="anonimus",age="8")
  {
    this.name=name;
    this.age=age;
  }
  getGreetting(){
    return "Hi, I am ${this.name}!";
  }
  getDescription(){
    return "${this.name} is ${this.age}y/o";
  }
}

class Student extends Person{
  constructor(name,age,major){
    super(name,age)
    this.major=major;
  }
  hasMajor(){
    return !!this.major;
  }
  getDescription(){
    let description=super.getDescription();
    if(this.hasMajor()){
      "their major is ${this.major}"
      description+="their major is ${this.major}";
    }
    return description;
  }
}

const AnotherMe = new Student("Teresa",22);
console.log(AnotherMe.getDescription());
