var frutas=[]
var f
do{
    f = prompt("Digite a fruta:")
    if(f!=null && f!=""){
        frutas.push(f)
    }
    else {
        if (confirm("Fruta inválida. Deseja tentar novamente?")) {
            f = prompt("Digite a fruta:")
            if(f!=null && f!=""){
            frutas.push(f)
    }
        } else {
            break
        }
    }
}while(f!=null)

alert(frutas)

for(var i = 0; i<frutas.length; i++){
    document.write("<h2>" + frutas[i] + "<h2>")
}
