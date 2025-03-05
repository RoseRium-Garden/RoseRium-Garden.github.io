
     //Установите дату, до которой будет обратный отсчет
    const countdownStartDate = new Date("2025-02-28T00:00:00").getTime();
    const countdownEndDate = new Date("2025-02-28T09:21:00").getTime(); // Конец даты
    const reloadDate = new Date("2025-02-28T08:23:00").getTime(); // Дата, когда нужно перезагрузить страницу

     //Обновление счётчика каждую секунду
    const x = setInterval(function() {
         //Получаем текущую дату и время
        const now = new Date().getTime();

         //Вычисляем разницу между текущей датой и началом обратного отсчета
        const countdownDistance = countdownEndDate - now;
        const restartDistance = reloadDate - now; // Время до перезапуска таймера

         //Вычисляем время в днях, часах, минутах и секундах для обратного отсчета
        const days = Math.floor(countdownDistance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((countdownDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((countdownDistance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((countdownDistance % (1000 * 60)) / 1000);

         //Выводим результат в элемент с id="countdown"
        document.getElementById("countdown").innerHTML = days + "д " + hours + "ч " + minutes + "м " + seconds + "с ";

         //Если обратный отсчет завершен, выводим сообщение
        if (countdownDistance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "всё разблокировано";
        }

         //Вычисляем время до перезапуска таймера
        const restartDays = Math.floor(restartDistance / (1000 * 60 * 60 * 24));
        const restartHours = Math.floor((restartDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const restartMinutes = Math.floor((restartDistance % (1000 * 60 * 60)) / (1000 * 60));
        const restartSeconds = Math.floor((restartDistance % (1000 * 60)) / 1000);

         //Выводим результат в элемент с id="restart-timer"
        document.getElementById("restart-timer").innerHTML = "Перезапуск через: " + restartDays + "д " + restartHours + "ч " + restartMinutes + "м " + restartSeconds + "с ";

         //Проверяем, если текущая дата равна дате перезагрузки
        if (now >= reloadDate) {
            //location.reload();
        }
    }, 1000);

//  function changeLanguage(lang) {
//    if (lang === 'ru') {
//      window.location.href = 'en.html';
//    } else {
//      window.location.href = 'index.html';
//    }
//}
//function getBrowserLanguage() {
            // Получаем язык браузера
            //const userLang = navigator.language || navigator.userLanguage; 
            //return userLang.split('-')[0]; 
       // }

        // Функция для загрузки языка
        ///function loadLanguageFile() {
            //const lang = getBrowserLanguage();
            //const fileToLoad = (lang === 'en') ? 'en.html' : 'index.html'; 
            //window.location.href = fileToLoad;
            // Перенаправляем на нужный файл
       // }

        //onload = loadLanguageFile; // Загружаем файл при загрузке страницы







