//It can only contain contact properties 
const field = "email";
function getValue(source, propertyName) {
    return source[propertyName];
}
//Using a generic function instead
function getValue2(source, propertyName) {
    return source[propertyName];
}
//Status isn't in contact so it shows an error
// const val = getValue(contact, "status")
//No issues when using id because it is within Contact
// const val2 = getValue(contact, "id")
const val3 = getValue2({ min: 1, max: 100 }, "max");
