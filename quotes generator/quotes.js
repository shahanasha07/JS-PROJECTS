


// document.getElementById("nav-toggle").addEventListener("click", function() {
//     document.getElementById("nav-items").classList.toggle("show");
// });

function navbartoggle(){
     return document.getElementById("nav-items").classList.toggle("show");   
}





const quotes=[
    " Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",//Albert Einstein
    "Be the change that you wish to see in the world.", //gandi
    "Life is too important to be taken seriously.",
    "The two most important days in your life are the day you are born and the day you find out why.",//Mark Twain
    "Not all of us can do great things. But we can do small things with great love.",//mother teresa
    "It always seems impossible until it's done.",//nelson mandelamo
    "It does not matter how slowly you go as long as you do not stop."//Confucius
];


const images=[
    "./images/albert.jpg",
    "./images/gandhiji.jpg",
    "./images/oscar wilde.jpg",
    "./images/mark twain.jpg" ,
    "./images/mother teresa.jpg",
    "./images/nelson mandela.jpg",
    "./images/confucius.jpg"
];


function change(){
    
  
    // const random=[Math.floor ( Math.random() * quotes.length ) ];

    // document.getElementById("chngquote").innerText=quotes[random]  

    const i=Math.floor(Math.random() * quotes.length);
    document.getElementById("photo").src=images[i];
    document.getElementById("chngquote").innerText=quotes[i];
   
   
}

function picchange(){
  


}


