 
import React from 'react';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      linkedin: 'https://www.linkedin.com/in/leslie-alexander',
    facebook: 'https://www.facebook.com/leslie.alexander',
  },
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      linkedin: 'https://www.linkedin.com/in/leslie-alexander',
      facebook: 'https://www.facebook.com/leslie.alexander',
    },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      linkedin: 'https://www.linkedin.com/in/leslie-alexander',
      facebook: 'https://www.facebook.com/leslie.alexander',
    },
  {
    name: 'Lindsay James',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      linkedin: 'https://www.linkedin.com/in/leslie-alexander',
      facebook: 'https://www.facebook.com/leslie.alexander',
    },
  {
    name: 'Sam Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      linkedin: 'https://www.linkedin.com/in/leslie-alexander',
      facebook: 'https://www.facebook.com/leslie.alexander',
    },
  {
    name: 'lunsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      linkedin: 'https://www.linkedin.com/in/leslie-alexander',
      facebook: 'https://www.facebook.com/leslie.alexander',  
    },
  
  // Add more people as needed...
];

export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
              Meet our leadership
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt={person.name} />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                    <div className="mt-2 flex space-x-4 justify-center">
                      <a href={person.linkedin} className="text-gray-800 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="h-5 w-5" aria-hidden="true" />
                      </a>
                      <a href={person.facebook} className="text-gray-800 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="h-5 w-5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }


  
 