1. What is the difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll?
   Ans:getElementById: Selects a single element using its unique ID. It returns the exact element.
getElementsByClassName: Selects all elements with a specific class name. It returns an HTMLCollection (which looks like an array but isn't quite one).
2. How do you create and insert a new element into the DOM?
Ans: Create: Use document.createElement('tagName') to create the element.
Add Content: Set the text or attributes, for example: element.innerText = "Hello World".
3. What is Event Bubbling? And how does it work?
Ans:Event Bubbling is a way of event propagation in the DOM. When an event (like a click) happens on an element, it first runs the handlers on that specific element, then it "bubbles up" to its parent, then its grandparent, and so on, until it reaches the window object.
4. What is Event Delegation in JavaScript? Why is it useful?
Ans:Event Delegation is a technique where you attach a single event listener to a parent element instead of adding listeners to every single child element.
 5. What is the difference between preventDefault() and stopPropagation()?
    Ans:preventDefault(): Stops the default behavior of an element. For example, it prevents a form from submitting or a link from opening a URL.

stopPropagation(): Stops the event from bubbling up the DOM tree. It prevents the event from reaching parent elements, but the default behavior of the element itself will still happen.
