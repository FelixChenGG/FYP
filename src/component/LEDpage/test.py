import json
from flask import Flask, render_template, request


app = Flask(__name__)

@app.route("/record/all")
def nfc_read():
    UID ={'uid':[{'datetime': "10-20-1998", 
         'msg':'admin'},
         {'datetime': "12-20-2222", 
         'msg':'adn'}]}
         
         
    headers = {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
    }
    return (json.dumps(UID),200,headers)
    
if __name__ == "__main__":
    app.run()