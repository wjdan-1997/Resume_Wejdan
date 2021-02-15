const questionsContainer = document.querySelectorAll(".questions-container");// have h2 , svg , p 
const questions = document.querySelectorAll(".questions"); // h2 

function display(event) {
  const childrens = this.children;
   // children for all questions-container
  // [0]: h2.questions
  // [1]: svg
  // [2]: h4
  // [3]: p.answers

  if(!childrens[3].classList.contains("active-p")) // if children [2]: p.answers not have class with active then continue condition
   {
  

    childrens[0].classList.add("questions-active"); // add class for h2 
    childrens[1].classList.add("arrow-active");  // add class for <svg>
    childrens[2].classList.add("active-h4");   // add class for <h4>
    childrens[3].classList.add("active-p");   // add class for <p>
  } else {
    childrens[0].classList.remove("questions-active");
    childrens[2].classList.remove("active-h4"); 
    childrens[3].classList.remove("active-p");  
    childrens[1].classList.remove("arrow-active"); 
}};

questionsContainer.forEach(container => {
  container.addEventListener("click", display)
  console.log('hellooo', display)
})

console.log("fuck" ,questions, "ff",questionsContainer)

