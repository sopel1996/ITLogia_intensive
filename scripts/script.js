document.getElementById("main_action_button").onclick = function () {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
};

let links = document.querySelectorAll(".menu_item > a");
let buttons = document.getElementsByClassName("product_button");
let prices = document.getElementsByClassName("products_item_price");

for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document
      .getElementById(links[i].getAttribute("data-link"))
      .scrollIntoView({ behavior: "smooth" });
  };
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById("order").scrollIntoView({ behavior: "smooth" });
  };
}

let burgerInput = document.getElementById("burger");
let nameInput = document.getElementById("name");
let phoneInput = document.getElementById("phone");

document.getElementById("orderAction").onclick = function () {
  let hasError = false;

  [burgerInput, nameInput, phoneInput].forEach((el) => {
    if (!el.value) {
      el.parentElement.style.background = "red";
      hasError = true;
    } else {
      el.parentElement.style.background = "";
    }
  });

  if (!hasError) {
    [burgerInput, nameInput, phoneInput].forEach((el) => {
      el.value = "";
    });
    alert("Спасибо за заказ!");
  }
};
document.getElementById("changeCurrencyBtn").onclick = function (e) {
  let currentCurrency = e.target.innerText;
  let newCurrency = "$";
  let coef = 1;

  switch (currentCurrency) {
    case "$": {
      newCurrency = "₽";
      coef = 80;
      break;
    }
    case "₽": {
      newCurrency = "BYN";
      coef = 3;
      break;
    }
    case "BYN": {
      newCurrency = "€";
      coef = 0.9;
      break;
    }
    case "€": {
      newCurrency = "¥";
      coef = 6.9;
      break;
    }
  }
  e.target.innerText = newCurrency
  for (let i = 0; i< prices.length; i++){
    prices[i].innerText = (+prices[i].getAttribute("data-base-price") * coef).toFixed(1) + ` ${newCurrency}`
  }
};
