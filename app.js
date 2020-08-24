import Aos from './aos/Aos.js';

const example = new Aos.Scene({
	el: '.element',
	trigger: '.trigger',
	pinned: true,
	debug: true,
	triggerPosition: .2,
});

example
	.animate('rotate', {
		to: -20
	})
	.animate('translateY', {
		to: 100, // to 
		start: 20, // start %
		end: 50, // end %
	})
	.animate('translateX', {
		from: 50,
		to: 500,
		start: 50,
	});


new Aos.Controller()
	.use(example);
