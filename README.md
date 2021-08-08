# Local Storage Javascript

Explorando o localStorage em um sistema de login

**Exemplo**

```javascript
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
```

Implementação da autenticação usando o local storage...