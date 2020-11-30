// Exercise 2
function isMagicDate(d, m, y) {
  if (d>31 || m>12||d==0||m==0||y==0){
    return console.log('You are living a magic life')
  }
else{
 let y1=y%10
 let y2=y/10%10
 let y3=y2*10+y1


 if (d*m==y3){
    return console.log('True')
  }
 else{
    return console.log('False')
  }

  }
  }
console.log(isMagicDate(1, 1, 0))
