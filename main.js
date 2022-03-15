const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.innerText = text;
  if(e.results[0].isFinal){
    if (text.includes('Cómo estás')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Estoy muy bien, gracias';
      texts.appendChild(p)
    }
    if (text.includes("Cuál es tu nombre") || text.includes('Cuál es tu nombre')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Mi nombre es Goku';
      texts.appendChild(p)
    }
    if (text.includes("Hola") || text.includes('Hola')) {
        p = document.createElement('p');
        p.classList.add('replay');
        p.innerText = 'Hola, soy Goku';
        texts.appendChild(p)
      }
    if (text.includes('Abre mi Google')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Abriendo Google';
      texts.appendChild(p)
      console.log('abriendo Google')
      window.open('https://www.google.com.mx/')
    }
    p = document.createElement('p');
  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();