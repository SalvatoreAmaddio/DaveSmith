let skills=document.getElementsByClassName("skill");
let divImg;
let h;

function res()
{
    for(let i=0; i < skills.length; i++) 
    {
        divImg=skills[i].children[0];
        h = skills[i].children[1].offsetHeight;
        divImg.style.height=`${h}px`;
    }
};

document.body.onload = ()=>{res();};
window.onresize = ()=>{res();};

if (window.innerWidth>500.5) 
{
    const nav=document.getElementById("navBar");
    const navLogo = document.getElementById("navBarLogo");
    window.addEventListener("scroll",
    () => {
            navLogo.style.display="none";
            var rect = nav.getBoundingClientRect();
            if (rect.top==0) 
            {
                navLogo.style.display="block"
            }
    });
}