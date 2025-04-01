import direwolf from '../assets/direwolf.png'
import { useNavigation, Form, ActionFunctionArgs, useActionData } from 'react-router-dom'
import { resetPassword } from '../server/api'
import Confirmation from '../components/Confirmation'

export async function action({request}: ActionFunctionArgs) {
    const formData = await request.formData() 
    const password = formData.get('password') as string | null
    const confirmPassword = formData.get('confirm-password') as string | null
    const token = new URL(request.url).searchParams.get("token")

    if(password && token)
    {
      try {

      if(password !== confirmPassword)
      {
          throw new Error("Ensure You Confirm Your Password Correctly")
      }

       const reset = await resetPassword(token, password)
       return reset
      }

      catch(err)
      {
        return { message: err instanceof Error ? err.message : "Something went wrong" };
      }
    }
}

const ResetPassword = () => {

const navigation = useNavigation()
const error = useActionData()

  return (
    <>
    {error?.message === "Password reset successful" ? <Confirmation title={"Password Has Been Reset"} message={"Click the button bellow and try logging in"} link={true} /> : <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src={direwolf}
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Enter email to reset password
        </h2>
        {error && <h3 className='text-red-500 text-center mt-5'>{error.message}</h3>}
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form method="post" className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
              New Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                disabled={navigation.state === "submitting"}
                autoComplete="password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm/6 font-medium text-gray-900">
              Confirm New Password
            </label>
            <div className="mt-2">
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                disabled={navigation.state === "submitting"}
                autoComplete="confirm-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={navigation.state === "submitting"}
              className="flex w-full justify-center rounded-md border-2 border-black bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-white hover:text-black cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Reset Password
            </button>
          </div>
        </Form>
      </div>
    </div>}
    </>
  )
}

export default ResetPassword