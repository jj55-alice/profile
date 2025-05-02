export const getJosa = (word: string, josaPair: string[]) => {
  const lastChar = word[word.length - 1];
  const code = lastChar.charCodeAt(0);

  // 한글 유니코드 범위: 0xAC00 ~ 0xD7A3
  if (code < 0xac00 || code > 0xd7a3) return word + josaPair[1];

  const jong = (code - 0xac00) % 28;
  // jong === 0: 받침 없음
  return jong === 0 ? josaPair[1] : josaPair[0];
};
