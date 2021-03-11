const utterance = new SpeechSynthesisUtterance();

function play(){
  
  const language = document.getElementById('language').value;
  utterance.lang = language;

  console.log(language);

  const text = document.querySelector('textarea').value;

  const rate = document.getElementById('rate').value;
  utterance.rate = Number(rate) ? rate : 1;

  if(text == '') {
    utterance.text = language == 'pt-BR' ? 'Por favor, informe um texto no campo acima para que eu possa ler.' : 'Please enter a text in the field above so that I can read it.';
  } else {
    utterance.text = text;
  }
  speechSynthesis.speak(utterance);
}

function cancel() {
  speechSynthesis.cancel();
}