const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let n = tutorials.map(function name(i) {
    let c = i.split(' ');
    let n = ''
    for (const letter of c) {
       n += (letter[0].toUpperCase() + letter.slice(1) + ' ');
       } 
       return n.trim();
  });
  return n
}
console.log(titleCased());
