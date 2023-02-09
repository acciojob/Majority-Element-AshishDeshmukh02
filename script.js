//your code here
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function majorityElement(nums) {
    let map = new Map();
    let n = nums.length;
    
    for (let i = 0; i < n; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1);
        } else {
            let count = map.get(nums[i]);
            count++;
            if (count > Math.floor(n/2)) {
                return nums[i];
            }
            map.set(nums[i], count);
        }
    }
}


readline.question(`Enter a list of comma-separated numbers: `, (input) => {
    const nums = input.split(',').map(num => parseInt(num));
    console.log(`The majority element is: ${majorityElement(nums)}`);
    readline.close();
});
