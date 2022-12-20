let length = prompt ('Length...')
let height = prompt ('Height...')
let width = prompt ('Width...')
    
    const size = 2.1
    const sheetcost = 20
    
    const baysi = 8
    const priceOfSteel = 10



        let sheets = (length * width / size )  //take in consideration pitch and overlap
        roofcost = (sheets * sheetcost)

        let bays = (length / baysi)   //height and length into metric tones
        m2 = (height * width * bays) 
        let steelcost = (m2 * priceOfSteel)

        scramount = sheets * 4
        const scrprice = 0.5
        scrcost = scrprice * scramount 

    

finalcost =( roofcost + steelcost + screwcost)
console.log('£' + finalcost)

