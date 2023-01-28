print('Enter all values in meters(m)')

length = int(input('Length >'))#have to use int as python input function always returns string 
height = int(input('Height >'))
width = int(input('Width >'))

def findcostofshed():

    def numberofsheets():
      sheetsize = 2.1 
      sheets = length * width / sheetsize 
      
      return sheets
    
    def findroofcost():
      sheets = numberofsheets() 
      sheetcost = 20
      roofcost = (sheets * sheetcost)
      
      return roofcost
    
    def findsteelcost():
      baysize = 8
      priceofsteel = 2.59  
      bays = (length / baysize)
      hkg = (height * 23)
      wkg = (width * 23)
      kg = (hkg + wkg)
      totalkg = (kg * bays)
      steelcost = (totalkg + priceofsteel)
      
      return steelcost
    
    def findscrewcost():
      sheets = numberofsheets()
      scrprice = 0.5
      scramount = (sheets * 3)
      screwcost = (scrprice * scramount)
      
      return screwcost
    
    cost =(findroofcost() + findsteelcost() + findscrewcost())

    def twodecimals(num):
      rounded = round(num, 2)
      return rounded 
    
    finalcost = twodecimals(cost)
    print ('£%s' %finalcost)

findcostofshed()
    


    
  