const signInBtn=document.querySelector('.signin-btn');
const signUpBtn=document.querySelector('.signup-btn');
const formBox = document.querySelector('.form_box');

signUpBtn.addEventListener('click', ()=> {
   formBox.classList.add('active');
});

signInBtn.addEventListener('click', () => {
   formBox.classList.remove('active');
});

// Регистрация

let regEmail=document.querySelector('#regemail');
let regPass=document.querySelector('#regpass');
let regDublPass=document.querySelector('#regDublPass');
let regBtn=document.querySelector('#reg_btn');

let users={};

function User (email,pass){
   this.email=email;
   this.pass=pass;
}

function createId(users){
   return Object.keys(users).length;
}

regBtn.addEventListener('click', () => {
   const emailUser=regEmail.value;
   const passUser=regPass.value;
   const dblPasUser=regDublPass.value;

   if (passUser!== dblPasUser) {
    return alert('Пароли не совпали. Попробуйте снова.');
   }

   const user = new User (emailUser,passUser);

   
   for (let key in users) {
    if  (emailUser===users[key].email) {
         return alert('Пользователь уже существует!');
      } //
    }
 
   const userId = createId(users);
   users[userId]=user;
   console.log(users);

})


// авторизация

let inEmail=document.querySelector('#inemail');
let inPass=document.querySelector('#inpass');
let inBtn=document.querySelector('#in_btn');


inBtn.addEventListener('click', ()=>{

   const emailUser=inEmail.value;
   const passUser=inPass.value;
  
   for (let key in users) {
      if  (emailUser===users[key].email&&passUser===users[key].pass) {
           return alert('Добро пожаловать!');
        } else {return alert('Неверное имя пользователя или пароль') } //
      }
   
   
})

let clearPass=document.querySelector('#clearpass');

clearPass.addEventListener('click', ()=>{
   const emailUser=prompt('Введите свою почту.');
  
   for (let key in users) {
      if  (emailUser===users[key].email) {
           users[key].pass = prompt('Введите новый пароль.');
           return
        } else {return alert('Пользовательне найден. зарегистрируйтесь') } //
      }
      alert('Пользователя не существует. зарегистрируйтесь')
})