document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    form.addEventListener("submit", formSend);
  });
  
  function formSend(e) {
    e.preventDefault();
    const form = e.target;
    let error = formValidte(form);
  
    // отправка формы
    // let formData= new FormData(form);
    if (error === 0) {
      // let response = await fetch('/article/formdata/post/user', {
      //     method: 'POST',
      //     body: new FormData(formElem)
      //   });
      alert("Форма отправлена");
    } else {
      alert("Заполните поля");
    }
    // обязательные для заполнения поля
    function formValidte(form) {
      let error = 0;
      let formReq = document.querySelectorAll("._req");
  
      for (let i = 0; i < formReq.length; i++) {
        const input = formReq[i];
  
        if (input.value === "") {
          formAddError(input);
          error++;
        }
  
        if (input.classList.contains("_email")) {
          if (!emailTest(input)) {
            formAddError(input);
            error++;
          }
        }
      }
      return error;
    }
    function formAddError(input) {
      input.classList.add("error");
    }
  
    function emailTest(input) {
      return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(
        input.value
      );
    }
    console.log(444);
  }
  