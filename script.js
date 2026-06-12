document.addEventListener('DOMContentLoaded', function(){
	// Mobile nav toggle
	const navToggle = document.getElementById('navToggle');
	const mainNav = document.getElementById('mainNav');
	navToggle && navToggle.addEventListener('click', ()=>{
		if(mainNav.style.display === 'block') mainNav.style.display = '';
		else mainNav.style.display = 'block';
	});

	// Portfolio filter
	const filters = document.querySelectorAll('.filter');
	const items = document.querySelectorAll('.port-item');
	filters.forEach(btn => btn.addEventListener('click', ()=>{
		filters.forEach(b=>b.classList.remove('active'));
		btn.classList.add('active');
		const f = btn.dataset.filter;
		items.forEach(it => {
			if(f==='all') it.style.display = '';
			else it.style.display = (it.dataset.type === f) ? '' : 'none';
		});
	}));
});

