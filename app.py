from flask import Flask, render_template, request
import json

app = Flask(__name__)


@app.route('/')
def index():
    with open('./static/dados.json') as f:
        dados = json.load(f)
    return render_template('index.html', dados=dados)


@app.route('/vitoria')
def vitoria():
    return render_template('vitoria.html') 


@app.route('/derrota')
def derrota():
    return render_template('derrota.html') 

if __name__ == '__main__':
    app.run(debug=True)
