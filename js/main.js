const assets = {
    items: {
      hat: ['hat1.png', 'hat2.png', 'hat3.png', 'hat4.png', 'hat5.png', 'hat6.png', 'hat7.png', 'hat8.png', 'hat9.png', 'hat10.png'],
      hair: ['hair1.png', 'hair2.png', 'hair3.png', 'hair4.png', 'hair5.png', 'hair6.png', 'hair7.png', 'hair8.png'],
      shirt: ['shirt1.png', 'shirt2.png', 'shirt3.png', 'shirt4.png', 'shirt5.png', 'shirt6.png', 'shirt7.png', 'shirt8.png'],
      pants: ['pants1.png', 'pants2.png', 'pants3.png', 'pants4.png', 'pants5.png', 'pants6.png', 'pants7.png', 'pants8.png'],
      face: ['face1.png', 'face2.png', 'face3.png'], 
      shoes: ['shoes1.png', 'shoes2.png', 'shoes3.png', 'shoes4.png', 'shoes5.png', 'shoes6.png'],
    },
  };
  
  const selectedIndices = {
    hat: 0,
    hair: 0,
    shirt: 0,
    pants: 0,
    face: 0, 
    shoes: 0,
  };
  
  let activeCategory = 'hair';
  
  function updateItem(category) {
    const itemElement = document.getElementById(`${category}-item`);
    if (itemElement) {
      itemElement.src = `images/${assets.items[category][selectedIndices[category]]}`;
    }
  }
  
  document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('click', () => {
      activeCategory = button.getAttribute('data-category');
      document.querySelectorAll('.category-button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
  
  document.getElementById('left-arrow').addEventListener('click', () => {
    selectedIndices[activeCategory] = (selectedIndices[activeCategory] - 1 + assets.items[activeCategory].length) % assets.items[activeCategory].length;
    updateItem(activeCategory);
  });
  
  document.getElementById('right-arrow').addEventListener('click', () => {
    selectedIndices[activeCategory] = (selectedIndices[activeCategory] + 1) % assets.items[activeCategory].length;
    updateItem(activeCategory);
  });
  
  document.querySelector('.category-button[data-category="hair"]').classList.add('active');
  Object.keys(selectedIndices).forEach(category => updateItem(category));