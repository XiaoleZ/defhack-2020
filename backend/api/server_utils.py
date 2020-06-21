from flask import abort, jsonify, make_response


def validate_required_fields(req_dict: dict, expected_keys: list) -> None:
    if not req_dict:
        throw_error('No JSON')
    for field in expected_keys:
        if field not in req_dict or not req_dict[field]:
            throw_error(f'{field} was expected but not received')


def throw_error(message: str) -> None:
    abort(make_response(jsonify(message=message), 403))
