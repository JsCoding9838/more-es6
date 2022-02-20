class Support {
    name;
    designation = 'Support Web Dev';
    address     = 'BD';
    constructor(name, address){
        this.name    = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, 'Start a support session');
    }
}

const aamir   = new Support('Aamir Khan', 'Chaina');
const salman  = new Support('Solaiman Khan', 'dubai');
const sharuk  = new Support('SRK Khan', 'India');
const akshay  = new Support('Akshay Kumar', 'dubai');
aamir.startSession();
salman.startSession();
// console.log(aamir, salman, sharuk, akshay);
// console.log(salman);