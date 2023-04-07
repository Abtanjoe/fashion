// const images = ["./amir-esrafili-lOurwLojG_U-unsplash.jpg", "./clement-m-F_-0BxGuVvo-unsplash.jpg", "./daniel-lincoln-pe-X2NUwVQo-unsplash.jpg"];
let imageElement = document.querySelector('.imm');
let childrenCollection = document.querySelector('.children');
let womenCollection = document.querySelector('.women');
let menCollection = document.querySelector('.men');

let childrenCollectionChange = ['./Rectangle 34624364-1.png', './Rectangle 34624366-1.png', './Rectangle 34624365-1.png'];
let womenCollectionChange = [];
let childrenCollectionMen = [];
let imgReplace = ['./Rectangle 34624364-1.png', './Rectangle 34624366-1.png', './Rectangle 34624365-1.png'];
currentImageIndex = 0;
childCurrent = 0;
  
  function moveToNextImage() {
      currentImageIndex++;
      if (currentImageIndex >= imgReplace.length) {
        currentImageIndex = 0;
      }
      imageElement.src = imgReplace[currentImageIndex];
    }

    const intervalId = setInterval(moveToNextImage, 1000);

setInterval(childrenCollection.addEventListener('mouseover', () => {
      childCurrent++;
      if (currentImageIndex >= childrenCollectionChange.length) {
        currentImageIndex = 0;
      }
      childrenCollection.src = childrenCollectionChange[childCurrent];
    }
), 1000);


let year = document.querySelector('.date');
let myDate = new Date().getFullYear();
year.textContent = myDate;
