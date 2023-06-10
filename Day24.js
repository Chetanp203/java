function register(event) {
    event.preventDefault();
    var name = document.getElementById("USERNAME").value;
    console.log(name, "- name")
    var number = document.getElementById("USERNUMBER").value;
    console.log(number, "- number")
    var email = document.getElementById("USEREMAIL").value;
    console.log(email, "email");
    var password = document.getElementById("USERPASSWORD").value;
    console.log(password, "password")

    document.getElementById("USERNAME").value = ""; 
    document.getElementById("USERNUMBER").value = "";
    document.getElementById("USEREMAIL").value = "";
    document.getElementById("USERPASSWORD").value = "";

    alert("Resgitered..")
}
