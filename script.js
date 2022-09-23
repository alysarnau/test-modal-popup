// modal
let modal = document.querySelector(".modal")
// modal contents
let modalContent = document.querySelector(".modal-content")
// show modal button
let modalButton = document.querySelector("#popup")
// close modal button
let closeButton = document.querySelector("#close")

modalButton.addEventListener("click", openModal)
closeButton.addEventListener("click", closeModal)
modal.addEventListener("click", closeModal)

// openModal function
function openModal(e) {
    e.preventDefault();
    modal.style.display = "block"
}

// closeModal function
function closeModal() {
    modalContent.classList.add("slide-up")
    setTimeout(() => {
        modal.style.display = "none";
        modalContent.classList.remove("slide-up")
    }, 500)
}