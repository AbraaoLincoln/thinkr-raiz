var qtdProjects = 8

function isProjects(){
    if(qtdProjects > 0){
        for(let i = 0; i < qtdProjects; i++){
            document.querySelector(".myProjectsGrid").innerHTML += "<div class='projectInfoCard'> <h3>Nome do Projeto.</h3> </div>";
        }
    }else{
        document.querySelector(".divMyProjects").innerHTML += "<div class='divBtnMyProjetcs'> <button >Criar Projeto</button> </div>";
    }
}

window.onload = isProjects;