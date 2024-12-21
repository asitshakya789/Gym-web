import React from 'react';

const schedule = [
  {
    time: '06:00 AM',
    classes: ['HIIT', 'Yoga', 'Spin'],
  },
  {
    time: '09:00 AM',
    classes: ['Body Pump', 'Pilates', 'Boxing'],
  },
  {
    time: '12:00 PM',
    classes: ['CrossFit', 'Zumba', 'Strength'],
  },
  {
    time: '05:00 PM',
    classes: ['Kickboxing', 'Yoga Flow', 'HIIT'],
  },
  {
    time: '07:00 PM',
    classes: ['Body Combat', 'Meditation', 'Spin'],
  },
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Class Schedule</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect class that fits your schedule.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-4 bg-gray-50 p-4 font-bold">
            <div>Time</div>
            <div>Monday</div>
            <div>Wednesday</div>
            <div>Friday</div>
          </div>
          
          {schedule.map((slot) => (
            <div key={slot.time} className="grid grid-cols-4 p-4 border-t">
              <div className="font-medium">{slot.time}</div>
              {slot.classes.map((className, index) => (
                <div
                  key={index}
                  className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm inline-block"
                >
                  {className}
                </div>
              ))}
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button className="bg-red-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-red-600 transition-colors">
            Book a Class
          </button>
        </div>
      </div>
    </section>
  );
};

export default Schedule;