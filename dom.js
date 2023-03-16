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
