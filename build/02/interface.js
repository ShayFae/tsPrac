//Enum is a type that contains hard-coded values
var ContactStatus;
(function (ContactStatus) {
    //If left as just Active its value would only equal to 0 but giving it a string value it will now read as that string
    ContactStatus["Active"] = "Active";
    ContactStatus["Inactive"] = "Inactive";
    ContactStatus["New"] = "New";
})(ContactStatus || (ContactStatus = {}));
//Since Address was merged with Contact you must also add any mandatory values from it as well
let primaryContact = {
    id: 1,
    name: "Bob",
    //When the birtDate field is missing it will still run fine 
    // birthDate: new Date("2022-06-14")
    //Targeting enum ContactStatus and giving it the active value
    status: ContactStatus.Active,
    line1: "string",
    line2: "string",
    province: "string",
    region: "string",
    postalCode: "string",
};
