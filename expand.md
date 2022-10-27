1. Since HTML, CSS, and Javascript all work together to be the language team of the web, its crutial that the structure of our HTML code is able to be efficiently translated to Javascript in order to apply the DOM abstraction to Javascript. Having meaningful id and class names in HTML that let the reader know how Javascript's program logic will enable much easier to read code that will, in turn, be more efficient to represent through DOM. If we were to have misleading or hard to follow id and class names, then it would be more tedious to try and decipher what elements are supposed to represent, and be cognitively demanding. In addition, classes and IDs structure the HTML code, allowing easier access of children elements, and thus easier to create children objects in the DOM. Without this structured layout, Javascript and CSS would not be able to interact with HTML code in the way that it so seamlessly does. 

2. Data attributes are a way that HTML elements are able to store custom, non visible information without having extra properties on DOM, that way Javascript is able to utilize this extra informative attribute by the DOMStringMap via dataset property. They can be accessed with attribute selectors in CSS as well. This makes it easy to store microdata as this data is easier to access for developers. It gives a simple and nicer solution to mis using other attributes. 

3. DOM fragments are DOM Node objects that are used to create a document fragment that appends elements to it and then appends to the DOM tree. This moves the child nodes to the new parent node, and is  more efficient so that the real DOM does not have to re render parts of the page with each additional element. This results in better performance and less reflow. 
4. Virtual DOM is a shadowed representation of Javascript and the DOM Model on different web frameworks. It has all the details needed to construct DOM but is cheaper due to the changes not being done to the actual DOM. You gain cheap changes, but higher memory usage problems due to the constant comparing of elements.
5. Since Javascript works with objects, theres no object oriented classes that we're really working with, so they're mutable. Classes are described like blueprints, but javascript is more concrete. 
6. onClick() is similar to what the name implies, a single property event that gets overwritten, with no event propogation. AddEventListener can add multiple events to one element, and take arguments. It can only be in scripts and does not work on all browsers. Depending on the situation, a developer may use one or the other, like if one needs to attach more than one event to an element then addEventListener() would be good. If you want to attach a single event or us it on all broswers, then onClick() will work well here.