import React, { useState } from 'react';
import WomensExercises from './WomensExercises';
import MensExercises from './MensExercises';

const ExerciseSection = () => {
  const [activeTab, setActiveTab] = useState<'men' | 'women'>('women');

  return (
    <section id="exercises" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Workout Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Discover specialized workout programs designed for optimal results.
          </p>
          
          <div className="inline-flex rounded-lg border border-gray-200 p-1 mb-8">
            <button
              onClick={() => setActiveTab('women')}
              className={`px-8 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'women'
                  ? 'bg-red-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Women's Workouts
            </button>
            <button
              onClick={() => setActiveTab('men')}
              className={`px-8 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'men'
                  ? 'bg-red-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Men's Workouts
            </button>
          </div>
        </div>
        
        {activeTab === 'women' ? <WomensExercises /> : <MensExercises />}
      </div>
    </section>
  );
};

export default ExerciseSection;