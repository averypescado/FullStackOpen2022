const dummy = (blogs) => {
    return 1;
  }



const total_likes = (blogs) => {
    const reducer = (previous, current) => {
        return previous + current.likes
      }

    return blogs.reduce(reducer, 0)
}


const favoriteBlog = (blogs) => {
    let maxblog = blogs.reduce((prev, curr) => curr.likes > prev.likes ? curr : prev);
    return maxblog
}

module.exports = {
    dummy,
    total_likes,
    favoriteBlog
  }