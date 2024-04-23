from flask_cors import CORS

from settings.constants import app
from services import views


app.add_url_rule("/api", methods=["POST"], view_func=views.main)
CORS(app, resources={
    "/api": {
        "origins": "*"
    }
})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port='5555')
