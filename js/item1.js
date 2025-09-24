var a=[4, 8, 3, 5, 9] /*Criado vetor já preenchido*/

/*Exibindo o array de inteiros*/
alert(a)

/*Exibindo um elemento do array*/
alert(a[4])

/*Alterar um valor do array*/
a[0]=7
alert(a)

/*Percorrendo o vetor usando laço*/
for(var i = 0; i<a.length; i++){
    document.write("<h2>" + a[i] + "</h2>")
}

