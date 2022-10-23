var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
//items[1].textContent='Hello';
items[1].style.backgroundColor='green';
items[2].style.visibility='hidden';
var item=document.querySelectorAll('.list-group-item');
item[1].style.fontWeight='bold';
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}
//for(var i=0;i<items.length;i++)
//{
  //  items[i].style.fontWeight='bold';
//}
//var li=document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);*/
//var item=document.querySelector('.list-group-item');
//item[1].style.backgroundColor='green';