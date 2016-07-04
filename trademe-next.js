var prevResults = JSON.parse(localStorage.getItem('trademeSearchResults'))
console.log(prevResults)
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
	var button = document.createElement('button')
	button.setAttribute('id', 'olly')
	button.setAttribute('style', 'width:250px')
	button.innerHTML = `<a href=${nextUrl} >View next in search results</a>`
	document.querySelector('.listingBreadCrumbs').appendChild(button)
}


 