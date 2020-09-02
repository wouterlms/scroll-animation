import Aos from './aos/Aos.js';

const example = new Aos.Scene({
	el: '.element',
	trigger: '.trigger',
	pinned: true,
	// debug: true,
	triggerPosition: .2,
});

example
	.animate('rotate', {
		to: 20,
		end: 25,
	})
	.animate('translateX', {
		from: 500,
		to: 0,
		start: 25,
		end: 75,
	})
	.animate('rotate', {
		from: 20,
		to: 0,
		start: 75
	});


new Aos.Controller()
	.use(example);
