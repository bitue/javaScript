function woodCalculator(c,t,b){

    if(c>0&&t>0&&b>0){
        var chair=1*c;
        var tabble=3*t;
        var bed=5*b;
        var total=chair+tabble+bed;
    }
    else{
        return "you should not use negative value"
    }
   

    return total
}

var result =woodCalculator(2,5,7);
console.log(result)