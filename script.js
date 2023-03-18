// const steps = document.querySelectorAll(".form-steps");
// const circleNumbers = document.querySelectorAll(".numbers");
// const formInputs = document.querySelectorAll(".container-right form input");
// const plans = document.querySelectorAll(".plan-card");
// const switcher = document.querySelector(".switcher");
// const adding = document.querySelectorAll(".box-1");
// const totalPrice = document.querySelector(".total-content");
// const planPricing = document.querySelector(".plan-price");

// let time;
// let currentNumber = 1;
// let currentCircle = 0;
// const obj ={
//     plan:null,
//     kind: null,
//     price: null,
// };

// steps.forEach((numbers) => {
//     const nextBtn = numbers.querySelector(".next-stp");
//     const prevBtn = numbers.querySelector(".prev-stp");
//     if (prevBtn) {
//       prevBtn.addEventListener("click", () => {
//         document.querySelector(`.numbers-${currentNumber}`).style.display = "none";
//         currentNumber--;
//         document.querySelector(`.numbers-${currentNumber}`).style.display = "flex";
//         circleNumbers[currentCircle].classList.remove("active");
//         currentCircle--;
//       });
//     }
//     nextBtn.addEventListener("click", () => {
//         document.querySelector(`.numbers-${currentNumber}`).style.display = "none";
//         if (currentNumber < 5 && validateForm()){
//             currentNumber++;
//             currentCircle++;
//             setTotal();
//         }
//         document.querySelector(`.numbers-${currentNumber}`).style.display = "flex";
//         circleNumbers[currentCircle].classList.add("active");
//         summary(obj);
//     });
// });
// function summary(obj){
//     const planName = document.querySelector(".plan-name");
//     const planPrice = document.querySelector(".plan-price");
//     planPrice.innerHTML = `${obj.price.innerText}`;
//     planName.innerHTML = `${obj.plan.innerText} (${
//         obj.kind ? "yearly" : "monthly"
//     })`;
// }
// function validateForm(){
//     let valid = true;
//     for (let i = 0; i < formInputs.length; i++){
//         if(!formInputs[i].value){
//             valid = false;
//             formInputs[i].classList.add("error");
//             findLabel(formInputs[i]).nextElementSibling.style.display = "flex";
//         }else{
//             valid = true;
//             formInputs[i].classList.remove("error");
//             findLabel(formInputs[i]).nextElementSibling.style.display = "none";
//         }
//     }
//     return valid;
// }

// //For labels
// function findLabel(el){
//     const idVal = el.id;
//     const labels = document.getElementsByTagName("label");
//     for (let i = 0; i < labels.length; i++){
//         if (labels[i].htmlFor == idVal) return labels[i];
//     }
// }

// plans.forEach((plan) => {
//     plan.addEventListener("click", () =>{
//         document.querySelector(".selected-one").classList.remove("selected-one");
//         plan.classList.add("selected-one");
//         const planName = plan.querySelector("h2");
//         const planPrice = plan.querySelector(".planPriced");
//         obj.plan = planName;
//         obj.price = planName;
//     });
// });

//  switcher.addEventListener("click", () => {
//     const val = switcher.querySelector("input").checked;
//     if (val) {
//         document.querySelector(".plan").classList.remove("select");
//         document.querySelector(".yearly").classList.add("select");
//     } else {
//         document.querySelector(".plan").classList.add("select");
//         document.querySelector(".yearly").classList.remove("select");
//     }
//     switchPrice(val);
//     obj.kind = val;
// });

