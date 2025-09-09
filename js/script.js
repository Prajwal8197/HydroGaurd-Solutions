// Set year
document.getElementById('year').textContent = new Date().getFullYear();

// Request a quote button behavior: scroll to form and focus
document.getElementById('quoteCta').addEventListener('click', function(){
  document.getElementById('contactForm').scrollIntoView({behavior: 'smooth', block: 'center'});
  document.getElementById('name').focus();
});

// Phone button opens dialer (mobile) or copies to clipboard on desktop
document.getElementById('callBtn').addEventListener('click', function(){
  const tel = '+91-9876543210'; // Replace with your actual phone number
  if (navigator.userAgent.match(/Mobi/)) { window.location.href = 'tel:'+tel; }
  else { navigator.clipboard?.writeText(tel).then(()=> alert('Phone number copied to clipboard: '+tel)); }
});

// Simple form handler: uses mailto as a fallback (no backend)
function handleForm(e){
  e.preventDefault();
  const name = encodeURIComponent(document.getElementById('name').value || '');
  const phone = encodeURIComponent(document.getElementById('phone').value || '');
  const email = encodeURIComponent(document.getElementById('email').value || '');
  const message = encodeURIComponent(document.getElementById('message').value || '');

  const subject = encodeURIComponent('Quote request from website — ' + (name || phone));
  const body = encodeURIComponent('Name: '+decodeURIComponent(name)+'\nPhone: '+decodeURIComponent(phone)+'\nEmail: '+decodeURIComponent(email)+'\nMessage: '+decodeURIComponent(message));

  // Try to open default mail app
  window.location.href = `mailto:info@yourdomain.com?subject=${subject}&body=${body}`;
  // As an alternative you can integrate a server endpoint or use a form service like Formspree, Netlify Forms, or Zapier.
  return false;
}
