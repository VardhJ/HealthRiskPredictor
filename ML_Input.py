## importing all the libraries
import pandas as pd
import numpy as np


from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import GaussianNB
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split

df = pd.read_csv('healthcare-dataset-stroke-data.csv')
df.head()

# As some of the attributes are object(CategoricalData) we will convert it into numeric format
gender = {'Male': 1,'Female': 2,'Other': 3}
df.gender = [gender[item] for item in df.gender]

marriage = {'Yes': 1,'No': 2}
df.ever_married = [marriage[item] for item in df.ever_married]

work = {'Private': 1,'Self-employed': 2,'Govt_job': 3, 'children': 4, 'Never_worked': 5}
df.work_type = [work[item] for item in df.work_type]

residence = {'Urban': 1,'Rural': 2}
df.Residence_type = [residence[item] for item in df.Residence_type]

smoking = {'smokes': 1,'never smoked': 2,'formerly smoked': 3,'Unknown': 4}
df.smoking_status = [smoking[item] for item in df.smoking_status]

df['bmi'] = df['bmi'].fillna(df['bmi'].mean())

# We will drop useless columns for example id
df=df.drop(df.columns[[0]], axis = 1)


X = df.iloc[:, 0:10]
y = df.iloc[:, 10:].values

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0, shuffle=True)


y_train = np.array(y_train)
y_train = y_train.reshape(-1)


y_test = np.array(y_test)
y_test = y_test.reshape(-1)




# KNN
kn = KNeighborsClassifier(n_neighbors=5, metric='minkowski', p=2)
kn.fit(X_train, y_train)
predictionKN = kn.predict(X_test)



# Training and testing set from Decision tree
dt = DecisionTreeClassifier()
dt.fit(X_train, y_train)
predictionDT = dt.predict(X_test)



# Naive Bayes
nb = GaussianNB()
nb.fit(X_train, y_train)
predictionNB = nb.predict(X_test)



# Random forest
rfc = RandomForestClassifier(n_estimators=50, max_depth=15)
rfc.fit(X_train, y_train)
predictionRFC = rfc.predict(X_test)






def ensemble(X):
    predictionKN = kn.predict(X)
    predictionDT = dt.predict(X)
    predictionNB = nb.predict(X)
    predictionRFC = rfc.predict(X)

    ensemble_prediction = np.zeros(len(predictionDT))
    for i in range(len(predictionDT)):
        ensemble_prediction[i] = predictionDT[i]+predictionKN[i] + predictionNB[i]+predictionRFC[i]

    for j in range(len(predictionDT)):
        if ensemble_prediction[j] >= 3:
            ensemble_prediction[j] = 1
        else:
            ensemble_prediction[j] = 0
    return ensemble_prediction

gender = input("Enter the gender: \n")
age = input("Enter the age: \n")
hypertension = input("Enter the status of hypertension: \n")


heart_disease = input("Has the patient suffered from heart disease? \n")

ever_married = input("Marital status \n")
work_type = input("Work type: \n")

Residence_type = input("Residence type: \n")
avg_glucose_level = input("Avg Glucose Level: \n")
bmi = input("Enter the BMI: \n")
smoking_status = input("smoking status of the patient: \n")

# Convert the input string into number

inp = np.array([[gender,age,hypertension,heart_disease,ever_married,work_type,Residence_type,avg_glucose_level,bmi,smoking_status]])

prediction = ensemble(inp)

