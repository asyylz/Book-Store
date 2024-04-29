export const titleTrimmer = (title, amount) => {
  const countWords = title.split(' ');
  if (countWords.length > 5) {
    const newTitleWords = countWords.filter((_, index) => index < amount);
    return newTitleWords.join(' ');
  } else {
    return title;
  }
};
