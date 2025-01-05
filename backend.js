
let user = document.getElementById("user");
user.addEventListener("click", () => {
    (alert("Directing to Sign Up Page."))
    window.open('user.html')
})

let cart = document.getElementById("cart");
user.addEventListener("click", () => {
    (alert("Directing to the Cart."))
    window.open('cart.html')
})


let email = document.getElementById("email");

let signup = document.getElementById("signup");
signup.addEventListener("click", async () => {
    try{
            let res = await email.value
            alert("Congratulations! Sign Up Successful.")
        }
        catch(err){alert("Error Occured. Please try again in sometime.")}
})