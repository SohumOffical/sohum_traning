var btn=document.querySelector('#btn')
btn.addEventListener("click",submit)
var reset=document.querySelector("#reset")

function submit() {
    var email=document.querySelector('#email').value
    var pass=document.querySelector('#pass').value

    if(email ===" " || pass ===""){
        alert("please Fill All Login Details")
    }
    else{
        var emailr=localStorage.getItem('email')
        var passr=localStorage.getItem('pass')
        if (email===emailr && pass===passr){
            alert('Login SucessFully :)')
            location.replace("manage.html");
        }
        else {
            alert('Invalid username and password :(')

        }
    }

}