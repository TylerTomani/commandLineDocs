const dropDownTop = document.querySelectorAll(".drop-link-top")
const main = document.querySelector("main")
const mainContentDiv = document.getElementById("section-select")

function hideTopics() {   
    let topics = document.querySelectorAll("aside > .topic")
    topics.forEach(topic => {
        if(!topic.classList.contains("hide")){
            topic.classList.add("hide")
        }
    })
}
hideTopics();

function hideSubList(){
    
}


dropDownTop.forEach(dropTop => {
    dropTop.addEventListener("click",(e) =>{
        e.preventDefault()
        let idRef = e.target.getAttribute("href");
        idRef = idRef.slice(1)
        let selectId = document.getElementById(idRef)
        // Toggle Side Bar
        if(selectId.classList.contains("hide")){
            hideTopics();   
            main.classList.remove("hide")
            selectId.classList.remove("hide");
            
        } else {
            main.classList.add("hide");
            selectId.classList.add("hide");
            
        }
        // Focus on sidebar's first list element
        let liFirst = selectId.querySelector("ul > li > a")
        liFirst.focus()
        // Hide sub list 
        // console.log(selectId)
        

        
    
    })
})