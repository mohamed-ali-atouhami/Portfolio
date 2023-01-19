
const email_btn=document.getElementById("submit-email")
const inptname=document.getElementById("input-name")
const inptemail=document.getElementById("input-email")
const inptmessage=document.getElementById("input-message")
email_btn.addEventListener("click",(e)=>{
    e.preventDefault()
    fetch("/sendEmail",{method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify({name:inptname.value,email:inptemail.value,message:inptmessage.value})})
    .then(response=>{
        console.log(response)
    }).catch(err=>{
        console.log(err)
    })
}
)
