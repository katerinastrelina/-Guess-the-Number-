const input = document.querySelector ("#guess");
const button = document.querySelector ("#btn");
const answer = Math.floor(Math.random()*50)+1;

input.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) 
    play();
})


button.addEventListener ("click", play);

function play () {

    const userNumber = document.querySelector("#guess").value;
   
    if(userNumber < 1 || userNumber > 50) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter a number from 1 to 50!",
          })
    }

    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You need to enter a number!",
          })
    }  

    else {
        if(userNumber < answer) {
            Swal.fire("Your guess is too low! <br> Try a higher number!");
        }
        else if (userNumber > answer) {
            Swal.fire("Your guess is too high! <br> Try a lower number!");
        }
        else {
            Swal.fire({
                title: "Congratulations!!! <br> You won the game!",
                imageUrl: "https://images.unsplash.com/photo-1629906701520-7c0180c6e58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbmdyYXR1bGF0aW9uc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: 'Custom image',
              })
        }
    }
}

