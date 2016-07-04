var prevResults = JSON.parse(localStorage.getItem('trademeSearchResults'))
var results = prevResults.results ? prevResults.results : null

const pageUrl = window.location.href
const isSearchUrl = pageUrl.includes('SearchResults.aspx?searchString')


if (isSearchUrl) {
	var searchData = {
		"url": pageUrl,
		"results": []
	}
	let tile = document.querySelectorAll('a.tile-1, a.tile-2, a.tile-3, a.tile-4')
	let length = tile.length
	for(k=0; k<length; k++){
		searchData["results"].push(tile[k].href)
	}
	localStorage.setItem('trademeSearchResults', JSON.stringify(searchData))
} else if (results.indexOf(pageUrl) > -1) {
	var nextUrl = results[results.indexOf(pageUrl)+1]
	var prevUrl = results[results.indexOf(pageUrl)-1]
	var button1 = document.createElement('button')
	button1.setAttribute('class', 'olly-button')
	button1.innerHTML = `<a href=${nextUrl} > >> </a>`
	
	var button2 = document.createElement('button')
	button2.setAttribute('class', 'olly-button')
	button2.innerHTML = `<a href=${prevUrl} > << </a>`

	var mydiv = document.createElement('div')
	mydiv.setAttribute('id', 'olly-div')
	var mylink = document.createElement('a')
	mylink.setAttribute('href', prevResults.url)
	mylink.setAttribute('id', 'olly-link')
	mylink.innerHTML = '  Search Results  '

	mydiv.appendChild(button2)
	mydiv.appendChild(mylink)
	mydiv.appendChild(button1)
	document.querySelector('.listingBreadCrumbs').appendChild(mydiv)
}


 