import csv, re, cStringIO, codecs, time, random, json, pprint

from pattern.web import abs, URL, DOM, plaintext, strip_between
from pattern.web import NODE, TEXT, COMMENT, ELEMENT, DOCUMENT

# Create base array

data = {}
data["AL"] = {"Name":"Alabama"}
data["AK"] = {"Name":"Alaska"}
data["AZ"] = {"Name":"Arizona"}
data["AR"] = {"Name":"Arkansas"}
data["CA"] = {"Name":"California"}
data["CO"] = {"Name":"Colorado"}
data["CT"] = {"Name":"Connecticut"}
data["DE"] = {"Name":"Delaware"}
data["FL"] = {"Name":"Florida"}
data["GA"] = {"Name":"Georgia"}
data["HI"] = {"Name":"Hawaii"}
data["ID"] = {"Name":"Idaho"}
data["IL"] = {"Name":"Illinois"}
data["IN"] = {"Name":"Indiana"}
data["IA"] = {"Name":"Iowa"}
data["KS"] = {"Name":"Kansas"}
data["KY"] = {"Name":"Kentucky"}
data["LA"] = {"Name":"Louisiana"}
data["ME"] = {"Name":"Maine"}
data["MD"] = {"Name":"Maryland"}
data["MA"] = {"Name":"Massachusetts"}
data["MI"] = {"Name":"Michigan"}
data["MN"] = {"Name":"Minnesota"}
data["MS"] = {"Name":"Mississippi"}
data["MO"] = {"Name":"Missouri"}
data["MT"] = {"Name":"Montana"}
data["NE"] = {"Name":"Nebraska"}
data["NV"] = {"Name":"Nevada"}
data["NH"] = {"Name":"New Hampshire"}
data["NJ"] = {"Name":"New Jersey"}
data["NM"] = {"Name":"New Mexico"}
data["NY"] = {"Name":"New York"}
data["NC"] = {"Name":"North Carolina"}
data["ND"] = {"Name":"North Dakota"}
data["OH"] = {"Name":"Ohio"}
data["OK"] = {"Name":"Oklahoma"}
data["OR"] = {"Name":"Oregon"}
data["PA"] = {"Name":"Pennsylvania"}
data["RI"] = {"Name":"Rhode Island"}
data["SC"] = {"Name":"South Carolina"}
data["SD"] = {"Name":"South Dakota"}
data["TN"] = {"Name":"Tennessee"}
data["TX"] = {"Name":"Texas"}
data["UT"] = {"Name":"Utah"}
data["VT"] = {"Name":"Vermont"}
data["VA"] = {"Name":"Virginia"}
data["WA"] = {"Name":"Washington"}
data["WV"] = {"Name":"West Virginia"}
data["WI"] = {"Name":"Wisconsin"}
data["WY"] = {"Name":"Wyoming"}

output = open("JSON_data.js", "wb")

# 2006 - 2009 census data

csvfile00_09 = open('us_census_state_pop_estimates_2000-2009_cleaned.csv','rb')
reader = csv.reader(csvfile00_09)

rowNumber = 0
columnNumber = 0
columns = {}
headings = []

for row in reader:
    
    if rowNumber == 0:
        for item in row:
            print item
            columns[columnNumber] = item
            columnNumber += 1
        
    else:
        print row[0][1:]
        for state in data:
            if row[0][1:] == data[state]["Name"]:   
                for item in row[1:]:
                    if int(columns[columnNumber]) >= 2006:
                        print columns[columnNumber]
                        print item
                        data[state][columns[columnNumber]] = {}
                        data[state][columns[columnNumber]]["Population"] = item
                    columnNumber += 1   

    rowNumber += 1
    columnNumber = 1

# 2010 - 2012 census data

csvfile10_12 = open('us_census_state_pop_change_2010-2012.csv','rb')
reader = csv.reader(csvfile10_12)

rowNumber = 0
columnNumber = 0
columns = {}
headings = []

for row in reader:
    
    if rowNumber == 0:
        print 'First row is ignored'
        #for item in row:
        #    print item
        #    columns[columnNumber] = item
        #    columnNumber += 1
        
    else:
        year = 2010
        column = 4
        print row[column]
        for state in data:
            if row[column] == data[state]["Name"]:   
                for count in range(0,3):
                    data[state][str(year + count)] = {}
                    data[state][str(year + count)]["Population"] = row[column + count]
                    


    rowNumber += 1
    columnNumber = 1

# All gun data

fileString = '_fbi_murder_by_state_by_weapon_cleaned.csv'

for i in range(2006,2012):
    
    fileName = str(i) + fileString
    
    csvfile = open(fileName,'rb')
    reader = csv.reader(csvfile)

    rowNumber = 0
    columnNumber = 0
    columns = {}
    headings = []
    
    for row in reader:
        
        if rowNumber == 0:
            for item in row:
                print item
                columns[columnNumber] = item
                columnNumber += 1
            
        else:
            print row[0]
            for state in data:
                if row[0] == data[state]["Name"]:   
                    for item in row[1:]:
                        print columns[columnNumber]
                        print item
                        #data[state][i][columns[columnNumber]] = {}
                        data[state][str(i)][columns[columnNumber]] = item
                        columnNumber += 1   
    
        rowNumber += 1
        columnNumber = 1


# Write file
data = 'var JSON_data = ' + str(json.dumps(data,sort_keys=True,indent=4, separators=(',', ': ')))

output.write(data)
output.close()
