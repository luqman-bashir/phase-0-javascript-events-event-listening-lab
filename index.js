function addingEventListener(){
    const element= document.getElementById("button")
    if(element){
        element.addEventListener("click",function(){
            console.log('Element clicked!');
            
        });
    }else{
            console.log('Element not found');
            
        }

    }

    module.exports = { addingEventListen};






