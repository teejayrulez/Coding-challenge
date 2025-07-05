//Example 1
const button = document.getElementById('clickBtn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    message.textContent = "You clicked the button";
    message.style.color = "green";
});

//Example 2
const heading = document.getElementById('hoverMe');
const text = document.getElementById('hoverText');

heading.addEventListener('mouseover', () => {
    text.textContent = "Mouse is over the header";
    text.style.color = "blue";
});

heading.addEventListener('mouseout', () => {
    text.textContent = "";
});