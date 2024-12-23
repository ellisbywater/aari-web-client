
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import React, { useState } from 'react'
import { Dialog, Disclosure, Popover } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { NavLink } from "react-router";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    const navItems = [
        { id: 1, text: 'Pricing', to: "/pricing"},
        {id: 2, text: 'Features', to: "/features"},
        {id: 3, text: 'Get Started', to: "/signup"},
    ]

    return (
      <header className="bg-gradient-to-r from-[#131e43] to-[#080c1b] fixed w-full h-[96px] sm:h-[160px] px-10 md:px-20">
      <nav className="mx-auto flex w-full h-full items-center justify-between py-6 lg:pr-12" aria-label="Global">
          <div className="flex lg:flex-1">
              <NavLink to="/" className="-m-1.5 p-1.5">
                 
                  <span className="sr-only">Raven's Rhyme</span>
                  <img
                      className="h-16 w-auto"
                      src={'/ravensrhyme_logo.svg'}
                      alt="Raven's Rhyme"
                  />
              </NavLink>
          </div>
          <div className="flex lg:hidden">
              <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
                  onClick={() => setMobileMenuOpen(true)}
              >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">

              <NavLink to="/features" className="text-base font-base leading-6 text-gray-200 hover:text-yellow-400 transition">
                  Features
              </NavLink>
              <NavLink to="/blog" className="text-base font-base leading-6 text-gray-200 hover:text-yellow-400 transition">
                  Blog
              </NavLink>
              <NavLink to="/about-us" className="text-base font-base leading-6 text-gray-200 hover:text-yellow-400 transition">
                  About Us
              </NavLink>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <NavLink
                  to={'/contact-us'}
                  className={'rounded-full py-3 px-8 text-gray-50  text-lg bg-gradient-to-r from-yellow-600 to-yellow-400 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 transition'}
              >
                  Get Started
              </NavLink>
          </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Raven & Rhyme</span>
                      <NavLink to="/" className="-m-1.5 p-1.5">
                          <span className="sr-only">Raven & Rhyme</span>
                          <img
                              className="h-16 w-auto rounded-xl"
                              src={'/ravenrhyme_logo.svg'}
                              alt="Your Company"
                          />
                      </NavLink>
                  </a>
                  <button
                      type="button"
                      className="-m-2.5 rounded-md p-2.5 text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                  >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
              </div>
              <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="space-y-2 py-6">
                          <Disclosure as="div" className="-mx-3">
                              {({ open }) => (
                                  <>
                                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                          Service
                                          <ChevronDownIcon
                                              className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                              aria-hidden="true"
                                          />
                                      </Disclosure.Button>
                                      <Disclosure.Panel className="mt-2 space-y-2">
                                      </Disclosure.Panel>
                                  </>
                              )}
                          </Disclosure>
                          <NavLink
                              to="/blog"
                              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                              Blog
                          </NavLink>
                          <NavLink
                              to="/about-us"
                              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                              About Us
                          </NavLink>
                      </div>
                      <div className="py-6">
                          <NavLink
                              to="contact-us"
                              className="-mx-3 block rounded-lg px-3 py-2.5 text-base text-white bg-gradient-to-r from-yellow-500 to-yellow-400 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 transition"
                          >
                              Get Started
                          </NavLink>
                      </div>
                  </div>
              </div>
          </Dialog.Panel>
      </Dialog>
  </header>
    )
}