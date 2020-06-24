var beatles=[]

var theBeatlesPlay = (musicians,instruments) => {
  for(let i=0;i<musicians.length;i++){
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}

var beatles2=[]

 var johnLennonFacts = (facts1) => {
var i=0
   while(i<facts1.length){
     beatles2.push(`${facts1[i]}!!!`)
     i++
   }
   return beatles2
 }
