from flask import Flask, request, jsonify, render_template
import pickle
import numpy as np

app = Flask(__name__, static_folder="static", template_folder="templates")

# Loading the trained model
model = pickle.load(open("salary_model.pkl", "rb"))

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    try:
        features = [
            data["education"],
            data["experience"],
            data["location"],
            data["jobTitle"],
            data["age"],
            data["gender"]
        ]
        
        def encode_feature(value, mapping):
            return mapping.get(value, 0)
        
        education_map = {"High School": 1, "Bachelor": 0, "Master": 2, "PhD": 3}
        location_map = {"Urban": 2, "Suburban": 1, "Rural": 0}
        job_map = {"Engineer": 2, "Manager": 3, "Director": 1, "Analyst": 0}
        gender_map = {"Male": 1, "Female": 0}

        processed = [
            encode_feature(data["education"], education_map),
            float(data["experience"]),
            encode_feature(data["location"], location_map),
            encode_feature(data["jobTitle"], job_map),
            float(data["age"]),
            encode_feature(data["gender"], gender_map)
        ]

        prediction = model.predict([processed])[0]
        return jsonify({"predicted_salary": round(prediction, 2)})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
