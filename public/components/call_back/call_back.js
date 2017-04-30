/**
 * Created by dashacherednichenko on 22.03.17.
 */
App.controller('callBackCtrl', function ($scope) {

    var vm = this;
    vm.submitClick = function () {
        console.log('text', document.getElementById('form[Сообщение]').value)
        if (document.getElementById('form[Имя]').value=="") {
            // document.getElementById('err_nameCB').innerHTML="Введіть ім'я";
            return false
        } else if(document.getElementById('form[E-mail]').value=="") {
            // document.getElementById('err_mailCB').innerHTML='Введіть пошту';
            // document.getElementById('err_messageCB').innerHTML = 'Введіть повідомлення';
            // document.getElementById('err_nameCB').style.display="none";
            return false
        } else if (document.getElementById('form[Сообщение]').value=="") {
            // document.getElementById('err_messageCB').innerHTML = 'Введіть повідомлення';
            // document.getElementById('err_mailCB').style.display="none";
            return false
        }
        else
        {
            alert("Дякуємо! Найближчим часом з Вами зв'яжуться");
            document.getElementById('form[Имя]').value="";
            document.getElementById('form[E-mail]').value="";
            document.getElementById('form[Сообщение]').value=""
        }



    }


})