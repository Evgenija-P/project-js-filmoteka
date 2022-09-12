// const refs = {
//   gallery: document.querySelector('#homepage__gallery'),
// };
// const newApi = new NewApi();
// const paginationContainer = document.querySelector('.pagination-container');
// let globalCurrentPage = null;
// function pagination(page, totalPages) {
//   const beforeToPage = page - 2;
//   const beforePage = page - 1;
//   const afterToPage = page + 2;
//   const afterPage = page + 1;
//   globalCurrentPage = page;
//   let marcup = '';
//   if (page > 1) {
//     marcup += '<li>&#129144;</li>';
//   }
//   if (page > 1) {
//     marcup += '<li>1</li>';
//   }
//   if (page > 4) {
//     marcup += '<li>...</li>';
//   }
//   if (page > 3) {
//     marcup += `<li>${beforeToPage}</li>`;
//   }
//   if (page > 2) {
//     marcup += `<li>${beforePage}</li>`;
//   }
//   marcup += `<li>${page}</li>`;
//   if (totalPages - 1 > page) {
//     marcup += `<li>${afterPage}</li>`;
//   }
//   if (totalPages - 2 > page) {
//     marcup += `<li>${afterToPage}</li>`;
//   }
//   if (totalPages - 3 > page) {
//     marcup += `<li>...</li>`;
//   }
//   if (totalPages > page) {
//     marcup += `<li>${totalPages}</li>`;
//     marcup += '<li>&#129146;</li>';
//   }
//   console.log(totalPages);
//   paginationContainer.innerHTML = marcup;
// }
// function onPagination(event) {
//   if (event.target.nodeName !== 'LI') {
//     return;
//   }
//   if (event.target.textContent === '...') {
//     return;
//   }
//   if (event.target.textContent === '🡸') {
//     globalCurrentPage -= 1;
//     return;
//   }
//   if (event.target.textContent === '🡺') {
//     globalCurrentPage += 1;
//     return;
//   }
//   const page = event.target.textContent;

//   console.log(event.target);
//   console.log('Текущая страница', page);
// }
// paginationContainer.addEventListener('click', onPagination);
// export { pagination };
