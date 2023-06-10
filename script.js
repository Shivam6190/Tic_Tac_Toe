console.log("Welcome to Tic Tac Toe");

let turn ="X";
let gameover=false;

// Arrow function:
// It replaces changeturn=function(){} to this.
//*Function to change the turn.
const changeTurn=()=>{
    return turn==="X"?"O":"X";
}

// Function to check for win.
const checkwin=()=>{
    
    let boxitem=document.getElementsByClassName("boxitem");

    let wins=[
       
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]

    ]
    
    wins.forEach(e=>{
        
        if((boxitem[e[0]].innerText === boxitem[e[1]].innerText) && (boxitem[e[2]].innerText === boxitem[e[1]].innerText) && (boxitem[e[0]].innerText !== "")){
            document.querySelector('.info').innerText= boxitem[e[0]].innerText + " Won"
            gameover=true;
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width="200px"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width='20vw'; 
            
        }
    })

}

//Game Logic
let boxes=document.getElementsByClassName("box");

Array.from(boxes).forEach(element =>{
    let boxitem = element.querySelector('.boxitem');
    element.addEventListener('click',()=>{
        if(boxitem.innerText === '' && (!gameover)){
            boxitem.innerText=turn;
            turn=changeTurn();
            checkwin();

            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });

});

// Add onclick listener to reset button.
reset.addEventListener('click',()=>{
    let boxitem=document.querySelectorAll('.boxitem');
    Array.from(boxitem).forEach(element =>{
        element.innerText=''
    });
    turn= "X";
    gameover=false;
    document.querySelector(".line").style.width='0';
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width=0;
})
