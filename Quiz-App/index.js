const question=[
    {
        "question":"which of the following is a markup language?",
        "a":'HTML',
        "b":'CSS',
        "c":'JavaScript',
        "d":'SQL',
        "correct":"a",
    },
     {
        "question":"what year was JavaScript launched?",
        "a":'1996',
        "b":'1995',
        "c":'1994',
        "d":'none of the above',
        "correct":"b",
    },
     {
        "question":"what does CSS stands for?",
        "a":'Hypertext Markup language',
        "b":'Cascading  Style Sheets',
        "c":'Jason Object Notation',
        "d":'Helicopters Terminals Motoeboats Lamborginis',
        "correct":"b",
    },
]
let index = 0;
let total = question.length;
let correct = 0; 
let wrong=0;
const queBox = document.getElementById( 'quesBox' );
const option = document.querySelectorAll(".options");
const loadQuestion =()=>{
    if(index ===total){
       return endQuiz();
    }
    else{
        reset();
    }
    const data =question[index];
    queBox.innerText=`${index+1}) ${data.question}`;
    option[0].nextElementSibling.innerText=data.a;
    option[1].nextElementSibling.innerText=data.b;
    option[2].nextElementSibling.innerText=data.c;
    option[3].nextElementSibling.innerText=data.d;
    
}
const submitQuiz=()=>{
     const data =question[index];
    const ans = getans();
    console.log(ans,data.correct)
    if(ans== data.correct){
        correct++;   
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getans =()=>{
    let answer;
        option.forEach(input=>{
            if(input.checked){
               answer = input.value;
            }
        });
        return answer;
    }

   const reset=()=>{
     option.forEach(input=>{
           input.checked = false;
        });
   }

   const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <div style="text-align:center";>
    <h3>Thankyou For Playing Quiz</h3>
    <h2>${correct}/${total} are correct </h2>
    <div>`
   }
loadQuestion();