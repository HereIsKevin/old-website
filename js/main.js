// Creating promise to import dependency highlight.js scripts for One Light
const importHighlightJS = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    document.head.appendChild(script);
    script.onload = resolve;
    script.onerror = reject;
    script.async = true;
    script.src = 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.15.8/build/highlight.min.js';
});

// Run the promise, then initialize the script on finish
importHighlightJS.then(() => {
    hljs.initHighlightingOnLoad();
},
() => {
    console.log("Can't retrieve highlight.js from jsDelivr. Giving up.");
});
