import React from "react";

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
];

const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
];

export default function About() {
  return (
    <div className="border relative mx-auto max-w-50% rounded-lg p-4 shadow-lg">
      <div className="relative isolate overflow-hidden bg-gray-900 rounded-lg py-24 sm:py-32 mb-10" style={{ paddingTop: '20rem' }}>
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center rounded-lg"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl border border-gradient"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] border-gradient"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu border border-gradient"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] border-gradient"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
    
  );
}
 <div className="mt-10">
    <section className="bg-gray-100">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
            <p className="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
              Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
              malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
            <div className="mt-8">
              <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                <span className="ml-2">→</span></a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
   
<section className>
  <div className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font">
          Why choose us?
        </h2>
        <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
          We know tech, we know finance. We are fintech experts.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
          We know how to handle taxation for all the
          countried we operate in. We care for our customers and help them manage cashflows.
        </p>
      </div>
      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
              </div>
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Powerful API</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </dd>
          </div>
          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
              </div>
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Easy to integrate
                SDK
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </dd>
          </div>
          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />
              </div>
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Low Transaction Cost
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </dd>
          </div>
          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />
              </div>
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Powerful Dashboard
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</section>

<div class="container mx-auto px-4 py-8">
    <div class="relative wrap overflow-hidden">
       
        <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
 
        <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">Event Title 1</h3>
                <p class="text-gray-700 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.</p>
            </div>
        </div>
 
        <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">2</h1>
            </div>
            <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">Event Title 2</h3>
                <p class="text-gray-700 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.</p>
            </div>
        </div> 
        <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">Event Title 3</h3>
                <p class="text-gray-700 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.</p>
            </div>
        </div>
 
        <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">4</h1>
            </div>
            <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">Event Title 4</h3>
                <p class="text-gray-700 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.</p>
            </div>
        </div>
 
        <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">5</h1>
            </div>
            <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">Event Title 5</h3>
                <p class="text-gray-700 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.</p>
            </div>
        </div>
    </div>
</div>
</div>