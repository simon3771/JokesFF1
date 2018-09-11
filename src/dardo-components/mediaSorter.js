
function isMovie(url) {
    let tokens = url.split('.');
    return tokens[tokens.length - 1] === 'mp4'
}

export default isMovie
