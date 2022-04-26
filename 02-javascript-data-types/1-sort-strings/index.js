/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  if (param !== 'asc' && param !== 'desc') {
    return new Error('sortStrings: the second parameter should be either \'asc\' or \'desc\'');
  }
  
  return arr.slice().sort((a, b) => {
    return a.localeCompare(b, ['ru-RU', 'en-EN'], { caseFirst: 'upper' }) * (param === 'asc' ? 1 : -1);
  });
}
