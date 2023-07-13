let products = {
    data: [
      {
        productName: "Regular White Sofa",
        category: "Sofas",
        price: "30",
        image: "./img/sofa.jpeg",
      },
      {
        productName: "Double black Bed",
        category: "Beds",
        price: "49",
        image: "./img/bed.jpeg",
      },
      {
        productName: "4 seater Dining",
        category: "Dining",
        price: "99",
        image: "./img/dining.jpeg",
      },
      {
        productName: "Basic Brown Recliner",
        category: "Recliner",
        price: "29",
        image: "./img/recliner.jpeg",
      },
      {
        productName: "Blue L Sofa",
        category: "Sofas",
        price: "129",
        image: "./img/Lsofa.jpeg",
      },
      {
        productName: "Bunk Bed",
        category: "Beds",
        price: "89",
        image: "./img/Bbed.jpeg",
      },
      {
        productName: "8-seater Dining",
        category: "Dining",
        price: "189",
        image: "./img/8seater.jpeg",
      },
      {
        productName: "Comfy Red Recliner",
        category: "Recliner",
        price: "49",
        image: "./img/Rrecliner.jpeg",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };