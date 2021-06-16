var uname= document.querySelector('#uname')
var uemail= document.querySelector('#uemail')
var genm= document.querySelector('#genm')
var genf= document.querySelector('#genf')
var geno=document.querySelector('#geno')
var cou=document.querySelector('#cou')
var mcou=document.querySelector('#mcou')


var btns=document.querySelector('#btns')
var btnr=document.querySelector('#btnr')
var msg=document.querySelector('#msg')

var str=""
btns.addEventListener('click',validte)

function validte(){
   var u_name=uname.value
   var u_email=uemail.value
   var u_genm=genm.value
   var u_genf=genf.value
   var u_geno=geno.value
   var m_cou=mcou.value
   var remail=/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
   
   if (u_name===""){
        error('please enter ur name :(')    
   }  
   else if(u_name.length<5){
        error('please enter valid name len > 5')
   }
   else if(u_email===""){
        error('please enter ur email :(')
   }
   else if(!remail.test(u_email)){
       error('please enter a valid email address contains,@,. :(')
   }
   else if(genm.checked===false && genf.checked===false && geno.checked===false ){
       error('please select ur gender')
   }
   else if(cou.selectedIndex===0){
       error('please select ur country :(')
   }
   else{
            if(cou.selectedIndex===2){
                    mcou.style.display="block"
                    if(m_cou===""){
                      error('please enter ur country name :(')    
                    }
                    else{
                        alert('form submited successfully :)')
                        document.location.reload()
                    }

            }else{
                alert('form submited successfully :)')
                document.location.reload()
            }
            

   }
   
}

function error(str){
    msg.textContent=str
}




