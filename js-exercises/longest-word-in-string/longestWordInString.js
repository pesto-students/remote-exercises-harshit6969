function longestWordInString(Sentence) {
  let SortedWords = Sentence.split(' ').sort( (a, b) => b.length - a.length);
  return SortedWords[0];
}

export { longestWordInString };