// adding.forEach((adding) => {
//     adding.addEventListener("click", (e) =>{
//         const addingSelect = adding.querySelector("input");
//         const ID = adding.getAttribute("data-id");
//         if (addingSelect.checked){
//             addingSelect.checked = false;
//             adding.classList.remove("add-selected");
//             showAdding(adding, true);
//             e.preventDefault();
//         }
//     });
// });
// function switchPrice(checked) {
//     const yearlyPrice = [90, 120, 150];
//     const monthlyPrice = [9, 12, 15];
//     const prices = document.querySelectorAll(".plan-priced");
//     if (checked) {
//       prices[0].innerHTML = `$${yearlyPrice[0]}/yr`;
//       prices[1].innerHTML = `$${yearlyPrice[1]}/yr`;
//       prices[2].innerHTML = `$${yearlyPrice[2]}/yr`;
//       setTime(true);
//     } else {
//       prices[0].innerHTML = `$${monthlyPrice[0]}/mo`;
//       prices[1].innerHTML = `$${monthlyPrice[1]}/mo`;
//       prices[2].innerHTML = `$${monthlyPrice[2]}/mo`;
//       setTime(false);
//     }
//   }

//   function showAdding(ad, val) {
//     const temp = document.getElementsByTagName("template")[0];
//     const clone = temp.content.cloneNode(true);
//     const serviceName = clone.querySelector(".service-name");
//     const servicePrice = clone.querySelector(".servic-price");
//     const serviceID = clone.querySelector(".selected-addon");
//     if (ad && val) {
//       serviceName.innerText = ad.querySelector("label").innerText;
//       servicePrice.innerText = ad.querySelector(".price").innerText;
//       serviceID.setAttribute("data-id", ad.dataset.id);
//       document.querySelector(".addons").appendChild(clone);
//     } else {
//       const addons = document.querySelectorAll(".selected-addon");
//       addons.forEach((addon) => {
//         const attr = addon.getAttribute("data-id");
//         if (attr == ad) {
//           addon.remove();
//         }
//       });
//     }
//   }
//   function setTotal() {
//     const str = planPrice.innerHTML;
//     const res = str.replace(/\D/g, "");
//     const addingPrices = document.querySelectorAll(
//       ".selecting-plans .service-price"
//     );
  
//     let val = 0;
//     for (let i = 0; i < addingPrices.length; i++) {
//       const str = addingPrices[i].innerHTML;
//       const res = str.replace(/\D/g, "");
  
//       val += Number(res);
//     }
//     total.innerHTML = `$${val + Number(res)}/${time ? "yr" : "mo"}`;
//   }
//   function setTime(t) {
//     return (time = t);
//   }

const steps = document.querySelectorAll(".form-steps");
const circleSteps = document.querySelectorAll(".numbers");
const formInputs = document.querySelectorAll(".container-right form input");
const plans = document.querySelectorAll(".plan-card");
const switcher = document.querySelector(".switcher");
const addons = document.querySelectorAll(".box-1");
const total = document.querySelector(".total-content");
const planPrice = document.querySelector(".plan-price");
let time;
let currentNumber = 1;
let currentCircle = 0;
const obj = {
  plan: null,
  kind: null,
  price: null,
};

steps.forEach((numbers) => {
  const nextBtn = numbers.querySelector(".next-stp");
  const prevBtn = numbers.querySelector(".prev-stp");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      document.querySelector(`.numbers-${currentNumber}`).style.display = "none";
      currentNumber--;
      document.querySelector(`.numbers-${currentNumber}`).style.display = " block";
      circleSteps[currentCircle].classList.remove("active");
      currentCircle--;
    });
  }
  nextBtn.addEventListener("click", () => {
    document.querySelector(`.numbers-${currentNumber}`).style.display = "none";
    if (currentNumber < 5 && validateForm()) {
      currentNumber++;
      currentCircle++;
      setTotal();
    }
    document.querySelector(`.numbers-${currentNumber}`).style.display = "block";
    circleSteps[currentCircle].classList.add("active");
    summary(obj);
  });
});
function summary(obj) {
  const planName = document.querySelector(".plan-name");
  const planPrice = document.querySelector(".plan-price");
  planPrice.innerHTML = `${obj.price.innerText}`;
  planName.innerHTML = `${obj.plan.innerText} (${
    obj.kind ? "yearly" : "monthly"
  })`;
}
function validateForm() {
  let valid = true;
  for (let i = 0; i < formInputs.length; i++) {
    if (!formInputs[i].value) {
      valid = false;
      formInputs[i].classList.add("errors");
      findLabel(formInputs[i]).nextElementSibling.style.display = "flex";
    } else {
      valid = true;
      formInputs[i].classList.remove("errors");
      findLabel(formInputs[i]).nextElementSibling.style.display = "none";
    }
  }
  return valid;
}
function findLabel(el) {
  const idVal = el.id;
  const labels = document.getElementsByTagName("label");
  for (let i = 0; i < labels.length; i++) {
    if (labels[i].htmlFor == idVal) return labels[i];
  }
}

