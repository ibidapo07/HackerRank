function birthdayCandles(array = []){
    let frequency = {};
    
    //get frequency of candles
    for(let i of array){
        frequency[`${i}`]= (frequency[`${i}`] + 1) || 1
    }
    
    //get one of every candle
    let k = new Set(array)

    //sort in ascending order
    k = Array.from(k).sort((a,b) => a - b);

    // last item in array is the tallest, return value of key of that item in  frequency 
    return frequency[`${k[k.length - 1]}`]
}


console.log(birthdayCandles([18,90,90,13,90,75,90,8,90,43]));