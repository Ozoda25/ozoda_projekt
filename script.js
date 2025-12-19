function xabarYuborildi() {
  const ism = document.getElementById("ism").value;
  alert("Rahmat, " + ism + "! Xabaringiz qabul qilindi.");
}
function buyurtmaBer(narx) {
  alert("Sizning buyurtmangiz narxi: " + narx + " so‘m");
}
window.onload = function() {
  alert("KiyimShop saytingizga xush kelibsiz!");
};
function matnRangiOzgart(id) {
  const elem = document.getElementById(id);
  elem.style.color = "#ff6600";
}
function hisobla(narx) {
  const soni = document.getElementById("soni").value;
  const total = narx * soni;
  document.getElementById("natija").innerText = "Jami narx: " + total + " so‘m";
}
function xabarYarat() {
  const ism = document.getElementById("ism").value;
  let yangiDiv = document.createElement("div");
  yangiDiv.textContent = `Rahmat, ${ism}! Xabaringiz qabul qilindi.`;
  yangiDiv.style.color = "#ff6600";
  yangiDiv.style.marginTop = "10px";
  document.getElementById("xabarDiv").appendChild(yangiDiv);
}
function yangiMahsulot(qismi, narx, imgSrc) {
  const grid = document.querySelector(".products-grid");

  let card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <img src="${imgSrc}" alt="Kiyim">
    <div class="product-body">
      <h3>${qismi}</h3>
      <p class="price">Narxi: <span>${narx} so‘m</span></p>
      <button class="order-btn" onclick="buyurtmaBer(${narx})">Buyurtma berish</button>
    </div>
  `;

  grid.appendChild(card);
}
yangiMahsulot("Yangi Ko‘ylak", 300000, "koylak.jpg");

window.onload = function() {
  let div = document.createElement("div");
  div.textContent = "KiyimShop saytingizga xush kelibsiz!";
  div.style.color = "#ff6600";
  div.style.fontSize = "18px";
  div.style.textAlign = "center";
  div.style.marginBottom = "15px";
  document.body.insertBefore(div, document.body.firstChild);
};
function matnOzgart() {
  const elem = document.getElementById("haqidaSarlavha");
  elem.textContent = "Biz haqimizda (yangilandi)";
  elem.style.color = "#ff6600";
}
function totalNarx(narx) {
  const soni = document.getElementById("soni").value;
  const total = narx * soni;
  const natijaDiv = document.getElementById("natija");
  natijaDiv.textContent = `Jami narx: ${total} so‘m`;

  // Rang qo‘shish
  natijaDiv.style.color = "#ff6600";
  natijaDiv.style.fontWeight = "bold";
  natijaDiv.style.marginTop = "10px";
}
document.getElementById("buyurtmaBtn").addEventListener("click", function() {
  alert("Siz buyurtma berdingiz!");
});
document.getElementById("aloqaForm").addEventListener("submit", function(e) {
  e.preventDefault(); // sahifa refresh bo‘lishini to‘xtatadi
  const ism = document.getElementById("ism").value;
  alert("Rahmat, " + ism + "! Xabaringiz qabul qilindi.");
});
document.getElementById("mavzu").addEventListener("change", function() {
  alert("Siz tanladingiz: " + this.value);
});



document.getElementById("aloqaForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const ism = document.getElementById("ism");
  const email = document.getElementById("email");
  const xabar = document.getElementById("xabar");
  const formMsg = document.getElementById("formMsg");

  let valid = true;

  // Ism tekshirish
  if (ism.value.trim() === "") {
    ism.classList.add("error");
    ism.classList.remove("success");
    valid = false;
  } else {
    ism.classList.add("success");
    ism.classList.remove("error");
  }

  // Email tekshirish oddiy regex bilan
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email.value)) {
    email.classList.add("error");
    email.classList.remove("success");
    valid = false;
  } else {
    email.classList.add("success");
    email.classList.remove("error");
  }

  // Xabar tekshirish
  if (xabar.value.trim() === "") {
    xabar.classList.add("error");
    xabar.classList.remove("success");
    valid = false;
  } else {
    xabar.classList.add("success");
    xabar.classList.remove("error");
  }

  // Natija xabarini ko‘rsatish
  if (valid) {
    formMsg.textContent = "Xabaringiz muvaffaqiyatli yuborildi!";
    formMsg.classList.add("success");
    formMsg.classList.remove("error");
    // Forma tozalash
    this.reset();
    // Input success classlarini olib tashlash
    ism.classList.remove("success");
    email.classList.remove("success");
    xabar.classList.remove("success");
  } else {
    formMsg.textContent = "Iltimos, barcha maydonlarni to‘ldiring va emailni tekshiring!";
    formMsg.classList.add("error");
    formMsg.classList.remove("success");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const salomBtn = document.getElementById("salomBtn");

  if (salomBtn) {
    salomBtn.addEventListener("click", function () {
      const ismInput = document.getElementById("foydalanuvchiIsm");
      const salomDiv = document.getElementById("salomDiv");
      const ism = ismInput.value.trim();

      if (ism === "") {
        alert("Iltimos, ismingizni kiriting!");
        ismInput.classList.add("error");
        ismInput.classList.remove("success");
      } else {
        ismInput.classList.add("success");
        ismInput.classList.remove("error");
        salomDiv.textContent =
          `Xush kelibsiz, ${ism}! Saytimizga tashrifingizdan xursandmiz.`;
      }
    });
  }
});


// Aloqa form validation
document.getElementById("aloqaForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const ism = document.getElementById("ism");
  const email = document.getElementById("email");
  const xabar = document.getElementById("xabar");
  const formMsg = document.getElementById("formMsg");

  let valid = true;

  // Ism tekshirish
  if (ism.value.trim() === "") {
    ism.classList.add("error");
    ism.classList.remove("success");
    valid = false;
  } else {
    ism.classList.add("success");
    ism.classList.remove("error");
  }

  // Email tekshirish
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email.value)) {
    email.classList.add("error");
    email.classList.remove("success");
    valid = false;
  } else {
    email.classList.add("success");
    email.classList.remove("error");
  }

  // Xabar tekshirish
  if (xabar.value.trim() === "") {
    xabar.classList.add("error");
    xabar.classList.remove("success");
    valid = false;
  } else {
    xabar.classList.add("success");
    xabar.classList.remove("error");
  }

  // Natija
  if (valid) {
    formMsg.textContent = "Xabaringiz muvaffaqiyatli yuborildi!";
    formMsg.classList.add("success");
    formMsg.classList.remove("error");
    this.reset();
    ism.classList.remove("success");
    email.classList.remove("success");
    xabar.classList.remove("success");
  } else {
    formMsg.textContent = "Iltimos, barcha maydonlarni to‘ldiring va emailni tekshiring!";
    formMsg.classList.add("error");
    formMsg.classList.remove("success");
  }
});

// Xush kelibsiz alert
window.onload = function() {
  let div = document.createElement("div");
  div.textContent = "KiyimShop saytingizga xush kelibsiz!";
  div.style.color = "#ff6600";
  div.style.fontSize = "18px";
  div.style.textAlign = "center";
  div.style.marginBottom = "15px";
  document.body.insertBefore(div, document.body.firstChild);
};
