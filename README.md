import pypandoc

text = """📈 Linear Regression with LU Decomposition & Least Squares

This project demonstrates simple linear regression using two approaches:

LU Decomposition (scipy.linalg.lu_factor, lu_solve)

Standard Least Squares (numpy.linalg.lstsq)

The code calculates the intercept and slope of the best-fit line given input data, then allows prediction for a new x value.

🚀 Features

Accepts x and y values from user input.

Constructs the design matrix for regression.

Solves for parameters using:

LU Decomposition

Least Squares Method

Prints regression equations for both methods.

Predicts the output (y) for a new input value of x.

🛠️ Requirements

Make sure you have the following installed:

pip install numpy scipy

📂 Code Overview

Input: User enters x and y values (space-separated).

Design Matrix: A column of ones is added for the intercept.

Solving:

LU Decomposition via lu_factor, lu_solve

Least Squares via np.linalg.lstsq

Output: Intercept, slope, regression equation, and prediction.

▶️ Usage

Run the script:

python regression.py

Example Run
Enter x values separated by space: 1 2 3 4 5
Enter y values separated by space: 2 4 5 4 5

Using LU Decomposition:
  Intercept = 2.2000
  Slope     = 0.6000
  Equation  : y = 2.20 + 0.60x

Using Standard Least Squares:
  Intercept = 2.2000
  Slope     = 0.6000
  Equation  : y = 2.20 + 0.60x

Enter a new x value for prediction: 6
Prediction: For x = 6.0, predicted y = 5.8000

📊 Mathematical Background

The regression line is found by solving:

θ=(XᵀX)⁻¹Xᵀy

where:

θ=[intercept,slope]ᵀ

LU decomposition factorizes A=LU and solves efficiently.

Least Squares directly minimizes the sum of squared errors.

👩‍💻 Authors (Team Credits)

Sushmita – Project setup

Anika – Design matrix construction

Jarin – LU Decomposition solution

Sadia – Least Squares solution

Ananna – Results & output formatting

Anik – Prediction function
"""

output_path = "/mnt/data/README.md"
pypandoc.convert_text(text, 'md', format='md', outputfile=output_path, extra_args=['--standalone'])
output_path
