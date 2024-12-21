import React from 'react';
import { Play } from 'lucide-react';

interface ExerciseCardProps {
  name: string;
  gifUrl: string;
  description: string;
  sets: string;
  targetMuscle: string;
}

const ExerciseCard = ({ name, gifUrl, description, sets, targetMuscle }: ExerciseCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={gifUrl} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Play className="h-12 w-12 text-white" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex justify-between text-sm">
          <span className="text-red-500 font-medium">{sets}</span>
          <span className="text-gray-500">Target: {targetMuscle}</span>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;