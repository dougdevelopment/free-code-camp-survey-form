function submitForm() {
    const form = document.getElementById("survey-form");
    const confirm= document.getElementById('confirm');
    form.classList.add('hide');
    confirm.classList.remove("hide");
  }

document.getElementById("submit").addEventListener('click', event => {
    submitForm();
  });

