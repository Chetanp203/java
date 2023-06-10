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

    const userdata= {
        username: name,
        useremail: email,
        userpassword: password,
        usernumber: number
    }

    localStorage.setItem("studentslist", JSON.stringify(userdata))

    document.getElementById("userName").value = ""; // assigning
    document.getElementById("userNumber").value = "";
    document.getElementById("userEmail").value = "";
    document.getElementById("userPassword").value = "";

    alert("Resgitered..")
}




