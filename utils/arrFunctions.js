export function randomItemForEach(limit, arr) {
  const randomItemSelection = [];

  let flag = 0;
  while (flag < limit) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const selectedIndex = arr[randomIndex];

    let exists = false;
    if (randomItemSelection.length > 0) {
      exists = randomItemSelection.find((data) => data === selectedIndex);
    }

    if (!exists) {
      randomItemSelection.push(selectedIndex);
      flag++;
    }
  }

  return randomItemSelection;
}
