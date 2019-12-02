var id = 0;
var showDescription = false;


const genId = () => {
    id += 1;
    return id - 1;
}

const loadProjects = () => {
    // let divPai = 
    for(let i = 0; i < 3; i++){
        let id = genId();
        let idDiv = `projectSort${id}`;
        let idTitle = `title${id}`;
        let idProjdes = `projcDesc${id}`;
        
        let element = `<div class="projectSort" id="${idDiv}" onclick="handleClick(event)">
        <div class="projectSortTitle" id="${idTitle}">
            <h3>Titulo do Projeto</h3>
            <div class="divFeedback">
                <i class="fas fa-thumbs-up  iconLike"></i>
                <i class="fas fa-thumbs-down iconDeslike"></i>
            </div>
        </div>
        <div class="projectSortDescription" id="${idProjdes}">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur sint, in ipsum magni molestias perferendis et voluptates harum odio, tempora maxime quod minus ad incidunt cum ullam vero modi molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ducimus explicabo ipsa aut maiores asperiores, alias illum itaque sint recusandae voluptate ipsam? Quisquam sit iusto itaque eos nesciunt dolore dignissimos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae accusantium quisquam architecto nesciunt impedit. Iste minus aperiam aliquam natus beatae ipsum quia, nesciunt explicabo expedita suscipit accusantium omnis maxime laudantium!</p>
        </div>
    </div>`

        document.getElementById("displayPro1").innerHTML += element;
    }
}

const handleClick = () => {
    if(!showDescription){
        document.getElementById("projectSort1000").style.height = "30%";
        document.getElementById("projectSort1000").style.border = "1px solid #11151C";
        document.getElementById("projectSortTitle1000").style.height = "10%";
        document.getElementById("projectSortTitle1000").style.marginTop = "2%";
        // document.getElementById("projectSortDescription1000").style.display = "inline";
        window.setTimeout(displayDesc, 700);
        showDescription = true;
    }else{
        document.getElementById("projectSort1000").style.height = "10%";
        document.getElementById("projectSort1000").style.border = "none";
        document.getElementById("projectSortTitle1000").style.height = "100%";
        document.getElementById("projectSortTitle1000").style.marginTop = "0";
        document.getElementById("projectSortDescription1000").style.display = "none";
        showDescription = false;
    }
}

const displayDesc = () => {
    document.getElementById("projectSortDescription1000").style.display = "inline";
}

window.onload = loadProjects;