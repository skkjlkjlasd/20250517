function getRandomNumbers(count, max) {
  const numbers = new Set();
  while (numbers.size < count) {
      const rand = Math.floor(Math.random() * max) + 1;
      numbers.add(rand);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

document.getElementById("drawButton").addEventListener("click", () => {
  const selected = getRandomNumbers(4, 25);
  const formatted = selected.join(', ');

  // SweetAlert2 팝업 표시
  Swal.fire({
      title: '✨ 청소당번 발표!',
      text: `당번 번호: ${formatted}`,
      icon: 'success',
      confirmButtonText: '확인',
      backdrop: true,
      background: '#f0f9ff',
      color: '#333',
  });

  // 결과 텍스트도 페이지에 표시
  const resultEl = document.getElementById("result");
  resultEl.textContent = `이번 당번: ${formatted}`;
  resultEl.classList.remove('hidden');
});