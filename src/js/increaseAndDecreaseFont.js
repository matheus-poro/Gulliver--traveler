
const  aumentarFonte = () => {
  let elementHtml = document.querySelector("html");
  elementHtml.style.fontSize = "20px";
}

const diminuirFonte = () => {
  let elementHtml = document.querySelector("html");
  elementHtml.style.fontSize = "15px";
}

const dislexia = () => {
  let elementBody = document.querySelector('body');
  elementBody.style.fontFamily  = 'opendyslexicaltaregular';
  elementBody.style.fontSize    = '15px';
}

const inter = () => {
  let elementBody = document.querySelector('body');
  elementBody.style.fontFamily  = 'Inter, Arial, Tahoma, sans-serif';
  elementBody.style.fontSize    = '15px';
}
