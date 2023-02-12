//your code here
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function majorityElement(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
    if (map[nums[i]] > Math.floor(nums.length / 2)) {
      return nums[i];
    }
  }
}



readline.question(`Enter a list of comma-separated numbers: `, (input) => {
    const nums = input.split(',').map(num => parseInt(num));
    console.log(`The majority element is: ${majorityElement(nums)}`);
    readline.close();
});
