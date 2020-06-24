var beatles=[]

var theBeatlesPlay = (musicians,instruments) => {
  for(let i=0;i<musicians.length;i++){
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}



 var johnLennonFacts = (facts) => {
var i=0
var beatles2=[]
   while(i<facts.length){
     beatles2.push(`${facts[i]}!!!`)
     i++
   }
   return beatles2
 }
