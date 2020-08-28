var friendList=["ashik","sen","raj","de"]
var tiny=friendList[0]

function tinyFriend(arr){
    for (i=0;i<arr.length;i++){
        var element =arr[i];
        var tinyLength=tiny.length;
        var elementLength=element.length;
        if (elementLength>0){
            if(tinyLength>elementLength){
                tiny=element
            }
            
        }
        
    
    }
    return tiny
}

var result = tinyFriend(friendList)
console.log(result)
