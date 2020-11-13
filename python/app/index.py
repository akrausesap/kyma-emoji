from flask import Flask, request, jsonify
import json
import random

app = Flask(__name__)

"""
	GET /
	
	Returns: 
		payload A hello message.
"""
@app.route('/')
def default():
	return "Hello Kyma!"

"""
	POST /api/emojify
	
	Parameters:
		body A list of names.
	
	Example:
		[string, string, ...]
	
	Returns: 
		payload An array of objects mapping the name to an emoji unicode.
	
	Example:
		[
			{
			  name: string,
			  emoji: string,
			  details:{
				  category: string,
				  char: string,
				  codes: string,
				  name: string
			  }
			},
			{
			  name: string,
			  emoji: string,
			  details:{
				  category: string,
				  char: string,
				  codes: string,
				  name: string
			  }
			},
			...
		]
		
"""
@app.route('/api/emojify', methods=["POST"])

def emojify():
	file = open("../emojis.json", encoding = "utf8")
	values = json.loads(file.read())
	input = request.get_json()

	list=[]

	for p in input:
		ans = {}
		emoji = getRandom(values)
		ans['name'] = p
		ans['emoji'] = emoji["codes"]
		ans['details'] = emoji
		list.append(ans)

	return jsonify(list)

"""
	Randomly selects a value in a list.
	
	Parameters:
		values(list):  list of emojis.
	
	Returns:
		hex_number(str): Random string value from the provided list.
"""	
def getRandom(values):
	random_number = random.randint(0, len(values))
	return values[random_number]


if __name__ == '__main__':
	app.run(host='0.0.0.0', port = 80)