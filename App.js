function baloncuklar(){
  const  container = document.querySelector(".container"); //cont alanını bir değişkene aktardık
  const baloncuk = document.createElement("span"); //balocuk değişkenini aluşturduk html dede span diyerek oluşturbailiriz.
  const boyut = Math.random() * 100;//baloncuklara bir boyut oluşturcaz random sayıdan alcaz farklı w.-h. değerlei alması için ve bütttk 100 le çarparak

  baloncuk.style.width = boyut + "px"; //genişlik boyutu oldu
  baloncuk.style.height = boyut + "px"; //yükseklik
  baloncuk.style.left = Math.random() * innerWidth + "px"; //konumunu ayarlıyoruz.soldan gelişi.pencere genişliği ile çarptık

//artık baloncukları cont. içine spanları yani balouncukları yerleştirmeliyiz
  container.appendChild(baloncuk);
  setTimeout (() => {
    baloncuk.remove();
  }, 2000); //yani baloncuk 2 sn sonra kaybolcak


}

//fonk çalıştırcaz teksfer değil belirli sürede sürekli çalışması için setinreval ile çalışrdık
//yoksa sadece baloncuklar(); yazsaydık bir defa çaşır dururdu.
setInterval(baloncuklar, 50); //yarım saniyede bir çalışacak