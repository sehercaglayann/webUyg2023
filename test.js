//name="Can"
//Ecmascript 9 dan önce kullanılan değişken
//değişken tanımlama
//var name="Can"  
//Ecmascript 9 dan sonra lest ve const
//değişken tanımlama
//let name="Can"
//sabit tanımlama constla tanımlarsak içindeki değişkeni değiştiremeyeceğiz.
//const name="Can"  
//var ve let farkları
//var function scope let block scope

//console.log(name)
//sabit tanımlama
//const name="Can"
//function topla(){    //


//}
//if(){


//}else{

//}

/* function test(){
    if(true){
        var degisken="merhaba dünya"
    }
    if(true){
        console.log(degisken)
    }
}
test() */


//var keyword değişkenler tekrardan tanımlanabilir

/* var degisken="merhana dünya"
var degisken="hello world"
console.log(degisken) */

//Hoisting : bir değişkeni önce tanımlama sonmra kullanmak.
/* degisken="merhaba dünya"
console.log(degisken)
var degisken      // */

//let- const farkları let değişken const sabit değerler
//let mutable const immutable
/* let name="can"
const adi="can"
name="ahmet"      
adi="ahmet"
 */

/*  var agirlik=50   //letle yapacaksak leti dışarı alıp tanımlarız ve atamasını yaparız.
if(agirlik>49){
    var miktar=1.4
    console.log(`${miktar} su içmelisin`)  //bir stringin içerisine değişkeni yazabilmemize yarıyor (``)
}
console.log(miktar)  */



/* //FONKSİYONLAR
//geleneksel yöntem:
function topla(){
    return a+b
}
//arrow function es9 sonrası
const topla=(a,b)=>a+b  */



//geleneksel yöntem
/* function test(){
    console.log("merhaba"+this.name)
}
const person={
    name:"can",
    soyle:test,
}
person.soyle() */



//arrow function   tanımladıgımız şeyi dışarıya çıkaramıyoruz
/* const test=()=>{
    console.log("merhaba dünya"+this.name)
}
const person={
    name:"can",
    soyle:test,
}
person.soyle()
  */



/* function deneme(x){
    return x
}
const sonuc=deneme() */


/* 
function addToCart(urun_adi,adet,fiyat){
    console.log(urun_adi)
    console.log(adet)
    console.log(fiyat)
}
addToCart("elma",5,10)
addToCart("armut",2,20)   //burda tekrar tekrar aynı fonksiyonu çağırırız.Bu yüzden alttakini kullanırız
addToCart("limon",3,15)

let urunler=[{urun_adi:"elma",fiyat:5,adet:20},
             {urun_adi:"armut",fiyat:2,adet:11},
             {urun_adi:"elma",fiyat:4,adet:23}]
function addToCart(urun){
    console.log(urun.urun_adi)
    console.log(urun.adet)
    console.log(urun.fiyat)  
}
addToCart(urunler) */




/* 
let urunler=[{urun_adi:"elma",fiyat:5,adet:20},    //array(dizi)
             {urun_adi:"armut",fiyat:2,adet:11},
             {urun_adi:"kiraz",fiyat:4,adet:23}]

console.log(urunler[0]["urun_adi"])    //urunlerin ilk dizisine erişmek için 0 yazmalıyız.


 */



/* 
function topla(...sayilar){    //ürünleri tek tek toplamak yerine... yazarak ... rest öoperatörü demek
    let toplam=0
    for(let i=0;i<sayilar.length;i++){
        toplam=toplam+sayilar[i]
    }
    console.log(toplam)
}
topla(10,20,30,40,50,60) */



/* let bolgeler=["İç Anadolu","marmara","karadeniz"]
console.log(bolgeler[1])   //marmara yazar

let =[icanadolu,marmara,karadeniz]=["İç Anadolu","marmara","karadeniz"]    //3 tane değişken yaratarak bunları onlara eşitliyoruz
console.log(icanadolu) 


let =[birinci,ikinci,ucuncu]=["İç Anadolu","marmara","karadeniz"]    //3 tane değişken yaratarak bunları onlara eşitliyoruz
console.log(birinci)
*/


/* //distracting
let =[birinci,ikinci,ucuncu]=[{adi:"iç anadolu",nufus:"20m"},
                              {adi:"marmara",nufus:"10m"},
                              {adi:"karadeniz",nufus:"30m"}]
console.log(birinci.nufus) */







/* //1
function test(){   //1. fonksiyon gösterme gfeleneksel yöntemle göstermedir

}
//2
const test=()=>{
    a+100

}
//3
(test)=>a+100  //fonksiyon tanımlama
//4
test=>a+100  //eşittir ve büyüktür bir araya geldiği zaman bu fonksiyon demektir
//4 ü de fonksiyon gösterimidir. */




/* 
//Conditional ternary operator if else tanıtımı kısaltılmış şekilde

if(a<100){
    console.log("100 e eşit)
}else{
console.log("100 e eşit değil")
}



//yeni versiyonu
const sonuc=a==100?"100 e eşit":"100 e eşit değil" */



/* function example(){
    if(condition1){
        return value1
    }else if(condition2){
        return value2
    }else if(condition3){
        return value3
    }else {
        return value4
    }
}

function example(){                   //if elseleri ortadan kaldırarak bu şekilde yazabiliriz.
    return condition1?value1:
    condition2?value2:
    condition3?value3:
    value4
} */





/*
 //diziler   (pythonla aynı bi tek başına const yazıyoruz.)  //geleneksel yöntem ile arrow farkıs
const sayilar=[1,2,3,4,5,6,7,8,9]

const ciftsayilar=sayilar.filter(function(sayilar){    //listeyi filtreliyor
    return sayilar%2===0
})  
console.log(ciftsayilar) 


const ciftsayilar=sayilar.filter(sayilar=>sayilar%2===0)  //arrow funciton kullanarak sayılar değişkenini fonksiyonun girdisi olarak tanımlayıp oradan ilerliyoruz.
console.log(ciftsayilar)                       
 */      //arrow functionların amacı işimizi olabildiğince kısaltmak

/*  const sayi=sayilar.find(function(sayilar){
    return sayilar%2===0
 })
 console.log(sayilar) */


 //api: uygulama arayüzü

 

