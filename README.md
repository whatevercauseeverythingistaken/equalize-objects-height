# equalize-objects-height

Ever had been told by some UI/UX artist that these blog section blocks should have equal spaces between the title and excerpt despite the uneven amount of text content?
The text content will be edited by the user and we want to give our client maximum freedom so we won't be setting a fixed height on our elements.
Some of problems like this could have been solved by css, some of them hovewer probably took you some time which you could have spend more efficiently on something else. Some of them probably couldn't be solved with css at all.
This is where this simple equalization script comes into play.

## Why should you use this instead of other object equalization scripts
* It's very flexible and simple to use - it uses data attributes and namespaces for controlling which elements should be equalized!
* It's responsive if you want it - you can specify the minimum resolution required for the script to work on each namespace individually!
* It uses vanilla JS and is intended to be used in ES6 JS modules, no jQuery or any other dependency here
* It takes object nesting into account, so you should't have problems with the order in which nested objects are equalized
* It uses optimized array manipulation methods

## How to use
Attention: This script assumes you're using ES6 js modules and is intended to be used for vanilla js projects (don't try this in React).

1. Download the repo and copy the js file(s) of your choice from the dist directory
2. Import the file your copied earlier, hook the function to load and resize events

```js
import equalizeObjectsHeight from 'path-to-script/equalizeObjectsHeight.min.js';

// Ready
document.addEventListener('DOMContentLoaded', () => {
    // Window load events
    window.addEventListener('load', () => {
        // Init equalizeObjectsHeight
        equalizeObjectsHeight();
    });

    // Window resize events
    window.addEventListener('resize', () => {
        setTimeout(() => {
            equalizeObjectsHeight();
        }, 0);
    });
});
```

3. Add data-equalize-height="your-namespace" attribute to elements you want to equalize.

'your-namespace' is the unique name used to determine which objects should be equalized. You can have as many namespaces and objects inside them as you like.

```html
<div data-equalize-height="your-namespace"></div>
```

4. Optionally - add the min resolution required for the equalization to take effect. Just add a resolution (in pixels) after a space when specifying the namespace.

```html
<div data-equalize-height="your-namespace 1200"></div>
```

## Examples
Let's create some test section like this. See what's the problem here?

![before](/images/equalize1.jpg "Blocks before equalization")

Now let's apply the equalization for our block headings. That's better, right?

![before](/images/equalize2.jpg "Blocks with equalized headings")

We can go even further and equalize everything because we can.

![before](/images/equalize3.jpg "Blocks with all elements equalized")

That's all, feel free to use this