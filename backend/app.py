from flask import Flask, request, jsonify
import openai
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
openai.api_key = os.environ["OPENAI_API_KEY"]

@app.route('/search', methods=['POST'])
def search():
    query = request.json.get('query', '')

    response = openai.Completion.create(
        engine="davinci",
        prompt=query,
        max_tokens=100,
        n=1,
        stop=None,
        temperature=0.7,
    )

    result = response.choices[0].text.strip()
    return jsonify({"result": result})

if __name__ == "__main__":
    app.run(debug=True)
