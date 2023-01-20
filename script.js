const eqSet = (xs, ys) =>
    xs.size === ys.size &&
    [...xs].every((x) => ys.has(x));   


function disable_remaining(array){
    
}

function myfunc(){
    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1 = document.getElementById("b1") ? document.getElementById("b1").value: null;
    b2 = document.getElementById("b2") ? document.getElementById("b2").value: null;
    b3 = document.getElementById("b3") ? document.getElementById("b3").value: null;
    b4 = document.getElementById("b4") ? document.getElementById("b4").value: null;
    b5 = document.getElementById("b5") ? document.getElementById("b5").value: null;
    b6 = document.getElementById("b6") ? document.getElementById("b6").value: null;
    b7 = document.getElementById("b7") ? document.getElementById("b7").value: null;
    b8 = document.getElementById("b8") ? document.getElementById("b8").value: null;
    b9 = document.getElementById("b9") ? document.getElementById("b9").value: null;

    all=[b1,b2,b3,b4,b5,b6,b7,b8,b9]

    winning=[[b1,b2,b3],[b4,b5,b6],[b7,b8,b9],
            [b1,b4,b7], [b2,b5,b8],[b3,b6,b9],
            [b1,b5,b9], [b3,b5,b7]  ]

    let xset= new Set('X');
    let oset= new Set('0');

    for (let i=0; i<winning.length; i++){
        console.log(new Set(winning[i]));
         if (eqSet(new Set(winning[i]),xset)){            
            document.getElementById("print").innerHTML="!!..Player X won..!!";
            disable_remaining(all);            
           
         }else if(eqSet(new Set(winning[i]),oset)){           
           document.getElementById("print").innerHTML="!!..Player 0 won..!!";
            disable_remaining(all);
         }
    }
    console.log(all);
    if (all.includes('')==false){
        document.getElementById("print").innerHTML="Match draw..!!"
    }


}   

function reset()
{
    location.reload();
    document.setElementById('b1').value = '';
    document.setElementById("b2").value = '';
    document.setElementById("b3").value = '';
    document.setElementById("b4").value = '';
    document.setElementById("b5").value = '';
    document.setElementById("b6").value = '';
    document.setElementById("b7").value = '';
    document.setElementById("b8").value = '';
    document.setElementById("b9").value = '';
    flag=1

}


flag = 1;
function setvalue(id){
    console.log(id);
    if (flag == 1) {
        document.getElementById(id).value = "X";
        document.getElementById(id).disabled = true;
        flag = 0;        
        document.getElementById("print").innerHTML="Player 0's Turn";
        myfunc(); 
    }
    else {
        document.getElementById(id).value= "0";
        document.getElementById(id).disabled = true;
        flag = 1;        
        document.getElementById("print").innerHTML="Player X's Turn";
        myfunc();
}

}
    