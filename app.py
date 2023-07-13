from flask import Flask, render_template, request, jsonify
import transformers
from transformers import pipeline

app = Flask(__name__, template_folder='templates')

@app.route("/")
def index():
    return render_template('index.html')

@app.route('/resumir')
def resumir():
    try:
        texto_completo = request.args.get('texto_completo')
        resumir = pipeline('summarization')
        resposta = resumir(texto_completo, max_length=100, min_length=50)[0].get('summary_text')
    except Exception as e:
        resposta = 'Ops! Ocorreu um erro e eu não pude resumir o seu texto! Erro:{}'.format(e)
    return jsonify(resposta=resposta)
