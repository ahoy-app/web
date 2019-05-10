export const API_HOST = process.env.API_HOST || 'localhost:8080'
export const API_HTTP_ENDPOINT = `http://${API_HOST}`

const headers = extras => ({
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  ...extras,
})

export async function get(path) {
  const response = await fetch(`${API_HTTP_ENDPOINT}${path}`, {
    headers: headers(),
  })
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return await response.json() //we only get here if there is no error
}

export async function post(path, body, extraHeaders = {}) {
  const response = await fetch(`${API_HTTP_ENDPOINT}${path}`, {
    method: 'POST',
    headers: headers(extraHeaders),
    body: JSON.stringify(body),
  })
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return await response.json() //we only get here if there is no error
}
