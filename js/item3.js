var frutas=[]
var f
do{
    f = prompt("Digite a fruta:")
    if(f!=null && f!=""){
        frutas.push(f)
    }
    else {
        if (confirm("Fruta inválida. Deseja tentar novamente?")) {
          //  f = ""; // força a repetição do loop
        } else {
            break; // encerra o loop se clicar em Cancelar
        }
    }
}while(f!=null)

alert(frutas)

for(var i = 0; i<frutas.length; i++){
    document.write("<h2>" + frutas[i] + "<h2>")
}
