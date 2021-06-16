var remove=document.querySelector('#remove')
remove.addEventListener("click",clear)
var edit=document.querySelector('#edit')
edit.addEventListener("click",modify)
var btn=document.querySelector('#btn')
btn.addEventListener("click",submit)


var user=document.querySelector('#tname')
var pass=document.querySelector('#tpass')
var email=document.querySelector('#temail')
var mobile=document.querySelector('#tmobile')
var address=document.querySelector('#taddress')
var country=document.querySelector('#tcountry')
var gender=document.querySelector('#tgender')

var rname=localStorage.getItem('name')
var rmobile=localStorage.getItem('mobile')
var rgender=localStorage.getItem('gender')
var remail=localStorage.getItem('email')
var rcountry=localStorage.getItem('country')
var raddres=localStorage.getItem('address')
var rpass=localStorage.getItem('pass')


temail.innerHTML=remail
tuser.innerHTML=rname
tpass.innerHTML=rpass
tgender.innerHTML=rgender
taddress.innerHTML=raddres
tcountry.innerHTML=rcountry
tmobile.innerHTML=rmobile

function clear() {
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('mobile')
    localStorage.removeItem('gender')
    localStorage.removeItem('mobile')
    localStorage.removeItem('name')
    localStorage.removeItem('address')
    localStorage.removeItem('country')
    localStorage.removeItem('pass')
    alert('Data deleted Successfully :)')
    location.reload()
}

function modify() {
    document.getElementById("efrom").style.display = "block";
}

function submit() {
    var name=document.querySelector('#name').value
    var pass=document.querySelector('#pass').value
    var repass=document.querySelector('#repass').value
    var email=document.querySelector('#email').value
    var mobile=document.querySelector('#mobile').value
    var address=document.querySelector('#address').value
    var mgender=document.querySelector('#genmale')
    var fgender=document.querySelector('#genfemale')
    var country=document.querySelector('#cou')
    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
    var regexMobile = /^\d{3}\d{3}\d{4}$/

    if(name==='' || email==='' || mobile==="" || address==='' || pass==="" || repass === ""){
        alert('Please fill all the fields :( ')
    }
    else{
        if(name.length>20){
            alert('Name maximum length should be less than 20')
        }
        else if (! regexEmail.test(email)) {
            alert("Please enter a valid email address :(")
        }

        else if(! regexMobile.test(mobile)){
            alert("Please enter a valid mobile number :(")
        }
        else if(pass!==repass){
            alert("Conform password does not match")
        }
        else if(mgender.checked===false && fgender.checked===false ){
            alert("Please Select your gender :(")
        }
        else if(country.selectedIndex===0){
            alert('Please Select your country :(')
        }
        else if(address.length>30){
            alert('Address maximum length should be less than 30 :(')
        }
        else{
            localStorage.setItem('name',name)
            localStorage.setItem('email',email)
            localStorage.setItem('mobile',mobile)
            localStorage.setItem('pass',pass)
            if(genmale.checked===true){
                localStorage.setItem('gender',mgender.value)
            }else{
                localStorage.setItem('gender',fgender.value)
            }
            if(country.selectedIndex===1){
                localStorage.setItem('country','india')
            }
            if(country.selectedIndex===2){
                localStorage.setItem('country','other')
            }
            localStorage.setItem('address',address)
            alert('Data inserted Successfully :) ')
            location.reload()
        }
    }
}