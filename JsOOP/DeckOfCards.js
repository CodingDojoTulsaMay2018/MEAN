class Cards{
    constructor(suit,stringValue,intVal){
    this.suit = suit
    this.stringValue = stringValue
    this.intVal = intVal  
    } 
    showCard(){
        console.log(this.suit);
        
    }  
}




class Deck{
    
    constructor(){
        this.deckArray = []
        let suit = ["Hearts","Clubs","Diamonds","Spades"]
        let stringValue = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"]
        this.buildDeck= function(){
            for(let j=0;j<suit.length;j++)
            {
                for(let i=0;i<stringValue.length;i++)
                {
                    let suits = suit[j]
                    let stringVal = stringValue[i]
                    let intVal = i+1
                    let card = new Cards(suits,stringVal,intVal)
                    
                    
                    this.deckArray.push(card)
                }
              
            }
        }
    }  
    shuffle(){
        var m = this.deckArray.length, t, i
        while (m){
            i = Math.floor(Math.random() * m--)

            t = this.deckArray[m]
            this.deckArray[m] = this.deckArray[i]
            this.deckArray[i] = t
        }
        return this
       
    }  
}

let Deck1 = new Deck()
Deck1.buildDeck()
Deck1.shuffle()

console.log(Deck1.deckArray.length);
console.log(Deck1.deckArray)




