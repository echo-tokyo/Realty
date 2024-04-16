import logging
from os import getenv

from flask import Flask
from pathlib import Path
from dotenv import load_dotenv


load_dotenv()


BASEDIR = Path(__file__).parent.parent

MAIL_FROM = getenv('MAIL_FROM')
MAIL_TO_LIST = [elem.strip() for elem in getenv('MAIL_TO_LIST').split(',')]
MAIL_PASSWORD = getenv('MAIL_PASSWORD')


app = Flask(__name__)

logger = logging.getLogger('flask-server')
logging.basicConfig(
    level=logging.INFO,
    filename=f'{BASEDIR}/logs/views_logs.log',
    format='%(levelname)s: [%(asctime)s] ("%(module)s", line %(lineno)s) -- %(message)s',
)
