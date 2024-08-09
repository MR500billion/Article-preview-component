let Icon = document.getElementById("Share-icon")

let Profile = document.getElementsByClassName("profile")

let Share = document.getElementsByClassName("socialMedia")


Icon.addEventListener("click",()=>{

for(let i =0;i<Profile.length;i++){

    Profile[i].style.display = "none"
}

for(let i = 0; i<Share.length; i++){

    Share[i].style.display = "flex"
}


document.addEventListener("mousedown",(e)=>{

    if(Share[0].contains(e.target)){

        return;
    }else{
        for(let i =0;i<Profile.length;i++){

            Profile[i].style.display = "flex"
        }
        
        for(let i = 0; i<Share.length; i++){
        
            Share[i].style.display = "none"
        }

    }

    if(DesktopSocials.contains(e.target)){
        DesktopSocials.style.display ="flex";
    }else{

        DesktopSocials.style.display ="none";
    }


    
})
})


let DesktopIcon = document.getElementById("Share2-icon")
let DesktopSocials = document.getElementById("SocialMedi-Desktop")
let ShareIcon = document.getElementById("Share2-icon")

DesktopIcon.addEventListener("click",()=>{

    DesktopSocials.style.display ="flex";
    ShareIcon.style.backgroundColor="hsl(217, 19%, 35%)"
})



document.addEventListener("mousedown",(e)=>{

    if(DesktopSocials.contains(e.target)){
        DesktopSocials.style.display ="flex";
    }else{

        DesktopSocials.style.display ="none";
            ShareIcon.style.backgroundColor=" hsl(210, 46%, 95%)"
    }
})

