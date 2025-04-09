document.addEventListener('DOMContentLoaded', () => {
    const stockList = document.getElementById('stock-list');
  
    fetch('https://dummyjson.com/products?limit=5')
      .then(response => response.json())
      .then(data => {
        stockList.innerHTML = '';
        data.products.forEach(product => {
          stockList.innerHTML += `
            <div class="item">
              <strong>${product.title}</strong><br>
              Quantity: ${product.stock}<br>
              Location: Warehouse A
            </div>
          `;
        });
      })
      .catch(error => {
        stockList.innerHTML = 'Failed to load stock data.';
        console.error('Error:', error);
      });
  });
  