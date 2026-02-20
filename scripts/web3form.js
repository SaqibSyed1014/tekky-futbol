/**
 * Global function to handle Web3Forms submission
 * @param {Event} event - The submission event from the form
 * @param {String} successPopupId - Optional: function to run on success (like opening your popup)
 * @param {String} activePopupId - Optional: function to run on success (like opening your popup)
 */
function handleFormSubmit(event, successPopupId, activePopupId) {
    event.preventDefault();

    const form = event.target;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnHTML = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `
        <span class="spinner"></span>
        Submitting
    `;

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
        .then(async (response) => {
            console.log('response', response);
            if (response.status == 200) {
                form.reset();
                const successPopup = document.getElementById(successPopupId);
                const activePopup = document.getElementById(activePopupId);
                successPopup.style.display = 'flex';
                activePopup.style.display = 'none';
            } else {
                console.log('error')
            }
        })
        .catch(error => {
            console.error("Form Error:", error);
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHTML;
        });
}
