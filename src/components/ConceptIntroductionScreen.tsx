import TentInteriorSVG from './TentInteriorSVG';
import BackButton from './BackButton';
import { NavigationCallback } from '../types/navigation';

interface ConceptIntroductionScreenProps {
  navigateTo: NavigationCallback;
  conceptType: string;
  onBack: () => void;
}

const conceptData: Record<string, { title: string; description: string; objectives: string[] }> = {
  algebra: {
    title: 'Algebra Trail',
    description: 'Welcome to the Algebra Trail! Here you\'ll learn to solve equations, work with variables, and understand mathematical relationships.',
    objectives: ['Solve linear equations', 'Work with variables', 'Understand functions', 'Master algebraic expressions']
  },
  geometry: {
    title: 'Geometry Grove',
    description: 'Enter the Geometry Grove where shapes come alive! Explore angles, areas, and the beauty of spatial reasoning.',
    objectives: ['Calculate areas and perimeters', 'Understand angles', 'Work with triangles', 'Explore 3D shapes']
  },
  calculus: {
    title: 'Calculus Canyon',
    description: 'Venture into Calculus Canyon to discover the mathematics of change and motion.',
    objectives: ['Understand derivatives', 'Learn integration', 'Explore limits', 'Apply calculus concepts']
  },
  trigonometry: {
    title: 'Trigonometry Peak',
    description: 'Climb Trigonometry Peak and master the relationships between angles and sides of triangles.',
    objectives: ['Learn sine, cosine, tangent', 'Solve triangle problems', 'Understand unit circle', 'Apply trig identities']
  }
};

export default function ConceptIntroductionScreen({ navigateTo, conceptType, onBack }: ConceptIntroductionScreenProps) {
  const concept = conceptData[conceptType] || conceptData.algebra;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <TentInteriorSVG conceptType={conceptType} />
      
      <BackButton onClick={onBack} />
      
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 max-w-md pointer-events-auto">
        <div className="bg-[#F5DEB3] rounded-xl p-6 shadow-2xl border-2 border-[#8B4513]">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-3">{concept.title}</h2>
          <p className="text-sm text-[#5D4037] mb-4 leading-relaxed">{concept.description}</p>
          
          <div className="mb-4">
            <h3 className="text-base font-semibold text-[#3E2723] mb-2">What you'll learn:</h3>
            <ul className="space-y-1">
              {concept.objectives.map((objective, index) => (
                <li key={index} className="text-sm text-[#5D4037] flex items-start">
                  <span className="text-[#D2691E] mr-2">•</span>
                  {objective}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => navigateTo('practice-session')}
        className="absolute bottom-4 right-4 bg-[#D2691E] hover:bg-[#CD853F] text-white text-sm font-bold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-[#8B4513] pointer-events-auto"
      >
        Start Practice
      </button>
    </div>
  );
}
