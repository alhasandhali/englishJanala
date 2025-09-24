# Linear Regression using LU Decomposition and Least Squares

This Python script performs **simple linear regression** using two different methods:  
1. **LU Decomposition** (from `scipy.linalg`)  
2. **Standard Least Squares** (using `numpy.linalg.lstsq`)  

It fits a line of the form:  
\[
y = \text{Intercept} + \text{Slope} \cdot x
\]  
to user-provided data points and allows prediction for a new `x` value.

---

## 📋 **Features**
- Accepts `x` and `y` data points as input.  
- Constructs the design matrix for linear regression.  
- Solves the normal equations using **LU Decomposition**.  
- Verifies the result using **Least Squares**.  
- Displays the intercept, slope, and regression equation.  
- Predicts the output `y` for a new `x` value.  

---

## 🛠 **Requirements**
Ensure you have Python 3 and the following libraries installed:  
```bash
pip install numpy scipy
