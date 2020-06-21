import datetime
import json

from flask import Flask, request, abort, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy

from .server_utils import throw_error, validate_required_fields

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(32), unique=True, nullable=False)
    email = db.Column(db.String(32), unique=False, nullable=False)
    # NEVER DO THIS OUTSIDE OF A HACKATHON, VERY INSECURE
    password = db.Column(db.String(32), unique=False, nullable=False)
    has_done_survey = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}


class JournalEntry(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(90), unique=False, nullable=False)
    body = db.Column(db.String(500), unique=False, nullable=False)
    create_date = db.Column(db.DateTime, nullable=False,
                            default=datetime.datetime.utcnow)

    def __repr__(self):
        return '<JournalEntry %r>' % self.title

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/signup', methods=['POST'])
def sign_up():
    expected_fields = ['email', 'username', 'password', 'passwordConf']
    req_dict = request.get_json()
    validate_required_fields(req_dict,expected_fields)
    if req_dict['password'] != req_dict['passwordConf']:
        throw_error('Passwords do not match')
    user = User(username=req_dict['username'], email=req_dict['email'], password=req_dict['password'])
    db.session.add(user)
    db.session.commit()
    return jsonify(user.as_dict())


@app.route('/login', methods=['POST'])
def log_in():
    expected_fields = ['username','password']
    req_dict = request.get_json()
    validate_required_fields(req_dict,expected_fields)
    found_user = User.query.filter_by(username=req_dict['username'], password=req_dict['password']).first()
    if not found_user:
        throw_error('Invalid username and/or password')
    else:
        return jsonify(found_user.as_dict())