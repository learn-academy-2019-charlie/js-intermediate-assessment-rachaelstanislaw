# Intermediate Javascript Assessments

### Without using Google answer the following:

1. What is the difference between .map() and .filter()?

.map() looks through an array and executes a task on each item. Returns an array of the same size as the original.

.filter() looks through an array for specific conditions and usually returns a smaller array than the original.

2. Why would you use object destructuring?

Use object destructuring to simplify your code by shortening what's necessary to call values in an object. for example, instead of writing "this.person.name", you can use object destructuring to simply write "name"

3. What is the difference between var, let, and const?

var is within the global scope
var is withing the local scope
const cannot be changed later in the code

4. Why is testing important?

testing adds a layer of security to your code so that when you get a bug, you can identify exactly which part of your code is causing an error.

5. What is a higher order function?

A higher-order function is a function that can take another function as an argument, or that returns a function as a result.

6. What is the difference between a class and an object?

A class is a blueprint for an object.
An object is made up of data and behavior and includes key value pairs.

7. What did you learn during the group project this week? Please include any additional feedback you may have.



### HTML/CSS Review questions: First, try to answer each question on your own then Google the answer to further your knowledge.

1. How do you link a CSS file to your HTML page?

<link rel="stylesheet" type="text/css" href="NAME OF CSS FILE.css" />
^^ within the head of the HTML page ^^


2. What is the difference between a div and a span?

The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code. This helps to add more layers of individuality for styling, etc. in your code.

3. What is a CSS class? When should you use an id instead of a class?

In the CSS, a class selector is a name preceded by a full stop (“.”) and an ID selector is a name preceded by a hash character (“#”). The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one.

4. Name 4 semantic HTML tags.

<p>
<h1> - <h6>
<strong>
<div>

5. What are three options for creating responsive design?

1.flexibile images: img { max-width: 100%; } rather than defining specific pixels, etc
2.Custom layout structure
3.Design with touchscreen in mind i.e. don't rely on hovers, etc. in CSS

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

Fron end development focuses around the user experience of the product. What does the user story look like? How effectively/easily can the user interact with the product? Front-end development tools would include Vue, Angular, Chrome Developer Tools, etc. Front end developers may also use a text editor like Sublime Text due to the built in keyboard shortcuts and simultaneous editing it includes. Skills in HTML, CSS, JavaScript, Git, and responsive design would be required for a front end developer.

2. What is block scope in JavaScript?

A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block. This is not the same as function scope, which is available within the entire function, not just the curly braces of a loop, etc.

3. How would you explain the idea of "inheritance" in object oriented programming?

Inheritance is a mechanism where you can to derive a class from another class for a hierarchy of classes that share a set of attributes and methods.