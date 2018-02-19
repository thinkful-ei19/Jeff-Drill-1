function yearOfBirth(age1){
   if(age1<0){
       throw new Error("Age can not be negative")
   }
   if(isNaN(age1)){
       throw new Error("Age Must Be A Vaild Number")
   }
    return 2018 - age1 ;

    }
    
    
    function whoIAm(name,age){
        var yob = yearOfBirth(age)
    console.log(`Hi, my name is ${name} and I'm ${age} years old`)
    /* ----If wanted to code in our Birth Year 
    console.log(`I was born in ${yearOfBirth}`)
    */
    console.log(yob)
    };
    whoIAm("jeff","twenty five");