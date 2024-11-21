"use client";
import { Transition } from "@headlessui/react";
import { useState } from "react";

export default function HeroSection() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div
        className="flex flex-col min-h-screen relative sm:px-12 px-4 pt-5"
        onClick={() => {
          if (isDrawerOpen) setIsDrawerOpen(false);
        }}
      >
        <div className="absolute inset-0 -z-10">
          <img
            src="https://s3-alpha-sig.figma.com/img/a12c/6c81/e6a6bb7a6ea47072f419fce685e38891?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LPlVxzrcbyVPdLHJ~aqigcxYCqVmIxRDhBrAXOiUicSlzjdNvEqLLlu0d6XbuyGnVcLtRrXARGK0cmc0AsewWNSiF8lRxrSQhUyr5F4qS3M08PM2s1ikbHTWBCj8QfmvDjlfsXmzuit3ADBrdfzZte~W1dbepG4cZ73i8v1bVGOJXcYZ3WwLgW6pEbnQd5ad-pvsKZbJ5fO97J8ktXDTGx5KBF51WhdjfAX20IORf7EBUOM1cpdgtxmGWAOEbIIUIXeihfJO-5RSb8mD3pJO-C4OULVZP2fFCOTbtr6AbTW03KIMbqFa2HTJUyvU50h1OQ3NFMF1iq-mqLMygCoiTg__"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div></div>

        <div className="flex w-full rounded-full bg-white/30 gap-4 px-6 py-3 items-center text-white">
          <img
            src="./assets/icons/menu.svg"
            className="w-8 h-8 xl:hiddens"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          />
          <img
            src="./assets/logo/logo.png"
            className="w-[113px] h-[25px] ml-auto sm:ml-0"
          />
          <div className="xl:flex flex-row gap-6 pl-10 items-center text-white font-medium hidden ">
            <p>SUBBD</p>
            <p>Keys</p>
            <p>Ai Features</p>
            <p>Benefits</p>
            <p>Team</p>
            <p>Roadmap</p>
            <p>Merch</p>
          </div>
          <div className="flex-1 md:flex hidden flex-row gap-2 justify-end">
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white/10">
              <img src="/assets/icons/telegram.svg" className="w-4 h-4" />
            </div>
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white/10">
              <img src="/assets/icons/twitter.svg" className="w-4 h-4" />
            </div>
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white/10">
              <img src="/assets/icons/instagram.svg" className="w-4 h-4" />
            </div>
          </div>
          <div className="sm:flex hidden ml-auto gap-2 items-center px-5 py-3 bg-gradient-to-r from-[#FE3642] to-[#E11F28] rounded-full md:ml-6 text-[13px] font-semibold">
            <img src="/assets/icons/heart.svg" className="w-4 h-4" />
            Join SUBBD
          </div>
          {/* <Transition
          show={isDrawerOpen}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Transition.Child
            enter="transition-transform duration-300"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition-transform duration-300"
            leaveFrom="translate-y-0"
            leaveTo="translate-y-full"
          >
            <div className="flex gap-4 px-6 py-3 items-center text-white fixed top-5 left-12 w-[calc(100vw-96px)] h-[67.5px] rounded-full bg-black">
              <img
                src="./assets/icons/menu.svg"
                className="w-8 h-8 xl:hiddens"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              />
              <div className="flex flex-row gap-6 pl-10 items-center text-white font-medium">
                <p>SUBBD</p>
                <p>Keys</p>
                <p>Ai Features</p>
                <p>Benefits</p>
                <p>Team</p>
                <p>Roadmap</p>
                <p>Merch</p>
              </div>
            </div>
          </Transition.Child>
        </Transition> */}
        </div>

        <div className="flex-1 grid sm:grid-cols-2 text-white container mx-auto">
          <div className="h-full flex flex-col gap-8 justify-center items-start">
            <h1 className="text-8xl md:text-9xl leading-[110px] tracking-0 font-bebas">
              Victoria
              <br />
              Bianchini
            </h1>
            <button className="flex gap-3 items-center bg-gradient-to-l from-[#FE3642] to-[#E11F28] rounded-full px-6 py-4">
              <img src="/assets/icons/heart.svg" className="w-5 h-5" />
              See More Content
            </button>
          </div>
        </div>
      </div>

      <div
        className={`absolute md:w-fit w-full bg-black md:top-24 md:left-20 top-0 flex-col md:rounded-full gap-8 px-6 py-8 items-center text-white ${
          isDrawerOpen ? "flex" : "hidden"
        }`}
      >
        <div className="flex justify-between w-full items-center">
          <img src="./assets/logo/logo.png" className="w-[113px] h-[25px]" />
          <img
            src="./assets/icons/cancel.svg"
            className="w-8"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          />
        </div>
        <div className="flex md:flex-row flex-col gap-6 items-center text-white font-medium ">
          <p>SUBBD</p>
          <p>Keys</p>
          <p>Ai Features</p>
          <p>Benefits</p>
          <p>Team</p>
          <p>Roadmap</p>
          <p>Merch</p>
        </div>
        <div className="flex-1 flex flex-row gap-8 justify-end">
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white/10">
            <img src="/assets/icons/telegram.svg" className="w-4 h-4" />
          </div>
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white/10">
            <img src="/assets/icons/twitter.svg" className="w-4 h-4" />
          </div>
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white/10">
            <img src="/assets/icons/instagram.svg" className="w-4 h-4" />
          </div>
        </div>
        <div className="flex gap-2 items-center px-5 py-3 bg-gradient-to-r from-[#FE3642] to-[#E11F28] rounded-full md:ml-6 text-[13px] font-semibold">
          <img src="/assets/icons/heart.svg" className="w-4 h-4" />
          Join SUBBD
        </div>
      </div>
    </>
  );
}
