//your code here
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function majorityElement(nums) {
    let count = 0;
    let candidate;
    
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    
    return candidate;
}

readline.question(`Enter a list of comma-separated numbers: `, (input) => {
    const nums = input.split(',').map(num => parseInt(num));
    console.log(`The majority element is: ${majorityElement(nums)}`);
    readline.close();
});
