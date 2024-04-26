export const titleTrimmer = (title) => {
  const countWords = title.split(' ');
  if (countWords.length > 4) {
    const newTitleWords = countWords.filter((_, index) => index < 4);
    return newTitleWords.join(' ');
  } else {
    return title;
  }
};
