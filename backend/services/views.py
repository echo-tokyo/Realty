from flask import request

from services.mail import send_mail


def main():
    body_json = request.get_json()

    mail_text = 'ЗАТЫЧКА'

    mail_subject = 'Опрос про недвижимость на сайте'
    send_mail(subject=mail_subject, text=mail_text)

    print(body_json)

    return f"\n{body_json}\n"
