const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
    if (l.split("").reverse().join("").includes(word)) return true;
  }

  const verticalArray = [];

  for (let i = 0; i < letters[0].length; i++) {
    let tempArray = [];
    for (let j = 0; j < letters.length; j++) {
      tempArray.push(letters[j][i]);
    }
    verticalArray.push(tempArray);
  }

  const verticalJoin = verticalArray.map((arr) => arr.join(""));

  for (l of verticalJoin) {
    if (l.includes(word)) return true;
    if (l.split("").reverse().join("").includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;