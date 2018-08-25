
// Main Javacscript file


// Creating a AJAX Request
let xhr = new XMLHttpRequest();
let ajaxContainer = document.querySelector('.ajaxContainer'); // Ajax Container which is used for the first request

xhr.onreadystatechange = () => {
  if(readyState === 4){
     ajaxContainer.innerHTML = xhr.responseText;
  }
}

xhr.open('GET', '');
xhr.send();
