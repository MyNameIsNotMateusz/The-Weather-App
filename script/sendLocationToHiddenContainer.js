const sendLocationToHiddenContainer = () => {
    const form = document.querySelector(".js-form");
    const formInput = document.querySelector(".js-form--input");
    const hiddenInput = document.querySelector(".js-hiddenContainerInput");
    const hiddenContainer = document.querySelector(".js-hiddenContainer")

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        hiddenInput.value = formInput.value;
        form.style.display = "none";
        hiddenContainer.style.display = "flex";
    });
};

sendLocationToHiddenContainer();

