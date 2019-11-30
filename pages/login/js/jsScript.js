var state = {email: "", password: "senha", loginForm: true};
var count = 0;

function updateState(){
    console.log(count)
    count++;
    let inputValue =document.getElementById("email").value;
    let regexEmail = /^\w+[.-]?\w+?@[A-Za-z]+\.com$/;
    let regexEmailBr = /^\w+[.-]?\w+?@[A-Za-z]+\.com.br$/;
    state.email = inputValue;

    if(regexEmail.test(inputValue) || regexEmailBr.test(inputValue)){
        document.getElementById("email").style.outlineColor = "#124E78"
    }else{
        document.getElementById("email").style.outlineColor = "#BD1E1E"
    }
}

const getEmail = () => {
    return state.email;
}

// console.log("State:", state.email);

const handleEntrarClick = (event) => {
    console.log("evente")
    event.preventDefault();
}