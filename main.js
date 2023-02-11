// display form on click

const modalWrapper = document.querySelector(".modals-box")
if(modalWrapper){
    function displayModal(id){
        const modal = document.getElementById(id);
        modalWrapper.style.display = "flex";
        modal.style.display = "flex";

        const close = document.getElementById("close-modal");
        close.addEventListener("click", () => {
            modalWrapper.style.display = "none";
            modal.style.display = "none";
        })
    }
}
