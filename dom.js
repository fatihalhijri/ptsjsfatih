document.log(document.tile)


function perlihatkanKata(text){
  document.getElementById(text).style.display = 'block';
    }
    


 function  changeColor(){  
 document.getElementById('mouse1').style.color = 'green'
 }
 function  changeColor1(){  
 document.getElementById('mouse1').style.color = 'red'
 }
 function remove(){
    var yakin = confirm("Apakah kamu yakin akan menghapus");

        if (yakin) {
            alert('yakin gak?')
            document.write('web ini telah di kosongkan ')
        } else {
            document.write("404 not found :)");
        }
 }
// document.getElementById('btn-set').addEventListener('click', function(){
//     document.getElementById('b').setAttribute('class', 'red')
// })

// document.getElementById('btn-remove').addEventListener('click', function(){
//     document.getElementById('b').removeAttribute('class')
// })

// document.getElementById('btn-get').addEventListener('click', function(){
//     var value = document.getElementById('b').getAttribute('class')
//     document.getElementById('class').innerHTML = value
// })

// console.log(document.title)

// function changeColor(){
//     document.getElementById('Button').style.color = '#e74c3c';
// }
// function changeSize(){
//     document.getElementById('Button').style.fontSize = '200px';
// }
// function changeBackground(){
//     document.getElementById('Button').style.backgroundColor = '#00ffff';
// }
// function remove(){
//     document.getElementById('Button').style.color = 'white';
//     document.getElementById('Button').style.fontSize = '16px';
//     document.getElementById('button').style.background = 'blue';
    
// }