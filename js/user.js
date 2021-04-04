const addUser = () =>{
    if(document.getElementById("fName").checkValidity() && document.getElementById("mobile").checkValidity()
    && document.getElementById("lName").checkValidity() && document.getElementById("email").checkValidity()){
    var userList = JSON.parse(localStorage.getItem('users')) || [];
    userList.push({
        userId: Math.floor((Math.random() * 1000) + 1),
        firstName:document.getElementById("fName").value,
        lastName:document.getElementById("lName").value,
        email:document.getElementById("email").value,
        mobile:document.getElementById("mobile").value,
    });
    localStorage.setItem('users',JSON.stringify(userList));
}
}


const updateUser = () =>{
    if(document.getElementById("fName").checkValidity() && document.getElementById("mobile").checkValidity()
    && document.getElementById("lName").checkValidity() && document.getElementById("email").checkValidity()){
    var userList = JSON.parse(localStorage.getItem('users')) || [];
    var userIndex = JSON.parse(userList.
    findIndex(user=> user.userId === parseInt(window.location.search.replace("?",""))))
    userList[userIndex].userId = parseInt(window.location.search.replace("?",""))
    userList[userIndex].firstName = document.getElementById('fName').value
    userList[userIndex].lastName = document.getElementById('lName').value
    userList[userIndex].email = document.getElementById('email').value 
    userList[userIndex].mobile = document.getElementById('mobile').value
    localStorage.setItem('users',JSON.stringify(userList));
    }
}


const deleteUser = () =>{
    var userList = JSON.parse(localStorage.getItem('users')) || [];
    localStorage.setItem('users',JSON.stringify(
        userList.
        filter(user=> user.userId !== parseInt(window.location.search.replace("?","")))))
}

window.onload= ()=>{
    
    if(!window.location.search)
    {
    var addButton = document.createElement('button')
    addButton.innerHTML = "Add"
    addButton.type = "submit"
    addButton.onclick = () => {
        addUser()
    }
    document.getElementById('user-form').append(addButton)
    document.getElementById('form-title').innerHTML = "Add User Details"
    }else{
    document.getElementById('form-title').innerHTML = "Update / Delete User Details"
    var deleteButton = document.createElement('button')
    var updateButton = document.createElement('button')
    deleteButton.innerHTML = "Delete"
    deleteButton.onclick = () => {
        deleteUser()
    }
    updateButton.innerHTML = "Update"
    updateButton.onclick = () => {
        updateUser()
    }
    document.getElementById('user-form').append(updateButton)
    document.getElementById('user-form').append(deleteButton)
    var user = JSON.parse(localStorage.getItem('users')).filter(user=> user.userId === parseInt(window.location.search.replace("?","")))
    document.getElementById('userId').value = user[0].userId
    document.getElementById('fName').value = user[0].firstName
    document.getElementById('lName').value = user[0].lastName
    document.getElementById('email').value = user[0].email
    document.getElementById('mobile').value = user[0].mobile
    }
}
