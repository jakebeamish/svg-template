This is a framework for making generative art for the pen plotter.

~~The current workflow goes something like:

1. Define a `config` object with properties to specify the dimensions of the work, the background and foreground colours, and other options.
2. Construct a {@link Sketch} object using the `config`.
3. Create [Lines]{@link Line} and Points (perhaps using the {@link Vector} class) and push them to the {@link Sketch}.
4. Calling the [draw()]{@link Sketch#draw} method of the {@link Sketch} will create an SVG element and add it to the HTML document.~~



1. Define a sketch with config arguments object.
2. Add lines to the sketch.
3. Create an SVG according to the sketch object and then add it to the document.