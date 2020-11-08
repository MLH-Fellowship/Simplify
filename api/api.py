import time
from flask import Flask
from nltk import download
from newspaper import Article

app = Flask(__name__)

@app.route('/api/time')
def get_current_time():
    # Set up punkt
    download('punkt')

    # Get article
    url = 'https://www.nytimes.com/2020/11/07/us/politics/biden-election.html'
    article = Article(url)
    article.download()
    article.parse()

    # Summarize Article
    article.nlp()
    print(article.summary)
    return {'summary': article.summary}


