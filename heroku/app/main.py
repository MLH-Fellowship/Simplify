from flask import Flask
from nltk import download
from flask import request
from newspaper import Article
import json
from flask import jsonify

download('punkt')

app= Flask(__name__)
@app.route('/')
def index():
    return "<h1>Welcome to CodingX. Add query?=data={INSERT ARTICLE URL HERE} to get article summary</h1>" 

@app.route("/query")
def query():

    url = request.args.get('data')
    print("HI", url)

    article = Article(url)

    # Get article
    article.download()
    article.parse()

    # Summarize Article
    article.nlp()

    test = {
        "data": "%s" %article.summary
    }
    return jsonify(test)



