export function deltaOfColor(color1, color2){
    // console.log('color1=',color1,' color2=',color2);
    const sqrt=Math.sqrt(Math.pow(color1.r-color2.r, 2)+Math.pow(color1.g-color2.g, 2)+ Math.pow(color1.b-color2.b, 2));
    const root3=Math.sqrt(3);

    return (100*sqrt)/(255*root3);
}

export function generateWidth(){
    const min=10;
    const max=20;
    return Math.floor(Math.random() * (max - min)) + min;
}

export function generateHeight(){
    const min=4;
    const max=10;
    return Math.floor(Math.random() * (max - min)) + min;
}

export function generateMaxMoves(){
    const min=8;
    const max=20;
    
    return Math.floor(Math.random() * (max - min)) + min;
}

export function randomTargetColor(){
    const min=0;
    const max=255;
    const targetColor=[];
    for(let i=0;i<3;i++){
        targetColor.push(Math.floor(Math.random() * (max - min+1)) + min);
    }
    return targetColor;
}

function randomUserId(){
    const chars=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const userIdLength=6;
    let userId='';
    for(let i=0;i<userIdLength;i++){
        userId+=chars[Math.floor(Math.random()*chars.length)];
    }
    return userId;
}

export function resultantColor(color1, color2, color3, color4){
    const r=color1.r+color2.r+color3.r+color4.r;
    const g=color1.g+color2.g+color3.g+color4.g;
    const b=color1.b+color2.b+color3.b+color4.b;
    const f=255/(Math.max(r,g,b,255));
    const result={r:r*f,g:g*f, b:b*f};
    return result;
}

export function initializeGame(){
    return {
        "userId":randomUserId(),
        "width":generateWidth(),
        "height":generateHeight(),
        "maxMoves":generateMaxMoves(),
        "target":randomTargetColor()
    }
}