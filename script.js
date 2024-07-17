function copyToClipboard(elementId) {
  var copyText = document.getElementById(elementId);
  copyText.select();
  document.execCommand("copy");
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