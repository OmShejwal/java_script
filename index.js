// Main JavaScript Entry Point
console.log("Hello, JavaScript!");
console.log("Welcome to JavaScript Learning Projects");

// Basic Test
function greet(name) {
  return `Hello, ${name}! Welcome to my JavaScript projects.`;
}

console.log(greet("Developer"));

// Display all available projects
const projects = [
  "Variables and Data Types",
  "Functions",
  "Objects",
  "DOM Manipulation",
  "Arrays and Loops",
  "Rock Paper Scissors Game",
  "Todo List Application",
  "Advanced Functions"
];

console.log("\n📚 Available Projects:");
projects.forEach((project, index) => {
  console.log(`${index + 1}. ${project}`);
});
