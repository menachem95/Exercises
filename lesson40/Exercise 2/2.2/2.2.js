
const arr = ["a", "b", "c", "d", "e"]

const inputs = document.querySelector("div").children
   console.log(inputs)
for (let i = 0; i < inputs.length; i++) {
   inputs[i].value = arr[i];
}
