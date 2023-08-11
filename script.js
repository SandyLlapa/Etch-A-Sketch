
const CANVAS_COLOR= '#EDF4F7';
const CANVAS_SIZE = '600';
const grids=document.querySelector('.grid');

let gridSize = 60;

function createGrid(){

  let square= (CANVAS_SIZE / gridSize)+"px";

  for(let i=0;i<gridSize;i++){
    const begin = document.createElement('div');
    begin.className="begin";
    grids.appendChild(begin);

    for(let j=0;j<gridSize;j++){
      const row = document.createElement('div');
      row.className="row";

      row.style.width=square;
      row.style.height=square;
      begin.appendChild(row);
    }
  }

  


}

createGrid();