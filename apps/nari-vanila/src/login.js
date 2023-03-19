async function handleSubmit() {
  const idValue = document.getElementById('id').value;
  const passwordValue = document.getElementById('password').value;
  const loginValue = {
    email: idValue,
    username: passwordValue,
  };

  const url = '/api/auth/login';
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginValue),
  });

  const body = await result.json();
  localStorage.setItem('AccessToken', body.access_token);
}

async function loginRedirect() {
  const url = '/api/auth/login';
  const AccessToken = localStorage.getItem('AccessToken');
  await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${AccessToken}`,
    },

  });
  alert('로그인 성공');
  window.location.href = 'index.html';
}
