const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Initialize variables
const x = 9;
const y = 81;

// Prompt user for integer z
rl.question('Enter an integer for z: ', (zInput) => {
  const z = parseInt(zInput);
  
  // Prompt user for their choice
  rl.question('Do you want to subtract z from x or y? (enter "x" or "y"): ', (choice) => {
    
    // Use if/else if/else to determine action
    if (choice.toLowerCase() === 'x') {
      const result = x - z;
      console.log(`You chose to subtract ${z} from x (${x})`);
      console.log(`Final answer: ${result}`);
    } else if (choice.toLowerCase() === 'y') {
      const result = y - z;
      console.log(`You chose to subtract ${z} from y (${y})`);
      console.log(`Final answer: ${result}`);
    } else {
      console.log('Invalid choice. Please enter "x" or "y".');
    }
    
    rl.close();
  });
});
