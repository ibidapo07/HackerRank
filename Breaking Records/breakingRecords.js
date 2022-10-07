function breakingRecords(scores) {
    // Write your code here
    let [highest,lowest] = [scores[0],scores[0]];
    let record = [0,0];
    
    for(let i of scores){
        if(i > highest){
            highest = i;
            record[0] += 1;
        }
        if(i < lowest){
            lowest = i;
            record[1] += 1;
        }
    }

    return record
}
