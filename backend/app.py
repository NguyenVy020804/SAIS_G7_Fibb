from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

bookings = []

@app.route('/book', methods=['POST'])
def book_car():
    data = request.get_json()
    bookings.append(data)
    return jsonify({"message": "Booking successful!", "total": len(bookings)})

@app.route('/bookings', methods=['GET'])
def get_bookings():
    return jsonify(bookings)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
