const dropDownTop = document.querySelectorAll(".drop-link-top");
const main = document.querySelector("main");
const mainContentDiv = document.getElementById("section-select");
const asideSubList = document.querySelectorAll(".topic > ul > li > ul ");

function hideTopics() {   
    let topics = document.querySelectorAll("aside > .topic");
    topics.forEach(topic => {
        if(!topic.classList.contains("hide")){
            topic.classList.add("hide");
        }
    })
}
hideTopics();

function hideSubList(){
    asideSubList.forEach(subUL => {
        if(!subUL.classList.contains("hide")){
            subUL.classList.add("hide");
        }
    })
}
hideSubList()


dropDownTop.forEach(dropTop => {
    dropTop.addEventListener("click",(e) =>{
        e.preventDefault();
        let idRef = e.target.getAttribute("href");
        idRef = idRef.slice(1);
        let selectId = document.getElementById(idRef);
        // Toggle Side Bar
        if(selectId.classList.contains("hide")){
            hideTopics();   
            // hideSubList() // I don't know if I want this to hide or not
            main.classList.remove("hide");
            selectId.classList.remove("hide");
            
        } else {
            main.classList.add("hide");
            selectId.classList.add("hide");
            
        }
        // Focus on sidebar's first list element
        let liFirst = selectId.querySelector("ul > li > a");
        liFirst.focus();
        
        // toggle Aside sub topic links

        let asideDropLinks = selectId.querySelectorAll("ul > li > a");
        let toggle = false;
        asideDropLinks.forEach(drop => {
            drop.addEventListener("click",e => {
                let parent = e.target.parentNode;
                let subList = parent.querySelector("ul ");
               
                if(!toggle){
                    // console.log(parent)
                    console.log("add")
                    hideSubList()
                    subList.classList.remove("hide");
                } else {
                    subList.classList.add("hide")
                    console.log("hide")
                }
                toggle = !toggle;
            })
        })
        
        
    })
})