var bag = [];
var extracted = [];
var cards=[];

exports.reset = function() {
    bag = [];
    extracted = [];
    for(var i=1; i<=90; i++) {
        bag.push(i);
        //bag[i]=i;
    }
   
}

exports.extract = function() {
  
    if (bag.length === 0) {
        return null;
    }
    var n = parseInt(Math.random() * bag.length);
 
   
    var result = bag.splice(n,1);
    var n = result[0];//splice torna un vettore con gli elementi, in questo caso elemento che ho estratto e lo salva nella posizione zero a sua volta viene salvato in una variabile n
    extracted.push(n);//in questo passaggio inseriamo n ovvero l'elemento estratto nel vettore dei numeri estratti
    

    return n;
}
exports.cards = function() {
  cards=[];
    if (bag.length === 0) {
        return null;
    }
    for(var i=0;i<15;i++){
    var n = parseInt(Math.random() * bag.length);
 
   
    var result = bag.splice(n,1);
    var n = result[0];//splice torna un vettore con gli elementi, in questo caso elemento che ho estratto e lo salva nella posizione zero a sua volta viene salvato in una variabile n
    cards.push(n);//in questo passaggio inseriamo n ovvero l'elemento estratto nel vettore dei numeri estratti
    

  
    }
   return cards.sort();
  
   
}


exports.getExtracted = function() {
    return extracted;//questa funzione semplicemente torna il vettore dei numeri già estratti
}

exports.getBag = function() {
    return bag;// mentre questa torna tutti gli elementi da estrarre se non abbiamo chiamato la funzione reset che riinizializza tutti i numeri nella busta
}

this.reset();
console.log("questa è la boorsa dei numeri", this.getBag());

console.log("questa è la cartella", this.cards())

console.log("questa è la cartella", this.cards())

this.reset();
console.log()
console.log(this.getExtracted());
console.log(this.getBag());

