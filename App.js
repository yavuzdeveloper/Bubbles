function baloncuklar(){
  const  container = document.querySelector(".container"); 
  const baloncuk = document.createElement("span");
  const boyut = Math.random() * 100;

  baloncuk.style.width = boyut + "px";
  baloncuk.style.height = boyut + "px";
  baloncuk.style.left = Math.random() * innerWidth + "px";

  container.appendChild(baloncuk);
  setTimeout (() => {
    baloncuk.remove();
  }, 2000); 
}

setInterval(baloncuklar, 50); 