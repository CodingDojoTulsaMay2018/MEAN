// function insertintoHeap(heap,val)
// {      
//     if(!heap.length)
//     {
//         heap.push(undefined)
//     }
    
//     heap.push(val)
//     childIndex = heap.length-1    
//     parentIndex = Math.trunc(childIndex/2)
//     while(heap[childIndex] < heap[parentIndex])
//     {      
//         temp = heap[parentIndex]
//         heap[parentIndex] = heap[childIndex]
//         heap[childIndex] = temp
//         childIndex = parentIndex
//         parentIndex = Math.trunc(childIndex/2)
//     }    
//    console.log(heap)
// }
// insertintoHeap([],13)
// insertintoHeap([undefined,3,8,10,11,9,20,14],7)


function removeFromMinHeap(heap)
{      
    if(heap.length ==2)
    {
        removed= heap.pop()
             
        return removed       
    }
    temp = heap[heap.length-1]
    heap[heap.length-1] = heap[1]
    heap[1] = temp
    heap.pop()
    

    for(i=1;i<heap.length;i++)
    {       
        if(heap[i]> heap[i*2+1])
        {
            temp = heap[i*2+1]
            heap[i*2+1] = heap[i]
            heap[i] = temp
        }           
    }
    return heap
}
console.log(removeFromMinHeap([undefined,8]))

console.log(removeFromMinHeap([undefined,3,12,8,17,13,15,10]));






