var beatles=[]

var theBeatlesPlay = (musicians,instruments) => {
  for(let i=0;i<musicians.length;i++){
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}

var beatles2=[]

 var johnLennonFacts = (facts) => {
i=0
   while(i<facts.length){
     beatles2.push(`${facts[i]}!!!`)
     i++
   }
 }
