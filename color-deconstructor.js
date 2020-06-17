function deconstructor (str) {
    const orange = str === 'orange'
    const purple = str === 'purple'
    const green = str === 'green'
    if (orange) {
        return 'Orange is made by combining red and yellow!'
    } else if (purple) {
        return 'Purple is made by combining red and blue!'
    } else if (green) {
        return 'Green is made by combining blue and yellow!'
    } return "Sorry, that's not a secondary color!"
}

module.exports = deconstructor;