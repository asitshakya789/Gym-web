import React from 'react';
import ExerciseCard from './ExerciseCard';

const exercises = [
  {
    name: "Glute Bridges",
    gifUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "Targets glutes and hamstrings while strengthening core stability.",
    sets: "3 sets x 15 reps",
    targetMuscle: "Glutes"
  },
  {
    name: "Sumo Squats",
    gifUrl: "https://images.unsplash.com/photo-1574680088814-c9e8a10d8a4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "Wide stance squat targeting inner thighs and glutes.",
    sets: "4 sets x 12 reps",
    targetMuscle: "Legs"
  },
  {
    name: "Hip Thrusts",
    gifUrl: "https://images.unsplash.com/photo-1574680096951-a71cb0776c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "Advanced glute exercise for maximum activation.",
    sets: "3 sets x 12 reps",
    targetMuscle: "Glutes"
  },
  {
    name: "Bulgarian Split Squats",
    gifUrl: "https://images.unsplash.com/photo-1574680088927-f8b82f731f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "Unilateral leg exercise for strength and balance.",
    sets: "3 sets x 10 reps each",
    targetMuscle: "Legs"
  },
  {
    name: "Tricep Dips",
    gifUrl: "https://images.unsplash.com/photo-1574680096993-a0f3874dd172?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "Upper body exercise focusing on triceps.",
    sets: "3 sets x 12 reps",
    targetMuscle: "Arms"
  },
  {
    name: "Plank Variations",
    gifUrl: "https://images.unsplash.com/photo-1574680097083-a8f1f40e8607?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "Core strengthening with various plank positions.",
    sets: "3 sets x 45 seconds",
    targetMuscle: "Core"
  }
];

const WomensExercises = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {exercises.map((exercise) => (
        <ExerciseCard key={exercise.name} {...exercise} />
      ))}
    </div>
  );
};

export default WomensExercises;