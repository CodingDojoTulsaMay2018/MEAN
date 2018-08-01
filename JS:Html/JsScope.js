


function addArrayEelements(array)
{
    var sum = 0;
    var array_sum = 0; 
    var array_length = array.length;
   
    for(var i=0;i<array_length;i++)
    {
       
        array_sum = addNumbers(array_sum,array[i]);

    }
    function addNumbers(a,b)
    {
        sum = a+b;        
        return sum;
    }
    return array_sum;
}

var new_sum = addArrayEelements([3,4,5]);
console.log(new_sum);

