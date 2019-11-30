var qtdProjects = 0

function isProjects(){
    console.log("asdasd")
    if(qtdProjects > 0){
        document.querySelector(".myProjectsGrid").innerHTML += "<div class='projectInfoCard'> <h3>Nome do Projeto.</h3> </div>"
    }else{
        document.querySelector(".divMyProjects").innerHTML += "<div class='divBtnMyProjetcs'> <button >Criar Projeto</button> </div>";
    }
}

console.log("huuuuuuuuuuuuuuuum")

window.onload = isProjects;