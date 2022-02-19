export function uppercase(name) {
  const nameParts = name.split("-");

  function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const upper = nameParts.map((part) => {
    const p = capitaliseFirstLetter(part);
    // console.log(p);
    return `${p}`;
  });

  // console.log(upper.toString().replace(/,/g, ""));
  return upper.toString().replace(/,/g, "");
}
