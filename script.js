const fullName = document.querySelector("#name");
const fullemail = document.querySelector("#email");
const fullAge = document.querySelector("#age");
const btn = document.querySelector('#submit');
const mainfeild = document.querySelector("#tbody");
let arr = [];
let  currentindex ;


let main = ()=>{
    mainfeild.innerHTML = arr.map((val , index)=>
    `
    <tr>
        <td>${val.name}</td>
        <td class="email">${val.email}</td>
        <td>${val.age}</td>
        <td class="email">
            <button id = "edit" onclick = "editBtn(${index})">Edit</button>
            <button id = "delete" onclick = "deleteBtn(${index})">delete</button>
        </td>
    </tr>
    `
    )
    .join('')
}

const addUser = () => {
  let obj = {};
  obj.name =fullName.value;
  obj.email = fullemail.value;
  obj.age = fullAge.value;
  arr.push(obj);
  main();
};


const deleteBtn = (index)=>{
    let update = arr.filter((x,dItem)=> dItem !== index);
    arr = update;
    main();
}

const editBtn = (index)=>{
    const element = arr[index];
    console.log(element);
  fullName.value = element.name;
  fullemail.value = element.email;
  fullAge.value = element.age;
  currentindex = index;
  btn.innerText = "Save";
  main();
}

const updated = ()=>{
    let useridx = arr.findIndex((_,index)=> index == currentindex);
    let element = arr[useridx];
    element.name = fullName.value;
    element.email = fullemail.value;
    element.age = fullAge.value;
    arr[useridx] = element;
    currentindex = null;
    btn.innerText = "Submit"
    main(); 
}





btn.addEventListener("click" , ()=>{
    const isAdd = btn.innerText == "Submit";

    if (isAdd) {
      addUser();
    } else {
      updated();
    }
})

main();