let msgOriginal = document.getElementById('msg-original')
let selecionar = document.getElementById('select')
let submit = document.getElementById('executar')
let msgCriptografada = document.getElementById('msg-criptografada')
let codificar = document.getElementById('codificar')
let decodificar = document.getElementById('decodificar')
let estilo_range = document.getElementById('chave-container')


selecionar.addEventListener("click", function () {
  if (selecionar.value == "cifraCesar") {
    estilo_range.style.display = "block";
  } else {
    estilo_range.style.display = "none";
  }
});



function base64() {
    let mensagem = document.getElementById('msg-original').value;
  
    if (codificar.checked) {
      let codificado = btoa(mensagem);
      return codificado;
    } else {
      let decodificado = atob(mensagem);
      return decodificado;
    }
  }

  function cifraCesar() {
    let mensagem = document.getElementById("msg-original").value;
    let chave = parseInt(document.getElementById("rangenumber").value);
    let saida = '';
  
    if (codificar.checked) {
      for (let i = 0; i < mensagem.length; i++) {
        if (mensagem[i] === mensagem[i].toUpperCase()) {
          saida += String.fromCharCode((mensagem.charCodeAt(i) + chave - 65) % 26 + 65); 
        } else {
          saida += String.fromCharCode((mensagem.charCodeAt(i) + chave - 97) % 26 + 97);
        }
      }
      return saida;
  
    } else if (decodificar.checked) {
      for (let i = 0; i < mensagem.length; i++) {
        if (mensagem.charCodeAt(i) >= 97 && mensagem.charCodeAt(i) <= 122) {
          saida += String.fromCharCode((mensagem.charCodeAt(i) - 97 -  chave + 26) % 26 + 97);
        } else if (mensagem.charCodeAt(i) >= 65 && mensagem.charCodeAt(i) <= 90) {
          saida += String.fromCharCode((mensagem.charCodeAt(i) - 65 - chave + 26) % 26 + 65);
        } else {
          saida += String.fromCharCode(mensagem.charCodeAt(i));
        }
      }
      return saida;
    }
  }


function traduzir(){
  if (selecionar.value === "base64") {
    msgCriptografada.innerText = base64(); 
  }
  else {
    msgCriptografada.innerText = cifraCesar();
   }
};
