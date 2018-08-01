function BST()
{
    this.root = null;
}
function Node(val)
{
    this.value = val;
    this.left = null;
    this.right = null;
}
var theBST = new BST();

BST.prototype.insert = function(val)
{
    if(this.root == null)
    {
        this.root = new Node(val)
        return this
    }
    runner = this.root
    
    while(runner != null)
    {       
        if(val > runner.value)
        {
            if(runner.right)
            {
                runner = runner.right                            
            }
            else
            {
                runner.right = new Node(val)   
                return this
            }
        }

        if(val < runner.value)
        {
            if(runner.left)
            {
                runner =runner.left
            }
            else
            {
                runner.left = new Node(val)
                return this
            }
        }
    }
    

        
}

theBST.insert(23).insert(24).insert(12).insert(50).insert(40)

console.log(theBST)
console.log(theBST.root.right);


