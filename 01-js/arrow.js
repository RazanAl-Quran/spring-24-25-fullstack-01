const button = document.querySelector("button");
// button.addEventListener('click',function(){
//     console.log('you clicked me');
//     console.log(this);
// });

button.addEventListener('click',()=>{
    console.log('you clicked me');
    console.log(this);
})