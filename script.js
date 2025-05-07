function calculatePrice() {
    let price = 100;
  
    const education = document.getElementById("education").value;
    price *= parseFloat(education);
  
    const wealth = document.getElementById("wealth").value;
    price *= parseFloat(wealth);
  
    const caste = document.getElementById("caste").value;
    price += parseFloat(caste);
  
    const skills = document.querySelectorAll('input[name="skills"]:checked');
    skills.forEach((skill) => {
      price += parseFloat(skill.value);
    });
  
    const age = document.querySelector('input[name="age"]:checked');
    if (age) {
      price *= parseFloat(age.value);
    }
  
    const rep = document.querySelectorAll('input[name="reputation"]:checked');
    rep.forEach((item) => {
      if (item.classList.contains("coef")) {
        price *= parseFloat(item.value);
      } else {
        price += parseFloat(item.value);
      }
    });
  
    const resultBox = document.getElementById("result");
    resultBox.textContent = "Final Price: $" + price.toFixed(2);
  
    resultBox.style.color = "green";
    document.body.style.backgroundColor = "#eef9ff";
  }
  