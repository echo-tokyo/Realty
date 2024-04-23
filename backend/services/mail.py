import smtplib

from settings.constants import MAIL_PASSWORD, MAIL_FROM, MAIL_TO_LIST, logger


# Отправка письма
def send_mail(subject: str, text: str) -> bool:
    mail_body = "\n".join((f"From: {MAIL_FROM}",
                           f"To: {', '.join(MAIL_TO_LIST)}",
                           f"Subject: {subject}",
                           f"{text}"))

    print('Sending start...')
    mail_body = mail_body.encode()  # для русских букв

    server = smtplib.SMTP_SSL(host='smtp.gmail.com', port=465, timeout=5.0)
    try:
        server.login(user=MAIL_FROM, password=MAIL_PASSWORD)

        server.sendmail(from_addr=MAIL_FROM, to_addrs=MAIL_TO_LIST, msg=mail_body)
        return True

    except Exception as error:
        logger.critical(f'Sending mail failed: "{error}"')
        return False

    finally:
        server.quit()


if __name__ == '__main__':
    mail_subject = "Проверка API!!!"
    mail_text = f'''Здесь должен быть длинный текст в результатами опроса на сайте'''

    send_mail(subject=mail_subject, text=mail_text)
