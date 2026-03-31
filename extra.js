const paragraphs = document.querySelectorAll(".timeline-text");

document.addEventListener("scroll", function(){
    paragraphs.forEach(paragraph => {
        if(isInView(paragraph)){
            paragraph.classList.add
            ("timeline-text--visible")
        }
    })
})

function isInView(element){
    const rect = element.getBoundingClientRect();
    return (
    rect.bottom > 0 && rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
}
