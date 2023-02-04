document.addEventListener("mousemove", parallax);
    function parallax(e) {
        this.querySelectorAll('.image').forEach(image => {
            const speed = image.getAttribute('data-speed');
            const x = (window.innerWidth - e.pageX * speed) / 500;
            const y = (window.innerHeight - e.pageY * speed) / 300;

            image.style.transform = `translateX(${x}px) translateY(${y}px)`;            
        })}