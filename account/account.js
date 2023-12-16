document.addEventListener("DOMContentLoaded", function () {
    const editBox = document.getElementById("editBox");
    const editForm = document.getElementById("editForm");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    // const password = document.getElementById('password');
    const newPassword = document.getElementById("newPassword");
    const retypePassword = document.getElementById("retypePassword");
    const editInfo = document.getElementById("editInfo");
    const passwordWarning = document.getElementById("passwordWarning");
  
    function showEditBox() {
      editBox.style.display = "block";
    }
  
    function hideEditBox() {
      editBox.style.display = "none";
    }
  
    function checkPasswordMatch() {
      var newPass = newPassword.value;
      var retypePass = retypePassword.value;
      if (newPass !== retypePass) {
        passwordWarning.textContent = "Nhập lại mật khẩu sai. Vui lòng thử lại!";
        return false;
      } else {
        passwordWarning.textContent = "";
        return true;
      }
    }
  
    editInfo.addEventListener("click", function () {
      showEditBox();
      document.getElementById("newUsername").value = username.textContent;
      document.getElementById("newEmail").value = email.textContent;
    });
  
    editForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!checkPasswordMatch()) {
        return;
      }
  
      const newUsername = document.getElementById("newUsername").value;
      const newEmail = document.getElementById("newEmail").value;
      const newPassword = document.getElementById("newPassword").value;
      // const retypePassword = document.getElementById('retypePassword').value;
  
      username.textContent = newUsername;
      email.textContent = newEmail;
      hideEditBox();
    });
  });