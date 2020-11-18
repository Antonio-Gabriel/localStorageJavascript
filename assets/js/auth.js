const getUsers = JSON.parse(localStorage.getItem('users'))
const msg = document.querySelector('.msg')
const form = document.forms[0]
const elem = form.elements
// Recolha 
form.addEventListener('submit', (e)=>{
    e.preventDefault()       

    if(verifyData()){
        let datas = new FormData(form)
        const user = {
            name: datas.get('name'),
            userName: datas.get('email').replace('.com','').replace('@',''),
            email: datas.get('email'),
            password: datas.get('password')
        }        
        insertDatasIntoLocalSorage(user)    
    }else{
        msg.innerHTML += '<p>Preencha devidamente os campos</p>'        
    }
    
})
// Verificar se os campos estão todos preenchidos
const verifyData = ()=>{    
    if(elem[0].value == '' || elem[1].value == '' || elem[2].value == '')
        return false
    else return true
}
// Limpar as inputs
const cleanInput = ()=>{
    for (let index = 0; index < elem.length; index++) {        
        elem[index].value = ''
    }
}
const getElement = () =>{
        let elem = document.createElement('a')
        const btn = document.querySelector('#formData button')   
        elem.text = 'go to login'
        elem.href = 'login.html'
        btn.setAttribute('style','display: none;')
        form.appendChild(elem)
}
// Inserir o usuário cadastrado no LocalStorage
const insertDatasIntoLocalSorage = (userData)=>{    
    let userList = localStorage.getItem('users')    
    userList = JSON.parse(userList)

    if(userList != null){
        userList = {    
            ...userList,                
            [userData.userName]: userData
        }       
        msg.innerHTML += '<p>Success!</p>'
        cleanInput()
        getElement()
    }else{
        userList = {                            
            [userData.userName]: userData
        }
        msg.innerHTML += '<p>Success!</p>'
        cleanInput()
        getElement()
    }
    localStorage.setItem('users', JSON.stringify(userList))
}

