const subjects = document.querySelectorAll(".subject");
const sidebarSubjects = document.querySelectorAll(".sidebar-subject");
const subLists = document.querySelectorAll(".sidebar-subject > ul > li > ul ");
const mainContent = document.getElementById("main-content");
const instructions = document.getElementById("instructions");
const iframe = mainContent.querySelector("iframe");
const allSubTopics = document.querySelectorAll("aside > div > ul > li > ul > li > a")
/* Hide unselected top subject links. Have Basic Command Line subject in side bar
   when page opens*/
function hideSideSubjects(){
    sidebarSubjects.forEach(sideSub => {
        if(!sideSub.classList.contains('hide')){
            sideSub.classList.add('hide');
        }
    })
}
subjects.forEach(subject => {   
    // Toggle Subject Selection
    subject.addEventListener('click',e => {
        e.preventDefault();
        let href = e.target.getAttribute('href');
        let sideSelect = href.slice(1);
        let selectedSubject = document.getElementById(sideSelect);
        let firstLi = selectedSubject.querySelector("ul li a");
        firstLi.setAttribute("tabindex","0");
        firstLi.focus();
        if(selectedSubject.classList.contains('hide')){
            hideSideSubjects();
            selectedSubject.classList.remove('hide');
        } 
    })
})
// Hide sub sidebar-subject lists
function hideSubLists() {
    subLists.forEach(sub => {        
        if(sub.classList.contains('hide')){
            sub.classList.remove('hide"')
        } else {
            sub.classList.add('hide')
        }
    })
}
hideSubLists()
// sidebar-subjects Event Listener Toggle
sidebarSubjects.forEach(topic => {
    let topicLinks = topic.querySelectorAll("ul > li > a.topic-link")
    topicLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            let parent = e.target.parentNode
            let subList = parent.querySelector('ul')
            if(!subList.classList.contains('hide')){
                subList.classList.add('hide')
            } else {
                hideSubLists();
                subList.classList.remove('hide')
            }
        })
    })
})
//Fill Main-Content

allSubTopics.forEach(a => {
    let toggle = false;
    a.addEventListener('click', e => {
        e.preventDefault();
        let nextA = e.target.nextElementSibling;
        let href = nextA.getAttribute('href');
        if(!toggle){
            instructions.classList.add('hide')
            console.log(instructions)
            iframe.src = href
        } else {
            instructions.classList.remove('hide')
            iframe.src = ""
        }
        toggle = !toggle;
        console.log(href)
        console.log(iframe)

    })
})    

// Found this code at 
//https://www.geeksforgeeks.org/how-to-adjust-the-width-and-height-of-iframe-to-fit-with-content-in-it/
// Adjusting the iframe height onload event
iframe.onload = function()
// function execute while load the iframe
{
  // set the height of the iframe as 
  // the height of the iframe content
  iframe.style.height = 
  iframe.contentWindow.document.body.scrollHeight + 'px';
   

 // set the width of the iframe as the 
 // width of the iframe content
 iframe.style.width  = 
  frame.contentWindow.document.body.scrollWidth+'px';
      
}