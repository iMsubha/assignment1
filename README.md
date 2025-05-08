# Assignment1

1. What are some differences between interfaces and types in TypeScript?

   ***

   - Interface is used to define objects types. Type Alias can be used for objects, primitive data types and more.

   `interface User {
  name: string;
  age: number;
}`

   `type age: number;`

   `type name: string;`

   `type person={
      name:string,
      age:number,
   }`

2. ## What is the use of the keyof keyword in TypeScript? Provide an example.

   - when keyof is used on any type ,it means that types union of property name.

   `type Vehicle = {
 bike: string;
 car: string;
 ship: string;
 };`

   `type Owner = keyof Vehicle;` //"bike" | "car" | "ship"
