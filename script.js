function generate() {
  const name = document.getElementById('nameInput').value;
  const roll = document.getElementById('rollInput').value;
  document.getElementById('nameOutput').innerText = name;
  document.getElementById('rollOutput').innerText = roll;
  document.getElementById('cover').style.display = 'block';
}

function downloadPDF() {
  const element = document.getElementById('cover');
  var opt = {
    margin:       0,
    filename:     'cover-page.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().from(element).set(opt).save();
}
