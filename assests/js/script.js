function charsToEnglish(text) {
  const charMap = {
      'ı': 'i', 'İ': 'I', 'ö': 'o', 'Ö': 'O', 'ü': 'u', 'Ü': 'U',
      'ğ': 'g', 'Ğ': 'G', 'ç': 'c', 'Ç': 'C', 'ş': 's', 'Ş': 'S'
  };

  return text.split('').map(char => charMap[char] || char).join('');
}

function toTitleCase(text) {
  const words = text.split(' ');
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

function generateKey(text, prefix) {
  const englishText = charsToEnglish(text);
  const titleCasedText = toTitleCase(englishText);
  const sanitizedText = titleCasedText.replace(/[^A-Za-z0-9]/g, '');
  return `${prefix}.${sanitizedText}`;
}

document.getElementById('generateBtn').addEventListener('click', () => {
  const text = document.getElementById('text').value;
  const prefix = document.getElementById('prefix').value;
  const key = generateKey(text, prefix);
  document.getElementById('result').textContent = key;
});