
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

     

        $(document).ready(function(){
            var div1 = document.querySelector('.product_page');
            var productmenu= document.querySelector('.product_menu');
            var collectionmenu= document.querySelector('.collection_menu');
            var isHovered = false;
            var mess=document.querySelector('.mess-table');
            var messclicktime=0;
            var accountclicktime=0;
            mess.style.display='none';
            productmenu.style.display='none';
            collectionmenu.style.display='none';
            $('.sign-in-btn').click(e=>{
                window.alert('Đăng nhập thành công !!');
            })
            $('.sign-up-btn').click(e=>{
                var signupid = document.getElementById('sign-up-id').value;
                var signuppass = document.getElementById('sign-up-pass').value
                var signuppass2 =  document.getElementById('sign-up-pass2').value
                if(signuppass != signuppass2){
                    window.alert('Xác nhận mật khẩu sai !! Vui lòng Đăng kí lại!')
                    return;
                }
                else
                window.alert('Đăng kí thành công~!\nID : ' + signupid + '\nPassword : '+signuppass);
            })
            setTimeout(e => {
                $('.ad').fadeOut();
            }, 5000);
            $('.mess').click(e=>{
                if(messclicktime%2==1)
                {
                $(mess).fadeOut();
                }
                else
                $(mess).fadeIn();
                messclicktime++;
            })
            $('.product_page,.product_menu').mouseenter(function() {
                isHovered = true;
                $('.product_menu').slideDown(); 
                div1.classList.add('hover');
    });

            $('.product_page,.product_menu').mouseleave(function() {
                isHovered = false;
                setTimeout(function() {
                if (!isHovered) {
                    $('.product_menu').slideUp();
                    div1.classList.remove('hover');
                }
                }, 50);
            });
            var div2 = document.querySelector('.collection_page');
            var isHovered = false;
            $('.collection_page,.collection_menu').mouseenter(function() {
                isHovered = true;
                $('.collection_menu').slideDown(); 
                div2.classList.add('hover');
    });

            $('.collection_page,.collection_menu').mouseleave(function() {
                isHovered = false;
                setTimeout(function() {
                if (!isHovered) {
                    $('.collection_menu').slideUp();
                    div2.classList.remove('hover');
                }
                }, 20); 
            });

            $('#account').click(e=>{
                if(accountclicktime%2==1)
                {
                $('.sign-in').fadeOut();
                $('.sign-up').fadeOut();
                }
                else
                $('.sign-in').fadeIn();
                accountclicktime++;
            })
            $('.sign-in-opt').click(e=>{
                
                $('.sign-up').fadeOut();
                setTimeout(() => {
                    
                $('.sign-in').fadeIn();
                }, 200);
            })
            $('.sign-up-opt').click(e=>{
                
                $('.sign-in').fadeOut();
                setTimeout(() => {
                    
                $('.sign-up').fadeIn();
                }, 200);
            })
    });

        


