// //Interface is a way to give information to typescript(main difference between Class and interface)
// //When using extends it merges the Address interface into Contact interface
// interface Contact extends Address{
//   id: number;
//   //Instead of using string you can use a type alias in this case ContactName
//   name: string;
//   // birthDate: Date;
//   birthDate?: Date; //When adding a question mark it allows that field to be optional and will not show an error when it is missing
// }
let primaryContact = {
    birthDate: new Date("1980-01-16"),
    id: 12345,
    name: "Jamie Johnson",
};
