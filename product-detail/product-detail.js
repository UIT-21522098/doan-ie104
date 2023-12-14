
function incrementQuantity() {
    const quantity = document.getElementById('quantity');
    quantity.value = parseInt(quantity.value) + 1;
}

function decrementQuantity() {
    const quantity = document.getElementById('quantity');
    const newValue = parseInt(quantity.value) - 1;
    quantity.value = newValue > 0 ? newValue : 1;
}

function changeImage(color) {
    const productImage = document.getElementById('productImage');
    let imagePath;

    // Set image path based on the selected color
    switch (color) {
        case '#color1':
            imagePath = 'images/f20fa2a89ea4a4f83be1d7b744c8cdfe.png';
            break;
        case '#color2':
            imagePath = 'images/f20fa2a89ea4a4f83be1d7b744c8cdfe(1).png';
            break;

        default:
            imagePath = 'images/f20fa2a89ea4a4f83be1d7b744c8cdfe.png';
            break;
    }

    // Change the product image source
    productImage.src = imagePath;

}


$(document).ready(function () {
    $("#color1").click(function () {
        // Remove border from all buttons
        $(".color-circle").css("border", "none");

        // Set border for the clicked button
        $("#color1").css("border", "1px solid gray");
    });

    $("#color2").click(function () {
        // Remove border from all buttons
        $(".color-circle").css("border", "none");

        // Set border for the clicked button
        $("#color2").css("border", "1px solid gray");
    });

    // Add similar click functions for other color buttons
});


document.addEventListener('DOMContentLoaded', function () {
    // ... Your existing code ...

    $(".star").click(function () {
        const selectedRating = $(this).data("rating");

        // Remove 'active' class from all stars
        $(".star").removeClass("active");

        // Add 'active' class to the clicked star and previous stars
        $(this).addClass("active").prevAll().addClass("active");

        // Set the selected rating in the hidden input field (if needed)
        // $("#userRating").val(selectedRating);
    });

    $("#submitRating").click(function () {
        const name = $("#name").val();
        const userRating = $(".star.active").length;
        const userComment = $("#userComment").val();
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleString();

        const starIcons = Array(userRating).fill('<i class="material-icons">star</i>').join(''); // Repeat Material Icons star based on user rating

        const ratingElement = `
            <div class="comment">
                <p class="comment-user">${name}</p>
                <p class="comment-rating">${starIcons}</p>
                <p class="comment-text">${userComment}</p>
                <p class="comment-time">${formattedTime}</p>
            </div>
        `;

        $("#userRatings").append(ratingElement);

        // Clear the input fields after submission
        $("#name").val("");
        $(".star").removeClass("active");
        $("#userComment").val("");
    });
});


// document.addEventListener('DOMContentLoaded', function () {
//     // ... Your existing code ...

//     $("#submitRating").click(function () {
//         const userRating = $("#userRating").val();
//         const userComment = $("#userComment").val();
//         const currentTime = new Date();
//         const formattedTime = currentTime.toLocaleString();

//         const ratingElement = `
//             <div class="comment">
//                 <p class="comment-user">Anonymous</p>
//                 <p class="comment-rating">Rating: ${userRating}/5</p>
//                 <p class="comment-text">${userComment}</p>
//                 <p class="comment-time">Submitted on: ${formattedTime}</p>
//             </div>
//         `;

//         $("#userRatings").append(ratingElement);

//         // Clear the input fields after submission
//         $("#userRating").val("");
//         $("#userComment").val("");
//     });
// });



// const op1 = document.getElementsById('op1');

// btn.addEventListener('click', function onClick() {
//   op1.style.backgroundColor = 'salmon';
//   op1.style.color = 'white';
// });


// function replaceCSS(){
// fetch('account.html')
//                 .then(response => response.text())
//                 .then(html => {
//                     // Thay đổi CSS của trang hiện tại
//                     var modifiedHTML = html.replace('<p>Na<br>', '<p>Na1234<br>');
//                     document.documentElement.innerHTML = modifiedHTML;
//                 })
//                 .catch(error => console.error('Fetch error:', error));
//             }


        // function changeCSS() {
        //     // Gửi thông điệp đến trang 2
        //     window.parent.postMessage({ type: 'changeCSS' }, '*');
        // }

     


        


