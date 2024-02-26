from flask import Flask, render_template

app = Flask(__name__,template_folder="views")

@app.route("/")
def index():
    return render_template("Home.html")

@app.route("/Home")
def homepage():
    return render_template("Home.html")

@app.route("/IFAD_Form")
def ifadForm():
    return render_template("IFAD.html")

@app.route("/Tracking_Form")
def trackingForm():
    return render_template("form.html")

@app.route("/Registration_Form")
def regForm():
    return render_template("Registration.html")

app.run(debug=True)