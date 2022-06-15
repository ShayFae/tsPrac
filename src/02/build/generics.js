// function clone(source: Contact2): Contact2 {
//   return Object.apply({}, source)
// }
//Using <T>(doesn't matter what's named) 
function clone(source) {
    return Object.apply({}, source);
}
function clone2(source) {
    return Object.apply({}, source);
}
const p = { id: 5, name: "bob" };
const m = clone(a); //It knows to use contact type
//const c = clone2<Contact, UserContact>(a)
//
const dataRange = { startDate: Date.now(), endDate: Date.now() };
const dataRangeCopy = clone(dataRange);
