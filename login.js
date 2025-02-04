const apiKey = '677b70cea2f1fd4495fd926c'; // Replace with your actual API key
const apiUrl = 'https://interactivedev-db1d.restdb.io/rest/authentication'; // Replace with your actual API URL

async function apiRequest(url, method, data = null) {
  const headers = {
    'Content-Type': 'application/json',
    'x-apikey': apiKey,
  };

  const options = { method, headers };
  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);
  return response;
}

document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('signup-username').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = btoa(document.getElementById('signup-password').value.trim());

  // Debug log
  console.log({ username, email, password });

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': apiKey,
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      document.getElementById('message').textContent = 'Sign-up successful!';
      document.getElementById('message').classList.remove('error');
    } else {
      const errorData = await response.json();
      console.error('Error:', errorData);
      throw new Error(errorData.message || 'Sign-up failed.');
    }
  } catch (error) {
    document.getElementById('message').textContent = error.message;
    document.getElementById('message').classList.add('error');
  }
});

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('login-username').value.trim();
  const password = btoa(document.getElementById('login-password').value.trim());

  try {
    const response = await fetch(
      `${apiUrl}?q={"username":"${username}","password":"${password}"}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-apikey': apiKey,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      if (data.length > 0) {
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').classList.remove('error');

        // Redirect to the home page after successful login
        setTimeout(() => {
          window.location.href = '/Users/Celeste Chai/Desktop/ID/ID_ASG2 website/ID_ASG2/Lottie.html'; // Update the path to your home page
        }, 1000); // Optional: delay for 1 second to display the success message
      } else {
        throw new Error('Invalid username or password.');
      }
    } else {
      throw new Error('Login failed.');
    }
  } catch (error) {
    document.getElementById('message').textContent = error.message;
    document.getElementById('message').classList.add('error');
  }
});
