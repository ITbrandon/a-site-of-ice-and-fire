export async function getCharacters() {

const response = await fetch("https://got-api-production.up.railway.app/api/characters");
  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }
  return response.json();

}

export async function getCharacter(id: string) {

    const response = await fetch(`https://got-api-production.up.railway.app/api/characters/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch character");
      }
      return response.json();
      
}

export async function getHouses() {
const token = localStorage.getItem("token")

if(!token)
{
  throw new Error("No Token Found")
}

const parsedToken = JSON.parse(token)

const response = await fetch("https://got-api-production.up.railway.app/api/houses", {
  method: "GET",
  headers: {
    "Authorization": `Bearer ${parsedToken}`,
    "Content-Type": "application/json"
  }
});

  if (!response.ok) {
    throw new Error("Failed to fetch houses");
  }
  return response.json();
}

export async function getHouse(id: string) {
  const token = localStorage.getItem("token")

  if(!token)
    {
      throw new Error("No Token Found")
    }
    
    const parsedToken = JSON.parse(token)

  const response = await fetch(`https://got-api-production.up.railway.app/api/houses/${id}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${parsedToken}`,
        "Content-Type": "application/json"
      }
    });
      if (!response.ok) {
        throw new Error("Failed to fetch house");
      }
      return response.json();
}

export async function subscribe(email:string) {
  
  const response = await fetch("https://got-api-production.up.railway.app/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error('Already Subscribed');
  }

  return response.json()
}

export async function signup(email:string, username:string, password:string) {

  const response = await fetch("https://got-api-production.up.railway.app/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, username, password }),
  });

  if (!response.ok) {
    throw new Error('Already A Member');
  }

  return response.json()
}

export async function login(username:string, password:string) {

  const response = await fetch("https://got-api-production.up.railway.app/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Invalid username or password');
  }

  const data = await response.json()
  return data.token
}

export async function forgotUsername(email: string) {
  
  const response = await fetch("https://got-api-production.up.railway.app/api/auth/forgot-username", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({email}),
  });

  if (!response.ok) {
    throw new Error('Failed to send username to email');
  }

  return response.json()
}

export async function requestPasswordReset(email: string) {

  const response = await fetch("https://got-api-production.up.railway.app/api/auth/forgot-password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({email}),
  });

  if (!response.ok) {
    throw new Error('Failed to send password reset email');
  }

  return response.json()
}

export async function resetPassword(token: string, newPassword: string) {
  const response = await fetch("https://got-api-production.up.railway.app/api/auth/reset-password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token, newPassword }),
  });

  if (!response.ok) {
    throw new Error("Failed to reset password");
  }

  return response.json();
}
