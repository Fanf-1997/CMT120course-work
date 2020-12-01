// Exercise 3
function sublist(a) {
  var result = []
  for (var i = 0; i < a.length; i++){
      var t = []
      for (var j = i; j < a.length; j++){
          t = t.concat(a[j])
          result.push(t)
      }
  }
  result.push([])
  return result

}


console.log(sublist([1,2,3]))//如果有重复元素怎么办
