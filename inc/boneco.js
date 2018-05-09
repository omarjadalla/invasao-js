//função para ver quantos campos(pixeis) ele vai andar, se tiver um obstaculo vai ficar o mais perto dele
function movimento(direcao){
	
	var cx, cy, r, c;
	
	ta_jogando = 0;
	
	switch(direcao)	{
		
		case 'esquerda':
					c=0;
					for(cx=1; cx<=mov; cx++){
						
						for(cy=0; cy<tamanho_boneco; cy++){			
							if(obstaculos[x-cx][y+cy] || x-cx<0){
							
								r=false;
							
							}else if(r!=false){
									r=true;
								}
						}
						if(r){c++;}						
					} 
					

					return c;
					break;
					
		
		case 'direita':
					c=0;
					for(cx=1; cx<=mov; cx++){
						
						for(cy=0; cy<=tamanho_boneco; cy++){
							
							if(obstaculos[x+cx+tamanho_boneco][y+cy] || x+cx+tamanho_boneco>largura_mapa){
							
								r=false; 
							
							}else if(r!=false){
									r=true;
							}
						}
						if(r){c++;}
					} 
					return c;					
					
					break;
				
					
		case 'cima':
					c=0;
					for(cy=1; cy<=mov; cy++){
						
						for(cx=0; cx<tamanho_boneco; cx++){
							
							if(obstaculos[x+cx][y-cy] || y-cy<0){
							
								r=false;
							
							}else if(r!=false){
								r=true;
							}	
						
						}
						if(r){c++;}
					} 
					return c;	
								
					break;
	
		case 'baixo':
					c=0;
					for(cy=1; cy<=mov; cy++){
						
						for(cx=0; cx<tamanho_boneco; cx++){
							
							if(obstaculos[x+cx][y+cy+tamanho_boneco] || y+cy+tamanho_boneco>altura_mapa){
							
								r=false;
							
							}else if(r!=false){
								r = true;
							}
							
						}
						if(r){c++;}
					} 
					return c;					
					
					break;
	
	}

}



//para funcionar comandos por teclado função ao teclar 
document.onkeydown = function(event){

var tecla; //variavel pra receber a tecla que foi pressionada

	if(event==null){ tecla=window.event.keyCode;} //recebe a tecla que foi pressionada (dei ctr+c ctrl+v então não sei pq as duas linhas, deve ser
	else{ tecla=event.keyCode;} 				  // para funcionar em todos navegadores)
	
	//switch para identivificar a tecla pressionada e realizar a ação
	switch(tecla){ 
		
		//esquerda
		case 37: 
				x=x-movimento('esquerda');
				boneco.left=x+"px";
				
				break;
		
		//direita
		case 39:
				x=x+movimento('direita');
				boneco.left=x+"px";
				
				break;
		
		//cima
		case 38: 
				y=y-movimento('cima');
				boneco.top=y+"px";
				 
				break;
		
		//baixo
		case 40:
				y=y+movimento('baixo');
				boneco.top=y+"px";
				
				break;
				
		//home
		case 36:
				y=1;
				x=1;
				boneco.top=y+"px";
				boneco.left=x+"px";
				
				break;
		//end
		case 35: 
				x=largura_mapa-(tamanho_boneco+mov);
				y=altura_mapa-(tamanho_boneco+mov);
				boneco.top=y+"px";
				boneco.left=x+"px";
				
				
				break;		
		//espaço	
		case 32: 
			conta_tiro++; //contador para o nome do tiro
			atira(conta_tiro, y+(tamanho_boneco/2));				
			//conta_tiro++; //contador para o nome do tiro
			//atira(conta_tiro, y+(tamanho_boneco));				
			
			break;		

	}
	
}
