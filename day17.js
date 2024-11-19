const a=document.getElementById("btn")
a.addEventListener(`click`,()=>{
    alert("button was clicked")
});
const hover=document.getElementById(`div1`);
hover.addEventListener(`mouseover`,()=>{
    hover.style.backgroundColor=`yellow`;

});
hover.addEventListener(`mouseout`,()=>{
    hover.style.backgroundColor=`purple`;

});
const  text=document.getElementById("input");
text.addEventListener(`keydown`,(e)=>{
    console.log(`youclicked:${e.key}`)
});
const a=document.getElementById(`btn1`)
a.addEventListener(`dblclick`,()=>{
    a.style.backgroundColor=`red`;
});
const  text=document.getElementById("input");
text.addEventListener(`focus`,(e)=>{
    text.style.backgroundColor="yellow"
    
});
const  text=document.getElementById("input");
text.addEventListener(`blur`,(e)=>{
    text.style.backgroundColor="blue"
    
});
const a=document.getElementById("g.p")
a.addEventListener(`click`,(e)=>{
    console.log("grand parent")
});
const b=document.getElementById("parent")
b.addEventListener("click",(e)=>{
    console.log("parent clicked")
});
const c=document.getElementById("child")
c.addEventListener("click",(e)=>{
    console.log("child clicked")
});
const a=document.getElementById("g.p")
a.addEventListener(`click`,(e)=>{
    e.stopPropagation();
    console.log("grand parent")
});
const b=document.getElementById("parent")
b.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("parent clicked")
});
const c=document.getElementById("child")
c.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("child clicked")
});

const a=document.getElementById("g.p")
a.addEventListener(`click`,(e)=>{
    e.stopPropagation();
    console.log("grand parent")
});
const b=document.getElementById("parent")
b.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("parent clicked")
});
const c=document.getElementById("child")
c.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("child clicked")
});


const a=document.getElementById("g.p")
a.addEventListener(`click`,(e)=>{
    e.stopPropagation();
    console.log("grand parent")
});
const b=document.getElementById("parent")
b.addEventListener("mouseover",(e)=>{
    e.stopPropagation();
    console.log("parent clicked")
});
const c=document.getElementById("child")
c.addEventListener("keydown",(e)=>{
    e.stopPropagation();
    console.log("child clicked")
});
const a=document.getElementById("g.p")
a.addEventListener(`click`,(e)=>{
    e.stopPropagation();
    setTimeout((e)=>{
        console.log("grand parent")
        a.style.backgroundColor="yellow";

    },2000);
 
});
const b=document.getElementById("parent")
b.addEventListener("click",(e)=>{
    e.stopPropagation();
   setTimeout((e)=>{
    console.log("parent clicked")
    b.style.backgroundColor="red";
},4000);
    
   });
const c=document.getElementById("child")
c.addEventListener("click",(e)=>{
    e.stopPropagation();
    setTimeout((e)=>{
        console.log("child clicked")
},6000);
c.style.backgroundColor="purple";
   
});
const a=document.getElementById("g.p")
a.addEventListener(`click`,(e)=>{
    e.stopPropagation();
    setTimeout((e)=>{
        console.log("grand parent")
        a.style.backgroundColor="yellow";

    },2000);
 
});
const b=document.getElementById("parent")
b.addEventListener("click",(e)=>{
    e.stopPropagation();
   setTimeout((e)=>{
    console.log("parent clicked")
    b.style.backgroundColor="red";
},2000);
    
   });
const c=document.getElementById("child")
c.addEventListener("click",(e)=>{
    e.stopPropagation();
    setTimeout((e)=>{
        console.log("child clicked")
},2000);
c.style.backgroundColor="purple";
   
});
const a=document.getElementById("g.p")
a.addEventListener(`click`,()=>{
    e.stopPropagation();
    setTimeout((e)=>{
        console.log("grand parent")
        a.style.backgroundColor="yellow";
       

    },2000);

 
},false);


const b=document.getElementById("parent")
b.addEventListener("click",()=>{
    e.stopPropagation();
   setTimeout((e)=>{
    console.log("parent clicked")
    b.style.backgroundColor="red";
  
},2000);

    
   },false);
const c=document.getElementById("child")
c.addEventListener("click",()=>{
    e.stopPropagation();
    setTimeout((e)=>{
        console.log("child clicked")
        c.style.backgroundColor="purple";

},2000);


   
},false);

const a=document.getElementById("g.p")
a.addEventListener(`click`,()=>{
    console.log("grand parent")
        },false);


const b=document.getElementById("parent")
b.addEventListener("click",()=>{
 console.log("parent clicked")
},true);
const c=document.getElementById("child")
c.addEventListener("click",()=>{
   
        console.log("child clicked")
  },false)


   
