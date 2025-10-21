//Generate Random email address

function generateRandomEmailAddress(){
    let characters= 'abcdefghijklmnopqrstuvwxyz0123456789';
    let username ='';

    for(let i=0; i<8; i++){
        username = username+ characters.charAt(Math.random()*characters.length);
        }
        console.log(`${username}@hotmail.com`);
}

generateRandomEmailAddress();

//Generate random mobile number

function generateRandomMobileNumber(){
    let number ='0123456789';
    let mobileNumber ='';

    for(let i=0; i<10; i++){
        mobileNumber = mobileNumber + number.charAt(Math.random()*number.length);
    }
    console.log(`+46-${mobileNumber}`);
    }

generateRandomMobileNumber();


