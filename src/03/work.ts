const test = () => {
  return "Hello World"
}

let p: boolean;

const which = (value) => {
  if(value === "yes") {
    p = true
  }
  p = false
  console.log(p)
}

// console.log(which("yes"))