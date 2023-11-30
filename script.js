function calcular(dataFinal, dataInicial) {
  var valueDataInicial = new Date(document.getElementById(dataInicial).value);
  var valueDataFinal = new Date(document.getElementById(dataFinal).value);

  var res = document.querySelector(".res");
  res.innerHTML = ""; // Limpar conteúdo anterior
  var p = document.createElement("p");
  res.appendChild(p);

  if (valueDataFinal < valueDataInicial) { //Autenticação para data Final não ser anterior à data inicial
    p.innerHTML = "A data final não pode ser anterior à data inicial.";
  } else {
    var diffInMs = valueDataFinal.getTime() - valueDataInicial.getTime();
    var day = diffInMs / (1000 * 60 * 60 * 24);
    if (day == 1) {
      p.innerHTML = `Uma diferença de apenas ${day} dia`;
    } else  {
      p.innerHTML = `São ${day} de diferença entre as datas informadas`;
    }
  }
}
