//your JS code here. If required.
const removeBtn = document.querySelector("input");
const colorSelect = document.querySelector("#colorSelect");

let selectedItem = colorSelect.children[colorSelect.selectedIndex];

colorSelect.addEventListener("click",(eve)=>{
    selectedItem = eve.target.children[eve.target.selectedIndex]
    console.dir(eve.target.children[eve.target.selectedIndex])
})

removeBtn.addEventListener("click",(eve)=>{
    selectedItem.remove();
})