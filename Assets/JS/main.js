let reqRating = new XMLHttpRequest();
reqRating.open('get', `https://imdb-api.com/pt-br/API/Ratings/k_ykla226r/tt9140554`)
reqRating.send()
reqRating.onreadystatechange = () =>{
if(reqRating.readyState == 4 && reqRating.status == 200){
                
    let dadosJson = reqRating.responseText 
    let dadosJsonObj = JSON.parse(dadosJson) 


    console.log(dadosJsonObj.imDb)

    var nota = dadosJsonObj.imDb / 2;
    nota = Math.round(nota);
    console.log(nota);
    let qtdEstrelas = '';
    let domNota = document.getElementById("nota");
    for (let index = 0; index < nota; index++) {
         qtdEstrelas += "<img src='Assets/image/star.png' style='margin: 0 7px;'></img>"
        
    }
    domNota.innerHTML = qtdEstrelas;
    

}
}