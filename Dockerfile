FROM python:3.10-slim

WORKDIR /app

COPY Salary-Prediction-Application/ml-api /app/ml-api
COPY Salary-Prediction-Application/ml-api/app.py /app/app.py
COPY Salary-Prediction-Application/ml-api/salary_model.pkl /app/salary_model.pkl
COPY Salary-Prediction-Application/ml-api/templates /app/templates
COPY Salary-Prediction-Application/ml-api/static /app/static

RUN pip install --no-cache-dir -r ml-api/requirements.txt

ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=8080

EXPOSE 8080

CMD ["flask", "run"]
