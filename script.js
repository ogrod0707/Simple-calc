function calc(){

    let palletW = parseInt(document.getElementById("pt-width").value);
    let palletH = parseInt(document.getElementById("pt-height").value);
    let palletL = parseInt(document.getElementById("pt-length").value);
    let doublePallet = document.getElementById("double-pallet").checked;
    
    console.log(doublePallet);
    // let ptAmount = parseInt(document.getElementById("pt-amount").value);
    let oper = document.getElementById("dv").value;
    if(oper ==="20dv"){
        let containerL = 591.9;
        let containerW = 234;
        let containerH = 238;
        let palletR = 0;
        let result = 0;
        
        while(containerL > 5)
        {
            containerL  -= palletL;
            if(containerL > 50){
                palletR++;
            }
           
        }
        console.log(palletR)
        if(palletW*2 < containerW){
            palletR *= 2;
        }
        if(doublePallet){
            palletR *= 2;
        }
        document.getElementById("result").innerHTML = "Można załadować " +palletR+" palet";
    }
    if(oper ==="40dv"){
        let containerL = 1204.5;
        let containerW = 230.9;
        let containerH = 237.9;
        let palletR = 0;
        let result = 0;
        
        while(containerL > 5)
        {
            containerL  -= palletL;
            if(containerL > 50){
                palletR++;
            }
           
        }
        console.log(palletR)
        if(palletW*2 < containerW){
            palletR *= 2;
        }
        if(palletH*2 < containerH){
            palletR *= 2;
        }
        document.getElementById("result").innerHTML = "Można załadować "+palletR;
    }
    // else if (oper ==="40dv"){
    //     let resul = ptWidth+ptHeight;
    //     document.getElementById("result").innerHTML = resul+"NARa";
    // }
   
    
    

}
