import { getServerSession } from '#auth'

// users資料庫
const users = [
  {
    id: 1,
    email: 'test@gmail.com',
    password: 'password',
    gender: 'F',
  },
  {
    id: 2,
    email: 'test2@gmail.com',
    password: 'password',
    gender: 'F',
  },
  {
    id: 3,
    email: 'test3@gmail.com',
    password: 'password',
    gender: 'M',
  },
]

export default eventHandler(async (event: any) => {
  const session = await getServerSession(event)

  // 沒登入即顯示此訊息
  if (!session) {
    return {
      status: 'unauthencated',
    }
  }
  const user = users.find((e) => e.email === session.user?.email)
  return { email: user?.email, ok: 'ok' }
})
