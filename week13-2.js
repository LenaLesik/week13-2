//let btn1=document.querySelector('#btn');
//let txt=document.querySelector('txt');
const inputDate=document.querySelector('#inputDate');
const resultOutput=document.querySelector('#txt');
const resultOutput2=document.querySelector('#txt2');


function calculateDaysBeforeBD() {
    //Получила дату
    const inputDateStr=inputDate.value;
    //if (typeof(inputDateStr)==='date') {
    console.log(inputDateStr);
    //resultOutput.classList.remove('.hidden');
    //Преобразую ее в таймстамп
    const inputTimestamp=Date.parse(inputDateStr);
    //Получю текущий таймстамп
    const currentTimestamp=Date.now();
    //Рассчет разницы
    const timeDif=inputTimestamp-currentTimestamp;
    console.log(timeDif);
    //Преобразую разницу в дни
    const daysBefore=Math.floor(timeDif/(1000*60*60*24));
    //Вывод на экран
    resultOutput.textContent=`До Дня Рождения осталось ${daysBefore} дней.`;
    //} else {
        resultOutput2.textContent='Введите дату!';
        //resultOutput.classList.add('.hidden');
    //}
}





