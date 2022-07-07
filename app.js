let age = 18;
let is_subscribed = true;

if (age < 18 && !is_subscribed){
    console.log("User is under 18 and is not subscribed");
} else if (age <18&&is_subscribed){
    console.log(" User is  under 18 and subscribed ");
} else if (age >=18 && is_subscribed){
    console.log("user is 18 or older and subscribed");
} else if (age >=18&&!is_subscribed){
        console.log("User is 18 or older and is not subscribed");
    } else{ console.log("Error system crash");
    }




