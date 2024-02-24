# equalize-objects-height

![before](/images/equalize1.jpg "Blocks before equalization")

Ever had been told by some UI/UX artist that these blog section blocks should have equal spaces between the title and excerpt despite the uneven amount of text content?

The text content will be edited by the user and we want to give our client maximum freedom so we won't be setting a fixed height on our elements.
This is where this simple equalization script comes into play.

## Why should you use this instead of other object equalization scripts
* Very flexible and simple to use - uses data attributes and namespaces for controlling which elements should be equalized
* Responsive if you want it - you can specify the minimum resolution required for the script to work on each namespace individually
* Uses vanilla JS and is intended to be used in ES6 JS modules, no jQuery or any other dependency here
* Takes object nesting into account, so you shouldn't have problems with the order in which nested objects are equalized
* Uses optimized array manipulation methods

## How to use
Attention: This script assumes you're using ES6 js modules and is intended to be used for vanilla js projects (don't try this in React).

1. Download the repo and copy the js file of your choice from the dist directory
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
<!-- Wrapper -->
<div>
    <div data-equalize-height="your-namespace">ele to be equalized 1</div>
    <div data-equalize-height="your-namespace">ele to be equalized 2</div>
    <div data-equalize-height="your-namespace">ele to be equalized 3</div>
</div>
```

4. Optionally - add the min resolution required for the equalization to take effect. Just add a resolution (in pixels) after a space when specifying the namespace.

```html
<!-- Wrapper -->
<div>
    <div data-equalize-height="your-namespace 1200">ele to be equalized 1</div>
    <div data-equalize-height="your-namespace">ele to be equalized 2</div>
    <div data-equalize-height="your-namespace">ele to be equalized 3</div>
</div>
```

You don't have to specify the resolution for each element within the same namespace. One time is enough and other elements inside the same namespace will obey it :)

## Examples
Let's go back to the first image in this repo. See what's the problem here?

![before](/images/equalize1.jpg "Blocks before equalization")

Now let's apply the equalization to our block headings. That's better, right?

![before](/images/equalize2.jpg "Blocks with equalized headings")

We can go even further and equalize everything because we can.

![before](/images/equalize3.jpg "Blocks with all elements equalized")

That's all, feel free to use this, cheers