let arr = [
    {
        "n_table": 4
    },
    [
        "f8cd8f1f-0a2d-4d2a-a6c0-597994d83d6b",
        "f8cd8f1f-0a2d-4d2a-a6c0-597994d83d6b",
        "76e50815-92cb-4e33-9880-ee21d5035542",
        "76e50815-92cb-4e33-9880-ee21d5035542",
        "76e50815-92cb-4e33-9880-ee21d5035542",
       
    ] 
]

//no pregunta si hay ptro donde recorro si no si ya esta uno igual donde lo estoy poniendo




const duplicates = () => {  
    let obj = {};
    arr[1].forEach((id) => id in obj ? obj[id]++ : obj[id] = 1)
            
    return Object.entries(obj); 
} 




let array = duplicates()
console.log(array); 