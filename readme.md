anster to the questions

1. What is the difference between getElementById, getElementsByClassName, and
   querySelector / querySelectorAll?

Answer = getElementById: The getElementId methode is a fundamental part of the
Document Object Model(DOM) used to select and access a spacific HTML element in
a webpage by its unique id atttribute.

getElementsByClassName: getElementsByClassName() methode is a function that
returns a live HTML collection of all child elements in the document that have
the specific name

querySelector: querySelector() is a powerfull tool for selecting the first HTML
element within a document that matchess a spacific css selector

querySelectorAll:querySelectorAll() methode is a powefull tool for selecting
static list of all HTML elements. It returns all matching elements as a Nodelist

2. How do you create and insert a new element into the DOM?

Answer = To creat andd insert a new element into the DOM using JavaScript, First
im trying to use document.creatEement() t creat the element and then moethods
like appendChild(), or append() to add it to an existing.

3. What is Event Bubbling? And how does it work?

Answer = Event bubbling means when an event stars from the deepest target
element and moves upword through its parent elements. For example, if you click
a button inside a div, the click first triggers on the button, then on the div,
then up to the document

4. What is Event Delegation in JavaScript? Why is it useful?

Answer = Event delegation is a technique where you attack one event listener to
a parent element instead of each child. When any child is clicked, the event
bubbles up and the parent handles it. Its useful because it reduce memory usages
and works even for dynamically added elements.

5. What is the difference between preventDefault() and stopPropagation()
   methods?

Answer = preventDefault() stops the broser's default action for an event ( like
preventng from submission). stopPropagation() stops the event from bubbling up
to parent elements. They are often used togather to control event behavior more
precisely.
