const curiosidades = [

"🌱 Uma árvore pode absorver aproximadamente 15 kg de CO₂ por ano.",

"💧 Sistemas de irrigação inteligente ajudam a economizar água.",

"🐝 Muitas culturas agrícolas dependem da polinização das abelhas.",

"🚜 A agricultura de precisão reduz desperdícios e aumenta a produtividade.",

"🌎 Pequenas ações sustentáveis podem gerar grandes mudanças."


];

function mostrarCuriosidade(){

let numero =
Math.floor(Math.random() * curiosidades.length);

document.getElementById("curiosidade").innerHTML =
curiosidades[numero];
}

function calcularImpacto(){

let arvores =
document.getElementById("arvores").value;

let resultado =
arvores * 15;

document.getElementById("resultado").innerHTML =
"Essas árvores podem absorver aproximadamente "
+ resultado +
" kg de CO₂ por ano.";


}

function enviarFormulario(event){

event.preventDefault();

alert(
    "Obrigado por contribuir para um futuro mais sustentável! 🌱"
);
}