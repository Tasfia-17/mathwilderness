export type ScreenName = 
  | 'onboarding-welcome'
  | 'character-selection'
  | 'diagnostic-assessment'
  | 'login'
  | 'tutorial'
  | 'dashboard'
  | 'learning-map'
  | 'concept-intro'
  | 'practice-session'
  | 'victory'
  | 'progress-lodge'
  | 'campfire-social'
  | 'tutorial-guide'
  | 'camper-profile'
  | 'achievement-collection'
  | 'profile'
  | 'badges'
  | 'progress'
  | 'social'
  | 'settings';

export type MascotType = 'squirrel' | 'moose' | 'owl' | 'turtle' | 'bunny';

export type NavigationCallback = (screen: ScreenName) => void;
