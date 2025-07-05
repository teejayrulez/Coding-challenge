//Keeps track of the current state
let toggled = false

function changeText() {
  //Get the paragraph element by id
  const para = document.getElementById("myParagraph");

    if (toggled) {
      //Change the text content
      para.textContent = "Hello, I AM HIM";

      //change the style
      para.style.color = "blue";
      para.style.fontWeight = "bold";
    } else {
      //Change the text content
      para.textContent = "Nah, YOU ARE NOT HIM";

      //change the style
      para.style.color = "red";
      para.style.fontWeight = "bold";
    }

    //Switch the state
    toggled = !toggled;

}
