//Parallax on mouse move
document.addEventListener("mousemove", parallax);
    function parallax(e) {
        this.querySelectorAll('.image').forEach(image => {
            const speed = image.getAttribute('data-speed');
            const x = (window.innerWidth - e.pageX * speed) / 500;
            const y = (window.innerHeight - e.pageY * speed) / 300;

            image.style.transform = `translateX(${x}px) translateY(${y}px)`;            
        })}

// Hex Colors
function changeColor() {
    let hex_numbers = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

    let hex_code = '';


    for(let i = 0; i < 6; i++) {
        let random_index = Math.floor(Math.random() * hex_numbers.length);

        hex_code += hex_numbers[random_index];
        console.log(Math.random())
        console.log(hex_numbers.length)
        console.log(random_index)
        console.log(hex_numbers[random_index])
        console.log(hex_code) 
              
    }  

    document.querySelector('.hexcode').innerHTML = hex_code;
    document.querySelector('.hexcolor').style.background = '#' + hex_code;    
}

//Random quote generator
function generateQuote() {
    let quotes = {'- Oscar Wilde' : '"Be yourself; everyone else is already taken"',
                  ' ― Mae West' : '“You only live once, but if you do it right, once is enough.”'
};

let author = Object.keys(quotes);
let random_quotes = author[Math.floor(Math.random() * author.length)];
let quote = quotes[random_quotes];
console.log(quote)

document.querySelector('.quotes-name').innerHTML = random_quotes;
document.querySelector('.actual-quotes').innerHTML = quote;
}

//Pass the message
const msg_input = document.getElementById('message');

msg_input.addEventListener("keydown", function(event) {
    if(event.key == "Enter")
     PassMessage();
  })

function PassMessage() {
      document.getElementById('output-msg').innerHTML = msg_input.value;
      msg_input.value = '';

}

//Counter
let = count_num = 0;

let num = 1;

function Increase() { 
    num = 1; 
    count_num = count_num + num;

    document.getElementById('cnt_num').innerHTML = count_num;
}


function Decrease() {
    num = 1;  
    count_num -= num;

    document.getElementById('cnt_num').innerHTML = count_num;
}

//time
window.addEventListener('load', Timer)

function Timer() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let AMPM = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12;
    hour = hour ? hour : '12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('ampm').innerHTML = AMPM;
    document.getElementById('second').innerHTML = second;

    setTimeout(Timer, 200)
}

//grocerieslist
let input = document.getElementById('grocery_input');
let input_value = input.value;
let allitems = document.getElementById('allitems');

function GroceryList() {
    input.addEventListener("keydown", function(event) {
        if(event.key == "Enter")
         AddItem();
         console.log(input_value);
      })
};

function AddItem() {
    let h2 = document.createElement('h2');
    h2.innerHTML = '-' + input.value;

    allitems.insertAdjacentElement('beforeend', h2);

    input.value = '';

};

GroceryList();








