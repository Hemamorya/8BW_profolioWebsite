// script.js

var typeData = new Typed(".role", {
    strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});

document.getElementById('hireButton').addEventListener('click', function() {
    // Create a new element for the "Thank you!" message
    var thankYouMessage = document.createElement('div');
    
    // Set the content and styling for the message
    thankYouMessage.textContent = 'Thank you!';
    thankYouMessage.style.color = 'black';
    thankYouMessage.style.fontSize = '18px';
    thankYouMessage.style.fontWeight = 'bold';
   

    // Append the message to the body
    document.body.appendChild(thankYouMessage)
});

