
class Search {
    constructor(container) {
        this.container = container;
        this.toppingsList = ["olives", "onion", "corn", "pineapple", "tomato"]
        this.toppingString = this.toppingsList.toString().replaceAll(",", " | ")
        this.header = `
            <header>
                <h1>welcome to the pizza place</h1>
                <h2>choose your favorite toppings</h2>
                <p>
                    ${this.toppingString}
                </p>
            </header>
        `
        this.container.innerHTML = this.header + `
            <div>
                <input type="text" value="">
                <button class="ok">ok</button>
            </div>
            ` + this.listToString(this.toppingsList)
             + "<p class='order'></p>"
       
        this.text = this.container.querySelector("input");
        this.toppingsContainer = this.container.querySelector(".list_of_toppings");
        this.toppings = this.container.querySelector(".list_of_toppings").children;
        this.okBtn = this.container.querySelector(".ok");
        this.order = this.container.querySelector(".order");
        
        this.text.addEventListener("input", this.searchInList); 
        this.okBtn.addEventListener("click", ()=> {
            this.toppingsContainer.classList.remove("displayOn");
            this.order.textContent = `you orderd one pizza with ${this.text.value}`
        })      
    }
    
    listToString = (list)=> {
        let string = `<div class="list_of_toppings">`;
        for(let i = 0; i < list.length; i++) {
            string += `<button>${list[i]}</button>
            <button>${list[i]} extra</button>
            `
        }
        string += `</div>`
        return string
    }

    searchInList = ()=> {
        this.order.textContent = ""
        
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
        this.find = this.container.querySelectorAll(".find");
        for (let i = 0; i < this.find.length; i++) {
            this.find[i].addEventListener("click", ()=>{
                this.text.value = this.find[i].textContent
            })
        }
    }
}







const el = document.createElement("div");
document.body.appendChild(el);

const s1 = new Search(el)