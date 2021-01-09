from flask import Flask, request

app = Flask(__name__)


@app.route('/api', methods=['GET', 'POST'])
def auth():
    if request.method == 'POST':
        return {
            'name': request.get_json()
        }
    return {
        'name': "GET"
    }


if __name__ == '__main__':
    app.run(debug=True)
