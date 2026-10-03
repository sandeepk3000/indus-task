// time in am and pm format
export const generateTime = (): string => {
  const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    const hoursStr = hours < 10 ? '0' + hours : hours;
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    return `${hoursStr}:${minutesStr} ${ampm}`;
}

export const generateDate = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const monthStr = month < 10 ? '0' + month : month;
  const dayStr = day < 10 ? '0' + day : day;
  return `${year}-${monthStr}-${dayStr}`;
}