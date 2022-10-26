var form=document.getElementById('addform');
var itemlist=document.getElementById('items');
var filter=document.getElementById('filter');
form.addEventListener('submit',addItem);
itemlist.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);
function addItem(e)
{
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var li=document.createElement('li');
    li.className='list-item';
    li.appendChild(document.createTextNode(newItem));
    itemlist.appendChild(li);
    var deletebtn=document.createElement('button');
    deletebtn.className='btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);
    itemlist.appendChild(li);
}
function removeItem(e)
{
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure')){
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}