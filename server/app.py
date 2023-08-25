from flask import Flask, render_template
import json

app = Flask(__name__, template_folder="../templates/HTML")
DATABASE = "/path/to/database.json"

@app.route('/', methods=['GET', 'POST']) 
def index():
    return render_template("index.html")

'''
TODO 
1. Figure out how to store the json data
2. Add route to create a new formula (optional)
3. Create route to delete a data (optional)
'''


@app.route('/api/formulas')
def formulas():
    '''
        Returns a list of all formula json object, each json object in the following format
        Make sure the json object is sorted, based on date inserted. (add to end)
        {
        'formula_id' : "",
        'link_path' : "",
        'display_name': "",
        }
    '''
    json_file = open(DATABASE)

    formula_list = json.loads(json_file)
    
    json_file.close()
    return json.dumps(formula_list)


@app.route('/api/<formula_id>')
def get_formula(formula_id):
    '''
       Returns all data needed for displaying a specific formula page.


    '''
    formula_x = None

    json_file = open(DATABASE)

    formula_list = json.loads(formula_list)
    for formula in formula_list:
        if formula['formula_id'] == formula_id:
            formula_x = formula
            break
    
    json_file.close()
    return formula_x

@app.route('/api/create/')
def create_formula():
    '''
       Given a post request, add the new formula object to the list of formulas, and ensure 
       when running get_formula, object is succesfully added.


    '''

    return "Hello, World!"

if __name__ == "__main__":
    app.run(debug=True)