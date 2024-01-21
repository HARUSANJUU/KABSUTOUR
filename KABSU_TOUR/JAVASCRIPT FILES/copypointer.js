document.getElementById('phoneNumbers').addEventListener('click', function(event) {
  var textarea = document.createElement('textarea');
  textarea.value = event.target.innerText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('copied to clipboard succesfully.');
});

document.getElementById('mail-outline').addEventListener('click', function(event) {
  var textarea = document.createElement('textarea');
  textarea.value = event.target.innerText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('copied to clipboard succesfully.');
});

