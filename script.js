function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = document.getElementById('txtano');
  var res = document.querySelector('div#res');

  if (fAno.value.length == 0 || fAno.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!');
  } else {
    var fSex = document.getElementsByName('radsex');
    var idade = ano - Number(fAno.value);
    var gênero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (fSex[0].checked) {
      gênero = 'Homem';
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', 'foto-bebe-m.png');
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'foto-jovem-m.png');
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'foto-adulto-m.png');
      } else {
        // Velho
        img.setAttribute('src', 'foto-idoso-m.png');
      }
    } else if (fSex[1].checked) {
      gênero = 'Mulher';
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', 'foto-bebe-f.png');
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'foto-jovem-f.png');
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'foto-adulto-f.png');
      } else {
        // Velho
        img.setAttribute('src', 'foto-idoso-f.png');
      }
    }
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`;
    res.appendChild(img);
  }
}
