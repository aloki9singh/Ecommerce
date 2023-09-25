//steps:-
//1. data to show
//2. select container to display data and filter(filteredelement) div where all filters are present
//3.  make displayproduct function and call it on top
// 4.  filtered element foreach(e)e.queryselect
//5. same above select filterElement.querySelector("input[type]" == `range`);
//6. make a filterproducts with if condition highr=er order  see it
const products = [
  {
    name: "Product 1",
    category: "Electronics",
    brand: "Apple",
    color: "Red",
    size: "Small",
    price: 10,
  },
  {
    name: "Product 2",
    category: "Clothing",
    brand: "Nike",
    color: "Blue",
    size: "Medium",
    price: 20,
  },
  {
    name: "Product 3",
    category: "Beauty",
    brand: "L'oreal",
    color: "Green",
    size: "Large",
    price: 30,
  },
  {
    name: "Product 4",
    category: "Books",
    brand: "Penguin",
    color: "Black",
    size: "X-large",
    price: 40,
  },
  {
    name: "Product 5",
    category: "Electronics",
    brand: "Apple",
    color: "Blue",
    size: "Small",
    price: 50,
  },
  {
    name: "Product 6",
    category: "Clothing",
    brand: "Nike",
    color: "Green",
    size: "Medium",
    price: 60,
  },
  {
    name: "Product 7",
    category: "Beauty",
    brand: "L'oreal",
    color: "Red",
    size: "Large",
    price: 70,
  },
  {
    name: "Product 8",
    category: "Books",
    brand: "Penguin",
    color: "Black",
    size: "X-large",
    price: 80,
  },
  {
    name: "Product 9",
    category: "Electronics",
    brand: "Apple",
    color: "Green",
    size: "Small",
    price: 90,
  },
  {
    name: "Product 10",
    category: "Clothing",
    brand: "Nike",
    color: "Red",
    size: "Medium",
    price: 100,
  },
];
let products_list = document.querySelector(".product_list");
let filterElements = document.querySelectorAll(".filter");
displayProduct(products);

filterElements.forEach((filterElement) => {
  const filterSelect = filterElement.querySelector("select");
  const filterInput = filterElement.querySelector("input[type]" == `range`);
  if (filterSelect) {
    filterSelect.addEventListener("change", () => {
      const filteredProducts = filterProducts();
      displayProduct(filteredProducts);
    });
  }
  if (filterInput) {
    filterInput.addEventListener("change", () => {
      const filteredProducts = filterProducts();
      displayProduct(filteredProducts);
    });
  }
});


function filterProducts() {
  const category = document.querySelector(".category_filter").value;
  const brand = document.querySelector(".brand_filter").value;
  const color = document.querySelector(".color_filter").value;
  const size = document.querySelector(".size_filter").value;
  const price = document.querySelector(".price_filter").value;
  console.log(price);
  // filter prod acc to selected filters
  //HOF
  const filteredProducts = products.filter((product) => {
    if (category !== "All" && product.category !== category) {
      return false;
    }
    if (brand !== "All" && product.brand !== brand) {
      return false;
    }
    if (color !== "All" && product.color !== color) {
      return false;
    }
    if (size !== "All" && product.size !== size) {
      return false;
    }
    if (price <= product.price) {
      return false;
    }
    return true;
  });
  return filteredProducts;
}

function displayProduct(products) {
  products_list.innerHTML = "";

  products.forEach((ele) => {
    var card = document.createElement("div");
    card.classList.add("product");

    const productname = document.createElement("h2");
    productname.innerHTML = `Name:- ${ele.name}`;

    const productcategory = document.createElement("p");
    productcategory.innerHTML = `Category:- ${ele.category}`;
    const productbrand = document.createElement("p");
    productbrand.innerHTML = `Brand:- ${ele.brand}`;
    const productcolor = document.createElement("p");
    productcolor.innerHTML = `Color:- ${ele.color}`;
    const productsize = document.createElement("p");
    productsize.innerHTML = `Size:- ${ele.size}`;
    const productprice = document.createElement("p");
    productprice.innerHTML = `Price:- ${ele.price}`;

    card.append(
      productname,
      productcategory,
      productbrand,
      productcolor,
      productsize,
      productprice
    );
    products_list.append(card);
  });
}

