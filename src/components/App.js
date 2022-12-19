
import { useState,useEffect } from "react";
import "../styles.css";
import { deltaOfColor, initializeGame, resultantColor } from "../util/util";
import InformationLines from "./InformationLines";
import Source from "./Source";
import Tile from "./Tile";

export default function App() {
  const [tiles, setTiles]=useState([
    [{r:0,g:0,b:0}, {r:0,g:0,b:0}, {r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0}, {r:0,g:0,b:0}, {r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0}],
    [{r:0,g:0,b:0}, {r:0,g:0,b:0}, {r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0}, {r:0,g:0,b:0}, {r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0}],
    [{r:0,g:0,b:0}, {r:0,g:0,b:0}, {r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0}, {r:0,g:0,b:0}, {r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0}],
    [{r:0,g:0,b:0}, {r:0,g:0,b:0}, {r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0}, {r:0,g:0,b:0}, {r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0}],
    [{r:0,g:0,b:0}, {r:0,g:0,b:0}, {r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0}, {r:0,g:0,b:0}, {r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0}],
    [{r:0,g:0,b:0}, {r:0,g:0,b:0}, {r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0}, {r:0,g:0,b:0}, {r:0,g:0,b:0},{r:0,g:0,b:0},{r:0,g:0,b:0}]
  ]);
  const [intialVals, setIntialVals]=useState({});
  const [clickedSources, setClickedSources]=useState([]);
  const [closestColor, setClosestColor]=useState({r:0,b:0,g:0});
  // const [deltaBetweenTarget, setDeltaBetweenTarget]=useState();
  useEffect(()=>{
    setIntialVals(initializeGame())
  },[])
  const w=10;
  const h=4;

  const sourceClickedTopRow=(i, j)=>{
    const clonedTiles=[...tiles];
      const c=j+1;
      if(clickedSources.length===0){
        clonedTiles[i][j].r=255;
        for(let r=i+1,d=1;r<=h;r++,d++){
          clonedTiles[r][c].r=255*((h+1-d)/(h+1))
        }
      }else if(clickedSources.length===1){
        clonedTiles[i][j].g=255;
      for(let r=i+1,d=1;r<=h;r++,d++){
        clonedTiles[r][c].g=255*((h+1-d)/(h+1))
      }
      }else if(clickedSources.length===2){
        clonedTiles[i][j].b=255;
        for(let r=i+1,d=1;r<=h;r++,d++){
          clonedTiles[r][c].b=255*((h+1-d)/(h+1))
        }
      }
      setClickedSources([...clickedSources, `${i}${j}`]);
      setTiles(clonedTiles);
  }

  const sourceClickedBottomRow=(i, j)=>{
    const clonedTiles=[...tiles];
      const c=j+1;
      if(clickedSources.length===0){
        clonedTiles[i][j].r=255;
        for(let r=i-1,d=1;r>=1;r--,d++){
          clonedTiles[r][c].r=255*((h+1-d)/(h+1))
        }
      }else if(clickedSources.length===1){
        clonedTiles[i][j].g=255;
        for(let r=i-1,d=1;r>=1;r--,d++){
          clonedTiles[r][c].g=255*((h+1-d)/(h+1))
        }
      }else if(clickedSources.length===2){
        clonedTiles[i][j].b=255;
        for(let r=i-1,d=1;r>=1;r--,d++){
          clonedTiles[r][c].b=255*((h+1-d)/(h+1))
        }
      }
      setClickedSources([...clickedSources, `${i}${j}`]);
      setTiles(clonedTiles);
  }

  const sourceClickedLeftCol=(i, j)=>{
    const clonedTiles=[...tiles];
      const r=i;
      if(clickedSources.length===0){
        clonedTiles[i][j].r=255;
        for(let c=j+1,d=1;c<=w;c++,d++){
          clonedTiles[r][c].r=255*((w+1-d)/(w+1))
        }
      }else if(clickedSources.length===1){
        clonedTiles[i][j].g=255;
        for(let c=j+1,d=1;c<=w;c++,d++){
          clonedTiles[r][c].g=255*((w+1-d)/(w+1))
        }
      }else if(clickedSources.length===2){
        clonedTiles[i][j].b=255;
        for(let c=j+1,d=1;c<=w;c++,d++){
          clonedTiles[r][c].b=255*((w+1-d)/(w+1))
        }
      }

      setClickedSources([...clickedSources, `${i}${j}`]);
      setTiles(clonedTiles);
     
  }

  const sourceClickedRightCol=(i, j)=>{
    const clonedTiles=[...tiles];
      const r=i;
      if(clickedSources.length===0){
        clonedTiles[i][j].r=255;
        for(let c=j-1,d=1;c>=1;c--,d++){
          clonedTiles[r][c].r=255*((w+1-d)/(w+1))
        }
      }else if(clickedSources.length===1){
        clonedTiles[i][j].g=255;
        for(let c=j-1,d=1;c>=1;c--,d++){
          clonedTiles[r][c].g=255*((w+1-d)/(w+1))
        }
      }else if(clickedSources.length===2){
        clonedTiles[i][j].b=255;
        for(let c=j-1,d=1;c>=1;c--,d++){
          clonedTiles[r][c].b=255*((w+1-d)/(w+1))
        }
      }
      setClickedSources([...clickedSources, `${i}${j}`]);
      setTiles(clonedTiles);
  }

  const handleSourceClick=(i, j)=>{
    if(clickedSources.length===3 || clickedSources.includes(`${i}${j}`)){
      return;
    }

    console.log('clicked sources=',clickedSources);
    console.log(`${i},${j}`)
    if(i===0){
      console.log(`Top row`);
      sourceClickedTopRow(i, j);
      
    }else if(i<=h && j===0){
      console.log(`left col`);
      sourceClickedLeftCol(i, j)
      
    }else if(i===h+1){
      console.log(`bottom row`);
      sourceClickedBottomRow(i, j)
      
    }else if(j===w+1){
      console.log(`right col`);
       sourceClickedRightCol(i, j)
      
    }
    findClosestColor();
  }

  const sourceDroppedTopRow=(i, j, color)=>{
    const clonedTiles=[...tiles];
    const c=j+1;
    clonedTiles[i][j]=color;
    for(let r=i+1,d=1;r<=h;r++,d++){
      clonedTiles[r][c]=resultantColor(tiles[r][0], tiles[r][w+1], tiles[0][c-1], tiles[h+1][c-1]);
    }
    setTiles(clonedTiles);
  }

  const sourceDropedBottomRow=(i, j, color)=>{
    const clonedTiles=[...tiles];
    const c=j+1;
    clonedTiles[i][j]=color;
    for(let r=i-1,d=1;r>=1;r--,d++){
      clonedTiles[r][c]=resultantColor(tiles[r][0], tiles[r][w+1], tiles[0][c-1], tiles[h+1][c-1]);
    }
    setTiles(clonedTiles);
  }

  const sourceDropedLeftCol=(i, j, color)=>{
    const clonedTiles=[...tiles];
    const r=i;
    clonedTiles[i][j]=color;
    for(let c=j+1,d=1;c<=w;c++,d++){
      clonedTiles[r][c]=resultantColor(tiles[r][0], tiles[r][w+1], tiles[0][c-1], tiles[h+1][c-1]);
    }
    setTiles(clonedTiles);
  }

  const sourceDropedRightCol=(i, j, color)=>{
    const clonedTiles=[...tiles];
    const r=i;
    clonedTiles[i][j]=color;
    for(let c=j-1,d=1;c>=1;c--,d++){
      clonedTiles[r][c]=resultantColor(tiles[r][0], tiles[r][w+1], tiles[0][c-1], tiles[h+1][c-1]);
    }
    setTiles(clonedTiles);
  }

  const handleTileDrop=(i, j, color)=>{
    if(i===0){
      console.log(` Drop Top row`);
      sourceDroppedTopRow(i, j, color);
      
    }else if(i<=h && j===0){
      console.log(`Drop left col`);
      sourceDropedLeftCol(i, j, color);
    }else if(i===h+1){
      console.log(`Drop bottom row`);
      sourceDropedBottomRow(i, j, color);
      
    }else if(j===w+1){
      console.log(`Drop right col`);
      sourceDropedRightCol(i,j, color);
    }
    findClosestColor();
  }

  const findClosestColor=()=>{
    let minDelta=100;
    for(let i=1;i<=h;i++){
      for(let j=1;j<=w;j++){
        const delta=deltaOfColor(tiles[i][j], {r:intialVals?.target?.at(0),g:intialVals?.target?.at(1),b:intialVals?.target?.at(2)})
        if(delta<minDelta){
          minDelta=delta
        }
      }
    }
    console.log('minD',minDelta);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="information-lines">
          <InformationLines 
          userId={intialVals.userId}
          moves={intialVals.maxMoves}
          targetColor={{r:intialVals?.target?.at(0),g:intialVals?.target?.at(1),b:intialVals?.target?.at(2)}}
          closestColor={{r:closestColor.r,g:closestColor.g, b:closestColor.b}}
          />
        </div>
        <div className="source-tiles">
         {tiles.map((tileRow, i)=>
          (i===0 || i===tiles.length-1)?
          <div key={i} className="row" style={{marginLeft:'32px'}}>
           {tileRow.map((source, j)=><Source {...source} i={i} j={j} handleTileDrop={handleTileDrop} handleSourceClick={handleSourceClick} key={`${i}${j}`}/>)}
          </div>
          :
          <div key={i} className="row">
           {tileRow.map((tile, j)=>
           (j===0 || j===tileRow.length-1)?
           <Source {...tile} i={i} j={j} handleTileDrop={handleTileDrop} handleSourceClick={handleSourceClick} key={`${i}${j}`}/>:
           <Tile {...tile} i={i} j={j} key={`${i}${j}`}/>
           
           )
           }
           </div>
          
         )
         }
        </div>
      </div>
    </div>
  );
}
