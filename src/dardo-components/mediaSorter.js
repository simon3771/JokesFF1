
function isMovie(url) {
    let movExtensions = ['mp4', 'webm']
    let tokens = url.split('.');
    return movExtensions.includes(tokens[tokens.length - 1])
}

export default isMovie
