// let k = '';

function matrikA() {
    let nilai = document.getElementById('addInput').value;
    let table = '';
    let row = nilai;
    let cols = nilai;
    for(i = 0 ; i < row; i++){
        table += '<tr>';
        
        for(j = 0; j < cols; j++){

           table += `<td><input type="text" class="a" value=""></td>`; 
        //    console.log(i,j);
        //    table += `<td><input type="text" name="array[`+ i +`]" value=""></td>`  ;     
	 }
	 	table += '</tr>';
    }
    document.getElementById('matrikA').innerHTML= table;
    var classA = document.getElementsByClassName('a');
    console.log(classA);
  

}
function matrikB() {
    let nilai = document.getElementById('addInput').value;
    let table = '';
    let row = nilai;
    let cols = nilai;
    for(i = 0 ; i < row; i++){
        table += '<tr>';
        
        for(j = 0; j < cols; j++){

           table += `<td><input type="text" class="b" value=""></td>`; 
        //    console.log(i,j);
        //    table += `<td><input type="text" name="array[`+ i +`]" value=""></td>`  ;     
	 }
	 	table += '</tr>';
    }
    document.getElementById('matrikB').innerHTML= table;
    var classB = document.getElementsByClassName('b');
    console.log(classB);
}          


function jumlahMatriks(){
    
    
        // for (var i = 0; i < input.length; i++) { 
        //     var a = input[i]; 
        //     k = k + "class[" + i + "].value= " 
        //                        + a.value + " "; 
        // } 
        

        // document.getElementById("par").innerHTML = k; 
        // document.getElementById("po").innerHTML = "Output"; 

}




// function Geeks() { 
//     var input = document.getElementsByName('array[]'); 

    // for (var i = 0; i < input.length; i++) { 
    //     var a = input[i]; 
    //     k = k + "array[" + i + "].value= " 
    //                        + a.value + " "; 
    // } 

//     document.getElementById("par").innerHTML = k; 
//     document.getElementById("po").innerHTML = "Output"; 
// } 