/* CAPTCHA solver demo script
   Reads ?url=... from query string, displays captcha image, and simulates solving within 15 seconds.
*/
(function(){
  function getQueryParam(name){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  const url = getQueryParam('url');
  const urlDisplay = document.getElementById('captcha-url');
  const imageContainer = document.getElementById('image-container');
  const captchaImage = document.getElementById('captcha-image');
  const status = document.getElementById('status');
  const result = document.getElementById('result');

  if (url){
    urlDisplay.textContent = url;
    if (captchaImage){
      captchaImage.src = url;
      imageContainer.style.display = 'block';
    }
    status.textContent = 'Solving captcha...';
    // Simulated solving - generate pseudo-random text
    const solveTime = Math.min(15000, Math.max(3000, Math.floor(Math.random() * 12000) + 1000)); // 1-15s
    function randomText(len){
      const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
      let s = '';
      for(let i=0;i<len;i++) s += chars.charAt(Math.floor(Math.random()*chars.length));
      return s;
    }
    const solvedText = randomText(6);
    setTimeout(function(){
      status.textContent = 'Captcha solved';
      result.textContent = solvedText;
    }, solveTime);
  } else {
    urlDisplay.textContent = 'No URL provided';
    status.textContent = 'Awaiting URL parameter ?url=';
  }
})();
