var images, image;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


images = ['https://museumexplorer.co.za/wp-content/uploads/2023/03/table-mountain-cable-car-1024x614.webp', 'https://www.sanbi.org/wp-content/uploads/2023/11/Kirstenbosch-tree-canopy-walkway-spring-650x432.jpg', 'https://secretcapetown.co.za/wp-content/uploads/2022/10/Things-to-do-at-night-in-Cape-Town-29-scaled.jpg'];

let element_carousel_image = document.getElementById('carousel-image');
element_carousel_image.setAttribute("src", images[0]);


document.getElementById('prev_button').addEventListener('click', (event) => {
  let element_carousel_image2 = document.getElementById('carousel-image');
  element_carousel_image2.setAttribute("src", randomMember(images));
  images.unshift(image);

});

document.getElementById('next_button').addEventListener('click', (event) => {
  let element_carousel_image3 = document.getElementById('carousel-image');
  element_carousel_image3.setAttribute("src", randomMember(images));
  images.push(image);

});
randomMember(images);
