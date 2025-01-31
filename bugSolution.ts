function greeter(person: string[]): string {
  return "Hello, "+ person.join(', ');
}
let user = ["Tom", "Jerry"];
console.log(greeter(user)); // Output: Hello, Tom, Jerry

//Alternative solution:
function greeter2(person: string): string {
  return "Hello, "+ person;
}
let user2 = ["Tom", "Jerry"];
user2.forEach(user => console.log(greeter2(user))); //Output: Hello, Tom
                                                        //         Hello, Jerry