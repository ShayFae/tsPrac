interface Contact {
  id: number;
  name: string; 
  birthDate: Date; 
  email: string;
}

//Type alias that has the contact properties
type ContactFields = keyof Contact;

//It can only contain contact properties 
const field: ContactFields = "email"; 

function getValue(source, propertyName) {
  return source[propertyName];
}