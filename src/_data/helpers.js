module.exports = {
    /**
     * Returns back some attributes based on whether the
     * link is active or a parent of an active item
     *
     * @param {String} itemUrl The link in question
     * @param {String} pageUrl The page context
     * @returns {String} The attributes or empty
     */
    getLinkActiveState(itemUrl, pageUrl) {
      let response = '';
  
      if (itemUrl === pageUrl) {
        response = ' aria-current="page"';
      }
  
      if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
        response += ' data-state="active"';
      }
  
      return response;
    }
  };
  
  /**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array

 
exports.shuffle = function(array) {

  var currentIndex = array.length;
  var temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
*/
