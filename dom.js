var form=document.getElementById('addform');
var item=document.getElementById('items');
var itemlist=document.getElementsByClassName('list-group-item');
var filter=document.getElementById('filter');
form.addEventListener('submit',addItem);
item.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);
for(let i=0;i<itemlist.length;i++){
    var editBtn=document.createElement('button');
    editBtn.className='btn btn-sm float-right editBtn';
    editBtn.appendChild(document.createTextNode('EDIT'));
    itemlist[i].appendChild(editBtn);
}
function addItem(e)
{
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var li=document.createElement('li');
    var description=document.getElementById('description').value;
    li.className='list-group-item';
    var newText=document.createTextNode(newItem);
    var newdescription=document.createTextNode(" "+description);
    li.appendChild(newText);
    li.appendChild(newdescription);
   item.appendChild(li);
    var deletebtn=document.createElement('button');
    deletebtn.className='btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);
    item.appendChild(li);
    var editBtn=document.createElement('button');
    editBtn.className='btn btn-sm float-right editBtn';
    editBtn.appendChild(document.createTextNode('EDIT'));
    li.appendChild(editBtn);
    item.appendChild(li);
}
function removeItem(e)
{
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure')){
            var li=e.target.parentElement;
            item.removeChild(li);
        }
    }
}
function filterItems(e)
{
    var text=e.target.value.toLowerCase();
    var items=item.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        var description=item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1 || description.toLocaleLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else
        {
            item.style.display='none';
        }
    });
}
