const cards = document.querySelector(".btns").children;
const you_won = document.querySelector(".you_won");
const card_faund = document.querySelectorAll(".card_faund")[1];
const card_left = document.querySelectorAll(".card_left")[1];
const num_of_tries = document.querySelectorAll(".num_of_tries")[1];

const list = [
    {value: 1},
    {value: 1},
    {value: 2},
    {value: 2},
    {value: 3},
    {value: 3},
    {value: 4},
    {value: 4},
    {value: 5},
    {value: 5},
    {value: 6},
    {value: 6},
    {value: 7},
    {value: 7},
    {value: 8},
    {value: 8},
];

let random_list = list.sort(()=> Math.random() - 0.5);

for (let i = 0; i < random_list.length; i++) {
   cards[i].value = random_list[i].value;
   cards[i].textContent = cards[i].value;
   cards[i].found = false;
   cards[i].location = [i]
};

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", ()=> openCrad(cards[i]))
};

const visible_list = [];
const found_list = [];

let time = 0;
let counter = 0;

function openCrad(card) {
    clearTimeout(time)
    card.classList.add("card_open");
    visible_list.push(card);
    if (visible_list.length === 1) {
        return
    } else if (visible_list.length === 2) {
        counter++;
        num_of_tries.textContent = counter;
        if (visible_list[0].value === visible_list[1].value &&
            visible_list[0].location !== visible_list[1].location) {
            cards[visible_list[0].location].found = true;
            cards[visible_list[1].location].found = true;
            visible_list.length = 0;
        } else if (visible_list[0].value === visible_list[1].value &&
            visible_list[0].location === visible_list[1].location) {
            visible_list.length = 1;
        } else if (visible_list[0].value !== visible_list[1].value) {
            time = setTimeout(updateVisibleList, 2000)
        }
    } else if (visible_list.length === 3) {
        updateVisibleList();
        visible_list.push(card);
        return
    }
    console.log("found_list.length = " + found_list.length)
    updateFoundList();
}

function updateFoundList() {
    found_list.length = 0;
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].found){
         found_list.push(cards[i]);
         cards[i].classList.remove("card_open");
         cards[i].classList.add("card_found");
        } 
    }
    if (found_list.length === cards.length) {
        you_won.style.color = "black"
    }
    card_faund.textContent = (found_list.length)
    card_left.textContent = (cards.length - found_list.length)
}

function updateVisibleList() {
    cards[visible_list[0].location].classList.remove("card_open");
    cards[visible_list[1].location].classList.remove("card_open");
    visible_list.length = 0;
}
