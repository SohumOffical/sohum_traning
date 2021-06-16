

var btn = document.querySelector('#btn')
var pass = document.querySelector('#pass')
var  uname = document.querySelector('#uname')
var  email = document.querySelector('#email')
var msg = document.querySelector('#msg')
var repass = document.querySelector('#repass')


btn.addEventListener('click',validate)
function validate() {
    if ( uname.value === "" ){
        displayMsg('Enter Username :(',uname)
    }
    else if (email.value===''){
        reset(uname)
        displayMsg('Enter Email :(',email)

    }
    else if (pass.value ===''){
        reset(email)
        displayMsg('Enter Password :(',pass)

    }
    else if (repass.value ===''){
        reset(pass)
        displayMsg('Enter Conform Password :(',repass)

    }
     else if(pass.value!==repass.value){
        reset(repass)
        displayMsg(' Conform Password Not match :(')

    }

    else {
         alert('Form Submited Sucessfully :)')
          uname.value=''
          email.value=''
          pass.value=''
          repass.value=''
          msg.style.color='blue'
          msg.textContent='Form Submited Sucessfully :)'
    }



}
function displayMsg(str,field) {
    msg.textContent=str

    field.style.borderBottomColor='red'

    flag=false
}
function reset(field){
    field.style.borderBottomColor='Green'
}

