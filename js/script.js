let form=document.querySelector('.add')
let InputElem=document.querySelector('input')
let UlList=document.querySelector('ul')
let newItem=document.createElement('li')




form.addEventListener('submit',function(event){
    event.preventDefault()
    })


function addnewToDo(newToDoValue){
    let newliElement=document.createElement('li')
    newliElement.className='list-group-item d-flex justify-content-between align-items-center'

    
    let span=document.createElement('span')
    span.innerHTML=newToDoValue

    let newTrash=document.createElement('i')
    newTrash.className='fa fa-trash-o delete'

    newTrash.addEventListener("click",function(event){
        event.target.parentElement.remove()
     
    });
   
     
    newliElement.append(span,newTrash)
    UlList.append(newliElement)
//   console.log(newliElement)

};


InputElem.addEventListener('keydown',function(event){
let newToDoValue=event.target.value.trim()
if(event.keyCode === 13){
    if (newToDoValue) {
        InputElem.value=''
       addnewToDo(newToDoValue)
    }
} 
});