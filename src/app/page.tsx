import { getNhost } from '@utils/nhost'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const nhost = await getNhost()
  const session = nhost.auth.getSession()

  if (session) {
    return <h1 className="text-2xl text-center">Hi, {session.user.email}</h1>
  }

  return <h1 className="text-2xl text-center">Hi, login/register to get started</h1>
}
