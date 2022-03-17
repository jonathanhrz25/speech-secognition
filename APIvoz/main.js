const texts = document.querySelector(".texts");
const foco1 = document.getElementById("Foco1");
const foco2 = document.getElementById("Foco2");
const foco3 = document.getElementById("Foco3");
const foco4 = document.getElementById("Foco4");
const foco5 = document.getElementById("Foco5");

  window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener("result", (e) => {
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
    
  console.log(text);
  if (e.results[0].isFinal) {
    if (text.includes("prende luz 1")) {
      foco1.style.background ="URL(bulb_on.jpg)";
      console.log('prende luz uno')
    }
    if (text.includes("apaga luz 1")) {
      foco1.style.background ="URL(bulb_off.jpg)";
    }
    if (text.includes("prende luz 2")) {
      foco2.style.background ="URL(bulb_on.jpg)";
      console.log('prende luz dos')
    }
    if (text.includes("apaga luz 2")) {
      foco2.style.background ="URL(bulb_off.jpg)";
    }
    if (text.includes("prende luz 3")) {
      foco3.style.background ="URL(bulb_on.jpg)";
      console.log('prende luz tres')
    }
    if (text.includes("apaga luz 3")) {
      foco3.style.background ="URL(bulb_off.jpg)";
    }
    if (text.includes("prende luz 4")) {
      foco4.style.background ="URL(bulb_on.jpg)";
      console.log('prende luz cuatro')
    }
    if (text.includes("apaga luz cuatro")) {
      foco4.style.background ="URL(bulb_off.jpg)";
    }
    if (text.includes("prende luz 5")) {
      foco5.style.background ="URL(bulb_on.jpg)";
      console.log('prende luz cinco')
    }
    if (text.includes("apaga luz 5")) {
      foco5.style.background ="URL(bulb_off.jpg)";
    }
  }
    //p = document.createElement("p");
});

  recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();