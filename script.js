function calcular(dataFinal, dataInicial) {
  var data1 = new Date(document.getElementById(dataInicial).value);
  var data2 = new Date(document.getElementById(dataFinal).value);
  console.log(data1.getTime());
  console.log(data2.getTime());

  var res = document.querySelector(".res");
  var p = document.createElement("p");
  res.appendChild(p);

  //Autenticação para data Final não ser inferior

  if (data2 < data1) {
    p.innerHTML = "Verifique as datas selecionados";
  } else {
    var diffInMs = data2.getTime() - data1.getTime();
    var day = diffInMs / (1000 * 60 * 60 * 24);
    p.innerHTML = `São ${day} de diferença entre as datas informadas`;
  }
}
