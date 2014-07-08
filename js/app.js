
function Question(id, question, answer) {
	this.id = id;
	this.question = question;
	this.answer = answer;
}

var question1 = new Question (	1, 
								"Which of the following is not a valid javaScript variable name?",
							 	{ A : "1variable", B : "_variable", C : "$variable", D : "variable1"}
							 );
var question2 = new Question (2,"Inside which HTML element do we put the JavaScript?", { A : "<js>", B : "<scripting>", C : "<javascript>", D : "<script>" });
var question3 = new Question (3,"What is the correct syntax for referring to an external script called \"app.js\"?", { A : "<script name=\"app.js\">", B : "<script src=\"app.js\">", C : "<script href=\"app.js\">", D : "<script link=\"app.js\">" });
var question4 = new Question (4,"How can you add a single line comment in a JavaScript?", { A : "<!-- commnet -->", B : "// comment", C : " /* comment", D : "*/ comment" });
var question5 = new Question (5,"How do you write \"Hello World\" in an alert box?", { A : "alertBox(\"Hello World\")", B : "msgBox(\"Hello World\")", C : "alert(\"Hello World\")", D : "msg(\"Hello World\")" });




for(var i = 1; window["question"+i] !== undefined; i++) {
  console.log(window["question"+i].question);
  console.log(i);
 };
