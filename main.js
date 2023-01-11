const inputBox = document.getElementById('inputbox');
const submitBtn = document.getElementById('btn');
const btn = document.getElementById('btn').innerHTML;
let listCon =document.getElementById("li-container");
let userArry =[];
let editId=null;

 
let StrObj= localStorage.getItem('user');
if(StrObj!==null){
    userArry = JSON.parse(StrObj);
};

displayInput()
submitBtn.onclick = ()=>{
    let name = inputBox.value;
    if(name === ""){
    inputBox.innerText=alert("Please fill the text first...")
    }else{
        if(editId!=null){
            userArry.splice(editId,1,{'name': name});
            editId=null;
        }else{
            userArry.push({'name': name});
            saveInput(userArry)
        }
        
        inputBox.value = "";
        displayInput()
        submitBtn.innerHTML = btn
    }
    
}

function saveInput(userArry){
    let strng = JSON.stringify(userArry)
    localStorage.setItem('user',strng)
    console.log(strng)
    
}

function displayInput(){
  let statement = '';
  userArry.forEach((user , index )=>{
     statement +=`
     <ul id="ul" >
         <div class="numb">${index+1}.</div>
         <li>${user.name}</li>
         <i class='bx bx-edit' id="edit" onclick=" editInput(${index})"></i>
         <i id="dlt" class='bx bxs-trash' onclick="dltInput(${index})" ></i>
 </ul>`
  });
listCon.innerHTML = statement;

};

function editInput(i){
editId=i;
inputBox.value = userArry[i].name
submitBtn.innerHTML="Save Changes"
}

function dltInput(i){

    userArry.splice(i,1);
    saveInput(userArry);
    displayInput()

}

