import { NavigationCallback } from '../types/navigation';

interface BottomNavigationDockProps {
  navigateTo: NavigationCallback;
}

export default function BottomNavigationDock({ navigateTo }: BottomNavigationDockProps) {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 pointer-events-auto">
      <div className="bg-[#8B7355]/95 backdrop-blur-sm rounded-3xl px-6 py-4 shadow-2xl border-3 border-[#6B5744] flex gap-4">
        <button
          onClick={() => navigateTo('learning-map')}
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl hover:bg-[#A0826D] transition-all duration-200"
          title="Learning Map"
        >
          <svg className="w-6 h-6 text-[#FFF8DC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <span className="text-[#FFF8DC] text-xs font-semibold">Map</span>
        </button>
        
        <button
          onClick={() => navigateTo('progress')}
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl hover:bg-[#A0826D] transition-all duration-200"
          title="Progress"
        >
          <svg className="w-6 h-6 text-[#FFF8DC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span className="text-[#FFF8DC] text-xs font-semibold">Progress</span>
        </button>
        
        <button
          onClick={() => navigateTo('social')}
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl hover:bg-[#A0826D] transition-all duration-200"
          title="Social"
        >
          <svg className="w-6 h-6 text-[#FFF8DC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="text-[#FFF8DC] text-xs font-semibold">Social</span>
        </button>
        
        <button
          onClick={() => navigateTo('profile')}
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl hover:bg-[#A0826D] transition-all duration-200"
          title="Profile"
        >
          <svg className="w-6 h-6 text-[#FFF8DC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-[#FFF8DC] text-xs font-semibold">Profile</span>
        </button>
        
        <button
          onClick={() => navigateTo('settings')}
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl hover:bg-[#A0826D] transition-all duration-200"
          title="Settings"
        >
          <svg className="w-6 h-6 text-[#FFF8DC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-[#FFF8DC] text-xs font-semibold">Settings</span>
        </button>
      </div>
    </div>
  );
}
