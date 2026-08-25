function register(){

    let user={

        name:document.getElementById("name").value,

        email:document.getElementById("email").value,

        password:document.getElementById("password").value

    }

    fetch("http://localhost:3000/user",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(user)

    })

    .then(res=>res.json())

    .then(data=>{

        alert("Registration Successful");

        console.log(data);

    })

}