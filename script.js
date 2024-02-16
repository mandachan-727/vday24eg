function showLetter() {
  document.getElementById('envelope').style.display = 'none';
  document.getElementById('letter').style.display = 'block';
  setTimeout(showText, 1500); // Display text after 10 seconds
}

function showText() {
  document.getElementById('letter').innerHTML = `
    <img src="nanacat.png" alt="photo" width="200">
    <p>Evan,</p>
    <p>I am very excited to celebrate another Valentine’s Day (weekend) with you! I have enjoyed seeing both of us grow these past 2 years of dating, and am excited for the adventure ahead with you. I am trying my best to work toward a good future for me, and eventually, for both of us, and I know you are too! Let’s both stay strong and celebrate love every moment of our lives! I love you very much!</p>
    <p>Yours truly,</p>
    <p>Mandy</p>
  `;
}