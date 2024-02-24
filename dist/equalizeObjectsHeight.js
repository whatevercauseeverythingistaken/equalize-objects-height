// USAGE
// Add data-equalize-height attribute to elements that you want to equalize.
// Specify the namespace for each set of elements so the script knows which elements height should be compared.
// Optionally you can also add the minimal resolution required for the script to work on the namespace.
//
// Example usage: <div data-equalize-height="your-namespace"></div>
//
// Example usage with resolution requirement: <div data-equalize-height="your-namespace 1200"></div>
// The script will work on resolution >= 1200px for the above example.
//
// Note: You don't have to add resolution requirement to all elements inside the same namespace.
// You only need to specify it once and it will be used for all elements inside one nanespace.
//
const equalizeObjectsHeight = () => {
    const elems = document.querySelectorAll('[data-equalize-height]');

    if ( !(elems.length > 0) )
    {
        return false;
    }

    try
    {
        // Sort elems from the most nested to the least nested
        const elemsSortedByNesting = Array.from(elems);

        elemsSortedByNesting.sort((a, b) => {
            const depthA = getElemsDepth(a);
            const depthB = getElemsDepth(b);

            return depthB - depthA;
        });

        // Find all namespaces to equlize
        let namespaces = [];
        elemsSortedByNesting.forEach(ele => {
            const curNamespaceOptions = ele.getAttribute('data-equalize-height').split(' ');

            if ( !namespaces.find(object => object?.name === curNamespaceOptions[0]) )
            {
                namespaces.push({
                    name: curNamespaceOptions[0],
                    breakpoint: curNamespaceOptions[1] || null
                });
            }
            // If any object in namespace has breakpoint specified - all objects in this namespace shall obey it
            else if ( curNamespaceOptions[1] && namespaces.find(object => object?.name === curNamespaceOptions[0] && object?.breakpoint === null) )
            {
                namespaces.map(object => {
                    if ( object?.name === curNamespaceOptions[0] )
                    {
                        object.breakpoint = curNamespaceOptions[1]
                    }
                } );
            }
        });

        // Equalize objects from each namespace
        namespaces.forEach(namespace => {
            const namespaceElems = elemsSortedByNesting.filter(ele => ele.getAttribute('data-equalize-height').split(' ')[0] === namespace.name) || [];

            if ( namespaceElems.length > 0 )
            {
                let targetHeight = null;

                // Equalize if the breakpoint condition is met or when its not present
                if ( (namespace?.breakpoint && window.innerWidth >= parseInt(namespace?.breakpoint)) || !namespace?.breakpoint )
                {
                    targetHeight = 0;
                    
                    // Find target height
                    namespaceElems.forEach(ele => {
                        const curHeight = ele.getBoundingClientRect().height;
                        
                        if ( curHeight > targetHeight )
                        {
                            targetHeight = curHeight;
                        }
                    });
                }
                
                // Set all elements height to target height
                namespaceElems.forEach(ele => {
                    ele.style.minHeight = targetHeight ? targetHeight + 'px' : '';
                    ele.style.maxHeight = targetHeight ? targetHeight + 'px' : '';
                    ele.style.height = targetHeight ? targetHeight + 'px' : '';
                });
            }
        });
    }
    catch (error)
    {
        console.log('Something went wrong when running the equalizeObjectsHeight script: ', error);
    }
}

const getElemsDepth = (ele) => {
    if ( !ele.parentNode )
    {
        return 0;
    }
    else
    {
        return 1 + getElemsDepth(ele.parentNode);
    }
};

export default equalizeObjectsHeight;