# Linear Regression using LU Decomposition and Least Squares

This Python script performs **simple linear regression** using two different methods:  
1. **LU Decomposition** (from `scipy.linalg`)  
2. **Standard Least Squares** (using `numpy.linalg.lstsq`)  

It fits a line of the form:  
$$
y = \text{Intercept} + \text{Slope} \cdot x
$$
 
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
```
## ▶ **Usage**

1. **Run the script**:  
    ```bash
    python linear_regression_lu_ls.py
    ```

2. **Input the data** when prompted:  
    Example:  
    ```
    Enter x values separated by space: 1 2 3 4 5
    Enter y values separated by space: 2 4 5 4 5
    ```

3. **View the results**:  
    ```
    Using LU Decomposition:
      Intercept = 2.2000
      Slope     = 0.6000
      Equation  : y = 2.20 + 0.60x

    Using Standard Least Squares:
      Intercept = 2.2000
      Slope     = 0.6000
      Equation  : y = 2.20 + 0.60x
    ```

4. **Make a prediction**:  
    ```
    Enter a new x value for prediction: 6
    Prediction: For x = 6.0, predicted y = 5.8000
    ```

---

## 📜 **Code Workflow**

| Step              | Description                                                   |
|-------------------|---------------------------------------------------------------|
| **Input**         | Reads `x` and `y` values from the user.                        |
| **Design Matrix** | Adds a column of ones for the intercept term.                   |
| **Normal Equation**| Computes \(A = X^T X\) and \(b = X^T Y\).                     |
| **LU Decomposition**| Uses `lu_factor` and `lu_solve` to solve \(A \theta = b\).    |
| **Least Squares**  | Solves using `np.linalg.lstsq` for verification.               |
| **Output**         | Prints intercept, slope, and regression equations.             |
| **Prediction**     | Computes predicted `y` for a given new `x` value.              |

---

## 📊 **Example Output**
```
Enter x values separated by space: 1 2 3 4 5
Enter y values separated by space: 2 4 5 4 5

Using LU Decomposition:
Intercept = 2.2000
Slope = 0.6000
Equation : y = 2.20 + 0.60x

Using Standard Least Squares:
Intercept = 2.2000
Slope = 0.6000
Equation : y = 2.20 + 0.60x

Enter a new x value for prediction: 6
Prediction: For x = 6.0, predicted y = 5.8000
```

---

## 🧠 **Concepts Used**

- **Linear Regression**: Fits a straight line to minimize the sum of squared residuals.  
- **Normal Equation**: \(\theta = (X^T X)^{-1} X^T Y\)  
- **LU Decomposition**: Factorizes a matrix \(A\) into \(L\) and \(U\) for efficient solving.  
- **Least Squares**: Minimizes the squared error directly using `np.linalg.lstsq`.  

---

## 📌 **Notes**

- Ensure `x` and `y` lists are of the **same length**.  
- The method works only for **simple linear regression** (one independent variable).  
- LU Decomposition and Least Squares should produce identical results for well-conditioned data.  

---

## 👩‍💻 **Contributors**

- **Sushmita** – Base implementation  
- **Anika** – Design matrix construction  
- **Jarin** – LU decomposition solution  
- **Sadia** – Least Squares solution  
- **Ananna** – Output formatting  
- **Anik** – Prediction feature  


