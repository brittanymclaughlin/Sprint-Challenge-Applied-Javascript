/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const area1 = document.querySelector('.carousel-container');
//area1.appendChild(carouselCreater());
//console.log(area1);


function carouselCreater(){

  //create HTML elements
  let carousel = document.createElement('div');
  let leftButt = document.createElement('div');
  let rightButt = document.createElement('div');
  let image = document.createElement('img');

  
  //add classes to elements
  carousel.classList.add('carousel');
  leftButt.classList.add('left-button');
  rightButt.classList.add('right-button');
  
  //Add content for button elements
  leftButt.textContent = "<";
  rightButt.textContent = ">";

  

  let images = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg'];
  image.src = images[0];
  let x = 1;
  //add elements
  area1.appendChild(carousel);
  carousel.appendChild(leftButt);
  carousel.appendChild(image);
  carousel.appendChild(rightButt);



  leftButt.addEventListener('click', (e)=>{
    image.src = images[x];
    x--; //left button reverses the direction so the index needs to decrease
    if (x >= 0){  //tests to see if it's at the beginning of the array
      return image.src, x;
    }else{
      x = (images.length - 1 );   //takes the index to the end of the array
      return image.src, x;
    }
  });


  rightButt.addEventListener('click', (e)=> {
    image.src = images[x];
    x++;  //right button advances the direction so the index needs to increase.
    if(x < images.length){  //tests to see if it's below the end of the array.
      return image.src, x;
    }else{
      x = 0;   // takes the index to the beginning of the array
      return image.src, x;
    }
  });


return carousel;

}; 

carouselCreater();