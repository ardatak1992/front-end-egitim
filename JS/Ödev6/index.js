const radioInputs = document.querySelectorAll(".radio-input");
const productList = document.getElementById("product-list");

const createProductElement = (product, viewType) => {
  const productCard = document.createElement("article");
  productCard.className = `product-card ${viewType}`;

  // Create image
  const imgContainer = document.createElement("div");
  imgContainer.className = "img-container";
  const productImg = document.createElement("img");
  productImg.className = "product-image";
  productImg.src = `${product.productImage}`;
  imgContainer.appendChild(productImg);
  productCard.appendChild(imgContainer);

  // Create product info
  const productInfo = document.createElement("div");
  productInfo.className = "product-info";

  // product name
  const productName = document.createElement("h3");
  productName.className = "product-name";
  productName.innerText = product.productName;
  productInfo.appendChild(productName);

  //product description
  const productDescription = document.createElement("p");
  productDescription.innerText =
    product.productDescription.length > 50
      ? product.productDescription.substring(0, 200) + "..."
      : product.productDescription;
  productInfo.appendChild(productDescription);
  productCard.appendChild(productInfo);

  //Socials
  const socialNumbers = document.createElement("div");
  socialNumbers.className = "social-numbers";
  const likes = document.createElement("div");
  likes.className = "likes";
  const comments = document.createElement("div");
  comments.className = "comments";

  // likes
  const likeIcon = document.createElement("i");
  likeIcon.className = "fa-solid fa-heart";
  const likeNum = document.createElement("p");
  likeNum.className = "like-num";
  likeNum.innerText = product.productLikes;
  likes.appendChild(likeIcon);
  likes.appendChild(likeNum);
  socialNumbers.appendChild(likes);

  // comments
  const commentIcon = document.createElement("i");
  commentIcon.className = "fa-solid fa-comment";
  const commentNum = document.createElement("p");
  commentNum.className = "comment-num";
  commentNum.innerText = product.productComments;
  comments.appendChild(commentIcon);
  comments.appendChild(commentNum);
  socialNumbers.appendChild(comments);
  productInfo.appendChild(socialNumbers);

  productList.appendChild(productCard);
};

const populateList = (products, viewOption) => {
  products.forEach((product) => createProductElement(product, viewOption));
};

let viewOption = "list";
if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify([]));
}
const products = JSON.parse(localStorage.getItem("products"));
populateList(products, viewOption);

radioInputs.forEach((radioInput) =>
  radioInput.addEventListener("change", () => {
    viewOption = radioInput.value;
    productList.classList.remove("list")
    productList.classList.remove("grid")
    productList.classList.add(viewOption)
    productList.innerHTML = "";
    populateList(products, viewOption);
  })
);
