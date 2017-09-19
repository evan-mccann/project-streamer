from flask import Flask, render_template, request, json
from os import path, listdir, walk
app = Flask(__name__)

@app.route("/", methods=["GET"])
def pageLoad():
	return render_template("index.html")

@app.route("/autoload", methods=["GET"])
def autoloadJS():
	homedir = path.dirname(path.realpath(__file__))
	js_path = path.join(homedir, "js")
	# For each file in js and subdirectories, build full path+filename and add to array all_js
	all_js = [path.join(homedir, root, file) for root, directories, files in walk(js_path) for file in files]
	js = ""
	for js_file in all_js:
		with open(js_file, "r") as f:
			js = js + f.read()

	return js
	#append and minify

if __name__ == "__main__":
    app.run(host="localhost")

#@app.route('/user/<username>')
#def profile(username): pass

#with app.test_request_context():
#	print url_for('index')
#	print url_for('login')
#	print url_for('login', next='/')
#	print url_for('profile', username='John Doe')