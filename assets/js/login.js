const getUsers = JSON.parse(localStorage.getItem('users'))
const msg = document.querySelector('#msg')
const form = document.forms[0]
const elem = form.elements
// Autenenticação de usuário
const auth = (email,pass)=>{
    if(verifyData()){
        if(getUsers){
            let userNameFormat = email.replace('.com','').replace('@','')     
            let userData = Object.values(getUsers).filter((item)=>{
                if(item.userName == userNameFormat && item.password == pass ){
                    return item
                }
            })
            if(userData != ''){
                logedUser(userData)   
                cleanInput()
                msg.innerHTML = '<p>permited!</p>'
            }else{ 
                cleanInput()
                msg.innerHTML = '<p>Denied access!</p>' 
            }            
        }else{
            cleanInput()            
            msg.innerHTML = '<p>Create a bill!</p>'        
        }
    }else{
        msg.innerHTML = '<p>Preencha todos os campos!</p>'        
    }
}
// Clear inputs
const cleanInput = ()=>{    
    for (let index = 0; index < elem.length; index++) {        
        elem[index].value = ''
    }
}
// Verificar se os campos estão todos preenchidos
const verifyData = ()=>{    
    if(elem[0].value == '' || elem[1].value == '')
        return false
    else return true
}
// Função usada para inserir os usuários em um localStorage Separado
// para recolha dos seus dados
const logedUser = (data)=>{
    let [{ name, email }] = data    
    const userPermit = {
        name: name,     
        email: email,        
    }
    localStorage.setItem('logedUser',JSON.stringify(userPermit))
}

// LOGIN USER
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let loginData = new FormData(form)
    auth(loginData.get('email'), loginData.get('password'))    
})
//auth('antoniocamposgabrielgmail','antoniocampos')