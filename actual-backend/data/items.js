const { getStoredItems, storeItems } = require('../data/items');

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    const storedItems = await getStoredItems();
    res.status(200).json({ items: storedItems });
  } else if (req.method === 'POST') {
    const itemData = req.body;
    const newItem = {
      ...itemData,
      id: Math.random().toString(),
    };
    const existingItems = await getStoredItems();
    const updatedItems = [newItem, ...existingItems];
    await storeItems(updatedItems);
    res.status(201).json({ message: 'Stored new item.', item: newItem });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
