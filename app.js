// Assignment: create a class called PersonAccount
class PersonAccount {
    constructor(firstName, lastName, incomes, expenses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = incomes;
        this.expenses = expenses;
    }
    totalIncome() {
        console.log(`${this.incomes}`)
    }
    totalExpense() {
        console.log(`${this.expenses}`)
    }
    addIncome() {
        console.log(`lets add 2 months income: ${this.incomes + this.incomes}`)
    }
    addExpense() {
        console.log(`lets get two months expense: ${this.expenses + this.expenses}`)
    }
    accountBalance() {
        console.log(`your monthly account balance is: ${this.incomes - this.expenses}`)
    }
}

const account = new PersonAccount("Muhammad", "faizan", 5000, 2000);
console.log(account);
account.totalIncome();
account.totalExpense();
account.addIncome();
account.addExpense();
account.accountBalance();


// incomes and expenses is an array of objects which has income/expense and description properties
const income = [
    {
        "income": 5000,
        "description": "you have been paid for your effort"
    }
]

const expense = [
    {
         "expense":2000,
         "description":"after your expenses your account balance has reached 2000"
    }
]



// 2 Assignment: create a AutoMobile class 

class AutoMobile {
    constructor(name,model,color,type){
          this.name = name;
          this.model = model;
          this.color = color;
          this.type = type;
    }
    start(){
        console.log(`${this.name} is ready to start`)
    }
    openDoors(){
        console.log(`${this.name} doors are open`)
    }
}
const car = new AutoMobile("civic",2022,"black","automatic")
console.log(car);
car.start();
car.openDoors();

// now time to create AutoMobile child classes

class Truck extends AutoMobile {
    constructor(name,model,color,type,maxSpeed,shape){
          super(name,model,color,type);
          this.maxSpeed = maxSpeed;
          this.shape = shape;
    }
}
const newlyInventedTruck = new Truck("garbageTruck",2022,"black","automatic","80km/hour","rocket")
console.log(newlyInventedTruck);

class Bus extends AutoMobile {
    constructor(name,model,color,type,tyre,style){
          super(name,model,color,type);
          this.tyre = tyre;
          this.style = style;
    }
}
const newlyInventedBus = new Bus("pakistaniBus",2022,"black","automatic","sportsTyre","printed")
console.log(newlyInventedBus);