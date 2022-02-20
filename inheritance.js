class TeamMember {
    name;
    address = 'BD';
    constructor(name, address){
        this.name    = name;
        this.address = address;
    }
};

class Support extends TeamMember {
    groupSupportTime;
    designation = 'Support Web Dev';
    constructor(name, address, time){
        super(name, address);
        this.groupSupportTime = time;
    }

    startSession(){
        console.log(this.name, 'Start a support session');
    }
};


class StudentCare extends TeamMember {
    designation = 'Care Web Dev';
    buildRoutine(student){
        console.log(this.name, 'Build a routine for', student);
    }
};

class NeptuneDev extends TeamMember {
    codeEditor;
    designation = 'Neptune App Dev';
    constructor(name, address, editor){
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version){
        console.log(this.name, 'release app version', version);
    }
};


const aamir   = new Support('Aamir Khan', 'Chaina', 11);
const salman  = new Support('Solaiman Khan', 'dubai', 7);
const sharuk  = new Support('SRK Khan', 'India', 9);
const akshay  = new Support('Akshay Kumar', 'dubai', 5);


const alia    = new StudentCare('Alia Bhatt', 'Mumbai');
 
const ash     = new NeptuneDev('Ash', 'Malaysia', 'Android Studio');
ash.releaseApp('1.4.5');
// console.log(ash);