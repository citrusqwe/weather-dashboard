export const capitalize = (str: string) => {
  return str
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
};

export const temperature = (num: number) => {
  return Math.floor(num / 33.8);
};

export const sliceTime = (time: string) => {
  return time.slice(time.length - 5);
};
