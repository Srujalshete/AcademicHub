import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import bannerImage from '../assets/bn.png';

function Career() {
  const [activeTab, setActiveTab] = useState('tab1');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <Navbar />
      <div className="relative p-10 mt-10 z-0">
        <img 
          src={bannerImage} 
          alt="Banner" 
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          style={{ zIndex: '-1' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg shadow-lg mt-6">
          <h1 className="text-white text-4xl font-bold">Career Counseling</h1>
        </div>
      </div>
      <div className="container mx-auto max-w-6xl p-8 text-left">
        {/* Placements */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">Placements</h2>
          <p className='mb-4 text-gray-800'>
            Indus International School Pune is proud to have a dedicated Career Counselling and College Placements department which truly understands how fine lines between industries and job profiles are changing and believes in preparing our students for tomorrow.
          </p>
          <p className='mb-4 text-gray-800'>
            Students graduating from Indus are guided to find admissions in prominent Institutions of higher learning both in India and overseas. Our IB DP students have been admitted to the most reputed universities and colleges globally such as:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>Cambridge</li>
            <li>Imperial College London</li>
            <li>London School of Economics</li>
            <li>Cornell</li>
            <li>UC Berkeley</li>
            <li>UCLA</li>
            <li>NYU</li>
            <li>Georgia Tech</li>
            <li>USC</li>
            <li>Purdue</li>
            <li>University of Toronto</li>
            <li>University of Waterloo</li>
            <li>UBC</li>
            <li>University of Sydney</li>
            <li>University of Tokyo</li>
            <li>University of Amsterdam</li>
            <li>And numerous other prestigious colleges across the globe.</li>
          </ul>
          <p className='mb-4 text-gray-800'>
            Students who choose to study disciplines such as Computer Science, Medicine, Engineering, Economics, Business, Media and Communications, and Liberal Arts have earned scholarships to various institutions through their academic and personal profiles. This has helped Indus earn credibility and a reputation of merit.
          </p>
        </div>

        {/* Overview */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">Overview</h2>
          <p className='mb-4 text-gray-800'>
            Career choice is an important decision in our lives. It requires a lot of deliberation, discussion, and more importantly introspection. With a large number of career options available to students, it becomes extremely important to understand their needs, aspirations, identify their strength and weaknesses before making a career decision.
          </p>
          <p className='mb-4 text-gray-800'>
            The Career Counselling and College Placement department at Indus International School, Pune, helps in identifying students’ interests and aptitude. We educate students and parents on higher education systems in India and abroad. The Department emphasizes on the selection of the initial programme and field of interest. Once the field selection is done, we start working on building the candidature profile according to international standards. We focus on the following factors which give us an edge in getting top-ranked university admits with scholarships:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>MYP & IB Grades</li>
            <li>SAT/ACT & TOEFL/IELTS scores</li>
            <li>Recommendation letters</li>
            <li>Personal statements, essays</li>
            <li>Co-curricular & extracurricular activities</li>
            <li>Social Activities - Connecting to the society</li>
            <li>Experiential learning and self-development</li>
          </ul>
        </div>

        {/* Goals */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">Our Goals</h2>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>Make Leadership a habit amongst students</li>
            <li>Realize the importance of quality education from the best colleges</li>
            <li>Give Students and parents, complete information about the Career and College Counselling.</li>
            <li>Provide detailed interactions and advising regarding university options across the globe</li>
            <li>Highlight important benchmarks and milestones through application process well in advance.</li>
            <li>Achieve greatest admits with scholarships through personalized counseling, candidature building and social engrossment.</li>
          </ul>
        </div>

        {/* Career Education Classes */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">CAREER EDUCATION CLASSES</h2>
          <p className='mb-4 text-gray-800'>
            Dedicated Career Education curriculum is provided to students from Grade 9-12. This curriculum helps students increase their awareness of the world of work and plan better for their future. The curriculum for Senior classes has a focus on different courses available in India and abroad, the universities offering these courses and the overall application process.
          </p>
        </div>

        {/* Personalised Guidance Counselling for Subject Choices (Grade 10) */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">PERSONALISED GUIDANCE COUNSELLING FOR SUBJECT CHOICES (GRADE 10)</h2>
          <p className='mb-4 text-gray-800'>
            Students from Grade 8-10 are provided personalised subject and career counselling on subject choices for the IB Diploma Program. Parents’ queries and concerns are addressed through one-on-one meetings during these meetings to make informed decision about their child’s future. For Grade 8 and 9 Students we conduct dedicated workshops to help them with their subject and career choices. There are various Personality and Learning style assessments planned for Grade 8 and 9 students which will help them to discover their true strength and inner potential.
          </p>
        </div>

        {/* Workshop Agenda for MYP Students */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">Workshop Agenda for MYP Students</h2>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>Introduction to the Career Counselling and College Placement Team.</li>
            <li>Instilling the belief that college is accessible and attainable for everyone</li>
            <li>The Right Courses for College Begin in Middle School</li>
            <li>Create an Academic Portfolio</li>
            <li>Develop Extracurricular Interests</li>
            <li>Building a strong foundation for students to choose strong college preparatory courses</li>
            <li>Putting together a plan for standardized testing</li>
            <li>Helping students assess their career interests and aspirations and begin researching colleges to pursue those goals</li>
          </ul>
        </div>

        {/* Engagement with Grade 11 Students */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">Engagement with Grade 11 Students</h2>
          <p className='mb-4 text-gray-800'>
            The Careers team conducts weekly sessions with Grade 11, guiding them on various aspects of applications in the USA, UK, Europe etc. We meet our students individually as well to create a personalized plan for each individual finding their best fit Career and College. Our students also go through their Personality assessments on CIALFO to understand their World of Work.
          </p>
        </div>

        {/* Engagement with Grade 12 Students */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">Engagement with Grade 12 Students</h2>
          <p className='mb-4 text-gray-800'>
            By the time our students join Grade 12, they have completed their initial Career assessment and are clear with their Career choices, declared or undeclared major. Our team works closely with the students to help them apply to Indian and Abroad Universities. We are also converse university offers and and help in finalizing the best fit option for each of our students.
          </p>
        </div>

        {/* University Visits */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">University Visits</h2>
          <p className='mb-4 text-gray-800'>
            More than 120 universities visit our campus each year. We conduct various workshops, university presentation and lectures by university professors during these interaction. Our Annual Career Fair is one of the most anticipated event of the year.
          </p>
        </div>

        {/* Workshops by CIALFO */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">Workshops by CIALFO</h2>
          <p className='mb-4 text-gray-800'>
            Our technology partner CIALFO conducts some interesting workshops on various topics which are highly anticipated by students. Students can register for these events through their CIALFO accounts events section. Some of the past events conducted by CIALFO:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>Studying Abroad in the Age of Pandemic</li>
            <li>Liberal Arts Education in India</li>
            <li>Confused about your Career Choice</li>
            <li>Top Universities in India</li>
            <li>What goes into writing a Great SOP</li>
            <li>UG in India VS UG Aboard</li>
          </ul>
          <p className='mb-4 text-gray-800'>
            We sincerely hope that you’ll benefit from these events and make the most of your College Counselling department.
          </p>
        </div>

        {/* TESTING CENTRE */}
        <div>
          <h2 className="text-3xl font-bold text-purple-600 mb-4">TESTING CENTRE</h2>
          <p className='mb-4 text-gray-800'>
            Indus International School Pune is now the official testing center for SAT. School will start conducting the SAT from December 2022. For internal candidates, The School is also a testing center for PSAT, TSA/ELAT/HAT/PAT/MAT for the University of Oxford & Pre Interview Assessment for the University of Cambridge, LSE, Erasmus, Sciences PO, and University of Amsterdam exams.
          </p>
        </div>

        <div className="flex border-b border-gray-300">
          <button
            onClick={() => openTab('tab1')}
            className={`w-1/5 py-4 text-center font-medium text-gray-700 bg-gray-100 rounded-tl-lg focus:outline-none ${
              activeTab === 'tab1' ? 'bg-gray-200' : ''
            }`}
          >
            8th
          </button>
          <button
            onClick={() => openTab('tab2')}
            className={`w-1/5 py-4 text-center font-medium text-gray-700 bg-gray-100 focus:outline-none ${
              activeTab === 'tab2' ? 'bg-gray-200' : ''
            }`}
          >
            9th
          </button>
          <button
            onClick={() => openTab('tab3')}
            className={`w-1/5 py-4 text-center font-medium text-gray-700 bg-gray-100 focus:outline-none ${
              activeTab === 'tab3' ? 'bg-gray-200' : ''
            }`}
          >
            10th
          </button>
          <button
            onClick={() => openTab('tab4')}
            className={`w-1/5 py-4 text-center font-medium text-gray-700 bg-gray-100 focus:outline-none ${
              activeTab === 'tab4' ? 'bg-gray-200' : ''
            }`}
          >
            11th
          </button>
          <button
            onClick={() => openTab('tab5')}
            className={`w-1/5 py-4 text-center font-medium text-gray-700 bg-gray-100 rounded-tr-lg focus:outline-none ${
              activeTab === 'tab5' ? 'bg-gray-200' : ''
            }`}
          >
            12th
          </button>
        </div>
        <div id="tab1" className={`tabcontent p-4 ${activeTab === 'tab1' ? '' : 'hidden'}`}>
        <ul className="list-disc list-inside mb-4 text-gray-800">
        <li>Overview of the career exploration and university profile building process.</li>
        <li>Assisting subject selection for Grade 9 along with Head of School and Coordinator of MYP.</li>
        <li>Importance of Academics in the High School Journey.</li>
        <li>Develop Extracurricular Interest.</li>
      </ul>
          
        </div>
        <div id="tab2" className={`tabcontent p-4 ${activeTab === 'tab2' ? '' : 'hidden'}`}>
        <ul className="list-disc list-inside mb-8 text-gray-800">
      <li>Introduction to university presentations.</li>
      <li>Preparations and taking of the PSAT exam.</li>
      <li>Introduction to building of university profile, portfolio.</li>
      <li>Helping students assess their career interest and aspiration.</li>
      <li>Parent / student meeting upon request.</li>
      <li>Introduction to Research & Innovation.</li>
    </ul>
        </div>
        <div id="tab3" className={`tabcontent p-4 ${activeTab === 'tab3' ? '' : 'hidden'}`}>
        <ul className="list-disc list-inside mb-8 text-gray-800">
      <li>Family individual counseling for IB subjects.</li>
      <li>Workshops For Grade 10 parents and Students.</li>
      <li>Facilitating Internship and work experience with assistance from PAC (Parents Advisory Committee).</li>
      <li>Preparation for PSAT exam.</li>
      <li>Introduction to university admissions timeline/ requirements.</li>
      <li>Contribution to School Community.</li>
      <li>Research and Innovation.</li>
    </ul>
        </div>
        <div id="tab4" className={`tabcontent p-4 ${activeTab === 'tab4' ? '' : 'hidden'}`}>
        <h2 className="text-3xl font-bold text-purple-500 mb-4">IBCP - IB Career-Related Programme (CP)</h2>
      <p className='text-gray-800'>
        Indus International is one of the very few IB schools in Pune that offers the IB Career-related Programme covering Business Administration as a Career-related study (CRS).
      </p>
      <p className='text-gray-800'>
        Business Administration will be a mandatory subject, including 8 modules, an Internship and Capstone Project, to receive the “Business Administration International Advanced Diploma” (Grade 12).
      </p>
      <p className='text-gray-800'>
        In addition to Business Administration, a student can select 2 or 3 more DP subjects, in order to receive the IB Career Related Programme Certificate.
      </p>
</div>


<div id="tab5" className={`tabcontent p-4 ${activeTab === 'tab5' ? '' : 'hidden'}`}>
 
      <ul className="list-disc list-inside mb-4 text-gray-800">
        <li>Individual family counseling to shortlist university choices.</li>
        <li>Assistance in writing essays and personal statements.</li>
        <li>Helping students be aware of deadlines.</li>
        <li>Advising about best-fit universities for individual students.</li>
        <li>Providing feedback to teachers on letters of recommendation.</li>
        <li>Sending all applications to respective universities.</li>
        <li>Tracking application results in a secure database.</li>
        <li>Supporting project, internship, achievement, and award presentations.</li>
        <li>Assisting in decision-making regarding offers.</li>
      </ul>
</div>
</div>
<Footer />
</>
);
}

export default Career;
