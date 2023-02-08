document.addEventListener("mousemove", parallax);
    function parallax(e) {
        this.querySelectorAll('.image').forEach(image => {
            const speed = image.getAttribute('data-speed');
            const x = (window.innerWidth - e.pageX * speed) / 500;
            const y = (window.innerHeight - e.pageY * speed) / 300;

            image.style.transform = `translateX(${x}px) translateY(${y}px)`;            
        })}


function changeColor() {
    let hex_numbers = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

    let hex_code = '';

    for(let i = 0; i < 6; i++) {
        let random_index = Math.floor(Math.random() * hex_numbers.length);

        hex_code += hex_numbers[random_index];
        console.log(hex_code)
    }  

    document.querySelector('.hexcode').innerHTML = hex_code;
    document.querySelector('.hexcolor').style.background = '#' + hex_code;


    
}





