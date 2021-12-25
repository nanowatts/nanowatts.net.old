import Link from "next/link"
import { useRouter } from "next/router"

const Header = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col items-start">
      <div className="grid items-center mb-4 grid-cols-auto grid-rows-auto justify-items-center ">
        <div className="col-1 row-1">
        </div>
        <div className="z-10 col-1 row-1">
          <Link href="/" passhref>
            <a className="mb-4 ">
            </a>
          </Link>
        </div>
      </div>
        <h1 className="text-base font-medium">Justin Watts</h1>
        <h2 className="text-tertiary dark:text-darkTertiary">
          Engineer, Instigator
        </h2>
    </div>
  )
}

export default Header