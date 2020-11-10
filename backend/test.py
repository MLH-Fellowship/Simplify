from flask import Flask
from flask import request, jsonify
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/echo', methods = ['POST'])
def echo():
  start = request.form["s"]
  return start