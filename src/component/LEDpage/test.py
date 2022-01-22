import json
from flask import Flask, render_template, request


app = Flask(__name__)

@app.route("/<deviceName>/<action>")
def action(deviceName, action):
    return json.loads(deviceName)
    
if __name__ == "__main__":
    app.run(host='127.0.0.1', port=80, debug=True)