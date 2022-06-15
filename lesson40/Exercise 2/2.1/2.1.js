 const str = prompt()

 console.log(str)

 for (let element of document.querySelector("div").childNodes) {
    element.value = str
 }