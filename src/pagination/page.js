import Store from '../store/store';

class Pagination {
  constructor(array) {
    this.current_page = 1;
    this.records_per_page = 5;
    this.array = array;
  }

  numPages() {
    return Math.ceil(this.array.length / this.records_per_page);
  }

  changePage(page) {
    const btn_next = document.getElementById('btn_next');
    const btn_prev = document.getElementById('btn_prev');
    const listing_table = document.querySelector('.task-list');
    const page_span = document.getElementById('page');
    // Validate page
    if (page < 1) page = 1;
    if (page > this.numPages()) page = this.numPages();

    listing_table.innerHTML = '';

    for (
      let i = (page - 1) * this.records_per_page;
      i < page * this.records_per_page;
      i++
    ) {
      if (this.array[i] !== undefined) {
        listing_table.innerHTML += Store.displayTask(this.array[i]).innerHTML;
      }
    }
    page_span.innerHTML = page;

    if (page === 1) {
      btn_prev.classList.add('disabled');
    } else {
      btn_prev.classList.remove('disabled');
    }

    if (page === this.numPages()) {
      btn_next.classList.add('disabled');
    } else {
      btn_next.classList.remove('disabled');
    }
  }

  prevPage() {
    if (this.current_page > 1) {
      this.current_page -= 1;
      this.changePage(this.current_page);
    }
  }

  nextPage() {
    if (this.current_page < this.numPages()) {
      this.current_page += 1;
      this.changePage(this.current_page);
    }
  }
}

export default Pagination;
