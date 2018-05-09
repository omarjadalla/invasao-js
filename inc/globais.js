function conta_vidas(){
	vidas--;
	document.getElementById("vidas").innerHTML = vidas;
	if(vidas==0){
		alert("Você fez "+pontos+" pontos");	
		window.location.reload();
	}
}

function conta_pontos(){
	pontos++;
	document.getElementById("pontos").innerHTML = pontos;
	
	if((pontos%2)==0){
		mov_objeto++;
	}
}

function apagadiv(nome){ 
	document.getElementById(nome).style.display="none";
}

//gera um numero aleatorio (copiei da net)
function aleatorio(inferior,superior){ 
   	numPossibilidades = superior - inferior 
   	aleat = Math.random() * numPossibilidades 
   	aleat = Math.floor(aleat) 
   	return parseInt(inferior) + aleat 
} 