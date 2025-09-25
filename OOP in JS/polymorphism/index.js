class Bank{
    roi(){
        console.log('RBI Interest rate = 4.2');
    }
}

class SBI extends Bank{
    roi(){
        console.log('RBI Interest rate = 7.2');
    }
}

class HDFC extends Bank{
    roi(){
        console.log('RBI Interest rate = 9.2');
    }
}

class Axis extends Bank{
    roi(){
        console.log('RBI Interest rate = 8.2');
    }
}

// SBI 
const s = new SBI();
s.roi();

// HDFC
const s2 = new HDFC();
s2.roi();

// Axix
const s3 = new Axis();
s3.roi();
