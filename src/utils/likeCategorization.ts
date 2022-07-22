export const likeCategorization = (likeCount: number) => {
  if (likeCount < 10) return likeCount;
  else if (likeCount < 30) return '10+';
  else if (likeCount < 50) return '30+';
  else if (likeCount < 70) return '50+';
  else if (likeCount < 100) return '70+';
  else return '100+';
};
