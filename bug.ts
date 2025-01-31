function greeter(person: string): string {
  return "Hello, "+ person;
}
let user = ["Tom", "Jerry"];
console.log(greeter(user)); // Error: Argument of type 'string[]' is not assignable to parameter of type 'string'.