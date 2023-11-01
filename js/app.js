function limpaCampo() {
  document.getElementById("qtd").value = 0;
}
limpaCampo();

function comprar() {
  let tipo = document.getElementById("tipo-ingresso").value;
  let qtd = parseInt(document.getElementById("qtd").value);
  comprarIngresso(tipo, qtd);
}

function comprarIngresso(tipo, qtd) {
  let qtdTipo = parseInt(document.getElementById(`qtd-${tipo}`).innerHTML);
  if (qtd == 0){
    alert('É necessário informar a quantidade.');
    return;
  }

  if (qtdTipo == 0) {
    alert(`Ingressos esgotados para o setor ${tipo}.`);
    limpaCampo();
  } else if (qtd > qtdTipo) {
    alert("A quantidade desejada não está disponível.");
    limpaCampo();
  } else {
    qtdTipo = qtdTipo - qtd;
    document.getElementById(`qtd-${tipo}`).innerHTML = qtdTipo;
    limpaCampo();
    alert("Compra realizada com sucesso.");
  }
}
