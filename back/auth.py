from flask import Flask, request, url_for
from flask_mail import Mail, Message
from itsdangerous import URLSafeTimedSerializer, SignatureExpired

app = Flask(__name__)

app.config.from_pyfile('config.cfg')

s = URLSafeTimedSerializer('abcd')

mail = Mail(app)


@app.route('/login', methods=['GET', 'POST'])
def auth():
    if request.method == 'GET':
        return {"action": "none"}
    email = request.get_json()['email']
    token = s.dumps(email, salt='email-confirm')
    msg = Message('Email Confirmation', sender='graphtheorytool@gmail.com', recipients=[email])
    link = "http://localhost:3000/" + "confirm_email/" + token
    msg.body = 'Your email confirmation link is {}. Thanks and have a wonderful day!'.format(link)
    mail.send(msg)
    return {"token": token}


@app.route('/confirm_email/<token>', methods=['GET', 'POST'])
def confirm_email(token):
    if request.method == 'POST':
        try:
            email = s.loads(token, salt='email-confirm', max_age=600)
        except SignatureExpired:
            return {'status': "Expired"}
        except:
            return {'status': "Invalid"}
        return {'status': "Accepted"}
    return {'status': "None"}


if __name__ == '__main__':
    app.run(debug=True)