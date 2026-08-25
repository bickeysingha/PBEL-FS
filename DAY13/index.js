



let form = document.getElementById('form');

let btn = document.getElementById('btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
     let fullName =document.getElementById('fullName').value;
     let email=document.getElementById('email').value;
     let password=document.getElementById('password').value;

     let obj ={
        fullName,email,password
     }
     let arr=[];
      arr.push(obj)
      localStorage.setItem('userData',JSON.stringify(arr));
})