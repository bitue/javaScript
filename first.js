

function feetToMile(num){

    if(num>0){
        var mile = num/5280;
    }
    else{
        return "you shuld not use negative value"
    }
    
    return mile;

}


var result=feetToMile(100);
console.log(result)