(function(){
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
            console.log(selectId)
            let asideDropLinks = selectId.querySelectorAll("ul > li > a.drop-link-aside");
            let toggle = false;
            asideDropLinks.forEach(drop => {
                console.log(drop)
                drop.addEventListener("click",e => {
                    let parent = e.target.parentNode;
                    let subUL = parent.querySelector("ul ");
                   console.log(parent)
                    if(!toggle){
                        hideSubList()
                        subUL.classList.remove("hide");
                        console.log(subUL)
                    } else {
                        
                        subUL.classList.add("hide")
                        // subUL.classList.remove("show")
                    }
                    toggle = !toggle;

                    // load ifram ref from sub a ref
                    // let aRefs = parent.querySelectorAll("ul > li > ul > li > a")
                    // aRefs.forEach(aRef => {
                    //     console.log(aRef)
                    //     aRef.addEventListener("click",e => {
                    //         let ref = e.target.nextElementSibling
                    //         console.log(ref)

                    //     })
                    // })

                })
            })
            
            
        })
    })
})()