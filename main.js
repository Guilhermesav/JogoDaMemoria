let escolha_um = "" 
let escolha_dois = ""
let escolha_um_id = ""
let escolha_dois_id = ""
let start_game_time = ""
let end_game_time = ""
let points = 0
let localStorage = window.localStorage
let tempo_recorde = localStorage.getItem('tempo')
document.getElementById("tempo-recorde").innerHTML = `Tempo recorde: ${tempo_recorde}`
function jogar(){
setTimeout(gerarJogo(),3000)
}
function viraCarta(id){
    carta = document.getElementById(`carta ${id}`)
    carta.style = 'transform:rotateY(0deg);'
}
function gerarJogo(){
    start_game_time = Date.now()
    escolha_um = "" 
    escolha_dois = ""
    escolha_um_id = ""
    escolha_dois_id = ""
    points = 0 
    document.getElementById("pontos").innerHTML = `Pontos : ${points}` 
    document.getElementById("tempo").innerHTML = `Tempo : `
    
    tabela = document.getElementById("tabela")
    tabela.innerHTML = ''
    lista.sort( () => .5 - Math.random() );
    index = 0
    for(i=0;i<4;i++){
       tabela.innerHTML +=
    `<tr>
        <td class="card" style="transform:rotateY(180deg);" id="carta ${index}" ><div class= "card-inner" ><img class ="faceup" src="${lista[index]}" width = "80" height = "80" onclick="handleClick(") ></div></td>
        <td class="card" style="transform:rotateY(180deg);" id="carta ${index+1}" ><div class= "card-inner" ><img class ="faceup" src="${lista[index+1]}" width = "80" height = "80" onclick="handleClick()" ></div></td>
        <td class="card" style="transform:rotateY(180deg);" id="carta ${index+2}" ><div class= "card-inner" ><img class ="faceup" src="${lista[index+2]}" width = "80" height = "80" onclick="handleClick() "></div></td>
        <td class="card" style="transform:rotateY(180deg);" id="carta ${index+3}" ><div class= "card-inner" ><img class ="faceup" src="${lista[index+3]}" width = "80" height = "80" onclick="handleClick()"></div></td>    
    </tr>
    ` 
    index += 4
 }
    setTimeout(
        function(){ for(i = 0;i<16;i++){
            document.getElementById(`carta ${i}`).innerHTML = `<div class = "card-outer"><img class="facedown" src="cross.png" width = "80" height = "80" onclick="handleClick(${i})"></div>`
        }}
        ,3000)
}

function handleClick(id){
    viraCarta(id)
    if (escolha_um == "") {
        escolha_um_id = id
        escolha_um = lista[id]
        document.getElementById(`carta ${id}`).innerHTML = `<div class = "card-inner"><img class ="faceup" src="${escolha_um}" width = "80" height = "80"></div>`
    }else if(escolha_dois == "" && escolha_um != "" ){
        escolha_dois = lista[id]
        console.log(escolha_dois)
        escolha_dois_id = id
        document.getElementById(`carta ${id}`).innerHTML = `<div class ="card-inner"><img class ="faceup" src="${escolha_dois}" width = "80" height = "80"></div>`
    }    
    else{
        
        return
    }

    if (escolha_dois != ""){
        setTimeout(function(){
            if(escolha_um != escolha_dois){
                document.getElementById(`carta ${escolha_um_id}`).innerHTML = `<div class = "card-outer"><img class="facedown" src="cross.png" width = "80" height = "80" onclick="handleClick(${escolha_um_id})"></div>`
                document.getElementById(`carta ${escolha_um_id}`).style = "transform:rotateY(180deg)"
                document.getElementById(`carta ${escolha_dois_id}`).innerHTML = `<div class = "card-outer"><img class="facedown" src="cross.png" width = "80" height = "80" onclick="handleClick(${escolha_dois_id})"></div>`
                document.getElementById(`carta ${escolha_dois_id}`).style = "transform:rotateY(180deg)"
                escolha_um = ""
                escolha_dois = ""
                escolha_dois_id = ""
                escolha_um_id = ""
            }else if(escolha_dois == escolha_um)
            {
                points += 1  
                document.getElementById("pontos").innerHTML = `Pontos : ${points}` 
                if(points == 8){
                    end_game_time = Date.now()
                    window.alert("PARABENS")
                    var tempo_em_seg = (end_game_time - start_game_time)/1000
                    document.getElementById("tempo").innerHTML = `Tempo : ${tempo_em_seg}s`
                    points = 0
                    if(!localStorage.getItem('tempo')){
                        localStorage.setItem('tempo',tempo_em_seg)
                        console.log("tempo salvo")
                    } 
                    else
                    {
                        tempo_antigo = localStorage.getItem('tempo')
                        if(tempo_em_seg < tempo_antigo)
                        {
                            localStorage.setItem('tempo',tempo_em_seg)
                        }
                    }
                }
                escolha_um = ""
                escolha_dois = ""
                escolha_dois_id = ""
                escolha_um_id = ""
            }
        },1500)
    }
    
}


var lista = ["android.png","chrome.png","facebook.png","firefox.png","googleplus.png","html5.png","twitter.png","windows.png",
"android.png","chrome.png","facebook.png","firefox.png","googleplus.png","html5.png","twitter.png","windows.png"]
lista.sort( () => .5 - Math.random() );
index = 0
for(i=0;i<4;i++){
    tabela.innerHTML +=
 `<tr>
     <td id="carta ${index+1}" ><img src="${lista[index]}" width = "80" height = "80" onclick="handleClick(") ></td>
     <td id="carta ${index+2}" ><img src="${lista[index+1]}" width = "80" height = "80" onclick="handleClick()" ></td>
     <td id="carta ${index+3}" ><img src="${lista[index+2]}" width = "80" height = "80" onclick="handleClick() "></td>
     <td id="carta ${index+4}" ><img src="${lista[index+3]}" width = "80" height = "80" onclick="handleClick()"></td>    
 </tr>
 ` 
 index += 4
}


function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
