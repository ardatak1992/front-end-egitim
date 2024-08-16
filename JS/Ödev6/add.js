const addForm = document.getElementById("add-form");
const productNameInput = document.getElementById("product-name");
const productDescriptionInput = document.getElementById("product-description");
const productLikesInput = document.getElementById("likes-number");
const productCommentsInput = document.getElementById("comments-number");
const productImageInput = document.getElementById("product-image");

const addProduct = async (e) => {
  e.preventDefault();
  

  const file = productImageInput.files[0];
  let base64String;

  if (file) {
    try {
      base64String = await turnImageToBase64(file);
    } catch (error) {
      console.log(error);
      return;
    }
  } else {
    console.log("error: no image found");
    return;
  }

  const newProduct = {
    productImage: base64String,
    productName: productNameInput.value,
    productDescription: productDescriptionInput.value,
    productLikes: productLikesInput.value,
    productComments: productCommentsInput.value,
  };

  const products = JSON.parse(localStorage.getItem("products"));
  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));

  window.location.href = "index.html";
};

const turnImageToBase64 = (imageFile) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      resolve(e.target.result);
    };

    reader.onerror = function (error) {
      reject(error);
    };

    reader.readAsDataURL(imageFile);
  });
};

addForm.addEventListener("submit", async (e) => {
  await addProduct(e);
});
productImageInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      document.getElementById("product-preview").src = e.target.result;
      document
        .getElementById("product-preview-container")
        .classList.remove("hidden");
      document
        .getElementById("product-preview-container")
        .classList.add("product-preview-container");

      document.getElementById("filename").innerText = file.name;
    };

    reader.readAsDataURL(file);

    document.getElementById("close-button").addEventListener("click", () => {
      productImageInput.value = "";
      document
        .getElementById("product-preview-container")
        .classList.add("hidden");
      document
        .getElementById("product-preview-container")
        .classList.remove("product-preview-container");
      console.log(productImageInput.value);
    });
  }
});
