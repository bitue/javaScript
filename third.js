function brickCalculator(x){

    if(x>0){
        if(x<=10){
            var total = x*15;
        }
        else if(x>10 && x<20){
             total=(x-10)*12+150
        }
        else{
            total=(x-20)*10+270
        }
    }
    else{
        return "you should not use negative value"
    }
    
    return total*1000
}

var result=brickCalculator(-30);
console.log(result)
