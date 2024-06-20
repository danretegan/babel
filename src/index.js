import { styleBody, addTitle, contact } from "./dom";
import test, { getPremUsers } from "./data";

console.log("index.js file");

styleBody();
addTitle("Hello from the index.js file!");
console.log(contact);

console.log(test);

console.log(getPremUsers(test));

console.log("test -w");
