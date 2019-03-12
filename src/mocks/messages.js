import faker from 'faker'

faker.seed(0)

let users = Array.apply(0, Array(6)).map(() => {
  return faker.internet.userName()
})
users.push('-', '-', '-')

const createMoreMessages = () =>
  Array.apply(0, Array(10)).map(() => {
    return {
      id: faker.random.uuid(),
      from: faker.random.arrayElement(users),
      content: faker.lorem.sentences(),
    }
  })

export const fetchOldMessages = (messages = []) => {
  const olderMessages = createMoreMessages()
  messages.unshift(...olderMessages)
  return messages
}

export const receiveNewMessages = (messages = []) => {
  const newerMessages = createMoreMessages()
  messages.push(...newerMessages)
  return messages
}
