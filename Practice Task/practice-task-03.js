const books = ['English For Today', 'Java Programming', 'Higher Math', 'BCS Preparation Test', 'JavaScript'];

const isInclude = books.includes("JavaScript")

if (isInclude) {
  console.log('JavaScript book is included ✅');
} else {
  console.log('JavaScript book is not included ❌');
}