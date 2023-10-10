let showInvalid=document.getElementById("invalid")


function emailValidation(){
  const regxp=/^[a-z].+@.+\.(co)m?/g

const inputValue=document.querySelector("input").value

let result=regxp.test(inputValue)


if (!result && inputValue!=="") {
  showInvalid.innerHTML="valid email required "
  showInvalid.style.color="red"
  input.style.border="1px solid red"
  input.style.backgroundColor="#f7c9b5"
}
else{
  showInvalid.innerHTML=""
  input.style.border="solid hsl(231, 7%, 60%)"
  input.style.backgroundColor="white"
}

}

function buttonClick(){

const regxp=/^[a-z].+@.+\.(co)m?/g

const inputValue=document.querySelector("input").value

let result=regxp.test(inputValue)
  
  if (result) {
      setTimeout(()=>{
        window.location.href="/Newsletter_project/signup_complete.html"
      },500)
    }
    
  else{
   setTimeout(()=>{
     alert("Please enter a valid email first")
   },1000) 
  }
  
}

