from flask import Flask

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST']) 
def index():
    return "Hello, World!"

'''
TODO 
1. Figure out how to store the json data
2. Add route to create a new formula (optional)
3. Create route to delete a data (optional)
'''


@app.route('/api/formulas')
def formulas():
    '''
        Returns a list of all formula json object, each json object  in the following format
        Make sure the json object is sorted, based on date inserted. (add to end)
        {
        'formula_id' : "",
        'link_path' : "",
        'display_name': "",
        }
    '''
    return "Hello, World!"


@app.route('/api/<formula_id>')
def get_formula():
    '''
       Returns all data needed for displaying a specific formula page.


    '''
    return "Hello, World!"

@app.route('/api/create/')
def create_formula():
    '''
       Given a post request, add the new formula object to the list of formulas, and ensure 
       when running get_formula, object is succesfully added.


    '''
    return "Hello, World!"

if __name__ == "__main__":
    app.run(debug=True)