function timeConversion(x) {
    // Write your code here
    let result = ""
    //tenary condition
    x.includes("AM")/*Check if morning*/? result = (x.slice(0,2) != "12"? x.slice(0,x.length-2) : `00${x.slice(2,x.length-2)}`) /*copy time as is into result*/ : 
    result = `${(24-(12-parseInt(x.slice(0,2)))) == 24? '12' : 
    24-(12-parseInt(x.slice(0,2)))}${x.slice(2,x.length-2)}`

   return result
}
