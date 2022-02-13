import json
from flask import Flask, render_template, request


app = Flask(__name__)

@app.route("/nfc/read")
def nfc_read():
    UID ={
         'name': "felix", 
         'role':'',
         'UID': "12345" 

         }
    headers = {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
    }
    return (json.dumps(UID),200,headers)
    
if __name__ == "__main__":
    app.run()