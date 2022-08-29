 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }



// Let's write a basic test to familiarize ourselves with Jest syntax
test("Check to see if Jest works", () => {
  expect(2).toBe(2);
})


// Let's try accessing our fake data
test("Check to see if the fake data firstName is Patten", () => {
  expect(testData.firstName).toBe("Patten");
})


// Describe block to test the actual functions we've imported
describe("Testing out the formatTitle function", () => {
  // Let's check to see if formatTitle actually returns a string
  test("formatTitle should return a string", () => {
    // Let's store the return of formatTitle into a new variable.
    let formattedTitle = formatTitle("testData.title")
    // typeof will return the data type wrapped in quotes, aka a string. If we left the quotes out (in the parentheses after .toBe), it'd search for a variable called string instead.
    expect(typeof formattedTitle).toBe("string");
  })


  // Let's check to see if the title actually gets capitalized
  test("formatTitle should capitalize our title", () => {
    let formattedTitle = formatTitle(testData.title);
    expect(formattedTitle).toBe("Nulla Ac");
  })
})


// What's the difference between toBe and toEqual?\
// The answer is data types! Reference types are equated differently than primitive types.
// However, toEqual works on both primitive and reference types (objects, arrays).
test("toBe vs toEqual", () => {
  const obj1 = {num: 1};
  const obj2 = {num: 1};

  // will fail because we aren't trying to see if they're exactly equal
  expect(obj1).toBe(obj2);

  // using toEqual will do that for us
  // use toEqual when comparing things like objects and arrays
  expect(obj1).toEqual(obj2);
})