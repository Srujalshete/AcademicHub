import React from 'react'
import Navbar from  './navbar';
import Footer from './footer';

function alumini() {
  return (
    <>
    <Navbar /> 
    
    <div className="container mx-auto max-w-6xl p-10 mt-6">
  <h3 className="text-gray-800 py-6 text-3xl text-center font-bold">Popular Tweets</h3>
  <div className="md:columns-2 lg:columns-3 gap-6 p-4 sm:p-1 mt-2">
    <div className="animate-in zoom-in duration-200">
      <div className="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
        <div className="flex flex-col break-inside-avoid-page z-0 relative">
          <div className="flex justify-between">
            <div className="flex space-x-6">
              <div className="flex space-x-4 flex-shrink-0 w-52">
                <img src="https://randomuser.me/api/portraits/men/51.jpg" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold text-black">
                    Salvador Rose
                  </div>
                  <div className="text-sm text-gray-900">
                    @Salvador
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#" target="_blank" className="whitespace-pre-line break-inside-avoid-page text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </a>
        </div>
      </div>
    </div>
    <div className="animate-in zoom-in duration-200">
      <div className="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
        <div className="flex flex-col break-inside-avoid-page z-0 relative">
          <div className="flex justify-between">
            <div className="flex space-x-6">
              <div className="flex space-x-4 flex-shrink-0 w-52">
                <img src="https://randomuser.me/api/portraits/men/34.jpg" className="w-10 h-10 rounded-full" />
                <div>
                   <div className="font-semibold text-black">
                    John doe
                  </div>
                  <div className="text-sm text-gray-900">
                    @John
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="@" target="_blank" className="whitespace-pre-line break-inside-avoid-page text-gray-800">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.</span>
          </a>
        </div>
      </div>
    </div>
    <div className="animate-in zoom-in duration-200">
      <div className="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
        <div className="flex flex-col break-inside-avoid-page z-0 relative">
          <div className="flex justify-between">
            <div className="flex space-x-6">
              <div className="flex space-x-4 flex-shrink-0 w-52">
                <img src="https://randomuser.me/api/portraits/men/78.jpg" className="w-10 h-10 rounded-full" />
                <div>
                   <div className="font-semibold text-black">
                    Mike tyson
                  </div>
                  <div className="text-sm text-gray-900">
                    @mike
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href target="_blank" className="whitespace-pre-line break-inside-avoid-page text-gray-800">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </span>
          </a>
        </div>
      </div>
    </div>
    <div className="animate-in zoom-in duration-200">
      <div className="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
        <div className="flex flex-col break-inside-avoid-page z-0 relative">
          <div className="flex justify-between">
            <div className="flex space-x-6">
              <div className="flex space-x-4 flex-shrink-0 w-52">
                <img src="https://randomuser.me/api/portraits/women/51.jpg" className="w-10 h-10 rounded-full" />
                <div>
                   <div className="font-semibold text-black">
                    Sia
                  </div>
                  <div className="text-sm text-gray-900">
                    @Sia
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#" target="_blank" className="whitespace-pre-line break-inside-avoid-page text-gray-800">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </span>
          </a>
        </div>
      </div>
    </div>
    <div className="animate-in zoom-in duration-200">
      <div className="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
        <div className="flex flex-col break-inside-avoid-page z-0 relative">
          <div className="flex justify-between">
            <div className="flex space-x-6">
              <div className="flex space-x-4 flex-shrink-0 w-52">
                <img src="https://randomuser.me/api/portraits/men/34.jpg" className="w-10 h-10 rounded-full" />
                <div>
                   <div className="font-semibold text-black">
                    Cheung
                  </div>
                  <div className="text-sm text-gray-900">
                    @Cheung
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href target="_blank" className="whitespace-pre-line break-inside-avoid-page text-gray-800">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </span>
          </a>
        </div>
      </div>
    </div>
    <div className="animate-in zoom-in duration-200">
      <div className="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
        <div className="flex flex-col break-inside-avoid-page z-0 relative">
          <div className="flex justify-between">
            <div className="flex space-x-6">
              <div className="flex space-x-4 flex-shrink-0 w-52">
                <img src="https://randomuser.me/api/portraits/women/8.jpg" className="w-10 h-10 rounded-full" />
                <div>
                   <div className="font-semibold text-black">
                    Kendra
                  </div>
                  <div className="text-sm text-gray-900">
                    @Kendra
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#" target="_blank" className="whitespace-pre-line break-inside-avoid-page text-gray-800">
            <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </span>
          </a>
        </div>
      </div>
    </div>
    <div className="animate-in zoom-in duration-200">
      <div className="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
        <div className="flex flex-col break-inside-avoid-page z-0 relative">
          <div className="flex justify-between">
            <div className="flex space-x-6">
              <div className="flex space-x-4 flex-shrink-0 w-52">
                <img src="https://randomuser.me/api/portraits/men/5.jpg" className="w-10 h-10 rounded-full" />
                <div>
                   <div className="font-semibold text-black">
                    King
                  </div>
                  <div className="text-sm text-gray-900">
                    @king
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#" target="_blank" className="whitespace-pre-line break-inside-avoid-page text-gray-800">
            <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </span>
          </a>
        </div>
      </div>
    </div>
    <div className="animate-in zoom-in duration-200">
      <div className="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
        <div className="flex flex-col break-inside-avoid-page z-0 relative">
          <div className="flex justify-between">
            <div className="flex space-x-6">
              <div className="flex space-x-4 flex-shrink-0 w-52">
                <img src="https://randomuser.me/api/portraits/men/50.jpg" className="w-10 h-10 rounded-full" />
                <div>
                   <div className="font-semibold text-black">
                    Yoda
                  </div>
                  <div className="text-sm text-gray-900">
                    @yoda
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#" target="_blank" className="whitespace-pre-line break-inside-avoid-page text-gray-800">
            <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="relative m-16">
        <button className="absolute py-1 px-3 -left-8 -top-2 -rotate-[10deg] border border-black bg-[#7e22ce] text-white font-bold shadow-black">
          WARNING!
        </button>
        <div className="p-8 border border-black shadow-[4px_4px_1px_rgb(126,34,206)]">
          The{' '}
          <span className="font-mono text-purple-700 font-bold">message</span>{' '}
          variable is a Laravel reserved word within this email context, so you should avoid using that as a field handle if you intend on using the email feature.
        </div>
      </div>

      <div className="relative m-16">
        <span className="absolute -z-10 w-full h-full inset-1 bg-violet-500 rounded-xl"></span>
        <button className="absolute py-1 z-10 px-3 -left-8 -top-2 -rotate-[10deg] bg-violet-500 text-white font-bold shadow-black">
          WARNING!
        </button>
        <div className="p-8 border border-black shadow-[4px_4px_1px_rgb(126,34,206)] bg-white rounded-xl z-20">
          The{' '}
          <span className="font-mono text-purple-700 font-bold">message</span>{' '}
          variable is a Laravel reserved word within this email context, so you should avoid using that as a field handle if you intend on using the email feature.
        </div>
      </div>
</div>
<Footer />
</>
  )
}

export default alumini