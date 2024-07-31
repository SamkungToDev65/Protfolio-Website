document.addEventListener('DOMContentLoaded', (event) => {
    const textElement = document.getElementById('animated-text');
    const text = textElement.textContent;
    textElement.textContent = ''; // Clear initial text
    let index = 0;
    const speed = 100; // Speed of typing in milliseconds

    function typeText() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, speed);
        }
    }

    typeText();
});

