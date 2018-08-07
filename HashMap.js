var hashArray = [];

hashArray.length = 30;


String.prototype.hashCode = function(){
    var hash = 0;
    if(this.length == 0){
        return hash;
    }

    for(i=0;i<this.length;i++){
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+ char;
        hash &= hash;
    }
    return hash;
}

var hashedKey = "role".hashCode();

function mod(input,div){
    return (input % div + div) % div;
}

var idx = mod(hashedKey, hashArray.length)

function addToHash(val,length){
    key = val.hashCode()
    modKey = mod(key,length)

    if(hashArray[modKey] == null){
        hashArray[modKey] = [[val]];
    }  
    else{
        hashArray[modKey].push([val])
    }

}


addToHash("aven",30)
addToHash("evan",30)
addToHash("neva",30)
console.log(hashArray);


function findValue(val, arr){
    key = val.hashCode()
    modKey = mod(key,arr.length)

    if(hashArray[modKey]){
        console.log("True: " + val +" is at index: " + modKey);       
    }
    else{
        console.log("False: " + val + " does not exist");      
    }  
}

findValue("evan",hashArray)
findValue("frank",hashArray)
findValue("aven",hashArray)

for(i=0;i<hashArray.length;i++){
    console.log("Index" +i +" " +hashArray[i]);
    
}




