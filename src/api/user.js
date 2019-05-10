import { get, post } from './utils'

export async function getUser() {
  const result = await get(`/user`)
  return result
}

export function ghLogin() {
  return new Promise(resolve => {
    const popup = window.open(
      'https://github.com/login/oauth/authorize?scope=user:email&client_id=4980e711a8dbd46fc066',
      'GitHub Login',
      'height=700,width=600,menubat=no'
    )

    window.addEventListener('message', function(event) {
      popup.close()
      resolve({
        access_token: event.data.access_token,
        secret: event.data.secret,
      })
    })
  })
}

export async function logIn(user, secret) {
  const result = await post(`/login`, { user, pass: secret })
  return result
}
