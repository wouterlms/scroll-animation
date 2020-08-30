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
		to: 20
	})


new Aos.Controller()
	.use(example);
