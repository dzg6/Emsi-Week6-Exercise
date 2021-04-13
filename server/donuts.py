# import requests
import csv
# from bs4 import BeautifulSoup
import pandas as pd
import json
# from pathlib import Path


# Create produce object with name and price
#@return: {object} name and Price
def createDonut(id, name, price, inventory):
    return  {"Id" : round(id), "Name" : name, "Price" : price, "Inventory": inventory}

#  Reads all the fresh produce prices in all available excel sheets
#  folderPath: {string} of the desired folder location
#  @returns: {object} JSON object of all the produce with their appropioate prices
def getDonuts():
    outputJSON = {}
    location = './db/donuts.csv'
    contents = pd.read_csv(location)

    for i, row in contents.iterrows():
        outputJSON[row['Name']] = createDonut(row['Id'],row['Name'],row['Price'],row['Inventory'])
    # outputJSON[product] = createFruit(product, price)
    # else:
    #     # return error
    #     pass
    return outputJSON


def updateDonut(donut):

    outputJSON = {}
    location = './db/donuts.csv'
    contents = pd.read_csv(location)
    obj = eval(donut)
    if'Id' in obj:
        Id = obj['Id'] 
        rowLocation = Id -1
        contents.loc[(rowLocation),['Id', 'Name', 'Price', 'Inventory' ] ] = [Id, obj['Name'], obj['Price'], obj['Inventory']]
        
    else:
        Id = len(contents) + 1
        contents.loc[(Id -1),['Id', 'Name', 'Price', 'Inventory' ] ] = [Id, obj['Name'], obj['Price'], obj['Inventory']]

    
    contents['Id'] = contents['Id'].astype(int)
    contents['Inventory'] = contents['Inventory'].astype(int)
    contents.to_csv(location, index=False)

    
    for i, row in contents.iterrows():
        outputJSON[row['Name']] = createDonut(i + 1,row['Name'],row['Price'],row['Inventory'])
    return outputJSON

def deleteDonut(donut):

    outputJSON = {}
    location = './db/donuts.csv'
    contents = pd.read_csv(location)
    obj = eval(donut)
    row = obj['Id'] - 1
    contents = contents.drop([row])
    
    new_id = []
    contents = contents.reset_index(drop=True)

    for i, row in contents.iterrows():
        new_id.append(i + 1)
        outputJSON[row['Name']] = createDonut(i+1,row['Name'],row['Price'],row['Inventory'])
        

    new_df = pd.DataFrame({'Id': new_id})
    contents.update(new_df)
    contents.to_csv(location, index=False)
    return outputJSON