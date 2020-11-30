function reduceFraction(a, b) {
  let c=[];
    if (a>b){
      for (let i=1;i<a+1;i++){
          if (a%i===0 && b%i===0)
              a=a/i;
              b=b/i;
          if (i===a && a%b===0)
                  b=1;
                  a=a/b;
                }
              }

     else if (b>a){
      for (let i=1;i<b+1;i++) {
          if (b % i === 0 && a % i === 0)
           a = a / i;
           b = b / i;
          if (i===b && b%a === 0)
               a = 1;
               b = b/a;
             }
           }
      else{
        a=1;
        b=1;

         }
    c=[a,b];
    return c;
}
console.log(reduceFraction(7,21))
