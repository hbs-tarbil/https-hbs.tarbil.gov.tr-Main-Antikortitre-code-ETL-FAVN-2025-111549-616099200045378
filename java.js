// Simple behavior: clicking "Search | Sorgula" just (re)loads your PDF.
// You can add real validation here if you like.
(function () {
  const form = document.getElementById('verifyForm');
  const viewer = document.getElementById('pdfViewer');

  // path to your PDF (change if your file name/path differs)
  const PDF_PATH = 'assets/document.pdf';

  // Load PDF immediately once (like original page after search)
  function loadPdf() {
    // toolbar=1 shows browser PDF toolbar; to hide, use #toolbar=0
    viewer.src = PDF_PATH + '#zoom=100';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // you could check protocol/chip here if you want
    loadPdf();
    // Scroll to the PDF like the official page behavior
    viewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Optional: preload on first paint so page already shows PDF
  // Comment this out if you prefer blank until user clicks Search.
  loadPdf();
})();
