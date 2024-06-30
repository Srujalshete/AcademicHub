import React from 'react';
import campusImage from '../assets/map.jpg';  
import Navbar from './navbar';
import Footer from './footer';

const Campus = () => {
  const buildings = [
    'Old Main',
    'Century House',
    'Facilities Management',
    'Library',
    'Dining Complex/Welcome Center',
    'Gymnasium',
    'Fitness Center Gym (FCG)',
    'Alumni Office',
    'Spurgeon Hall (M)',
    'Judson Hall (M)',
    'Carey Hall (M)',
    'Leland Hall (M)',
    'Armitage Hall (M)',
    'Weeks Hall (W)',
    'Gould Hall (W)',
    'Day Hall (W)',
    'Hilsen Hall (W)',
    'Melford Hall (W)',
    'Hanneman Hall',
    'Science Lab',
    'Guest Suites 1-2',
    'Staff housing',
    'Guest Suites 3-4',
    'Staff housing',
    'Student Health Center',
    'Staff housing',
    'Kiddie Kampus',
    'Kiddie Kradle',
    'Kiddle Korner',
    'Vehicle Maintenance/Facilities Workshop',
    'Costume Cottage',
    'House One',
    'Classrooms W, X, Y, Z',
  ];

  const Lots = [
    '35. Faculty/Staff',
    '36. Visitors/Off-Campus Students',
    '37. On-Campus Men',
    '38. Visitors',
    '39. On-Campus Women',
  ];

  const fieldsAndOthers = [
    '40. Practice Field',
    '41. Soccer Field',
    '42. Quad',
    '43. Lower Quad',
    '44. Alumni Fire Pit',
    '45. Bonfire Pit',
    '46. Explore Watertown',
    '47. Nearby Restaurants',
    '48. Nearby Hotels',
  ];

  return (
    <>
      <Navbar />
      <section className="py-12 px-4 sm:px-6 lg:px-8 mt-16 bg-gray-100">
      <div className="max-w-7xl mx-auto rounded-lg">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline sm:text-4xl">
              Campus Buildings and Areas
            </h2>
          </div>
          <div className="mb-8">
            <img src={campusImage} alt="Campus" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-left">Buildings</h3>
              <ul className="list-decimal list-inside space-y-2 text-gray-800 text-left">
                {buildings.map((building, index) => (
                  <li key={index + 1}>{building}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex flex-col space-y-6">
              <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-left">Parking Lots</h3>
            <ul className="list-none list-inside space-y-2 text-gray-800 text-left">
                {Lots.map((lot, index) => (
                <li key={index}>{lot}</li>
                ))}
            </ul>
            </div> 
            <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 text-left">Fields & Other Areas</h3>
        <ul className="list-none list-inside space-y-2 text-gray-800 text-left">
        {fieldsAndOthers.map((area, index) => (
        <li key={index + 39}>{area}</li>
        ))}
        </ul>  
        </div>
        </div>
        </div>
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Campus;
