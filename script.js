let n = prompt('Введите ваше имя')
    while (n.length <= 3){
        n = prompt('Имя должно быть больше 3 символов, попробуйте ещё раз')
    }
let a = +prompt('Введите ваш возраст')

    while (a < 15 || a > 61){
        if (a < 15  ){
             a = prompt('Вы должны быть старше 14 лет, попробуйте ещё раз')
        }
        else if (a > 61 ) {
            a = prompt('Вы должны быть младше 60 лет, попробуйте ещё раз')
        }
    }
      
let s = prompt('Вы студент?')
    while(s != "Да" && s != "да" && s != "Yes" && s != "yes"){
        if (s != "Да" && s != "да" && s != "Yes" && s != "yes"){
            stud = prompt('Вы студент?')
        }
    }   