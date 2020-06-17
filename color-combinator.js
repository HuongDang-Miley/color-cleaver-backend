function colorCombinator(str1, str2){
    const red = str1 === 'red' || str2 === 'red';
    const yellow = str1 === 'yellow' || str2 === 'yellow';
    const blue = str1 === 'blue' || str2 === 'blue';

    if (red && yellow) {
        return 'When you combine ' + str1 + ' and ' + str2 + ', you get orange!'
    } else if ( red && blue) {
        return 'When you combine ' + str1 + ' and ' + str2 + ', you get purple!'
    } else if ( yellow && blue) {
        return 'When you combine ' + str1 + ' and ' + str2 + ', you get green!'
    } return 'Sorry, one of those colors is not a primary color!'
}

module.exports = colorCombinator;