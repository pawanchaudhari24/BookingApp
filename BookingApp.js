function saveToLocalStorage(event){
    event.preventDefault();
  
    const name=event.target.name.value;
    const email=event.target.email.value;
    const number=event.target.number.value;
    const date=event.target.date.value;
    const time=event.target.time.value;
   
    // localStorage.setItem('name',name);
    // localStorage.setItem('email',email);
    // localStorage.setItem('number',number);
    // localStorage.setItem('date',date);
    // localStorage.setItem('time',time);
  
   let obj ={
       name,
       email,
       number,
      date,
      time,
   }
   axios.post("https://crudcrud.com/api/aafe98801fa647e19f4229ff5bf17ec3/appointmentData", obj)
   .then((response)=>{
    showUserOnScreen(response.data);
   })
   .catch((err)=>{
      console.log(err);
   });
  
    //localStorage.setItem('userdetails' , JSON.stringify(obj))
    // const obj_strngify = JSON.stringify(obj)
    //  console.log(obj.stringify);
    // localStorage.setItem(obj.email, obj_strngify);
    //  showUserOnScreen(obj);
  }
   window.addEventListener("DOMContentLoaded", () =>{
    axios.get("https://crudcrud.com/api/aafe98801fa647e19f4229ff5bf17ec3/appointmentData")
    .then((response)=>{
      //console.log(response);
      for(var i=0; i < response.data.length;i++){
        showUserOnScreen(response.data[i]);
      }
    })
    .catch((err)=>{
      console.log(err);
    });
   });
  
  function showUserOnScreen(obj){
    const parentEle = document.getElementById('formElements');
    const childEle=document.createElement('li');
    childEle.textContent = obj.name + '-' + obj.email + '-' + obj.number + '-' + obj.date + '-' + obj.time;
    //parentEle.appendChild(childEle);
  
  const deleteButton = document.createElement('input');
  deleteButton.type = 'button';
  deleteButton.value = 'delete';
  deleteButton.onclick=() => {
    //localStorage.removeItem(obj.email);
    axios.delete(`https://crudcrud.com/api/aafe98801fa647e19f4229ff5bf17ec3/appointmentData/${obj._id}`)
    .then((res)=>{
     // console.log(res);
    })
    .catch((err)=>console.log(err));
    parentEle.removeChild(childEle);
  };
  
  const editButton = document.createElement('input');
  editButton.type = 'button';
  editButton.value = 'Edit';
  editButton.onclick=() => {
    //localStorage.removeItem(obj.email);
    axios.delete(`https://crudcrud.com/api/aafe98801fa647e19f4229ff5bf17ec3/appointmentData/${obj._id}`)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    });
    parentEle.removeChild(childEle);
    document.getElementById('name').value = obj.name;
    document.getElementById('email').value = obj.email;
    document.getElementById('number').value = obj.number;
    document.getElementById('date').value = obj.date;
    document.getElementById('time').value = obj.time;
  }
  childEle.appendChild(editButton);
  childEle.appendChild(deleteButton);
  parentEle.appendChild(childEle);
  }