


function atira(tiros, ty) {  
   var c_tiro=0; //contador para movimentar oss tiros
   var nom = 'tiro'+tiros; //nome do tiro pra fazer divs com nomes diferentes
   var tx; //tx é a posição do tiro, para não se movimentar com o boneco foi usado a variavel tx
    
   
	var divTag = document.createElement ("div"); //cria a div do tiro
					divTag.style.top=ty+"px";
					divTag.style.left=x+tamanho_boneco+1+"px";
					divTag.className = "divtiro";
					divTag.id = nom; 
					document.getElementById("mapa").appendChild (divTag);

	if(c_tiro==0){tx=x+tamanho_boneco;	}else{tx=x;} //pro tiro não sair oo meio do boneco tem o if
	   
	   var tempo = setInterval(function(){c_tiro=tiro(nom,c_tiro,tx,ty);}, 10); //para animar o tiro

	   window.setTimeout(function(){clearInterval(tempo);apagadiv(nom);}, largura_mapa*10);  	   
	
	function tiro(nome,c_tiro,tx,ty){
			
			var cmt;
			for(cmt=0;cmt<mov_tiro;cmt++){
				if(obstaculos[tx+c_tiro+cmt][ty] || acerta(tx+c_tiro+cmt,ty,nome)){
						apagadiv(nome);  //se tiver um obstaculo o tiro some 
					clearInterval(tempo);
				}else{
				
					document.getElementById(nome).style.left=tx+c_tiro+'px'; //se não tiver nada no caminho ele continua em movimento
				}
			}
			
			
			c_tiro=c_tiro+mov_tiro;
				return c_tiro; //retorna o c_tiro que é o contador pra movimentar o tiro
			
	} 


	function acerta(lx,ly,nome){
				
				var c;
				for(c=0;c<tamanho_objeto;c++){
					
					if(objetos[lx][ly-c]!=false && ly-c>0){
							//apagadiv(nome);
							apagaobjeto(lx,ly-c);
							conta_pontos();
							c=tamanho_objeto+1;
							clearInterval(tempo);
						return true;
					}
				}
	
	}


}

