document.addEventListener('DOMContentLoaded', function () {
    const editBox = document.getElementById('editBox');
    const editForm = document.getElementById('editForm');
    const userInfo = document.getElementById('userInfo');
    const infoSpan = document.getElementById('info');
    const editButton = document.getElementById('edit-info');

    // Function to show the edit box
    function showEditBox() {
        editBox.style.display = 'block';
    }

    // Function to hide the edit box
    function hideEditBox() {
        editBox.style.display = 'none';
    }

    // Event listener for the edit button
    edit-info.addEventListener('click', function () {
        // Show the edit box
        showEditBox();

        // Populate the edit form with the current information
        document.getElementById('newInfo').value = infoSpan.textContent;
    });

    // Event listener for the edit form submission
    editForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get the new information from the form
        const newInfo = document.getElementById('newInfo').value;

        // Update the displayed information
        infoSpan.textContent = newInfo;

        // Hide the edit box
        hideEditBox();
    });
});