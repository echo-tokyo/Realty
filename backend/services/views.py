from flask import request, jsonify

from services.mail import send_mail
from services.parse_json import json_to_mail_text


def main():
    body_json = request.get_json()

    mail_subject = 'Опрос про недвижимость на сайте'

    mail_text = json_to_mail_text(json_data=body_json)
    if mail_text == "ERROR":
        return jsonify({"status": "error"}), 400

    send_ok = send_mail(subject=mail_subject, text=mail_text)
    if not send_ok:
        return jsonify({"status": "error"}), 500

    print(mail_text)
    return jsonify({"status": "ok"}), 200
