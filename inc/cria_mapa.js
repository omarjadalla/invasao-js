function cria_mapa(){	

obstaculos = new Array(); //array que vai receber os obstaculos(onde não da pra passar)

var px; 
var py;

	//define tudo como false
	for(px=0; px<=largura_mapa; px++){
		
		obstaculos[px] = new Array();
		
		for(py=0; py<=altura_mapa; py++){

			obstaculos[px][py] = false;
		}	
	}


	//define bordas esquerda
	for(py =0; py <= altura_mapa; py++){
		
		cria_obstaculo(0, py);
	}

	//define bordas direita
	for(py =0; py <= altura_mapa; py++){

		cria_obstaculo(largura_mapa, py);
	}
	

	//define bordas cima
	for(px=0; px <= largura_mapa; px++){
	
		cria_obstaculo(px, 0);	
	}

	//define bordas baixo
	for(px=0; px<=largura_mapa; px++){
		
		cria_obstaculo(px, altura_mapa);
	}	
	

	for(px=0; px <= 50; px++){
		
		cria_obstaculo(px, 100);	
	}

					
	for(py=0; py <= 50; py++){

		cria_obstaculo(70, py);					
	}

	for(py=70; py <= 150; py++){

		cria_obstaculo(120, py);
	}


}


function cria_obstaculo(ox, oy){


	obstaculos[ox][oy] = true;


	var divTag = document.createElement ("div");
					divTag.style.top=oy+"px";
					divTag.style.left=ox+"px";
					divTag.className = "obstaculo"; 
					document.getElementById("mapa").appendChild(divTag);
					
}