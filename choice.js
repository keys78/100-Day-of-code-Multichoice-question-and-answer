var questions = [
   {
       prompt: "What is the full meaning of CSS?\n(a) Cascading style \n\
                (b) Cascading Style Sheet\n (c) Carousel Sitting Sun",
       answer: "b"
   },
   {
    prompt: "where is the full meaning of HTML?\n(a) Hypertext Markup Language\n\
             (b) Hyper Text Mad Link\n (c) Higher Typing Manual Log",
    answer: "a"
},
{
    prompt: "Is CSS a Language?\n(a) Yes\n\
             (b) No\n (c) confused ",
    answer: "b"
},
{
    prompt: "where is Media Query used in ?\n(a) Javascript\n\
             (b) Typescript\n (c) CSS",
    answer: "c"
},
{
    prompt: "All programmers are Software engineers?\n(a) Yes\n\
             (b)No",
    answer: "b"
},
]

 var score = 0;

 for(var i=0; i < questions.length; i++){
     var response = window.prompt(questions[i].prompt);
     if(response == questions[i].answer) {
         score++;
         alert("CORRECT!");
     } else {
         alert("WRONG!");
     }
 }
 alert("you got " + score + "/" + questions.length + " " + "Chap!")