let moneyO = document.querySelector('.moneyO')
let i = 0



let tham = setInterval( ()=>{
    count()
} , 100 / item.dataset.AmiOdimoJaIchha)

let moneyON = document.querySelector('.moneyON')




let thamTH = setInterval( ()=>{
    count()
} , 100 / item.dataset.AmiOdimoJaIchha)



let moneyONE = document.querySelector('.moneyONE')


let count = ()=>{
    i++
    moneyONE.innerHTML = i
    if(i == result.dataset.AmiOdimoJaIchha){
        clearInterval(thamTHAM)
    }
}

let thamTHAM = setInterval( ()=>{
    count()
} , 100 / item.dataset.AmiOdimoJaIchha)

























