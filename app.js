const container=document.getElementById("container");
const button=document.getElementById("button");

for(let i=0;i<15;i++){
const row=document.createElement("div");
row.classList.add('row');
container.appendChild(row);

  for(let i=0;i<15;i++){
    const square=document.createElement("div");
    square.classList.add('square');
    row.appendChild(square);
    square.onmouseover = function(){
      square.classList.add('red');
    }
    button.onclick = function(){
      let wholeGrid = document.querySelectorAll('.square');
      //let wholeGrid = document.getElementsByClassName('square');
      wholeGrid.forEach(oneGrid => oneGrid.classList.remove('red'));
      //console.log(wholeGrid);
    }
  }
};
