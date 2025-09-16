let inputBox = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");
let string = " ";

const sound = new Audio("./sound/digital-click.mp3");
const equalSound = new Audio("./sound/equal.mp3");
const keyboardSound = new Audio("./sound/keyboard-click.mp3");


buttons.forEach((element) => {
  element.addEventListener("click", (b) => {
    if (b.target.innerText == "=") {
          equalSound.play();
      string = String(eval(string));
      inputBox.value = string;

    } else if (b.target.innerText == "AC") {
      sound.play()
      string = " ";
      inputBox.value = string;
    } else if (b.target.innerText == "DEL") {
      string = string.substring(0,string.length-1);
      inputBox.value = string;
    } 
    else if (b.target.id == "plsmns" ){
      sound.play()
        string = String(-eval(string)) 
         inputBox.value = string;

    }
        else {
          sound.play()
      string += b.target.innerText;
      inputBox.value = string;
    }
  });
});


// ===== KEYBOARD SUPPORT =====
document.addEventListener("keydown", (e) => {
  // Numbers and operators
  if (/[0-9+\-*/%]/.test(e.key)) {
    keyboardSound.play()
    string += e.key;
    inputBox.value = string;
  }

  //calculate
  if (e.key === "Enter") {
      keyboardSound.play()
      string = String(eval(string));
      inputBox.value = string;
  }

  // Backspace = delete digit
  if (e.key === "Backspace") {
      keyboardSound.play()
    string = string.substring(0, string.length - 1);
    inputBox.value = string || "0";
  }

  // Escape = clear like AC
  if (e.key === "Escape") {
      keyboardSound.play()
    string = "";
    inputBox.value = string;
  }
});

