window.onload=()=>{
    var btn1 = document.querySelector(".btn1");
    var btn2 = document.querySelector(".btn2");
    var btn3 = document.querySelector(".btn3");

    var drink1 = document.querySelector(".drink1");
    var drink2 = document.querySelector(".drink2");
    var drink3 = document.querySelector(".drink3");


    // Pouring first drink 

    btn1.addEventListener("click", ()=>{
        btn1.classList.toggle("unpressed");
        if(!btn1.classList.contains("unpressed")){
            drink1.style.height = "83px";
        } else {
            drink1.style.height = "0px";
        }
    })
    

    // pouring second drink
    
    btn2.addEventListener("click", ()=>{
        btn2.classList.toggle("unpressed");
        if(!btn2.classList.contains("unpressed")){
            drink2.style.height = "83px";
        } else {
            drink2.style.height = "0px";
        }
    })
    
    
    // pouring third drink
    
    btn3.addEventListener("click", ()=>{
        btn3.classList.toggle("unpressed");
        if(!btn3.classList.contains("unpressed")){
            drink3.style.height = "83px";
        } else {
            drink3.style.height = "0px";
        }
    })


    // drinks details objects

    var drink_info1 = {
        name: "Kola",
        calories: "70cal",
        sugar:"100g",
        fat:"120g",
        protein:"0g",
        energy:"300kcal"
    }

    var drink_info2 = {
        name: "Diww",
        calories: "65cal",
        sugar:"90g",
        fat:"110g",
        protein:"0g",
        energy:"210kcal"
    }

    var drink_info3 = {
        name: "spryt",
        calories: "75cal",
        sugar:"120g",
        fat:"100g",
        protein:"0g",
        energy:"310kcal"
    }


    // nutrition html elements declaration

    var name = document.getElementById("name");
    var calories = document.getElementById("calories");
    var sugar = document.getElementById("sugar");
    var fat = document.getElementById("fat");
    var protein = document.getElementById("protein");
    var energy = document.getElementById("energy");


    // movement buttons 
    var left = document.getElementById("left-btn");
    var right = document.getElementById("right-btn");
    var glass = document.getElementById("glass");


    // left button interaction
    left.onclick=()=>{
        var cur_place = Number(glass.className.slice(6))+1;
        if(glass.className == "glass-3"){
            glass.className = "glass-3";
        } else{
            glass.className = "glass-"+ cur_place;
        }
        console.log(glass.className);


        if(glass.className == "glass-1"){            
            name.innerText = drink_info1.name;
            calories.innerText = drink_info1.calories;
            sugar.innerText = drink_info1.sugar;
            fat.innerText = drink_info1.fat;
            protein.innerText = drink_info1.protein;
            energy.innerText = drink_info1.energy;
        } else if(glass.className == "glass-2"){
            name.innerText = drink_info2.name;
            calories.innerText = drink_info2.calories;
            sugar.innerText = drink_info2.sugar;
            fat.innerText = drink_info2.fat;
            protein.innerText = drink_info2.protein;
            energy.innerText = drink_info2.energy;
        } else if(glass.className == "glass-3"){
            name.innerText = drink_info3.name;
            calories.innerText = drink_info3.calories;
            sugar.innerText = drink_info3.sugar;
            fat.innerText = drink_info3.fat;
            protein.innerText = drink_info3.protein;
            energy.innerText = drink_info3.energy;
        } else{
            name.innerText = "----";
            calories.innerText = "----";
            sugar.innerText = "----";
            fat.innerText = "----";
            protein.innerText = "----";
            energy.innerText = "----";
        }
    }



    // right button interaction

        right.onclick=()=>{
        var cur_place = Number(glass.className.slice(6))-1;
        
        if(glass.className == "glass-0"){
            glass.className = "glass-0";
            // glass.style.transform = "scale(1.5)";
        } else{
            glass.className = "glass-"+ cur_place;
        }
        console.log(glass.className);


        if(glass.className == "glass-1"){            
            name.innerText = drink_info1.name;
            calories.innerText = drink_info1.calories;
            sugar.innerText = drink_info1.sugar;
            fat.innerText = drink_info1.fat;
            protein.innerText = drink_info1.protein;
            energy.innerText = drink_info1.energy;
        } else if(glass.className == "glass-2"){
            name.innerText = drink_info2.name;
            calories.innerText = drink_info2.calories;
            sugar.innerText = drink_info2.sugar;
            fat.innerText = drink_info2.fat;
            protein.innerText = drink_info2.protein;
            energy.innerText = drink_info2.energy;
        } else if(glass.className == "glass-3"){
            name.innerText = drink_info3.name;
            calories.innerText = drink_info3.calories;
            sugar.innerText = drink_info3.sugar;
            fat.innerText = drink_info3.fat;
            protein.innerText = drink_info3.protein;
            energy.innerText = drink_info3.energy;
        } else{
            name.innerText = "----";
            calories.innerText = "----";
            sugar.innerText = "----";
            fat.innerText = "----";
            protein.innerText = "----";
            energy.innerText = "----";
        }
    }
}