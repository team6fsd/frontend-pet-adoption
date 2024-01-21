const Hero = () => {
return (
<>
    <section className="bg-gray-100 text-gray-800">
        <div
            className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div
                className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-xl font-bold leadi sm:text-4xl">
              <p className="text-yellow-400">Welcome To Website 👋</p>
              <span>Want to adopt some animals ?</span>
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
                 We will help you to find pets for your choice, explore here
              </p>
                <div
                    className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <a rel="noopener noreferrer" href="/pet"
                        className="px-8 py-3 text-lg font-semibold rounded bg-yellow-500 text-gray-50"><i className="fa-solid fa-paw"></i> Explore pets</a>
                </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img src="https://i.ibb.co/BNGc0Yv/image-removebg-preview-8.png" alt=""
                    className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
            </div>
        </div>
    </section>
</>
)
}

export default Hero;
