const sendLocationToHiddenContainer = () => {
    const buttonContainer = document.querySelector(".js-container--button");
    const inputContainer = document.querySelector(".js-container--input");
    const container = document.querySelector(".js-container");

    const buttonHiddenContainer = document.querySelector(".js-hiddenContainer--button")
    const inputHiddenContainer = document.querySelector(".js-hiddenContainer--input");
    const hiddenContainer = document.querySelector(".js-hiddenContainer");


    buttonContainer.addEventListener("click", () => {
        inputHiddenContainer.value = inputContainer.value;
        container.style.display = "none";
        hiddenContainer.style.display = "flex";
        buttonHiddenContainer.click();
    });

};

sendLocationToHiddenContainer();