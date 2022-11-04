var Form=document.getElementById('addmyform')
var exp=document.getElementById('expence');
var desc=document.getElementById('description');
var cate=document.getElementById('category');
var itemlist=document.getElementById('users')
document.addEventListener("submit",addItem)
function addItem(e){
    e.preventDefault();
    if(exp.value==='' || desc.value==='' || cate.value===''){
        alert('please enter fields')
    }
    else{
        let Obj={
            expence:exp.value,
            description:desc.value,
            category:cate.value
        }
axios.post("https://crudcrud.com/api/c8467e310b9c413d97b058c80079adbb/bookingappointment",Obj)
.then((response)=>{
    showonscreen(response.data);
    console.log(response);
})
.catch((err)=>{
    document.body.innerHTML=document.body.innerHTML+"<h4>something wrong</h4>"
    console.log(err)
})
  }
}


window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/c8467e310b9c413d97b058c80079adbb/bookingappointment")
    .then((response)=>{
        console.log(response)
         for(var i=0;i<response.data.length;i++){
            showonscreen(response.data[i])
         }
    })
    .catch((error)=>{
        console.log(error);
    })
})


function showonscreen(data){
    var li=document.createElement('li');
    li.className='item';
    li.appendChild(document.createTextNode(`${data.expence}- ${data.description}`));

    var delbtn=document.createElement('button');
    delbtn.className='delete-btn';
    delbtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(delbtn)

    var edibtn=document.createElement('button');
    edibtn.className='edit-btn';
    edibtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(edibtn)

    itemlist.appendChild(li)


        document.addEventListener('click',deleteitem);

        function deleteitem(e){
            if(e.target==delbtn){
                if(confirm('Are U sure?')){
                    var li=e.target.parentElement;
                    axios.get("https://crudcrud.com/api/c8467e310b9c413d97b058c80079adbb/bookingappointment")
                    .then((response)=>{
                        console.log(response)
                         for(var i=0;i<response.data.length;i++){
                            if(li.innerHTML.indexOf(response.data[i].description)!=-1){
                                axios.delete(`https://crudcrud.com/api/c8467e310b9c413d97b058c80079adbb/bookingappointment/${response.data[i]._id}`)
                                .then()
                                .catch(err=>console.log(err))
                               }

                         }
                    })
                    .catch((error)=>{
                        console.log(error);
                    })
                    itemlist.removeChild(li)
                }
            }
        }
        document.addEventListener('click',edititem);

        function edititem(e){
            if(e.target==edibtn){
                var li=e.target.parentElement;
                axios.get("https://crudcrud.com/api/c8467e310b9c413d97b058c80079adbb/bookingappointment")
                    .then((response)=>{
                        console.log(response)
                         for(var i=0;i<response.data.length;i++){
                            if(li.innerHTML.indexOf(response.data[i].description)!=-1){
                        Form.querySelector('#expence').value=response.data[i].expence
                        Form.querySelector('#description').value=response.data[i].description
                        Form.querySelector('#category').value=response.data[i].categorypro
                        axios.delete(`${response.data[i]._id}`)
                        .then()
                        .catch(err=>console.log(err))
                            }
                    }
                })
                .catch((error)=>{
                    console.log(error);
                })


            itemlist.removeChild(li)
        }
    }  
}