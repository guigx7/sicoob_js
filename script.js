// Opções para o select
const allOptions = [
  { value: "", text: "Lista de Transferência:" },
  { value: "20868525", text: "20868525 - Consórcio Adesão" },
  { value: "20868526", text: "20868526 - Consórcio Assembleia" },
  { value: "20868527", text: "20868527 - Consórcio Assuntos Gerais" },
  { value: "20868528", text: "20868528 - Consórcio Baixa DOC" },
  { value: "20868529", text: "20868529 - Consórcio Cadastro" },
  { value: "20868530", text: "20868530 - Consórcio Contemplação" },
  { value: "20868531", text: "20868531 - Consórcio Financeiro" },
  { value: "20868532", text: "20868532 - Consórcio Funchal" },
  { value: "20868533", text: "20868533 - Consórcio Retencao" },
  { value: "20868534", text: "20868534 - Consórcio Transferência" }, // Será exibida apenas para "Consórcio Contemplação"
  { value: "20868535", text: "20868535 - Consórcio Troca Titularidade" },
  { value: "PUC", text: "URA PUC" }
];

// Opções para "Consórcio Contemplação" (apenas Transferência e URA PUC)
const contemplationOptions = [
  { value: "20868534", text: "20868534 - Consórcio Transferência" },
  { value: "PUC", text: "URA PUC" }
];

// Obter o valor do input SkillT
const skillValue = document.getElementById("SkillT").value;

// Obter o select
const select = document.getElementById("ListaTransf");
select.innerHTML = ''; // Limpar as opções anteriores

// Escolher as opções com base na skill
const optionsToShow = skillValue === "20868530"
  ? contemplationOptions
  : allOptions.filter(option => option.value !== "20868534" && option.value !== skillValue);

// Adicionar as opções ao select
optionsToShow.forEach(option => {
  const opt = document.createElement("option");
  opt.value = option.value;
  opt.textContent = option.text;
  select.appendChild(opt);
});

// Habilitar/desabilitar botão baseado na seleção
const button = document.getElementById('openConfirmation');

// Iniciar com o botão desabilitado
button.disabled = true;
button.style.cursor = "not-allowed";

// Adicionar evento para habilitar/desabilitar o botão quando houver mudança no select
select.addEventListener('change', function() {
  if (select.value !== "") {
    button.disabled = false;
    button.style.cursor = "pointer";
  } else {
    button.disabled = true;
    button.style.cursor = "not-allowed";
  }
});
