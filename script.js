function copyToClipboard(elementId) {
  var copyText = document.getElementById(elementId);
  copyText.select();
  document.execCommand("copy");
  console.log("Copiado pelo botão: " + copyText.value);
}

function copyOnClick(event) {
  var copyText = event.target;
  copyText.select();
  document.execCommand("copy");
  console.log("Copiado com clique: " + copyText.value);
}

function copyOnFocus(elementId) {
  var copyText = document.getElementById(elementId);
  copyText.select();
  document.execCommand("copy");
  console.log("Copiado com foco: " + copyText.value);
}

function populateDropdown() {
  console.log(document.getElementById('Caminho').value);
    var caminho = document.getElementById('Caminho').value; 

    var caminhoArray = caminho.split(',');

    var select = document.getElementById('navegacaoURA');

    select.innerHTML = '';

    var defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.text = "Navegação:";
    defaultOption.selected = true;
    defaultOption.disabled = true;
    defaultOption.style.color = "#000000"
    select.appendChild(defaultOption);

    caminhoArray.forEach(function(item) {
        var option = document.createElement('option');
        option.value = item.trim();
        option.text = item.trim();
        option.disabled = true;
        option.style.color = "#000000"
        select.appendChild(option);
    });
}

window.onload = function() {
    populateDropdown();
}

const inputs = document.querySelectorAll('input[type="text"]'); 

inputs.forEach(input => {
  input.addEventListener('click', copyOnClick);
});
