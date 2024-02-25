import Hero from "../../assets/img/hero.gif"
function Welcome() {
  return (
    <div
      id="welcome"
      className="bg-welcome bg-center bg-no-repeat bg-cover bg-blend-multiply pt-12 pb-32"
    >
      <div className=" w-full px-4 mx-auto max-w-screen-xl py-24 lg:py-60 ">
        <div className="flex flex-col justify-center items-center lg:-translate-y-10">
          <h1 className="font-bold text-7xl sm:text-9xl lg:text-10xl text-slate-100 text-center font-pixelF font-outline-2 xl:font-outline-4 drop-shadow-2xl">
            Welcome
          </h1>
        </div>
      </div>
    </div>
  )
}
export default Welcome
