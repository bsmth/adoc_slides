// Load asciidoctor.js and asciidoctor-reveal.js
var asciidoctor = require('asciidoctor.js')();
require('asciidoctor-reveal.js');

// Convert the document 'slides.adoc' using the reveal.js converter
var attributes = {'revealjsdir': 'node_modules/reveal.js@'};
var options = {safe: 'safe', backend: 'revealjs', attributes: attributes};
asciidoctor.convertFile('slides.adoc', options);