plans.forEach((plan) => {
  plan.addEventListener("click", () => {
    document.querySelector(".selected-one").classList.remove("selected-one");
    plan.classList.add("selected-one");
    const planName = plan.querySelector("h2");
    const planPrice = plan.querySelector(".plan-priced");
    obj.plan = planName;
    obj.price = planPrice;
  });
});

switcher.addEventListener("click", () => {
  const val = switcher.querySelector("input").checked;
  if (val) {
    document.querySelector("..plan").classList.remove("select");
    document.querySelector(".yearly").classList.add("select");
  } else {
    document.querySelector("..plan").classList.add("select");
    document.querySelector(".yearly").classList.remove("select");
  }
  switchPrice(val);
  obj.kind = val;
});
addons.forEach((addon) => {
  addon.addEventListener("click", (e) => {
    const addonSelect = addon.querySelector("input");
    const ID = addon.getAttribute("data-id");
    if (addonSelect.checked) {
      addonSelect.checked = false;
      addon.classList.remove("ad-selected");
      showAddon(ID, false);
    } else {
      addonSelect.checked = true;
      addon.classList.add("ad-selected");
      showAddon(addon, true);
      e.preventDefault();
    }
  });
});

function switchPrice(checked) {
  const yearlyPrice = [90, 120, 150];
  const monthlyPrice = [9, 12, 15];
  const prices = document.querySelectorAll(".plan-priced");
  if (checked) {
    prices[0].innerHTML = `$${yearlyPrice[0]}/yr`;
    prices[1].innerHTML = `$${yearlyPrice[1]}/yr`;
    prices[2].innerHTML = `$${yearlyPrice[2]}/yr`;
    setTime(true);
  } else {
    prices[0].innerHTML = `$${monthlyPrice[0]}/mo`;
    prices[1].innerHTML = `$${monthlyPrice[1]}/mo`;
    prices[2].innerHTML = `$${monthlyPrice[2]}/mo`;
    setTime(false);
  }
}
function showAddon(ad, val) {
  const temp = document.getElementsByTagName("template")[0];
  const clone = temp.content.cloneNode(true);
  const serviceName = clone.querySelector(".service-name");
  const servicePrice = clone.querySelector(".servic-price");
  const serviceID = clone.querySelector(".selected-addon");
  if (ad && val) {
    serviceName.innerText = ad.querySelector("label").innerText;
    servicePrice.innerText = ad.querySelector(".price").innerText;
    serviceID.setAttribute("data-id", ad.dataset.id);
    document.querySelector(".addons").appendChild(clone);
  } else {
    const addons = document.querySelectorAll(".selected-addon");
    addons.forEach((addon) => {
      const attr = addon.getAttribute("data-id");
      if (attr == ad) {
        addon.remove();
      }
    });
  }
}

function setTotal() {
  const str = planPrice.innerHTML;
  const res = str.replace(/\D/g, "");
  const addonPrices = document.querySelectorAll(
    ".selected-addon .servic-price"
  );

  let val = 0;
  for (let i = 0; i < addonPrices.length; i++) {
    const str = addonPrices[i].innerHTML;
    const res = str.replace(/\D/g, "");

    val += Number(res);
  }
  total.innerHTML = `$${val + Number(res)}/${time ? "yr" : "mo"}`;
}
function setTime(t) {
  return (time = t);
}


