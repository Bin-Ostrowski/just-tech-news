//This function does something asynchronous - from async/await
async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  //validate all fields have content with conditional statment before posting
  if ( email && password) {
      //To use await, add the await keyword before the Promise
      //When using await, we can assign the result of the promise to a variable. 
      //For example, const response = await fetch();. 
      //This way, we don't need to use catch() or then() to tell the code what to do after the Promise completes.
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    //check the response status
    if(response.ok) {
      //is this a mistake in the code? because it doesnt work with it. 
      document.location.replace('/');
      console.log('sucessful login');
    } else {
      alert(response.statusText);
    }
  }
};

//This function does something asynchronous - from async/await
async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    //validate all fields have content with conditional statment before posting
    if (username && email && password) {
        //To use await, add the await keyword before the Promise
        //When using await, we can assign the result of the promise to a variable. 
        //For example, const response = await fetch();. 
        //This way, we don't need to use catch() or then() to tell the code what to do after the Promise completes.
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      //check the response status
      if(response.ok) {
          document.location.replace('/');
          console.log('successful signup');
      } else {
        alert(response.statusText);
      }
    }
  };


  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);