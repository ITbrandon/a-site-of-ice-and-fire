import { Form, Link, ActionFunctionArgs, redirect, useActionData, useNavigation } from 'react-router-dom'
import direwolf from '../assets/direwolf.png'
import { signup } from '../server/api'

export async function action({request}: ActionFunctionArgs) {
  const formData = await request.formData()
  const email = formData.get('email') as string | null
  const username = formData.get('username') as string | null
  const password = formData.get('password') as string | null

   if(email && username && password)
   {
    try {
      await signup(email, username, password)
      return redirect("/login")
    }
    catch(err)
    {
      return { message: err instanceof Error ? err.message : "Something went wrong" };
    }
   }
  
}

const Signup = () => {

const navigation = useNavigation()
const error = useActionData()

  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src={direwolf}
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign Up and Join Our House
        </h2>
        {error && <h3 className='text-red-500 text-center mt-5'>{error.message}</h3>}
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form method="post" className="space-y-6">
        <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                required
                disabled={navigation.state === "submitting"}
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                required
                disabled={navigation.state === "submitting"}
                autoComplete="username"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                disabled={navigation.state === "submitting"}
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={navigation.state === "submitting"}
              className="flex w-full justify-center rounded-md border-2 border-black bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-white hover:text-black cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </Form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Already a member?{' '}
          <Link to="/login" className="font-semibold text-black hover:underline cursor-pointer">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  </>
  )
}

export default Signup