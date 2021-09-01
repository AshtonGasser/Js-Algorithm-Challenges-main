// Write a function that takes two strings and determines returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

var ransomNote = function(magazine, note) {
  var magazineWords = magazine.split(" ");
  var noteWords = note.split(" ");

  var magazineMap = {};
  var noteMap = {};

  for (var i = 0; i < magazineWords.length; i++) {
    var word = magazineWords[i];
    magazineMap[word] = (magazineMap[word] || 0) + 1;
  }

  for (var i = 0; i < noteWords.length; i++) {
    var word = noteWords[i];
    noteMap[word] = (noteMap[word] || 0) + 1;
  }

  for (var key in noteMap) {
    if (magazineMap[key] !== noteMap[key]) {
      return false;
    }
  }

  return true;
};
