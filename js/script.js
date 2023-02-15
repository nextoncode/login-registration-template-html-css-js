const btns = document.querySelectorAll(".toggle-btns .btn");

for (let i = 0; btns.length > i; i++) {
  btns[i].addEventListener("click", function () {
    document
      .querySelector(".toggle-btns .btn.active")
      .classList.remove("active");
      this.classList.add("active");


      formId = this.dataset.formid
      document.querySelector("form.active").classList.remove("active");
      document.querySelector(`#${formId}`).classList.add("active");
  });
}
