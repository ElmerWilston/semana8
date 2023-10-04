const form =document.querySelector("#form");
const input=document.querySelector("#input-pokemon");
form.onsubmit =function(event){
    event.preventDefault();
    console.log(input.value);
    };

