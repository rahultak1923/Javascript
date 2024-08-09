const age = 23;

if(age>=18){
    console.log("you can vote ")
}
else{
    console.log("you can't vote ")
} 

const ages = 3;

ages >= 18 ? console.log("yes"): console.log("no");



// switch case 

const cname = "rahul";

switch (cname){
    case "rahul": {
        console.log("your name is rahul")
    }
    break;
    case "varun": {
        console.log("your name is not rahul")
    }
    break;

    default: {
        console.log("Invalid Option")
    }
    break;

}

let a = 90;
let opt = "-";
let b = 10;

switch(opt){
    case "+":{
        console.log(a + b);
    }
    break;
    case "-":{
        console.log(a-b);
    }
    break;
    default: {console.log("idk")}
}