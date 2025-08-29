What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

                                            Ans to the Question no.1

getElementById--Selecting a single element by its unique id. It a fasted method.

getElementsByClassName--when i have to need a live collection of elements based on a class name and require automatic updates.

querySelector --It is a matching element. when i have to need matching element using css selector.

querySelectorAll--It also a matching element. When i have to need all matching element using css and a static collection is acceptable or preferred.

2.How do you create and insert a new element into the DOM?

                                            Ans to the Question no.2

1. createElement() — create a new element.
2. setAttribute() — set any needed attributes, such as ID's or classes.
3. createTextNode() — create any needed content.
4. appendChild() — attach the new text node to the element.

3.What is Event Bubbling and how does it work?

                                             Ans to the Question no.3

Event Bubbling--Event Bubbling is a JavaScript event propagation mechanism
where an event that happens on a child element automatically "bubbles up" to its parent elements in the DOM tree.
It work--When I click on a botton inside a div, the click event first happens on the button then goes up to the div, then to the body, and so on bubbles rising up.

4.What is Event Delegation in JavaScript? Why is it useful?

                             Ans to the Question no.4

Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element. we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.
Why it is useful:-1.Improved Performance
2.Fewer event listeners.  
 3.Simplified Code .
4.Dynamic Content Handling.
5.Handles dynamically added elements.
6.Keeps code cleaner and easier to manage.

5.What is the difference between preventDefault() and stopPropagation() methods?
Ans to the Question no.5

preventDefault--preventDefault prevents the default action the browser makes on that event.

stopPropagation --stopPropagation prevents further propagation of the current event in the capturing and bubbling phases.
