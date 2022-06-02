const dropDownTop = document.querySelectorAll(".drop-link-top")
const divDropDowns = document.getElementById("drop-downs")


dropDownTop.forEach(dropTop => {
    dropTop.addEventListener("click",(e) =>{
        e.preventDefault()
        let idRef = e.target.getAttribute("href");
        idRef = idRef.slice(1)
        let selectId = document.getElementById(idRef)
        

        if(selectId.classList.contains("opac")){
            divDropDowns.classList.remove("opac")
            selectId.classList.remove("opac");
            
        } else {
            divDropDowns.classList.add("opac");
            selectId.classList.add("opac");
            
        }
        let liFirst = selectId.querySelector("ul + li + a")
        console.log(liFirst)
        liFirst.focus()

        

        


    
    })
})