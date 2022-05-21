import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";
import "reveal.js/dist/reveal.css";
import "/theme/fiberplane.css";
import "/theme/nord.css";

const deck = new Reveal({
    plugins: [Markdown, Highlight],
});

deck.initialize({
    hash: true,
    center: true,
    margin: 0.1,
    transition: "fade",
    transitionSpeed: "fast",
    // Visibility rule for backwards navigation arrows; "faded", "hidden"
    // or "visible"
    controlsBackArrows: "hidden",

    // Display a presentation progress bar
    progress: true,
    autoAnimateEasing: "ease-in-out",
    autoAnimateDuration: 0.4,
});
