let myImage = document.getElementById("img");
console.log(myImage.src);

let leftbtn = document.getElementById("btn-left");
let rightbtn = document.getElementById("btn-right");
console.log(leftbtn);

let storage = [
  "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/96394e0900c8983c.jpg?q=20",
  "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/1316eb53d6f52c71.jpg?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/8074e7b2f6d2bfea.jpg?q=20",
];

let index = 0;

function nextLogic() {
  index++;
  if (index > storage.length - 1) {
    index = 0;
  }
  myImage.src = storage[index];
}
leftbtn.addEventListener("click", nextLogic);

function prevLogic() {
  index--;
  if (index < 0) {
    index = storage.length - 1;
  }
  myImage.src = storage[index];
}

rightbtn.addEventListener("click", prevLogic);

setInterval(nextLogic, 2000);

let myInput = document.getElementsByTagName("input")[0];

let myMain = document.querySelector("main");

async function mainFunction() {
  let dataFromServer = await fetch(
    `https://www.shoppersstack.com/shopping/products/alpha`
  );
  let convertedData = await dataFromServer.json();
  //displaying all the data
  let dataFromObject = convertedData.data;
  console.log(dataFromObject);
  productDisplay.call(dataFromObject);

  // men product

  let menData = dataFromObject.filter((e) => {
    if (e.category == "men") {
      return e;
    }
  });
  let womenData = dataFromObject.filter((e) => {
    if (e.category == "women") {
      return e;
    }
  });
  let childrenData = dataFromObject.filter((e) => {
    if (e.category == "kids") {
      return e;
    }
  });
  let electronicsData = dataFromObject.filter((e) => {
    if (e.category == "electronics") {
      return e;
    }
  });
  let beautyData = dataFromObject.filter((e) => {
    if (e.category == "beauty") {
      return e;
    }
  });
  console.log(menData);
  console.log(womenData);
  console.log(childrenData);
  console.log(electronicsData);
  console.log(beautyData);

  let myMen = document.getElementById("men");
  myMen.addEventListener("click", (e) => {
    e.preventDefault();
    productDisplay.call(menData);
  });

  let myWomen = document.getElementById("women");
  myWomen.addEventListener("click", (e) => {
    e.preventDefault();
    productDisplay.call(womenData);
  });

  let myChildren = document.getElementById("children");
  myChildren.addEventListener("click", (e) => {
    e.preventDefault();
    productDisplay.call(childrenData);
  });

  let myBeauty = document.getElementById("beauty");
  myBeauty.addEventListener("click", (e) => {
    e.preventDefault();
    productDisplay.call(beautyData);
  });
  let myElectronics = document.getElementById("electronic");
  myElectronics.addEventListener("click", (e) => {
    e.preventDefault();
    productDisplay.call(electronicsData);
  });

  myInput.addEventListener("input", (e) => {
    myMain.innerHTML = "";
    if (myInput.value == `kids`) {
      productDisplay.call(childrenData);
    }
  });
}
mainFunction();

function productDisplay() {
  myMain.innerHTML = "";
  this.forEach((e) => {
    let myImg = document.createElement("img");
    let myProductName = document.createElement("h3");
    let myPrice = document.createElement("h2");
    let myRating = document.createElement("h2");
    let myBtn = document.createElement("button");
    myBtn.innerHTML = `add to cart`;
    myRating.innerHTML = `Rating :${e.rating}`;
    myPrice.innerHTML = `Price :₹ ${e.price}`;

    myProductName.innerHTML = e.name;
    myImg.src = e.productImageURLs[0];
    let div = document.createElement("div");
    div.append(myImg, myProductName, myPrice, myRating, myBtn);
    myMain.append(div);
  });
}
