// Exercise 3
function sublist(nums) {
  let res = []
  let len = nums.length;
    for (let i = 0; i < (1 << len); i++) {
		let arr = [];
        for (let j = 0; j < len; j++) {
            if (i & (1 << j)) {
              arr.push(nums[j]);
          }
        }
        res.push(arr);
    }
    return res;
}
console.log(sublist([1,2,3]))//如果有重复元素怎么办
