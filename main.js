alert ('enter all values in meters(m)')
let length = prompt ('Length...')
let height = prompt ('Height...')
let width = prompt ('Width...')
    
    const size = 2.1 //sheet size 
    const sheetcost = 20 
    
    const baysi = 8
    const priceOfSteel = 2.59 //per kg 



        let sheets = (length * width / size )  //take in consideration pitch and overlap
        roofcost = (sheets * sheetcost)

        let bays = (length / baysi)  /// finds number of bays 
         hkg = (height * 23 ) ///height to kg 
         wkg = (width * 23)  ///width to kg 
         kg = (hkg + wkg) //gives kg of height and width 
        totalkg = (kg * bays)  // total weight 
        let steelcost = (totalkg * priceOfSteel)

        scramount = sheets * 4
        const scrprice = 0.5
        scrcost = scrprice * scramount 

    

cost =( roofcost + steelcost + scrcost)

function roundToTwoDecimals(num) {
    let rounded = Math.round(num * 100) / 100;
    return rounded.toFixed(2);
  }
  finalcost = roundToTwoDecimals(cost)

console.log('£' + finalcost)

