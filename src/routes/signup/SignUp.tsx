import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

//* Componentes
import NavBar from "@components/NavBar"
import BasicModal from "@components/BasicModal"


//* Assets
import HappyBee from '@assets/abeja-saludando.webp'
import ShyBee from '@assets/abeja-shy.webp'

const SignUp: React.FC = () => {

  const navigate = useNavigate()

  //*Mensajitos para la modal
  const [imageSrc, setImageSrc] = useState("")
  const [message, setMessage] = useState("")
  const [mainMessage, setMainMessage] = useState("")
  const [showModal, setShowModal] = useState(false)

  //*Form Sign Up
  const { register, formState: { errors }, handleSubmit, reset } = useForm()

  async function getForm(data: object) {
    try {
      const response = await fetch("https://beesmrt-backend-vercel.vercel.app/registerUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        const responseData = await response.json();
        const token = responseData.token;

        //* Guardar el token en el local storage u otro lugar según sea necesario
        localStorage.setItem('TokenBeesmrt', token);

        navigate("/MyAccount");
      } else if (response.status === 409) {
        console.error("El usuario ya existe")
        setImageSrc(ShyBee)
        setMessage("This user already exists, try with a different email.")
        setMainMessage("User already exists")
        setShowModal(!showModal)
      } else {
        console.error("Error:", response)
      }

    } catch (error) {
      console.error("Error:", error)
    }
    reset()
  }

  function chekPassword(e: React.ChangeEvent<HTMLInputElement>) {
    const password = (document.querySelector('input[name="password"]') as HTMLInputElement).value
    if (e.target.value !== password) {
      e.target.setCustomValidity("Passwords don't match")
    } else {
      e.target.setCustomValidity("")
    }
  }

  return (
    <main className="w-screen h-screen bg-Gradient1 overflow-x-hidden">
      <NavBar />
      <div className="flex justify-center">
        <div className="bg-white rounded-md px-7 pt-7 pb-5 mt-4 text-center w-96 shadow-2xl">
          <form onSubmit={handleSubmit(getForm)}>
            <div className="flex justify-center items-center gap-3">
              <span className="font-Principal text-3xl">Join the BEE TEAM!!!</span>
              <img src={HappyBee} className="w-10" />
            </div>
            <div className="text-left font-Principal text:lg md:text-xl leading-7 py-2 text-gray-900">
              Full name: <br />
              <input placeholder="Jhon Beesmith" autoComplete="username" type="text" className="w-full font-Secundaria bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                {...register("fullName", {
                  required: true,
                  minLength: 5,
                  maxLength: 50,
                  pattern: /^[A-Za-z\sÁÉÍÓÚáéíóúñÑü\-']+$/
                })} />
              {
                errors.fullName?.type === "required" &&
                <p className="text-red-600 font-Secundaria">This field is required</p>
              }
              {
                errors.fullName?.type === "minLength" &&
                <p className="text-red-600 font-Secundaria">Your name should have 5 letters at least</p>
              }
              {
                errors.fullName?.type === "maxLength" &&
                <p className="text-red-600 font-Secundaria">Your name can't be longer that 50 letters</p>
              }
              {
                errors.fullName?.type === "pattern" &&
                <p className="text-red-600 font-Secundaria">Your name should just have letters</p>
              }
            </div>

            <div className="text-left font-Principal text:lg md:text-xl pb-2 leading-7 text-gray-900">
              Nick name: <br />
              <input placeholder="Mr.BEE343" className="w-full font-Secundaria bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                {...register("nickName", {
                  required: true,
                  minLength: 5,
                  maxLength: 50,
                })} />
              {
                errors.nickName?.type === "required" &&
                <p className="text-red-600 font-Secundaria">This field is required, you will be able to change your Nick name later</p>
              }
              {
                errors.nickName?.type === "minLength" &&
                <p className="text-red-600 font-Secundaria">Your nickname should have 5 letters at least</p>
              }
              {
                errors.nickName?.type === "maxLength" &&
                <p className="text-red-600 font-Secundaria">Your nickname can't be longer that 50 letters</p>
              }
            </div>

            <div className="text-left pb-2 font-Principal text:lg md:text-xl leading-7 text-gray-900">
              Email: <br />
              <input placeholder="beesmrt@example.com" autoComplete="email" type="text" className="w-full font-Secundaria bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i
                })} />
              {
                errors.email?.type === "required" &&
                <p className="text-red-600 font-Secundaria">This field is required</p>
              }
              {
                errors.email?.type === "pattern" &&
                <p className="text-red-600 font-Secundaria">This email is not valid</p>
              }
            </div>
            <div className="text-left pb-2 font-Principal text:lg md:text-xl leading-7 text-gray-900">
              Password: <br />
              <input placeholder="Happ&BEE1" type="password" autoComplete="new-password" className="w-full font-Secundaria bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-_=+]).{8,}$/i
                })} />
              {
                errors.password?.type === "required" &&
                <p className="text-red-600 font-Secundaria">This field is required</p>
              }
              {
                errors.password?.type === "minLength" &&
                <p className="text-red-600 font-Secundaria">Your password should have 8 characters at least</p>
              }
              {
                errors.password?.type === "maxLength" &&
                <p className="text-red-600 font-Secundaria">Your password can't be longer that 20 characters</p>
              }
              {
                errors.password?.type === "pattern" &&
                <p className="text-red-600 font-Secundaria">Your password should have at least one uppercase letter, one lowercase letter, one number and one special character</p>
              }
            </div>
            <div className="text-left font-Principal text:lg md:text-xl leading-7 text-gray-900">
              Confirm password: <br />
              <input placeholder="Happ&BEE1" type="password" autoComplete="current-password" className="w-full font-Secundaria bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out" onChange={chekPassword} />
              <br />
              <button className="mt-4 font-Principal text-white bg-Pink2 border-0 py-2 px-[138px] w-full focus:outline-none hover:bg-Pink1 rounded text-xl shadow-lg flex-col">Sign Up</button>
              <div className="Footer-Login text-center py-2 pt-3 font-Secundaria">
                Do you already have an account? <br /> <Link to="/login" className="text-indigo-700 font-bold">Go to Log In</Link>
              </div>
              <div className="text-center pt-2 font-Secundaria">
                <p>By signing up, you agree to our
                  <br />
                  <Link to="/privacypolicy" className="text-indigo-700 font-semibold"> Privacy Policy</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <BasicModal imageSrc={imageSrc} mainMessage={mainMessage} message={message} showModal={showModal} closeModal={() => setShowModal(!showModal)} />
    </main>
  )
}

export default SignUp