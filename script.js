function addCard(counter) {
	const cardsBlockElement = document.querySelector('.cards-block')
	const cardElement = document.createElement('div')
	cardElement.classList.add('card')
	cardElement.innerHTML = `<h2 class="card-header">Анекдот №${counter}</h2>
				<p class="card-content">
					Борман говорит Штирлицу: <br>
					— Мне кажется вы еврей!!! <br>
					— Как это: мама русская, папа русский, а я еврей!!! — обиделся Штирлиц и призадумался, не взболтнул ли он чего лишнего. <br>
				</p>`
	cardsBlockElement.append(cardElement)
}

function removeCard() {
	const cardElement = document.querySelectorAll('.card')
	cardElement[cardElement.length - 1].remove()
}

function main() {
	const counterElement = document.querySelectorAll('.counter')
	const cardElement = document.getElementsByClassName('card')

	let counter = 0
	let plusCounter = 0
	let minusCounter = 0

	document.addEventListener('click', event => {
		if (event.target.closest('.plus')) {
			plusCounter++
			counter++
			counterElement[0].textContent = plusCounter.toString()
			addCard(counter)
		}

		if (event.target.closest('.minus') && cardElement.length > 0) {
			minusCounter++
			counterElement[1].textContent = minusCounter.toString()
			removeCard()
		}

		if (event.target.closest('.reset')) {
			plusCounter = 0
			minusCounter = 0
			counter = 0
			counterElement.forEach(element => {
				element.textContent = '0'
			})
			while (cardElement.length > 0) {
				removeCard()
			}
		}
	})
}

main()
