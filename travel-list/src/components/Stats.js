export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  if (!items.length) {
    return <footer className='stats'><em>Start adding items in your packing list 🚀</em></footer>;
  }
  return <footer className="stats">
    <em>
      {percentage === 100 ? `You have everything! Ready to go! ✈️` : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
    </em>
  </footer>;
}
