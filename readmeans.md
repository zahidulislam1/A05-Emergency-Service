## Create Readme

You have to create a `Readme.md` file. and write down following questions. Dont Try to copy paste from AI Tools. Just write what you know about these. If you don't know , then search , learn , understand and then write.

### 6. Answer the following questions clearly:

<!-- 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**? -->

Ans:

1. getElementById(id): Selects a single element based on its unique id attribute.return a single Element object

1. getElementsByClassName(className): Selects all elements that have a specific class name an HTMLCollection, which is a live collection of elements.

1. querySelector(selector): Selects the first element that matches a given CSS selector .return a single Element object

1. querySelectorAll(selector): Selects all elements that match a given CSS selector a NodeList, which is a static collection of elements.

<!-- 1. How do you **create and insert a new element into the DOM**? -->

Ans: document.createElement() to create a new element node. This method takes the tag name of the element as a string argument.
Set the textContent or innerHTML property to add text or HTML content to the new element.
Use setAttribute() to add attributes like id, class, or src.
Identify the existing DOM element where you want to insert the new element. You can use methods like document.getElementById(), document.querySelector(), or document.getElementsByTagName()
Use appendChild() to add the new element as the last child of the parent element.

<!-- 1. What is **Event Bubbling** and how does it work? -->

Ans:
Event Bubbling is a mechanism in the DOM where an event triggered on a child element first runs its event handler and then bubbles up to its parent elements, all the way to the <html> element, unless explicitly stopped.
You click or interact with a nested element (like a button inside a div).

The event fires on the target element (the button).

The event bubbles up through its parent elements (div → section → body → html).

Each parent element’s event listener (if any) can also respond to the same event
If you want, I can also explain Event Capturing and the difference between Capturing and Bubbling in one simple diagram—it’s very visual and easy to remember.

<!-- 1. What is **Event Delegation** in JavaScript? Why is it useful? -->

Ans:
Event delegation in JavaScript is a technique where a single event listener is attached to a parent element to manage events triggered by its child elements, rather than attaching separate event listeners to each individual child. This approach leverages the concept of event bubbling, where an event triggered on a child element propagates up to its parent elements in the Document Object Model (DOM) tree.

<!-- 1. What is the difference between **preventDefault() and stopPropagation()** methods? -->

Ans:
preventDefault() controls the default behavior of the element.
stopPropagation() controls the flow of the event through the DOM.
These methods can be used independently or in conjunction, depending on the desired event handling behavior.

---
