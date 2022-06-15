interface Contact2 {
  id: number;
  name: string;
  //clone(): Contact //Define a method inside an interface
}

interface UserContact2<TExternalId> {
  id: number;
  name: string;
  username: string;
  externalId: TExternalId;
  //loadExternal(): Task<TExternalId>;
}

// function clone(source: Contact2): Contact2 {
//   return Object.apply({}, source)
// }

//Using <T>(doesn't matter what's named) 
function clone<T>(source: T): T {
  return Object.apply({}, source)
}

function clone2<T1, T2 extends T1>(source: T1): T2 {
  return Object.apply({}, source)
}

const p: Contact2 = {id: 5, name: "bob"}
const m = clone(a)//It knows to use contact type
//const c = clone2<Contact, UserContact>(a)

//
const dataRange = {startDate: Date.now(), endDate: Date.now()}
const dataRangeCopy = clone(dataRange)