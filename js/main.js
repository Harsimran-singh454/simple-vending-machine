window.onload=()=>{
    var btn1 = document.querySelector(".btn1");
    var btn2 = document.querySelector(".btn2");
    var btn3 = document.querySelector(".btn3");

    var drink1 = document.querySelector(".drink1");
    var overflow1 = document.querySelector(".overflow1");
    var drink2 = document.querySelector(".drink2");
    var overflow2 = document.querySelector(".overflow2");
    var drink3 = document.querySelector(".drink3");
    var overflow3 = document.querySelector(".overflow3");


    // Pouring first drink 

    btn1.addEventListener("click", ()=>{
        btn1.classList.toggle("unpressed");
        if(!btn1.classList.contains("unpressed")){
            drink1.style.height = "83px";
            setTimeout(()=>{
            overflow1.classList.add("overflow");
            },5000);
        } else {
            drink1.style.height = "0px";
            overflow1.style.animationName = "none";
            overflow1.classList.remove("overflow");
        }
    })
    

    // pouring second drink
    
    btn2.addEventListener("click", ()=>{
        btn2.classList.toggle("unpressed");
        if(!btn2.classList.contains("unpressed")){
            drink2.style.height = "83px";
            setTimeout(()=>{
                overflow2.classList.add("overflow");
                },5000);
        } else {
            drink2.style.height = "0px";
            overflow2.classList.remove("overflow");

        }
    })
    
    
    // pouring third drink
    
    btn3.addEventListener("click", ()=>{
        btn3.classList.toggle("unpressed");
        if(!btn3.classList.contains("unpressed")){
            drink3.style.height = "83px";
            setTimeout(()=>{
                overflow3.classList.add("overflow");
                },5000);
        } else {
            drink3.style.height = "0px";
            overflow3.classList.remove("overflow");

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

    var nutri = document.querySelector(".nutri");

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

            nutri.style.background = "rgb(236 255 207)";
            nutri.style.color = "black";
      
        } else if(glass.className == "glass-2"){
            name.innerText = drink_info2.name;
            calories.innerText = drink_info2.calories;
            sugar.innerText = drink_info2.sugar;
            fat.innerText = drink_info2.fat;
            protein.innerText = drink_info2.protein;
            energy.innerText = drink_info2.energy;

            nutri.style.background = "rgb(200, 239, 71)";
            nutri.style.color = "black";


        } else if(glass.className == "glass-3"){
            name.innerText = drink_info3.name;
            calories.innerText = drink_info3.calories;
            sugar.innerText = drink_info3.sugar;
            fat.innerText = drink_info3.fat;
            protein.innerText = drink_info3.protein;
            energy.innerText = drink_info3.energy;

            nutri.style.background = "rgb(28, 6, 6)";
            nutri.style.color = "white";


        } else{
            name.innerText = "----";
            calories.innerText = "----";
            sugar.innerText = "----";
            fat.innerText = "----";
            protein.innerText = "----";
            energy.innerText = "----";
        }

        overflow1.classList.remove("overflow");
        overflow3.classList.remove("overflow");
        overflow2.classList.remove("overflow");
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

            nutri.style.background = "rgb(236 255 207)";
            nutri.style.color = "black";

        } else if(glass.className == "glass-2"){
            name.innerText = drink_info2.name;
            calories.innerText = drink_info2.calories;
            sugar.innerText = drink_info2.sugar;
            fat.innerText = drink_info2.fat;
            protein.innerText = drink_info2.protein;
            energy.innerText = drink_info2.energy;

            nutri.style.background = "rgb(200, 239, 71)";
            nutri.style.color = "black";

        } else if(glass.className == "glass-3"){
            name.innerText = drink_info3.name;
            calories.innerText = drink_info3.calories;
            sugar.innerText = drink_info3.sugar;
            fat.innerText = drink_info3.fat;
            protein.innerText = drink_info3.protein;
            energy.innerText = drink_info3.energy;

            nutri.style.background = "rgb(28, 6, 6)";
            nutri.style.color = "white";
        } else{
            name.innerText = "----";
            calories.innerText = "----";
            sugar.innerText = "----";
            fat.innerText = "----";
            protein.innerText = "----";
            energy.innerText = "----";
        }

        overflow1.classList.remove("overflow");
        overflow3.classList.remove("overflow");
        overflow2.classList.remove("overflow");

    }

    
}