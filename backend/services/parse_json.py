from datetime import datetime

from settings.constants import logger


def json_to_mail_text(json_data: dict) -> str:
    needed_json_keys = {"apartmentOrHouse", "budget", "districts", "newBuildingOrResale", "payment", "phone", "renovatedOrNot", "rooms"}

    if not set(list(json_data)).issubset(needed_json_keys):
        logger.critical(f'Handle json error: "Required JSON keys are not equal to received JSON keys!"')
        return "ERROR"

    # костыль для непостоянного поля с типом квартиры
    rooms = ""
    if rooms_value := json_data.get("rooms", False):
        rooms = f"Тип квартиры: ----- {rooms_value}\n"

    text = f"""Новая анкета о недвижимости.

Квартира/дом: ----- {json_data["apartmentOrHouse"].capitalize()}
{rooms}Бюджет: ----- {str(json_data["budget"])}
Районы: ----- {", ".join(json_data["districts"])}
Новое здание / вторичка: ----- {json_data["newBuildingOrResale"].capitalize()}
Способы расчёта: ----- {", ".join(json_data["payment"])}
Ремонт: ----- {json_data["renovatedOrNot"].capitalize()}

Номер телефона: {"{0}{1}{2}{3}-{4}{5}{6}-{7}{8}-{9}{10}".format(*list(str(json_data["phone"])))}


Дата и время прохождения опроса: {datetime.strftime(datetime.now(), "%d.%m.%Y, %H:%M:%S")}. 
"""

    return text
