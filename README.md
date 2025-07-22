# 💼 Employee Salary Prediction Web App

This is my **final internship project** developed as part of the **AI & ML Internship Program** by **Edunet Foundation in collaboration with IBM**.

The project is a **web-based machine learning application** built using **Python (Flask)** that predicts an employee’s salary based on various input parameters. It features a trained **Random Forest Regressor** model and is deployed using **Docker** on **Render**.

---

## 🚀 Features

- Predicts employee salary based on:
  - Education
  - Experience
  - Location
  - Job Title
  - Age
  - Gender
- Flask backend with REST API
- Clean, animated frontend with HTML, CSS, JavaScript
- Deployed on Render via Docker

---
🚀 Live Link of Employee Salary Prediction:<br> - https://employee-salary-prediction-wpy6.onrender.com/
--- 
## 🖼️ Project Structure

```
Employee-Salary-Prediction/
│
├── Salary-Prediction-Application/
│   ├── ml-api/
│   │   ├── static/
│   │   │   ├── images/
│   │   │   │   ├── profile.jpg
│   │   │   │   └── salary.png
│   │   │   ├── script.js
│   │   │   └── style.css
│   │   ├── templates/
│   │   │   └── index.html
│   │   ├── app.py
│   │   ├── requirements.txt
│   │   └── salary_model.pkl
│   ├── Dockerfile
│   ├── render.yaml
│
├── EmployeeSalaryPredictionNotebook.ipynb
└── salary_model.pkl
```
# 🛠️ Technologies Used

 Frontend       : HTML5, CSS3, JavaScript <br>
 Backend        : Python (Flask) <br>
 ML Model       : RandomForestRegressor (Scikit-learn) <br>
 Deployment     : Docker + Render <br>
 Libraries Used : Pandas, NumPy, Pickle <br>

# ⚙️ How It Works

1. User fills in a form with profile details (education, experience, etc.)
2. The form data is submitted to the Flask backend via the '/predict' API route.
3. Flask receives the data and passes it to the trained ML model.
4. The model (RandomForestRegressor) predicts the salary based on the input.
5. The predicted salary is sent back to the frontend.
6. The frontend displays the result in a clean, animated interface.
---
# 🖥️ Setup Instructions
```
# Clone the repository
git clone https://github.com/kaif0008/Employee-Salary-Prediction.git
cd Employee-Salary-Prediction/Salary-Prediction-Application

# Set up virtual environment (optional)
python -m venv venv
source venv/bin/activate  # For Windows: venv\Scripts\activate

# Install dependencies
pip install -r ml-api/requirements.txt

# Start Flask server
cd ml-api
python app.py - to RUN

# Then go to http://localhost:8080 in your browser.
```
# 📸 Screenshots


# 📚 References
Scikit-learn Documentation - Used for model training and prediction using RandomForestRegressor.
      
      https://scikit-learn.org/stable/documentation.html

Flask Documentation - Used for developing the Python backend and API endpoints.
      
      https://flask.palletsprojects.com/

Pandas Documentation - Used for data manipulation and preprocessing.
      
      https://pandas.pydata.org/docs/

NumPy Documentation: Used for numerical operations and feature handling.
      
      https://numpy.org/doc/

Matplotlib Documentation: Visualization with Python
      
      https://matplotlib.org/stable/users/index.html/

Render Deployment Guide - Referenced for deploying the Flask application with Docker on Render.
      
      https://render.com/docs/deploy-flask/

GitHub Repository - Project codebase hosted and version controlled.
      
      https://github.com/kaif0008/Employee-Salary-Prediction.git

# 🔮 Future Scope
Integrate user login system

Enable CSV uploads for bulk prediction

Store prediction history in a database

Enhance model with deep learning approaches

# 👨‍💼 Author

**Kaif Ansari**

🎓 Final Internship Project – AI & ML Internship by Edunet Foundation with IBM

🌐 GitHub • LinkedIn (https://www.linkedin.com/in/kaif-ansari-3b264b279/)

