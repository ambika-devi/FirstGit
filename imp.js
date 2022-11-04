function saveToLocalStorage(e) {
    e.preventDefault();
    const name=e.target.username.value;
    const email=e.target.emailId.value;
    const obj={
        name,
        obj
    }
    axios.post("https://crudcrud.com/api/af4177ec815646c498fe11f11f3de22e/bookingappointmentdata",obj)
      .then((response)=> {
        showNewUserOnScreen(response.data);
      })
      .catch((err)=> {
        document.body.innerHTML="<h4>Something went wrong</h4>";
      })
      }     
  
 window.addEventListener("DOMContentLoaded",()=>{
    const localStrogeObj=localStorage;
    const localStorageKeys=Object.keys(localStrogeObj);
    for(var i=0;i<localStorageKeys.length;i++){
        const key=localStorageKeys[i];
        const userDetailsString=localStrogeObj[key];
        const userDetailsObj=JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj);
    }
 })
 function showNewUserOnScreen(user) {
    const parentNode=document.getElementById('users');
    const childHTML=`<li> ${user.name} ${user.email} </li>`;
    parentNode.innerHTML=parentNode.innerHTML+childHTML;
 }
//li.style.backgroundColor='blue';
 //li.style.color='white';
 //li.appendChild(document.createTextNode('Ambika'));
 //li.appendChild(document.createTextNode(" "));
 //li.appendChild(document.createTextNode('ambikadevithota5@gmail.com'));
 ////delEdit(li);
 //itemList.appendChild(li);
 
 