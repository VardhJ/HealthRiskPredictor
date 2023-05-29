import React from "react";
import './home.css'
import NavBar from "../../components/navbar/navbar"


export default function Home() {
    return (
        <div className="App">
            <NavBar />
            <div className="content" style={{ marginTop: '60px' }}>
                <h1>Welcome to Your One-Stop Health Risk Predictor!</h1>
                <p>
                    Our web application uses various healthcare-related user inputs such as gender, age, hypertension, smoking status, and more to accurately predict your chances of developing conditions such as stroke, heart failure, hepatitis-C, and cirrhosis.
                </p>
                <p>
                    Our goal is to provide you with an easy-to-use tool that can help you make informed decisions about your health and wellbeing.
                </p>

                <h2>How It Works</h2>
                <p>
                    Our health risk predictor works by analyzing your personal health information and comparing it to known risk factors for various health conditions. We use advanced algorithms to calculate your risk score, which can help you identify potential health concerns before they become a problem.
                </p>
                <p>
                    To get started, simply fill out the form on our homepage with your personal health information. Our algorithm will then analyze your data and provide you with a personalized health risk assessment.
                </p>

                <h2>Why Choose Us</h2>
                <p>
                    There are many reasons to choose Your Health Risk Predictor for your health risk assessment needs:
                </p>
                <ul>
                    <li>Accurate and reliable risk assessments based on the latest medical research and algorithms</li>
                    <li>Easy-to-use interface that makes it simple to input your personal health information</li>
                    <li>Comprehensive risk assessments that cover a wide range of common health conditions</li>
                    <li>Secure and confidential data storage to protect your personal health information</li>
                </ul>
            </div>
        </div>
    );
}
