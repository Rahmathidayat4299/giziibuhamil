import React from "react";
const Footer = () => {
  return (
    <footer>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-12 sm:items-start">
        <nav className="mt-6 items-center space-x-3 hidden">
          <a
            href="#"
            className="rounded-lg bg-gray-100 p-1 text-gray-500 transition hover:bg-gray-200"
          >
            <svg className="h-6 w-6" viewBox="0 0 512 512">
              <path
                fill="currentcolor"
                d="M437 152a72 72 0 01-40 12 72 72 0 0032-40 72 72 0 01-45 17 72 72 0 00-122 65 2e2 2e2.0 01-145-74 72 72 0 0022 94 72 72 0 01-32-7 72 72 0 0056 69 72 72 0 01-32 1 72 72 0 0067 50A2e2 2e2.0 0193 368a2e2 2e2.0 00309-179 2e2 2e2.0 0035-37"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="rounded-lg bg-gray-100 p-1 text-gray-500 transition hover:bg-gray-200"
          >
            <svg className="h-6 w-6" viewBox="0 0 512 512">
              <path
                d="m427 169c-4-15-17-27-32-31-34-9-239-10-278 0-15 4-28 16-32 31-9 38-10 135 0 174 4 15 17 27 32 31 36 10 241 10 278 0 15-4 28-16 32-31 9-36 9-137 0-174"
                fill="currentcolor"
              ></path>
              <path d="m220 203v106l93-53" fill="#fff"></path>
            </svg>
          </a>
          <a
            href="#"
            className="rounded-lg bg-gray-100 p-1 text-gray-500 transition hover:bg-gray-200"
          >
            <svg className="h-6 w-6" fill="currentcolor" viewBox="0 0 512 512">
              <circle cx="142" cy="138" r="37"></circle>
              <path
                stroke="currentcolor"
                stroke-width="66"
                d="M244 194v198M142 194v198"
              ></path>
              <path d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32"></path>
            </svg>
          </a>
          <a
            href="#"
            className="rounded-lg bg-gray-100 p-1 text-gray-500 transition hover:bg-gray-200"
          >
            <svg className="h-6 w-6" fill="currentcolor" viewBox="0 0 512 512">
              <path
                d="m386 137c-24-11-49.5-19-76.3-23.7-.5.0-1 0-1.2.6-3.3 5.9-7 13.5-9.5 19.5-29-4.3-57.5-4.3-85.7.0-2.6-6.2-6.3-13.7-10-19.5-.3-.4-.7-.7-1.2-.6-23 4.6-52.4 13-76 23.7-.2.0-.4.2-.5.4-49 73-62 143-55 213 0 .3.2.7.5 1 32 23.6 63 38 93.6 47.3.5.0 1 0 1.3-.4 7.2-9.8 13.6-20.2 19.2-31.2.3-.6.0-1.4-.7-1.6-10-4-20-8.6-29.3-14-.7-.4-.8-1.5.0-2 2-1.5 4-3 5.8-4.5.3-.3.8-.3 1.2-.2 61.4 28 128 28 188 0 .4-.2.9-.1 1.2.1 1.9 1.6 3.8 3.1 5.8 4.6.7.5.6 1.6.0 2-9.3 5.5-19 10-29.3 14-.7.3-1 1-.6 1.7 5.6 11 12.1 21.3 19 31 .3.4.8.6 1.3.4 30.6-9.5 61.7-23.8 93.8-47.3.3-.2.5-.5.5-1 7.8-80.9-13.1-151-55.4-213 0-.2-.3-.4-.5-.4zM194 308c-19 0-34-17-34-38s15-38 34-38 34 17 34 38-15 38-34 38zm125 0c-19 0-34-17-34-38s15-38 34-38 34 17 34 38-15 38-34 38z"
                fill="currentcolor"
              ></path>
            </svg>
          </a>
        </nav>
        <nav className="flex w-full flex-col-reverse items-center justify-between space-y-4 space-y-reverse text-xs font-medium text-gray-500 sm:flex-row sm:space-y-0">
          <p>© 2023,Ibu hamil sehat. All Rights Reserved.</p>
          <p>
            <a href="#" className="hover:underline">
              Capstone Project Kampus Merdeka
            </a>{" "}
            ·
            <a href="#" className="hover:underline">
              Terms
            </a>
          </p>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
