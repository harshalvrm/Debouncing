// Debounce function implementation
function debounce(func, delay) {
    let timer;
    
    return function() {
      const context = this;
      const args = arguments;
      
      clearTimeout(timer);
      
      timer = setTimeout(function() {
        func.apply(context, args);
      }, delay);
    };
    
  }
  
  // Function to be debounced
  function search() {
    const query = document.getElementById('searchInput').value;
    console.log('Searching for:', query);
    // Perform search logic here
  }
  
  // Get the search input element
  const searchInput = document.getElementById('searchInput');
  
  // Apply debounce to the search function with a delay of 500 milliseconds
  const debouncedSearch = debounce(search, 500);

  
  // Attach event listener to the search input with the debounced function
  searchInput.addEventListener('input', function() {
    debouncedSearch();
  });
  