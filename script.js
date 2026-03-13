let player="X"
let board=["","","","","","","","",""]
let vsAI=false

let text="NEON TIC TAC TOE"
let i=0

function typeTitle(){

if(i<text.length){
document.getElementById("title").innerHTML+=text.charAt(i)
i++
setTimeout(typeTitle,80)
}

}

typeTitle()

function startGame(){

vsAI=false
document.getElementById("rules").style.display="none"
document.getElementById("game").style.display="block"

}

function startAI(){

vsAI=true
document.getElementById("rules").style.display="none"
document.getElementById("game").style.display="block"

}

function play(cell,index){

if(board[index]==""){

document.getElementById("clickSound").play()

board[index]=player
cell.innerHTML=player

if(checkWin()){
document.getElementById("status").innerHTML="Player "+player+" Wins!"
highlightWin()
return
}

if(board.includes("")){

player=(player=="X")?"O":"X"
document.getElementById("status").innerHTML="Player "+player+" Turn"

if(vsAI && player=="O"){
setTimeout(aiMove,500)
}

}else{

document.getElementById("status").innerHTML="Game Draw"

}

}

}

function aiMove(){

let empty=[]

for(let i=0;i<board.length;i++){
if(board[i]=="") empty.push(i)
}

let move=empty[Math.floor(Math.random()*empty.length)]

let cells=document.querySelectorAll(".cell")

play(cells[move],move)

}

function checkWin(){

let win=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]

for(let i of win){

let a=i[0],b=i[1],c=i[2]

if(board[a] && board[a]==board[b] && board[a]==board[c]){
return true
}

}

return false

}

function highlightWin(){

let cells=document.querySelectorAll(".cell")

let win=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]

for(let i of win){

let a=i[0],b=i[1],c=i[2]

if(board[a] && board[a]==board[b] && board[a]==board[c]){

cells[a].classList.add("win")
cells[b].classList.add("win")
cells[c].classList.add("win")

}

}

}

function restart(){

board=["","","","","","","","",""]
player="X"

let cells=document.querySelectorAll(".cell")

cells.forEach(cell=>{
cell.innerHTML=""
cell.classList.remove("win")
})

document.getElementById("status").innerHTML="Player X Turn"

}