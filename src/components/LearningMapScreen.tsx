import { useState } from 'react';
import ForestMapSVG from './ForestMapSVG';
import ConceptDetailCard from './ConceptDetailCard';
import BackButton from './BackButton';
import { NavigationCallback } from '../types/navigation';

interface LearningMapScreenProps {
  navigateTo: NavigationCallback;
  onConceptSelect: (concept: string) => void;
  onBack: () => void;
}

interface Concept {
  id: string;
  name: string;
  difficulty: number;
  progress: number;
  state: string;
}

const concepts: Concept[] = [
  { id: 'algebra', name: 'Algebra Trail', difficulty: 2, progress: 60, state: 'available' },
  { id: 'geometry', name: 'Geometry Grove', difficulty: 3, progress: 40, state: 'available' },
  { id: 'calculus', name: 'Calculus Canyon', difficulty: 4, progress: 20, state: 'available' },
  { id: 'trigonometry', name: 'Trigonometry Peak', difficulty: 3, progress: 30, state: 'available' },
];

export default function LearningMapScreen({ navigateTo, onConceptSelect, onBack }: LearningMapScreenProps) {
  const [selectedConcept, setSelectedConcept] = useState<Concept | null>(null);

  const handleConceptClick = (concept: Concept) => {
    setSelectedConcept(concept);
  };

  const handleStartConcept = (conceptId: string) => {
    onConceptSelect(conceptId);
    navigateTo('concept-intro');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <ForestMapSVG concepts={concepts} onNodeClick={handleConceptClick} />
      
      <BackButton onClick={onBack} />
      
      {selectedConcept && (
        <ConceptDetailCard
          concept={selectedConcept}
          onEnter={() => handleStartConcept(selectedConcept.id)}
          onClose={() => setSelectedConcept(null)}
        />
      )}
    </div>
  );
}
