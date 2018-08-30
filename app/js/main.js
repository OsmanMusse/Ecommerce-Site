
// Main Javacscript file

let userBox = document.querySelector('.user-account');
let container = document.querySelector('.ajax-container');

document.querySelector('.user-box').addEventListener('mouseenter', (event) => {
  userBox.classList.remove( 'slideOutUp');
  userBox.style.display = "flex";
  userBox.classList.add('animated', 'slideInDown');
})

container.addEventListener('mouseenter', (event) => {
  // userBox.style.backgroundColor = "blue";
  userBox.classList.remove('slideInDown');
  userBox.classList.add( 'slideOutUp');
})

// userBox.addEventListener('mouseout', (event) => {
//   if(event.target.tagName === 'IMG' || event.target.tagName === "SPAN"){
//     let userAccount = userAccount = userBox.parentElement.lastElementChild;
//       userAccount.classList.remove('slideInDown');
//       userAccount.style.display = 'flex';
//       userAccount.classList.add('animated', 'slideInDown');
// }
// })



// userBox.addEventListener('mouseout', (event) => {
//   console.log("mouseout");
// })
