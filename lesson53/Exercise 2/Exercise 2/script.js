
class Search {
    constructor(container) {
        this.container = container;
        this.toppingsList = ["olives", "onion", "corn", "pineapple", "tomato"]
        this.tTS = this.toppingsList.toString().replaceAll(",", " | ")
        this.header = `
            <header>
                <h1>welcome to the pizza place</h1>
                <h2>choose your favorite toppings</h2>
                <p>
                    ${this.tTS}
                </p>
            </header>
        `
        this.container.innerHTML = this.header + `<input type="text" value="">` + this.listToString(this.toppingsList)
       
        this.text = this.container.querySelector("input");
        this.toppingsContainer = this.container.querySelector(".list_of_toppings");
        this.toppings = this.container.querySelector(".list_of_toppings").children;
       
        this.text.addEventListener("input", this.searchInList);
    }

    listToString = (list)=> {
        let string = `<div class="list_of_toppings">`;
        for(let i = 0; i < list.length; i++) {
            string += `<span>${list[i]}</span>
            <span>${list[i]} extra</span>
            `
        }
        string += `</div>`
        return string
    }

    searchInList = ()=> {
        
        for(let i = 0; i < this.toppings.length; i++) {
            if (this.toppings[i].textContent.startsWith(this.text.value)) {
                this.toppingsContainer.classList.add("displayOn")
                this.toppings[i].classList.add("find");
            }
        }

        for(let i = 0; i < this.toppings.length; i++) {
            if (!this.toppings[i].textContent.startsWith(this.text.value)) {
                this.toppings[i].classList.remove("find");
            }
        }

        if (this.text.value.length === 0) {
            this.toppingsContainer.classList.remove("displayOn")
            for(let i = 0; i < this.toppings.length; i++) {
                if (this.toppings[i].textContent.includes(this.text.value)) {
                    this.toppings[i].classList.remove("find");
                }
            }
        }
    }
}







const el = document.createElement("div");
document.body.appendChild(el);

const s1 = new Search(el)