window.addEventListener("click",function(){
    console.log('Window')
})

document.addEventListener("click",function(){
    console.log('Document')
})

document.querySelector(".div2").addEventListener("click",function(e){
   e.stopPropagation()
    console.log('DIV 2')
})

document.querySelector(".div1").addEventListener("click",function() {
    console.log('DIV 1')
})

document.querySelector(".button").addEventListener("click",function(e){
    e.preventDefault()
    console.log(e.target.innerText = "Clicked!")
})