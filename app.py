from flask import Flask, render_template, request
import json

app = Flask(__name__)


@app.route('/', methods=('GET', 'POST'))
def index():
    escolha = None
    with open('./static/dados.json') as f:
        dados = json.load(f)
    if request.method == 'POST':
        escolha = request.form['escolha']
        print(escolha)
    return render_template('index.html', dados=dados, escolha = escolha)


@app.route('/vitoria', methods=('GET', 'POST'))
def vitoria():
    return render_template('vitoria.html') 

if __name__ == '__main__':
    app.run(debug=True)
