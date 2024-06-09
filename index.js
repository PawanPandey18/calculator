// let start="";
// let i=0;
// while (i<5) {
//     let j=0;
//     while (j<5-i) {
//         start +=" ";
//         j++
//     }
//     let k=0;
//     while (k<=i) {
//         start +="*";
//         k++
//     }
    
//     start+="\n";
//     i++;
    
// }
// console.log(start);

//functions 
  

// function Add() {
//     console.log(5+10);
    
// }
// Add ();
let firstvalue=" ";
let secondvalue="";
let opt="";
let result="";

let display=document.getElementById('display')
function oprt(b) {
    opt=b;
    display.value+=opt;

}

function Abc(a) {


    
    if (opt==''){
        firstvalue+=a;
        display.value=firstvalue

    }
    else{
        secondvalue +=a;
        display.value+=a

    }
    
}

function equals() {
    let g=Number(firstvalue);
    let h=Number(secondvalue);
    if (opt=='+'){
        result=g+h;
        display.value+= '='+result;
    }
    else if (opt=='-'){
        result=g-h;
        display.value+='='+result;
    }
    else if (opt=='/'){
        result=g/h;
        display.value+='='+result;
    }
    else if (opt=="*"){
        result=g*h;
        display.value+='='+result;
    }
    else if(opt=='ac'){

    }
    else{
        display.value=0;
    }
    
}
//const Abc =()=> console.log("hello")
// const Abc=()=>(
//     console.log("hello")
// )
