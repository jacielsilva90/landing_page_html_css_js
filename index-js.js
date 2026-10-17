
const slides = document.querySelector('.slides');
const imagens = document.querySelectorAll('.slides img');
const btnEsq = document.querySelector('.esquerda');
const btnDir = document.querySelector('.direita');
let index = 0;
function mostrarSlide() {
	slides.style.transform = `translateX(${-index * 100}%)`;
}
btnDir.addEventListener('click', () => {
	index = (index + 1) % imagens.length;
	mostrarSlide();
});
btnEsq.addEventListener('click', () => {
	index = (index - 1 + imagens.length) % imagens.length;
	mostrarSlide();
});
setInterval(() => { //carrossel automatico
	index = (index + 1) % imagens.length;
	mostrarSlide();
}, 3000);

////Data minima amanha
const dataInput=document.getElementById('dataInput')
function formatarData(data) {
    const anoa = data.getFullYear();
    // getMonth() é baseado em zero, então adicionamos 1
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const dia = data.getDate().toString().padStart(2, '0');
    return `${anoa}-${mes}-${dia}`;
}
const hojea = new Date();
// Criar uma nova data para amanhã, adicionando um dia à data de hoje
const amanha = new Date(hojea);
amanha.setDate(hojea.getDate() + 1);
const dataMinima = formatarData(amanha);
// Atribuir o valor formatado ao atributo 'min' do input
document.getElementById('dataInput').min = dataMinima;
dataInput.addEventListener('change', function(){
	let str_dia=String(dataInput.value)
	let str_rev=str_dia.split('-').reverse().join('-')
	document.getElementById('mostrardia').innerHTML='O dia escolhido foi: ' + str_rev
})

////
function slide0(){
	document.getElementById('id1').src="imagem0.png";
	//document.getElementById('aId').href=""
	setTimeout("slide1()", 3000)
}
window.onload=slide0
function slide1(){
	document.getElementById('id1').src="imagem1.png";
	setTimeout("slide2()", 3000)
}
function slide2(){
	document.getElementById('id1').src="imagem2.png";
	setTimeout("slide0()", 3000)
}

////
/*A função emailjs.init() inicializa o SDK do EmailJS com sua Public Key. */
//emailjs.init({ publicKey: 'lDpZj8bjoRSTnBKz0' }); //colocar no html
const formcontato=document.getElementById('contactForm')
const feedback=document.getElementById('feedback')
formcontato.addEventListener('submit', function(e){
	e.preventDefault();
	if (!document.getElementById('emailcontato').value.includes('@')){
		alert('insira @')
	};
	emailjs.sendForm('service_gmailid', 'template_gmailid', this) //this=#id_form
		.then(function(response){
			feedback.textContent='Enviado';
			console.log('SUCCESS!', response.status, response.text);		
			formcontato.reset(); //limpa apos o envio
		}, function(error){
			feedback.textContent='erro';
		});
});

////rodape ano
let mb=document.querySelector("#anoatualr")
const anoatualr=new Date()
mb.innerHTML=anoatualr.getFullYear()
////
