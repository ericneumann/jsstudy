let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// Kansas -> kansas
// North Dakota -> north-dakota

// urls: Imperative version
function imperativeUrls(elements) {
  let fixedElements = [];
  Array.from(elements).forEach(element => {
    fixedElements.push(urlify(element));
  });
  return fixedElements;
}
// console.log(imperativeUrls(states));

// urls: functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
// console.log(functionalUrls(states));

// full urls: functional version
function returnUrls(paths,domain) {
  if (!domain) {
    domain = "https://example.com/"
  }
  return paths.map(n => (domain + urlify(n)));
}
// console.log(returnUrls(states, "https://another.com/"));

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  })
  return singles;
}
// console.log(imperativeSingles(states));

// singles: functional version
function functionalSingles(elements) {
  return elements.filter(n => n.split(/\s+/).length === 1);
}
// console.log(functionalSingles(states));

// dakotas: functional version
function returnDakotas(elements) {
  return elements.filter(n => n.includes("Dakota"));
}
// console.log(returnDakotas(states));

// multi-word states: functional version
function returnMultiWords(elements) {
  return elements.filter(n => n.split(/\s+/).length > 1);
}
// console.log(returnMultiWords(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  })
  return total;
}
// console.log(imperativeSum(numbers));

// sum: functional version
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
// console.log(functionalSum(numbers));

// lengths: imperative version
function imperativeLengths(elements) {
  let elementLengths = {};
  elements.forEach(n => elementLengths[n] = n.length);
  return elementLengths;
}
// console.log(imperative Lengths(states)); 

// lengths: functional version
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => { 
                          lengths[element] = element.length; 
                          return lengths;
                        }, {});
}
// console.log(functionalLengths(states));

// product: functional version
function functionalProduct(elements) {
  return elements.reduce((total, n) => {return total *= n});
};
console.log(functionalProduct([1,2,3,4,5,6,7]));
