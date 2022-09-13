const paginationContainer = document.querySelector('.pagination-container');
paginationContainer.addEventListener('click', onPagination);

window.globalCurrentPage = null;

export function pagination(page, totalPages) {
  const beforeToPage = page - 2;
  const beforePage = page - 1;
  const afterToPage = page + 2;
  const afterPage = page + 1;

  globalCurrentPage = page;

  let marcup = '';
  if (page > 1) {
    marcup += '<li class="pagination-btn">&#129144;</li>';
  } else {
    marcup += '<li class="pagination-btn disabled" disabled>&#129144;</li>';
  }
  if (page > 1) {
    marcup += '<li class="pagination-btn">1</li>';
  }
  if (page > 4) {
    ``;
    marcup += '<li class="pagination-btn">...</li>';
  }
  if (page > 3) {
    marcup += `<li class="pagination-btn">${beforeToPage}</li>`;
  }
  if (page > 2) {
    marcup += `<li class="pagination-btn">${beforePage}</li>`;
  }
  marcup += `<li class="pagination-btn">${page}</li>`;
  if (totalPages - 1 > page) {
    marcup += `<li class="pagination-btn">${afterPage}</li>`;
  }
  if (totalPages - 2 > page) {
    marcup += `<li class="pagination-btn">${afterToPage}</li>`;
  }
  if (totalPages - 3 > page) {
    marcup += `<li class="pagination-btn">...</li>`;
  }
  if (totalPages > page) {
    marcup += `<li class="pagination-btn">${totalPages}</li>`;
    marcup += '<li class="pagination-btn">&#129146;</li>';
  } else {
    marcup += '<li class="pagination-btn disabled">&#129146;</li>';
  }

  paginationContainer.innerHTML = marcup;

  const containerItems = [...paginationContainer.children];

  containerItems.forEach(item => {
    if (Number(item.textContent) === globalCurrentPage) {
      item.classList.add('current');
    }
  });
}

function onPagination({ target }) {
  if (target.nodeName !== 'LI') {
    return;
  }

  if (target.textContent === '...') {
    return;
  }

  if (target.textContent === '🡸') {
    if (target.classList.contains('disabled')) {
      return;
    }
    globalCurrentPage -= 1;
    return;
  }

  if (target.textContent === '🡺') {
    if (target.classList.contains('disabled')) {
      return;
    }
    globalCurrentPage += 1;
    return;
  }
  globalCurrentPage = Number(target.textContent);
}
