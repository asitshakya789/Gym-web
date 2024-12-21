import React from 'react';
import ExerciseCard from './ExerciseCard';

const exercises = [
  {
    name: "Bench Press",
    gifUrl: "https://images.unsplash.com/photo-1574680088903-df5f20cad205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "Compound exercise for chest, shoulders, and triceps.",
    sets: "4 sets x 8-10 reps",
    targetMuscle: "Chest"
  },
  {
    name: "Deadlifts",
    gifUrl: "https://images.unsplash.com/photo-1574680096982-ef7c019e430d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "Full body compound movement focusing on posterior chain.",
    sets: "3 sets x 6-8 reps",
    targetMuscle: "Back"
  },
  {
    name: "Pull-ups",
    gifUrl: "https://images.unsplash.com/photo-1574680096971-2297f82d5d02?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "Upper body pulling exercise for back and biceps.",
    sets: "3 sets x max reps",
    targetMuscle: "Back"
  },
  {
    name: "Military Press",
    gifUrl: "https://images.unsplash.com/photo-1574680096964-6ea7a6d71f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "Overhead press for shoulder development.",
    sets: "4 sets x 8-10 reps",
    targetMuscle: "Shoulders"
  },
  {
    name: "Barbell Squats",
    gifUrl: "https://images.unsplash.com/photo-1574680096932-87ef45e9d8ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "Compound lower body exercise for overall leg development.",
    sets: "4 sets x 6-8 reps",
    targetMuscle: "Legs"
  },
  {
    name: "Barbell Rows",
    gifUrl: "https://images.unsplash.com/photo-1574680096941-2c6e8f94f364?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "Compound back exercise for thickness and strength.",
    sets: "3 sets x 10-12 reps",
    targetMuscle: "Back"
  }
];

const MensExercises = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {exercises.map((exercise) => (
        <ExerciseCard key={exercise.name} {...exercise} />
      ))}
    </div>
  );
};

export default MensExercises;