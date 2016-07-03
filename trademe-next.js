var prevResults = localStorage.getItem('trademeSearchResults').split(',')

pageUrl = $(location).attr('href')
const isSearchUrl = pageUrl.includes('SearchResults.aspx?searchString')

if (isSearchUrl) {
	var results = []
	let tile = $('a.tile-1, a.tile-2, a.tile-3, a.tile-4')
	let length = tile.length
	for(k=0; k<length; k++){
	console.log(tile[k].href)
		results.push(tile[k].href)
	}
	
	localStorage.setItem('trademeSearchResults',results)
} else if (prevResults.indexOf(pageUrl) > -1) {
	console.log('Your in a result url')
	var nextUrl = prevResults[prevResults.indexOf(pageUrl)+1]
	$('.banner-content').append(
		`<button style="width:250px" id="Watchlist_SaveToWatchlistButton">
			<a href=${nextUrl} >View next in search results</a>
		</button>`)
}


 