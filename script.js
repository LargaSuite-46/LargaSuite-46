const btnEs = document.getElementById('btn-es');
const btnEn = document.getElementById('btn-en');
btnEs.onclick = () => {
  document.querySelectorAll('.en').forEach(e => e.classList.add('hidden'));
  document.querySelectorAll('.es').forEach(e => e.classList.remove('hidden'));
};
btnEn.onclick = () => {
  document.querySelectorAll('.es').forEach(e => e.classList.add('hidden'));
  document.querySelectorAll('.en').forEach(e => e.classList.remove('hidden'));
};
