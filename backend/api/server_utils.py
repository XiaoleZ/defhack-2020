from flask import abort, jsonify, make_response


def throw_error(message):
    abort(make_response(jsonify(message=message), 403))
