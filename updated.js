alert ('Enter all values in meters(m)')

let length = prompt ('Length...')
let height = prompt ('Height...')
let width = prompt ('Width...')
     
    findcostofshed()

function findcostofshed(){
  
  function numberofsheets(){
    const sheetsize = 2.1 
    sheets = (length * width / sheetsize )//take in consideration pitch and overlap
     return sheets;
  }

  function findroofcost(){
    const sheets = numberofsheets() 
    const sheetcost = 20
    roofcost = (sheets * sheetcost)
     return roofcost;
  }

  function findsteelcost(){
    const baysize = 8
    const priceofsteel = 2.59 //per kg 
      bays = (length / baysize)
      hkg = (height * 23)
      wkg = (width * 23)
      kg = (hkg + wkg)
      totalkg = (kg * bays)
      steelcost = (totalkg + priceofsteel)
        return steelcost;
  }

  function findscrewcost(){
    const scrprice = 0.5
      scramount = (sheets * 3)
      screwcost = (scrprice * scramount)
       return screwcost;
   }

   cost =(findroofcost() + findsteelcost() + findscrewcost())

   function twodecimals(num) {
     let rounded = Math.round(num * 100) / 100;
       return rounded.toFixed(2);
   }

   finalcost = twodecimals(cost)
   alert('£' + finalcost)

}
        
