export default function generateTableHead(table, data) {
  const thead = table.createTHead();
  const row = thead.insertRow();
  for (let key of data) {
    const th = document.createElement("th");
    const text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}
