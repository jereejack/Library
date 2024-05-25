document.addEventListener('alpine:init', () => {
    Alpine.data('books', () => ({
      books: [],
      async fetchBooks() {
        const res = await fetch('/api/books');
        this.books = await res.json();
      },
      init() {
        this.fetchBooks();
      }
    }));
  });
  