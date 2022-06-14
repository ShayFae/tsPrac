//Interface is a way to give information to typescript
//When using extends it merges the Address interface into Contact interface
interface Contact extends Address{
  id: number;
  //Instead of using string you can use a type alias in this case ContactName
  name: string;
  // birthDate: Date;
  birthDate?: Date; //When adding a question mark it allows that field to be optional and will not show an error when it is missing
}

interface Address {
  line1: string;
  line2: string;
  province: string;
  region: string;
  postalCode: string;
}

//Since Address was merged with Contact you must also add any mandatory values from it as well
let primaryContact: Contact = {
  id: 1,
  name: "Bob",
  //When the birtDate field is missing it will still run fine 
  // birthDate: new Date("2022-06-14")
  line1: "string",
  line2: "string",
  province: "string",
  region: "string",
  postalCode: "string",
}

//Type alias named ContactName is given the type string
type ContactName = string