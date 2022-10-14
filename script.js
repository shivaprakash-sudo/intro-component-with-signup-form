window.onload = () => {
  const form = document.querySelector("#signup-form");

  form.onsubmit = (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll("input");
    const emailInput = document.querySelector("#email");

    displayErrorMessage(inputs);
    validateEmail(emailInput);
  };

  //   validating email using a simple regex
  function validateEmail(emailInput) {
    const invalidEmailErrorClassList = document.querySelector(
      "#invalid-email-error"
    );
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    addOrRemoveClass(
      emailInput.value && !emailRegex.test(emailInput.value),
      invalidEmailErrorClassList,
      "hidden"
    );
    // TO DO
    // add logic to add or remove error icon for email validation error
  }

  //   displaying error message for respective input error
  function displayErrorMessage(inputs) {
    const inputAndErrorContainers = document.querySelectorAll(
      ".input-and-error-container"
    );

    inputs.forEach((input, index) => {
      const inputValue = input.value;
      const currentErrorMessageClassList =
        inputAndErrorContainers[index].children[1];
      const currentErrorIconClassList =
        inputAndErrorContainers[index].children[0].children[1];
      addOrRemoveClass(!inputValue, currentErrorMessageClassList, "hidden");
      addOrRemoveClass(!inputValue, currentErrorIconClassList, "hidden");
      addOrRemoveClass(!inputValue, input, "border-red-500");
    });
  }

  function addOrRemoveClass(condition, element, className) {
    if (condition) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  }
};
