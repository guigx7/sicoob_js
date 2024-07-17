function copyToClipboard(elementId) {
  var copyText = document.getElementById(elementId);
  copyText.select();
  document.execCommand("copy");
}


function populateDropdown() {
  console.log(document.getElementById('Caminho').value);
    // Assume the variable Caminho is provided with values separated by commas
    var caminho = document.getElementById('Caminho').value; // Replace this with the actual dynamic value source
    var caminhoArray = caminho.split(',');

    var select = document.getElementById('navegacaoURA');

    // Clear any existing options
    select.innerHTML = '';

    // Add the first static option
    var defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.text = "Navegação:";
    defaultOption.selected = true;
    defaultOption.disabled = true;
    defaultOption.style.color = "#000000"
    select.appendChild(defaultOption);

    // Populate the dropdown with the array values
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