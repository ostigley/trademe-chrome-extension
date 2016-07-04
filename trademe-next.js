var prevResults = localStorage.getItem('trademeSearchResults').split(',')

pageUrl = window.location.href
const isSearchUrl = pageUrl.includes('SearchResults.aspx?searchString')

if (isSearchUrl) {
	var results = []
	let tile = document.querySelectorAll('a.tile-1, a.tile-2, a.tile-3, a.tile-4')
	let length = tile.length
	for(k=0; k<length; k++){
		results.push(tile[k].href)
	}
	localStorage.setItem('trademeSearchResults',results)
} else if (prevResults.indexOf(pageUrl) > -1) {
	var nextUrl = prevResults[prevResults.indexOf(pageUrl)+1]
	var button = document.createElement('button')
	button.setAttribute('id', 'Watchlist_SaveToWatchlistButton')
	button.setAttribute('style', 'width:250px')
	button.innerHTML = `<a href=${nextUrl} >View next in search results</a>`
	document.querySelector('.banner-content').appendChild(button)
}


 