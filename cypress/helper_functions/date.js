export function getDate(day) {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  return `${day}/${month <= 9 ? "0" + month : month}/${year}`;
}
