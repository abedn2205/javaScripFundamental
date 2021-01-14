var sayur = ['Timun', 'Wortel','Tomat','Selada'];
var buah = ['Semangka','Jambu','Durian'];

Sayur();
Buah();

function Sayur(){

var listSayur = '';
for(var x = 0; x<sayur.length; x++){
    console.log(sayur[x]);
    listSayur = listSayur + "<li>" + sayur[x] +  "</li>"
    
}
// console.log(listSayur);
document.getElementById("sayur").innerHTML = listSayur;
}

function Buah(){
    var listBuah = '';
    for(var y =0; y<buah.length; y++){
        console.log(buah[y]);
        listBuah = listBuah + "<li>" + buah[y] + "</li>"
    }
    document.getElementById("buah").innerHTML = listBuah;
}

function cariSayurSama(namaSayur){
    for( var i = 0; i <sayur.length; i++){
        if(sayur[i].toLowerCase()=== namaSayur.toLowerCase()){
            return true;
        }
    }
    return false;
}

function tambahSayur(namaSayur){

    if (sayur.length >= 10){
        alert("jumlah sayur tidak boleh lebih dari 10")
    }else
    if (cariSayurSama(namaSayur)) {
        alert('maaf nama sayur sudah ada');
    }else{
        sayur.push(namaSayur);
        Sayur();
    }
   
}

function cariBuahSama(namaBuah){
    for( var i = 0; i < buah.length; i++){
        if(buah[i].toLowerCase()=== namaBuah.toLowerCase()){
            return true;
        }
    }
    return false;
}

function tambahBuah(namaBuah){

    if (buah.length >= 10){
        alert("jumlah buah tidak boleh lebih dari 10")
    }else
    if (cariBuahSama(namaBuah)) {
        alert('maaf nama buah sudah ada');
    }else{
        buah.push(namaBuah);
        Buah();
    }
   
}

function tambahItem(namaItem,jenisItem){
    switch(jenisItem){
        case "buah" :
            tambahBuah(namaItem);
            break;
        
        case "sayur" :
            tambahSayur(namaItem);
            break
    }
}

