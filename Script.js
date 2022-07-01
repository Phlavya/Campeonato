/*Lista de objetos com as propriedades NOME e PONTOS*/ 

 var times = [ 

                 {nome:"Flamengo", pts:0}, {nome:"Palmeiras", pts:0}, {nome:"Santos", pts:0}, 

                 {nome:"Vasco", pts:0}, {nome:"Botafogo", pts:0},{nome:"Fluminense", pts:0}, 

                 {nome:"Corinthians", pts:0},{nome:"Sao Paulo", pts:0},{nome:"Atletico-MG", pts:0}, 

                 {nome:"Atletico-PR", pts:0},{nome:"Gremio", pts:0},{nome:"Internacional", pts:0}, 

                 {nome:"Chapecoense", pts:0},{nome:"Avai", pts:0},{nome:"Bahia", pts:0}, 

                 {nome:"Ceara", pts:0},{nome:"Fortaleza", pts:0},{nome:"Goias", pts:0}, 

                 {nome:"CSA", pts:0},{nome:"Cruzeiro", pts:0} 

                 ]; 

  



 var time1 = document.getElementById('time1'); 

 

 var time2 = document.getElementById('time2'); 

 

 var linha = document.getElementById("myTable").innerHTML; 

  

  

 

carregarCombobox(times); 

  







 document.getElementById("myTable").innerHTML = carregarTabela(times, linha); 

  

 

 

 function resultado() { 

  

         

         document.getElementById("myTable").innerHTML = ''; 

         

         var row = document.getElementById("myTable").innerHTML; 

  

         

         var p1 = document.getElementById('pla1').value; 

         

         var p2 = document.getElementById('pla2').value; 

  

         

         var t1 = document.getElementById('time1').value; 

      

         var t2 = document.getElementById('time2').value; 

  

         

         if(p1 > p2) { 

                 times[t1]['pts'] += 3; 

         } else if(p2 > p1) { 

                 times[t2]['pts'] += 3; 

         } else if(p1 == p2) { 

                 times[t1]['pts'] += 1; 

                 times[t2]['pts'] += 1; 

         } 

  

         document.getElementById("myTable").innerHTML = ""; 

  

    
     


                         rows += "<tr><td class='table-light'>"+(i+1)+"</td>"+ 

                                         "<td id='col-name' class='table-primary'>"+lista[i]['nome']+"</td><td id='col-pt' class='table-secondary'>"+lista[i]['pts']+"</td>" 

                                 +"</tr>"; 

                 } else if(i > 3 && i < 6) { 

                         rows += "<tr><td class='table-light'>"+(i+1)+"</td>"+ 

                                         "<td id='col-name' class='table-warning'>"+lista[i]['nome']+"</td><td id='col-pt' class='table-secondary'>"+lista[i]['pts']+"</td>" 

                                 +"</tr>"; 

                 } else if(i > 5 && i < 16 ) { 

                         rows += "<tr><td class='table-light'>"+(i+1)+"</td>"+ 

                                         "<td id='col-name' class='table-success'>"+lista[i]['nome']+"</td><td id='col-pt'class='table-secondary'>"+lista[i]['pts']+"</td>" 

                                 +"</tr>"; 

                 } else { 

                         rows += "<tr><td class='table-light'>"+(i+1)+"</td>"+ 

                                         "<td id='col-name' class='table-danger'>"+lista[i]['nome']+"</td><td id='col-pt' class='table-secondary'>"+lista[i]['pts']+"</td>" 

                                 +"</tr>"; 

                 } 

                  

         } 

  

         return rows; 

 } 

  



 

 function carregarCombobox(lista) { 

  

         

        

         document.getElementById('time1').innerHTML = ''; 

         document.getElementById('time2').innerHTML = ''; 

  

         

         for(t in lista) { 

                 option = new Option(times[t]['nome'], t); 

                 time1.options[time1.options.length] = option; 

  

         } 

  

         

         for(t in lista) { 

                 option = new Option(times[t]['nome'], t); 

                 time2.options[time2.options.length] = option; 

                  

         } 

 } 

  

 

 function compareNome(a,  b) { 

         if (a.nome < b.nome) 

             return -1; 

           if (a.nome > b.nome) 

             return 1; 

           return 0; 

 } 

  

 





 function comparePontos(a,  b) { 

         if (a.pts > b.pts) //a.pts significa que estou pegando a propriedade PONTOS da minha lista "times" 

             return -1; 

           if (a.pts < b.pts) 

             return 1; 

           return 0; 

 }
