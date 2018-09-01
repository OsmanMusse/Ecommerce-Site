
// Main Javacscript file

let userBox = document.querySelector('.user-account');
let cancelButton = document.querySelector('.cancel-icon');
let container = document.querySelector('.ajax-container');
let navContainer = document.querySelector('.nav-left');

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

cancelButton.addEventListener('click', () => {
  userBox.classList.remove('slideInDown');
  userBox.classList.add( 'slideOutUp');
});




let navItems     = navContainer.parentElement.firstElementChild.nextElementSibling;
let searchBox    = navContainer.firstElementChild;
let searchIcon   = searchBox.firstElementChild;
let checkinput   = searchBox.firstElementChild.nextElementSibling;
let backIcon     = document.createElement('img');
let input        = document.createElement('input');

  navContainer.addEventListener('click', (event) => {

   if(event.target === searchBox || event.target === searchIcon ){
    if(searchBox.childElementCount === 1 || event.target.className === 'menu-icon'){
    console.log("ev")
    navItems.style.display = 'none';
    searchBox.style.backgroundColor = "white";
    // Creating new Input field to be put when find icon is clicked
    input.type = 'text';
    input.placeholder = 'Search for an item';
    input.style.marginLeft = '50px';
    searchBox.insertBefore(input, searchIcon);
    backIcon.className = "go-back";
    backIcon.src = "img/go-back.svg";
    searchBox.insertBefore(backIcon, input);
    searchIcon.style.display = 'none';
    searchBox.style.width = "570px";
  }
}
  });


  backIcon.addEventListener('click', (event) => {
    let childCount = searchBox.children;
    searchBox.removeChild(input);
    searchBox.removeChild(backIcon);
    searchBox.style.backgroundColor = '';
    searchBox.style.width = '';
    searchIcon.style.display = 'flex';
    navItems.style.display = 'flex';
    input.value = '';
  });

  let colorBox = document.querySelector('.color-selection');
  let colorType = colorBox.lastElementChild;
  let gridContainer = document.querySelector('.grid-items');
  let gridItem = gridContainer.children;
  let p = gridContainer.firstElementChild;
  let span = document.querySelector('.items-viewed');
  let count = 0;

span.innerHTML = `You've viewed 6 of 6 product`;

  colorType.addEventListener('click', (event) => {
    if(event.target.tagName === "IMG"){

      if(event.target.className === 'yellow'){
        count = 0;
        for(let i = 0; i < gridItem.length; i += 1){
          if(gridItem[i].className.includes('color-type-yellow')){
            gridItem[i].style.display = '';
            if(gridItem[i].style.display === '') {
              count += 1;
            }
          } else {
            gridItem[i].style.display = 'none';
            p.style.display = 'block';
            p.textContent = 'No yellow items were found';
            console.log(gridItem.childrene);
          }
          span.innerHTML = `You've viewed ${count} of 6 product`;
        }

      }

      if(event.target.className === 'red'){
         count = 0;
        for(let i = 0; i < gridItem.length; i += 1){
          if(gridItem[i].className.includes('color-type-red')){
            gridItem[i].style.display = '';
            if(gridItem[i].style.display === '') {
              count += 1;
            }
          } else{
            gridItem[i].style.display = 'none';
          }
          span.innerHTML = `You've viewed ${count} of 6 product`;
        }
    }

    if(event.target.className === 'blue'){
        count = 0;
      for(let i = 0; i < gridItem.length; i += 1){
        if(gridItem[i].className.includes('color-type-blue')){
          gridItem[i].style.display = '';
          if(gridItem[i].style.display === ''){
            count += 1;
          }
        } else {
          gridItem[i].style.display = 'none';
        }
        span.innerHTML = `You've viewed ${count} of 6 product`;
      }
    }



    if(event.target.className === 'purple'){
      for(let i = 0; i < gridItem.length; i += 1){
        count = 0;
        if(gridItem[i].className.includes('color-type-purple')){
          gridItem[i].style.display = '';
          if(gridItem[i].style.display === '') {
            count += 1;
          }
        } else {
          gridItem[i].style.display = 'none';
          p.style.display = 'block';
          p.textContent = 'No purple items were found';
        }

        span.innerHTML = `You've viewed ${count} of 6 product`;
      }
    }

    if(event.target.className === 'brown'){
      for(let i = 0; i < gridItem.length; i += 1){
        count = 0;
        if(gridItem[i].className.includes('color-type-brown')){
          gridItem[i].style.display = '';
        } else {
          gridItem[i].style.display = 'none';
          p.style.display = 'block';
          p.textContent = 'No brown items were found';
        }
      }
    }

    if(event.target.className === 'white'){
      for(let i = 0; i < gridItem.length; i += 1){
        count = 0;
        if(gridItem[i].className.includes('color-type-white')){
          gridItem[i].style.display = '';
        } else {
          gridItem[i].style.display = 'none';
          p.style.display = 'block';
          p.textContent = 'No white items were found';
        }
      }
    }

    if(event.target.className === 'green'){
      count = 0;
      for(let i = 0; i < gridItem.length; i += 1){
        if(gridItem[i].className.includes('color-type-green')){
          gridItem[i].style.display = '';
          if(gridItem[i].style.display === ''){
            count += 1;
          }
        } else {
          gridItem[i].style.display = 'none';
        }
        span.innerHTML = `You've viewed ${count} of 6 product`;
      }
    }



  }
});


// Click Event when sort button is clicked a pop up menu appears
let caretIcon = document.querySelector('.caret-icon');
caretIcon.addEventListener('click', (event) => {
     caretIcon.style.backgroundColor = 'red';
});
