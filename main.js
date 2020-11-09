let c = 0;
function toLog(msg){
    console.log(msg);
}
function forInterval(){
    c++;
    console.log("Start interval: " + c);
}
//setTimeout срабатывает асинхронно, то есть при ее срабатываении остальной код стандартно работает

//задержка перед выполнением ф-ии 
//первым параметром пропиывается название ф-ии 
//вторым прописывается время задержки в милисекудах
//последними через запятую прописываются параметры для функции 
setTimeout(toLog, 1000, Math.random());

//с помощью анонимной функции 
setTimeout(()=> toLog(Math.random()), 2000);

//для того, чтобы прекратить выполнение ф-ии setTimeout нужно занести ее в переменную
let tid = setTimeout(toLog, 1000, Math.random());
//и отчистить ее clearTimeout(), где прараметром будет полученная функция  
clearTimeout(tid);

//setInterval будет работать до бесконечности, пока его не остановить
let iid = setInterval(forInterval, 500);
//очистка интервала
clearInterval(iid);


//на практике setInterval мало применяется 
//для этого используется такая конструкция
function forIntervall(){
    c++;
    console.log("Start interval: " + c);
    if(c<10){
        setTimeout(forIntervall, 500);
    }
}
//данная функция проработает 10 раз 
setTimeout(forIntervall, 500);