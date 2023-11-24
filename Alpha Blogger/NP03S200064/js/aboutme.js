fetch("http://localhost:3000/intro").then(r => {
	return r.json();
}).then(d => {
	//Logic
	//Array Loop => forEach()

	let html = "";
	let intro = document.getElementById("intro");

	d.forEach(item => {

		html += `<div class="intro">
					<h1>${item.title}</h1>
					
					<p class="para"><h2>${item.para}</h2></p>
				</div>`;

	});

	intro.innerHTML = html;


})
.catch(e => {
	console.log(e);
})

// fetch("http://localhost:3000/about_me").then(r => {
// 	return r.json();
// }).then(d => {
// 	//Logic
// 	//Array Loop => forEach()

// 	let about_me = "";
// 	let about_me = document.getElementById("about_me");

// 	d.forEach(item => {

// 		abuout_me += `<div class="intro">
// 					<h1>${item.title}</h1>
// 					<p class="para"><h2>${item.para}</h2></p>
// 				</div>`;

// 	});

// 	about_me.innerHTML = html;


// })
// .catch(e => {
// 	console.log(e);
// })
