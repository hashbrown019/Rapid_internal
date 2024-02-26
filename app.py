from flask import Flask, render_template

app = Flask(__name__,template_folder="views")

@app.route("/")
def index():
    return render_template("Sidebar.html")

@app.route("/hahaha")
def ifad_something():
    return render_template("IFAD.html")



app.run(debug=True)