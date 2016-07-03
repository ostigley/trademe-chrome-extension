var prevResults = localStorage.getItem('trademeSearchResults').split(',')

pageUrl = $(location).attr('href')
const isSearchUrl = pageUrl.includes('SearchResults.aspx?searchString')

if (isSearchUrl) {
	var results = []
	for (i=1; i<5; i++) {
		let tile = $(`a.tile-${i}`)
		let length = tile.length
		for(k=0; k<length; k++){
			results.push(tile[k].href)
		}
	}
	localStorage.setItem('trademeSearchResults',results)
} else if (prevResults.indexOf(pageUrl) > -1) {
	console.log('Your in a result url')
	var nextUrl = prevResults[prevResults.indexOf(pageUrl)+1]
	$('.banner-content').append(`<a href=${nextUrl} >View next in search results</a>`)
}


