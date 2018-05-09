function define_objetos(){
			//define tudo como false

	objetos = new Array();
	
	var px, py;
	for(px=0; px<=largura_mapa; px++){
		
		objetos[px] = new Array();
		
		for(py=0; py<=altura_mapa; py++){

			objetos[px][py] = false;
		}	
	}
	
}


function cria_objeto(){
conta_obj++;
var oy = aleatorio(1, altura_mapa-tamanho_objeto);
var ox = largura_mapa-50;
var c_obj =0;
var nom ='objeto'+conta_obj;
			
			
		objetos[largura_mapa][oy] = nom;

		var divTag = document.createElement ("div");
					divTag.style.top=oy+"px";
					divTag.style.left=ox+"px";
					divTag.style.width=tamanho_objeto+"px";
					divTag.style.height=tamanho_objeto+"px";
					divTag.className = "objeto"; 
					divTag.id = nom; 
					document.getElementById("mapa").appendChild(divTag);
					

	   var tempo = setInterval(function(){c_obj=mov_obj(nom,c_obj,ox-c_obj,oy);}, 30); //para animar o tiro

function mov_obj(nome,c_obj,ox,oy){
			var c;
			var colide =0;
			for(c=0;c<=tamanho_objeto;c++){
				if(obstaculos[ox][oy+c]){
						apagadiv(nome);  //se tiver um obstaculo o tiro some 
					clearInterval(tempo);
					colide++;
				}
				
				var cx,cy;
				
				for(cx=0;cx<=tamanho_boneco;cx++){
					for(cy=0;cy<=tamanho_boneco;cy++){
						if(x+cx==ox+c && y+cy==oy+c){
							x=1;boneco.left=x+"px";
							y=1;boneco.top=y+"px";
							conta_vidas();
						
						}
					}
				}
				
			}
			if(colide==0){
				objetos[ox+1][oy] = false;
				objetos[ox][oy] = nome;
				document.getElementById(nome).style.left=ox+'px'; //se não tiver nada no caminho ele continua em movimento
				
			}

			 if(document.getElementById(nome).style.display=='none'){
					 clearInterval(tempo);
			 }
			
			c_obj++;
			
				return c_obj; //retorna o c_tiro que é o contador pra movimentar o tiro
	} 
}

function apagaobjeto(x,y){
		document.getElementById(objetos[x][y]).style.display="none";
		objetos[x][y] = false;

	}

function pause(){

	var px, py;
	for(px=0; px<=largura_mapa; px++){
				
		for(py=0; py<=altura_mapa; py++){
			
			if(objetos[px][py] != false){
				apagaobjeto(px,py)
			}
		}	
	}

	
	}