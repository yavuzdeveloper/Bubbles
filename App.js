function bubbles(){
  const  container = document.querySelector(".container"); 
  const bubble = document.createElement("span");
  const size = Math.random() * 100;

  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.left = Math.random() * innerWidth + "px";

  container.appendChild(bubble);
  setTimeout (() => {
    bubble.remove();
  }, 2000); 
}

setInterval(bubbles, 50); 