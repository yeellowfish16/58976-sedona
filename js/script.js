var button = document.querySelector(".form__button--summon");
var form = document.querySelector(".form__field");
var dateIn = form.querySelector(".form__input--date-in");
var dateOut = form.querySelector(".form__input--date-out");
var adultNumber = form.querySelector(".form__input--adult");
var childrenNumber = form.querySelector(".form__input--children");
var isStorageSupport = true;
var dateInStorage = "";
var dateOutStorage = "";
var adultStorage = "";
var childrenStorage = "";
var searchButton = form.querySelector(".form__button--search");

if (form.classList.contains("form__field--open")) {
  form.classList.remove("form__field--open");
}

try {
  dateInStorage = localStorage.getItem("dateIn");
  dateOutStorage = localStorage.getItem("dateOut");
  adultStorage = localStorage.getItem("adultNumber");
  childrenStorage = localStorage.getItem("childrenNumber");
}

catch (err) {
    isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (form.classList.contains("form__field--animation")) {
    form.classList.add("form__field--animation-reverse");
    form.classList.remove("form__field--animation");
    dateIn.classList.remove("form__input--error");
    dateOut.classList.remove("form__input--error");
    adultNumber.classList.remove("form__input--error");
  }

  else {
    form.classList.add("form__field--animation");
    form.classList.remove("form__field--animation-reverse");
    setTimeout(function() { dateIn.focus(); }, 700);

    if (dateInStorage || dateOutStorage || adultStorage || childrenStorage) {
      dateIn.value = dateInStorage;
      dateOut.value = dateOutStorage;
      adultNumber.value = adultStorage;
      childrenNumber.value = childrenStorage;
      setTimeout(function() { searchButton.focus(); }, 700);
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!dateIn.value)  {
    evt.preventDefault();
    dateIn.classList.remove("form__input--error");
    dateIn.offsetWidth = dateIn.offsetWidth;
    dateIn.classList.add("form__input--error");
  }
  if (!dateOut.value)  {
    evt.preventDefault();
    dateOut.classList.remove("form__input--error");
    dateOut.offsetWidth = dateOut.offsetWidth;
    dateOut.classList.add("form__input--error");
  }
  if (!adultNumber.value) {
    adultNumber.classList.remove("form__input--error");
    adultNumber.offsetWidth = adultNumber.offsetWidth;
    adultNumber.classList.add("form__input--error");
  }

  else {
    if (isStorageSupport) {
      localStorage.setItem("dateIn", dateIn.value);
      localStorage.setItem("dateOut", dateOut.value);
      localStorage.setItem("adultNumber", adultNumber.value);
      localStorage.setItem("childrenNumber", childrenNumber.value);
    }
  }
});
