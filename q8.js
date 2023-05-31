function findErrorNums(nums) 
    let n = nums.length;
    let set = new Set();
    let duplicate = -1;
    let missing = -1;
  
    // Find the duplicate number
    for (let num of nums) {
      if (set.has(num)) {
        duplicate = num;
        break;
      }
      set.add(num);
    }
  
    // Find the missing number
    for (let i = 1; i <= n; i++) {
      if (!set.has(i)) {
        missing = i;
        break;
      }
    }
  
  