
let kilo=Number(prompt("kilonuzu giriniz"));

let boy=Number(prompt("lütfen boyunuzu -metre- cinsinden giriniz"));


let sonuc= kilo/(boy*boy);

if(sonuc<18.5){
document.write("ideal kilonun altındasınız")
}else if( sonuc>=18.5 && sonuc<=24.9 ){
document.write("ideal kilodasınız")
}else if(sonuc>=25 && sonuc<=29.9){
document.write("ideal kilonun üstündesiniz")
}else if(sonuc>=30 && sonuc<=39.9){
document.write("ideal kilonun çok üstünde (obez)siniz")
}else if(sonuc>=40 ){
document.write("ideal kilonun aşırı üstünde morbid obezsiniz")
}


