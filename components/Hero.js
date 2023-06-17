import React from "react";
import 'lazysizes'

const Hero = () => {
  return (
    <div className="relative bg-white pt-[120px] pb-[110px] lg:pt-[150px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-5/12 sm:flex sm:justify-center self-center">
            <div className="hero-content">
              <h1 className="text-dark m-8 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px] text-center lg:text-left">
                Ibu Hamil <br />
                Sehat bahagia <br />
              </h1>
              <p class="text-body-color mx-8 sm:max-w-[480px] max-w[80vw] text-base text-center lg:text-left">
                Rahasia Kesehatan Ibu Hamil: Temukan Menu Makanan Terbaik untuk
                Kehamilan Bahagia
              </p>
              <ul class="flex flex-wrap items-center">
                <li></li>
                {}
              </ul>
              {}
            </div>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right sm:flex sm:justify-center ">
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <img
                  src="https://raw.githubusercontent.com/nabati17/DATAC/main/img/lazyload.jpeg"
                  data-src="https://i.pinimg.com/564x/5d/a1/cb/5da1cb8daa16aea6a81ce2f5349fde9a.jpg"
                  alt="hero"
                  className="sm:w-full w-[100vw] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 lazyload ..."
                />
                <span className="absolute -left-8 -bottom-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
