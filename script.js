function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours() // se quiser ver todos os cenários altere essa variável para o horário desejado.

    if(hora != 0){
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora == 1){
        msg.innerHTML = `Agora é 1 hora da manhã`
    }
    } else {
        msg.innerHTML = `Agora é meia noite.`
    }
    if (hora >= 6 && hora < 12) {
        //Cor dia = #6b9fd6
        img.src = "manhaedit250px.png"
        document.body.style.background = "#6b9fd6"
    } else if (hora >= 12 && hora < 18) {
        //Cor tarde = #ef990f
        img.src = "tardeedit250px.png" 
        document.body.style.background = "#ef990f"
    } else{
        //Cor noite = #0a49ab
        img.src = "noiteedit250px.png"
        document.body.style.background = "#0a49ab"
    }
}