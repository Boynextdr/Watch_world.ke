// Filter by case material
function filterByMaterial(material) {
  const products = document.querySelectorAll('.product');
  
  products.forEach(product => {
    const productMaterial = product.dataset.material || '';
    if(material === 'all' || productMaterial.includes(material)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}