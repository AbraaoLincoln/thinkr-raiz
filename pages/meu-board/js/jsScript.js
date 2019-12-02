// var textAreaHeight = 100, countEnter = 0;
// var qtd = 0, list = [], id = 0;

// const checkScrollBar = () => {
//     console.log("chamou")
//     const elem = document.getElementById("tA");
//     let lines = elem.value.split('\n');

//     if(elem.clientHeight < elem.scrollHeight){
//         elem.style.height = `${elem.scrollHeight}px`;
//         document.querySelector(".mainPage").style.height = `${textAreaHeight}%`
//         textAreaHeight = textAreaHeight + 4;
//         // countEnter = countEnter;
//     }else if(lines.length <= (countEnter - 1)){
//         elem.style.height = `${elem.scrollHeight - 30}px`;
//         if(textAreaHeight > 100){
//             document.querySelector(".mainPage").style.height = `${textAreaHeight - 3}%`;
//             textAreaHeight = state.textAreaHeight - 4;
//             countEnter = countEnter - 1;
//         }else{
//             document.querySelector(".mainPage").style.height = `${textAreaHeight}%`;
//         }
//     }
// }

// const update = (newItemList) => {
//     let newList = stateList.list;

//     newList.push({
//         component: <CardParticipate key={stateList.id} especialidade={newItemList.espc} qtd={newItemList.qtd} delete={deleteCard} id={stateList.id}/>,
//         id: stateList.id
//         }
//     )

//     if((stateList.qtd + 1) >= 3){
//         let h = document.querySelector(".divListRequire").clientHeight;
//         document.querySelector(".divListRequire").style.height = `${h + 20}%`
//     }

//     qtd = qtd + 1;
//     list = newList; 
//     id = id + 1;

// }

const loadIcons = (qtd) => {
    let icons = [];
    let iconNinja = '<i class="fas fa-user-ninja fa-2x"></i>';

    for(let i = 0; i < qtd; i++){
        icons.push(iconNinja);
    }

    return icons;
}

const showAddDeleteBtn = () => {
    let div = document.getElementById(`divTop${0}`);
    div.style.display = "flex";
}

const hiddenAddDeleteBtn = () => {
    let div = document.getElementById(`divTop${0}`);
    div.style.display = "none";
}

const addColaborador = () => {
    let name = document.getElementById("espName").value;
    let qtd = document.getElementById("espQtd").value;
    let icons = loadIcons(qtd).join("");
    let newCard = `
    <div class="divCarP">
        <input value=${name} />
        <div id="iconsParticipate">
            <div id="divBottomIcons" onmouseover="showAddDeleteBtn()" onmouseout="hiddenAddDeleteBtn()">${icons}</div>
            <div class="divTopIcons" id="divTop0">
                <i class="fas fa-minus-circle fa-2x btnRemove" id="btnR" onClick={removeEpc}></i>
                <i class="fas fa-plus-circle fa-2x btnAdd" id="btnA" onClick={addEpc}></i>
            </div>
        </div>
        <div class="divBtnCardP">
            <div class="editOpc"><span class="spanX" onClick={handleDelete}>X</span> </div>
            <button>Quero Participar</button>
        </div>
    </div>`;

    document.querySelector(".divListRequire").innerHTML += newCard;
}