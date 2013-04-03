import csv, re, cStringIO, codecs, time, random, string

from pattern.web import abs, URL, DOM, plaintext, strip_between
from pattern.web import NODE, TEXT, COMMENT, ELEMENT, DOCUMENT

# Creating the csv output file for writing into as well as defining the writer
output = open("py_refined_output.csv", "wb")
##writer = UnicodeWriter(output)
writer = csv.writer(output)

# add header row
writer.writerow(["Card Name", "Auction Title", "Ended", "Price", "Shipping","TotalPrice", "NumOfCards", "CostPerCard"])

csvfile = open('cs171proj1-refined1.csv','rb')
reader = csv.reader(csvfile)

for row in reader:

    tempList = []
    num = 0

    tempList.append(row[0])
    tempList.append(row[1])
    tempList.append(row[2])
    tempList.append(row[3])
    tempList.append(row[5])

    total = float(row[3])+float(row[5])
    tempList.append(total)

    four =  ['4x','x4','4X','X4','4 x','x 4','4 X','X 4']
    three = ['3x','x3','3X','X3','3 x','x 3','3 X','X 3']
    two =   ['2x','x2','2X','X2','2 x','x 2','2 X','X 2']
    one =   ['1x','x1','1X','X1','1 x','x 1','1 X','X 1']

    count4 = 0
    count3 = 0
    count2 = 0
    count1 = 0 
    num = 1

    for i in four:
        if i in row[1]:
            num = 4
            count4 = 1

    for i in three:
        if i in row[1]:
            num = 3
            count3 = 1

    for i in two:
        if i in row[1]:
            num = 2
            count2 = 1

    for i in one:
        if i in row[1]:
            num = 1
            count1 = 1

    if (count4 + count3 + count2 + count1) <= 1:
        tempList.append(num)
        tempList.append(total/num)

    writer.writerow(tempList)

output.close()



















