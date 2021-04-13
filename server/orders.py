import csv
import pandas as pd
import json
from donuts import createDonut



# 
#
def getTotal(id, order, total, refunded):
    return  {"Id" : round(id), "Order" : order, "Total" : total, "Refunded": refunded}


# 
#
def createOrderObject(id, order, total, refunded):
    order = eval(order)
    return  {"Id" : round(id), "Order" : order, "Total" : total, "Refunded": refunded}
    

#  
#  
#  
def refundOrder(id):
    response = {}
    location = './db/orders.csv'
    orders_csv = pd.read_csv(location)
    
    orderID = int(id)
    orderID = orderID - 1
    
    if orders_csv.iloc[orderID,3] == True:
        orders_csv.iloc[orderID,3] = False
    else:
        orders_csv.iloc[orderID,3] = True
    orders_csv.to_csv(location, index=False)

    for i, row in orders_csv.iterrows():
        response[row['Id']] = createOrderObject(row['Id'],row['Order'],row['Total'],row['Refunded'])
    return response


#  
#  
#  
def getOrders():
    response = {}
    location = './db/orders.csv'
    orders_csv = pd.read_csv(location)
    for i, row in orders_csv.iterrows():
        response[row['Id']] = createOrderObject(row['Id'],row['Order'],row['Total'],row['Refunded'])
    return response



def updateDonutInventory(order):
    outputJSON = {}
    location = './db/donuts.csv'
    donuts_CSV = pd.read_csv(location)
    for i, row in donuts_CSV.iterrows():

        updated_inventory = row['Inventory']
        if row['Name'] in order:
            updated_inventory = updated_inventory - order[row['Name']]
            donuts_CSV.loc[i, ['Inventory']] = updated_inventory

        outputJSON[row['Name']] = createDonut(i + 1,row['Name'],row['Price'],updated_inventory)
    donuts_CSV.to_csv(location, index=False)

    return outputJSON



def createOrder(order):

    outputJSON = {}
    location = './db/orders.csv'
    orders_CSV = pd.read_csv(location)
    obj = eval(order)

    Id = len(orders_CSV) + 1
    orders_CSV.loc[(Id),['Id', 'Order', 'Total', 'Refunded']] = [Id, obj['order'], obj['total'], False]
    orders_CSV['Id'] = orders_CSV['Id'].astype(int)


    response = updateDonutInventory(obj['order'])
    orders_CSV.to_csv(location, index=False)


    return response
