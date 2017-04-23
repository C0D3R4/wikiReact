import Firebase from 'firebase'

const post = (url, body) => fetch(url, {
  method: 'POST',
  credentials: 'include',
  body: JSON.stringify(body || {}),
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}).then(res => res.json())

export const signin = (username, password) => post('/api/signin', { username, password })
export const signout = (username, password) => post('/api/signout', { username, password })

export const pages = new Firebase('https://wikireact-470fd.firebaseio.com/pages')
