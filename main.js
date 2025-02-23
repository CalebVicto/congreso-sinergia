function getTime(dateTo) {
	let now = new Date(),
		time = (new Date(dateTo) - now + 1000) / 1000,
		seconds = ('0' + Math.floor(time % 60)).slice(-2),
		minutes = ('0' + Math.floor((time / 60) % 60)).slice(-2),
		hours = ('0' + Math.floor((time / 3600) % 24)).slice(-2),
		days = Math.floor(time / (3600 * 24))

	return {
		seconds,
		minutes,
		hours,
		days,
		time
	}
}

function initPage() {
	const dias = document.getElementById('dias')
	const horas = document.getElementById('horas')
	const minutos = document.getElementById('minutos')
	const segundos = document.getElementById('segundos')

	var date = new Date()
	var hasta = new Date(date)
	hasta.setSeconds(0)      // Segundo 0
	hasta.setMinutes(30)     // Minuto 30
	hasta.setHours(19)       // Hora 19 (7 PM)
	hasta.setDate(16)        // Día 16
	hasta.setMonth(7)        // Mes 7 (AGOSTO)
	// hasta.setFullYear(2021)  // Año 2021 (Le cambie el año para que no se acabe el tiempo)
	var res = getTime(hasta)
	if (res.time >= 0) {
		dias.innerHTML = res.days
		horas.innerHTML = res.hours
		minutos.innerHTML = res.minutes
		segundos.innerHTML = res.seconds
	}
}

setInterval(() => {
	initPage()
}, 500)

// -barrr
const menu = document.getElementById('menu')
menu.onclick = () => {
	var element = document.getElementById('nav')
	element.classList.toggle('active-menu')
}

const navLinks = document.getElementsByClassName('nav_link')
for (let i = 0; i < navLinks.length; i++) {
	navLinks[i].onclick = () => {
		var element = document.getElementById('nav')
		element.classList.toggle('active-menu')
	}
}
