function sublist(l) {
    let L0 = []
    for (let i=0;i<l.length;i++){
        for (let j=0;j<L0.length;j++){
            L0.concat(L0[j] + [l[i]])
          }
    console.log('List =', L0)

}
}
console.log(sublist([1,2,3]))
