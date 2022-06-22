//Since Address was merged with Contact you must also add any mandatory values from it as well
let primaryContact = {
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
};
