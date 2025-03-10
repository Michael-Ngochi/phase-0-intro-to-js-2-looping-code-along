// Code your solutions in this file
//let people=["Guadalupe", "Ollie", "Aki"];
writeCards=(people=[],word)=>{
    let messages=[];
    for(let i=0;i<=people.length-1;i++){
        let message=`Thank you, ${people[i]}, for the wonderful ${word} gift!`;
        messages.push(message);
    }
    console.log(messages)
return messages;
}


countDown=(num)=>{
    while(num>=0){
console.log(num);
num--;
    }
}


console.log(writeCards(["Johny","Paul","Marry"],"surpise"));

//console.log(countDown(10));




