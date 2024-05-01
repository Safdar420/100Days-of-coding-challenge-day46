//  Q n0 136

for(let i = 1; i <=5 ;i++){
    console.log(`iteration ${i}, i value:,i`);
    
}

//  Q no 137

try {
    throw new Error("Something went wrong");
  } catch (error) {
    console.log(error.message); // Logs the error message
  }

//   Q no 138

console.log("Before breakpoint");

console.log(
  "This line has a breakpoint set on it in the browser's developer tools"
);
console.log("After breakpoint");
