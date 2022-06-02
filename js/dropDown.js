(function(){
    const dropDownTop = document.querySelectorAll(".drop-link-top");
    const main = document.querySelector("main");
    const mainContentDiv = document.getElementById("section-select");
    const iframe = mainContentDiv.querySelector("iframe")
    const asideSubList = document.querySelectorAll(".topic > ul > li > ul ");
    
    function hideTopics() {   
        let topics = document.querySelectorAll("aside > .topic");
        topics.forEach(topic => {
            if(!topic.classList.contains("hide")){
                topic.classList.add("hide");
            }
        })
    }
    
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
    
            let asideDropLinks = selectId.querySelectorAll("ul > li > a.drop-link-aside");
            let toggle = false;
            asideDropLinks.forEach(drop => {
    
                drop.addEventListener("click",e => {
                    let parent = e.target.parentNode;
                    let subUl = parent.querySelector("ul ");
                   
                    if(!toggle){
                        hideSubList()
                        subUl.classList.remove("hide");
                    } else {
                        subUl.classList.add("hide")
                    }
                    toggle = !toggle;
                })
    
                // get href from a, put in ifram
                let parent = drop.parentNode;
                let norefs = parent.querySelectorAll("ul > li > ul > li > a.noref")
                norefs.forEach(noref => {
                    let toggle = false;
                    noref.addEventListener("click", e => {
                        let ref = e.target.nextElementSibling.getAttribute("href")
                        if(!toggle){
                            iframe.setAttribute("src",ref);
                        } else {
                            iframe.setAttribute("src","");
    
                        }
                        toggle =! toggle;
                    })
                })
            })
        })
    })
    
    
    
})()