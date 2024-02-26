from flask import Flask, render_template

app = Flask(__name__,template_folder="views")

@app.route("/Sidebar")
def index():
    return render_template("Sidebar.html")

@app.route("/IFAD_Form")
def ifadForm():
    return render_template("IFAD.html")

@app.route("/Tracking_Form")
def trackingForm():
    return render_template("form.html")

app.run(debug=True)