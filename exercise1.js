function reduceFraction(a, b) {
  
  if (a>b):
    for i in range(1,a+1):
        if (a%i===0 && b%i===0):
            a=a/i;
            b=b/i;
        if (i===a && a%b===0):
                b=1;
                a=a/b;
    return  print(a,"/",b);
  else if (b>a) :
    for i in range(1, b+1):
        if (b % i === 0 && a % i === 0):
         a = a / i;
         b = b / i;
        if (i===b && b%a === 0):
             a = 1;
             b = b/a;
    return print(a,"/",b);
   else:
     print('1/1');

    return undefined;
}
print(reduceFraction(7,21))
