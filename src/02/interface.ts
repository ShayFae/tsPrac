//Interface is a way to give information to typescript
//When using extends it merges the Address interface into Contact interface
interface Contact extends Address {
  id: number;
  name: ContactName; //Instead of using string you can use a type alias in this case ContactName
  // birthDate: Date;
  birthDate?: ContactBirthDate; //When adding a question mark it allows that field to be optional and will not show an error when it is missing
  status: ContactStatus;
}

interface Address {
  line1: string;
  line2: string;
  province: string;
  region: string;
  postalCode: string;
}

//Combines the two types together to create a new type 
type AdressableContact = Contact & Address

//Type alias named ContactName is given the type string
type ContactName = string;

//Type alias with multiple types(union types)
type ContactBirthDate = Date | number | string;

//Enum is a type that contains hard-coded values
// enum ContactStatus {
//   //If left as just Active its value would only equal to 0 but giving it a string value it will now read as that string
//   Active = "Active",
//   Inactive = "Inactive",
//   New = "New"
// }

//Type alias for enum ContactStatus less code when compared
type ContactStatus = "active" | "inactive" | "new";

//Since Address was merged with Contact you must also add any mandatory values from it as well
let primaryContact: Contact = {
  id: 1,
  name: "Bob",
  //When the birtDate field is missing it will still run fine 
  // birthDate: new Date("2022-06-14")
  //Targeting enum ContactStatus and giving it the active value
  // status: ContactStatus.Active,
  //Instead of using an enum you may use type alias so you can type just string value 
  status: "active",
  line1: "string",
  line2: "string",
  province: "string",
  region: "string",
  postalCode: "string",
}