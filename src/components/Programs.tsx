import React from 'react';
import { Users, PersonStanding, Weight, Timer } from 'lucide-react';

const programs = [
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Group Classes',
    description: 'High-energy group workouts led by expert trainers.',
  },
  {
    icon: <PersonStanding className="h-8 w-8" />,
    title: 'Personal Training',
    description: 'One-on-one sessions tailored to your goals.',
  },
  {
    icon: <Weight className="h-8 w-8" />,
    title: 'Strength Training',
    description: 'Build muscle and increase your strength.',
  },
  {
    icon: <Timer className="h-8 w-8" />,
    title: 'HIIT Workouts',
    description: 'Intense interval training for maximum results.',
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of fitness programs designed to help you achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-red-500 mb-4">{program.icon}</div>
              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;