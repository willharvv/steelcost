print('Please enter all values in meters(m)')

while True:
    try:
        length = float(input("length > "))
        if length > 0:
            break
        else:
            print("length should be positive. Please try again.")
    except ValueError:
        print("Invalid length. Please try again.")
while True:
    try:
        height = float(input("height > "))
        if height > 0:
            break
        else:
            print("height should be positive. Please try again.")
    except ValueError:
        print("Invalid height. Please try again.")
while True:
    try:
        width = float(input("width > "))
        if width > 0:
            break
        else:
            print("width should be positive. Please try again.")
    except ValueError:
        print("Invalid width. Please try again.")

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
    


    
  