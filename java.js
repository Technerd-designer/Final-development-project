//Registation form
function validate(){
    let name=document.forms["form"]["name"].value
    if(name == ""){
        alert("Name must be filled out")
        return false
    }
    let email=document.forms["form"]["email"].value
    if(email == ""){
        alert("Email must be filled out")
        return false
    }
    let password=document.forms["form"]["password"].value
    if(password == ""){
        alert("Password must be filled out")
        return false
    }
    else{
        alert("Details have been submitted")
        document.getElementsByClassName('regform').reset()
    }
}