import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="mx-auto flex h-[700px] w-full flex-col items-center justify-center gap-4 bg-gray-950/95 bg-[url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)] bg-cover bg-center bg-no-repeat py-10 bg-blend-overlay md:py-0 lg:py-0 xl:py-0">
        <div className="flex w-full flex-col flex-wrap space-y-8 px-5 text-center sm:w-9/12 md:w-3/4 lg:w-2/4 xl:w-2/4">
          <div className="flex justify-center space-x-3">
            <h1 className="text-3xl font-bold text-white md:text-2xl xl:text-3xl">
              The Fashion Database
            </h1>
            <span className="align-center flex items-center justify-center rounded-full bg-blue-500 px-3 py-1 text-center text-sm font-bold text-white">
              v1.0.1
            </span>
          </div>

          <p className="text-base font-normal text-white md:text-sm xl:text-base">
            At "The Fashion Database" (TFDB), we believe that fashion is more than just clothing -
            it's a form of self-expression that should be accessible to everyone.
          </p>
          <div className="mx-auto flex items-center justify-center space-x-5">
            <Link
              href={'/docs'}
              className="flex w-fit rounded bg-white px-4 py-2 text-sm font-semibold text-blue-700 duration-300 hover:scale-110 hover:bg-blue-600  hover:text-white sm:mx-auto md:mx-0  md:text-base lg:mx-0 lg:text-base xl:mx-0 xl:px-5 xl:py-2 xl:text-base">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
