function giveaway(playerCount = 10){
    const prize_get = ()=>{
        let r = new Array(5).fill(null).reduce((sum) => sum * Math.random(), Math.random());

        let rub = 1 + Math.round(
            r ** 1 * 10000 + Math.random()
            ) / 100,
            kop = Math.round(Math.random() * 100) / 100;
        return rub + kop;

    }
    function median(values) {
        if (values.length === 0) return 0;

        values.sort(function (a, b) {
            return a - b;
        });

        let half = Math.floor(values.length / 2);

        if (values.length % 2)
            return values[half];

        return (values[half - 1] + values[half]) / 2.0;
    }
    let i = 0;
    let arr = [];
    while(i++<playerCount){
        arr.push(+prize_get().toFixed(2));
    }
//console.log(arr.sort((a,b)=>a-b));
    console.log(arr);
    console.log('sum ::', arr.reduce((result, current) => result + current, 0))
//console.dir(arr.sort((a,b)=>a-b), {'maxArrayLength': null});
    console.log('median ::', median(arr));
    return arr;
}
//let rand_uid = create_uid();

function rand(min,max) {
    return Math.round(min + Math.random() * (max - min));
}
function randTime(min = 600000, max = 1200000) {
    return rand(min,max);
}
function create_uid(need_count = 8, abc = 0) {
    if (abc === 0) abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    else if (abc === 1) abc = "0123456789";

    let text = "",
        possible = abc;

    for (let i = 0; i < need_count; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const distrib = ((distrib_id, sum, minGA = 200, maxGA = 10000, time = randTime(), userList = []) => {

    function addUser(rand_uid){
        userList.push(rand_uid);
        //const check_user_uid = (rand_uid) =>{}
    }

    for (let i = 0; i < 20; i++) {//генерим подключившихся пользователей
        addUser(create_uid());
    }
    //console.log(userList);
    const userListObj = {}//Object.assign({},userList);
    let arr = giveaway(); //запускаем рандомизотор выдачи, получаем массив
    arr.length = userList.length; //забиваем его нолями до нужного размера

    shuffle(arr);
    //console.log(arr);
    for (let value of userList){
        userListObj[value] = arr.pop();
    }
    //console.log(randTime(),'ms'); время раздачи просто для наглядности
    console.log(userListObj);//как-то передаем эти параметры в sum
    /* userListObj.forEach(() => {//выдаем им деньги
         //uid в качестве ключей и суммой в виде свойства
     })*/
})();

//let current_GA = new GA();