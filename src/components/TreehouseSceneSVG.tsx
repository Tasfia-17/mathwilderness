export default function TreehouseSceneSVG() {
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className="w-screen h-screen"
      style={{ cursor: 'default' }}
    >
      <defs>
        {/* Gradients for depth and organic feel */}
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8F4F8" />
          <stop offset="100%" stopColor="#D4E8F0" />
        </linearGradient>
        
        <radialGradient id="foliageOrange1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFA552" />
          <stop offset="100%" stopColor="#FF8C42" />
        </radialGradient>
        
        <radialGradient id="foliageYellow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE682" />
          <stop offset="100%" stopColor="#FFD662" />
        </radialGradient>
        
        <radialGradient id="foliagePink1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFB5C5" />
          <stop offset="100%" stopColor="#FF9EB5" />
        </radialGradient>
        
        <radialGradient id="foliageGreen1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#B8E68C" />
          <stop offset="100%" stopColor="#9FD563" />
        </radialGradient>
        
        <radialGradient id="foliageTeal1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7CD4C3" />
          <stop offset="100%" stopColor="#5CBBAA" />
        </radialGradient>
        
        <linearGradient id="woodGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C4956E" />
          <stop offset="50%" stopColor="#A67C52" />
          <stop offset="100%" stopColor="#8B5A3C" />
        </linearGradient>
        
        <linearGradient id="roofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7A5C4A" />
          <stop offset="100%" stopColor="#5D4436" />
        </linearGradient>
        
        <radialGradient id="windowGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE682" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFD662" stopOpacity="0.3" />
        </radialGradient>
      </defs>

      {/* Sky background */}
      <rect width="1200" height="800" fill="url(#skyGradient)" />

      {/* Background foliage layers - far left - grounded at y=700 */}
      <ellipse cx="80" cy="615" rx="90" ry="85" fill="url(#foliageOrange1)" opacity="0.8" />
      <ellipse cx="150" cy="630" rx="75" ry="70" fill="url(#foliageYellow1)" opacity="0.8" />
      <ellipse cx="100" cy="640" rx="65" ry="60" fill="url(#foliagePink1)" opacity="0.8" />
      
      {/* Background foliage - top center - grounded at y=700 */}
      <ellipse cx="400" cy="605" rx="110" ry="95" fill="url(#foliageYellow1)" opacity="0.85" />
      <ellipse cx="500" cy="615" rx="95" ry="85" fill="url(#foliageOrange1)" opacity="0.85" />
      <ellipse cx="450" cy="625" rx="80" ry="75" fill="url(#foliageGreen1)" opacity="0.85" />
      <ellipse cx="550" cy="620" rx="85" ry="80" fill="url(#foliagePink1)" opacity="0.85" />
      
      {/* Background foliage - top right - grounded at y=700 */}
      <ellipse cx="800" cy="610" rx="100" ry="90" fill="url(#foliageGreen1)" opacity="0.85" />
      <ellipse cx="900" cy="615" rx="95" ry="85" fill="url(#foliageYellow1)" opacity="0.85" />
      <ellipse cx="850" cy="630" rx="75" ry="70" fill="url(#foliageOrange1)" opacity="0.85" />
      <ellipse cx="950" cy="625" rx="80" ry="75" fill="url(#foliagePink1)" opacity="0.85" />
      
      {/* Background foliage - far right - grounded at y=700 */}
      <ellipse cx="1100" cy="620" rx="85" ry="80" fill="url(#foliageYellow1)" opacity="0.8" />
      <ellipse cx="1050" cy="635" rx="70" ry="65" fill="url(#foliageGreen1)" opacity="0.8" />

      {/* Evergreen trees - left side - grounded at y=700 */}
      <path d="M 150 550 L 180 620 L 165 620 L 190 680 L 175 680 L 200 700 L 100 700 L 125 680 L 110 680 L 135 620 L 120 620 Z" fill="#2D5F3F" opacity="0.9" />
      <path d="M 220 570 L 245 630 L 232 630 L 255 680 L 242 680 L 265 700 L 175 700 L 198 680 L 185 680 L 208 630 L 195 630 Z" fill="#3A7050" opacity="0.9" />

      {/* Main tree trunk for treehouse */}
      <ellipse cx="600" cy="500" rx="80" ry="300" fill="#6B4E3D" />
      <ellipse cx="580" cy="500" rx="70" ry="290" fill="#7A5C4A" opacity="0.7" />
      
      {/* Wood grain texture on trunk */}
      <ellipse cx="600" cy="400" rx="75" ry="40" fill="#5D4436" opacity="0.3" />
      <ellipse cx="600" cy="520" rx="75" ry="35" fill="#5D4436" opacity="0.3" />
      <ellipse cx="600" cy="620" rx="75" ry="38" fill="#5D4436" opacity="0.3" />

      {/* Mid-ground foliage - behind treehouse - grounded at y=700 */}
      <ellipse cx="350" cy="590" rx="120" ry="110" fill="url(#foliageTeal1)" opacity="0.9" />
      <ellipse cx="450" cy="605" rx="105" ry="95" fill="url(#foliageYellow1)" opacity="0.9" />
      <ellipse cx="750" cy="595" rx="115" ry="105" fill="url(#foliageOrange1)" opacity="0.9" />
      <ellipse cx="850" cy="610" rx="100" ry="90" fill="url(#foliageGreen1)" opacity="0.9" />

      {/* Treehouse structure */}
      {/* Main house body */}
      <rect x="480" y="320" width="240" height="180" rx="8" fill="url(#woodGradient)" />
      
      {/* Wood planks detail */}
      <line x1="480" y1="360" x2="720" y2="360" stroke="#8B5A3C" strokeWidth="2" opacity="0.5" />
      <line x1="480" y1="400" x2="720" y2="400" stroke="#8B5A3C" strokeWidth="2" opacity="0.5" />
      <line x1="480" y1="440" x2="720" y2="440" stroke="#8B5A3C" strokeWidth="2" opacity="0.5" />
      <line x1="480" y1="480" x2="720" y2="480" stroke="#8B5A3C" strokeWidth="2" opacity="0.5" />
      
      {/* Vertical wood grain */}
      <line x1="550" y1="320" x2="550" y2="500" stroke="#7A5C4A" strokeWidth="1" opacity="0.4" />
      <line x1="600" y1="320" x2="600" y2="500" stroke="#7A5C4A" strokeWidth="1" opacity="0.4" />
      <line x1="650" y1="320" x2="650" y2="500" stroke="#7A5C4A" strokeWidth="1" opacity="0.4" />

      {/* Roof */}
      <path d="M 460 320 L 600 240 L 740 320 Z" fill="url(#roofGradient)" />
      <path d="M 460 320 L 600 240 L 740 320 Z" fill="#5D4436" opacity="0.3" />
      
      {/* Roof shingles detail */}
      <path d="M 480 310 L 600 250 L 720 310" stroke="#4A3428" strokeWidth="2" fill="none" />
      <path d="M 500 300 L 600 260 L 700 300" stroke="#4A3428" strokeWidth="1.5" fill="none" opacity="0.7" />

      {/* Chimney */}
      <rect x="640" y="260" width="40" height="80" rx="4" fill="#8B5A3C" />
      <rect x="635" y="255" width="50" height="15" rx="3" fill="#A67C52" />
      
      {/* Chimney bricks */}
      <line x1="640" y1="280" x2="680" y2="280" stroke="#7A5C4A" strokeWidth="1" opacity="0.5" />
      <line x1="640" y1="300" x2="680" y2="300" stroke="#7A5C4A" strokeWidth="1" opacity="0.5" />
      <line x1="640" y1="320" x2="680" y2="320" stroke="#7A5C4A" strokeWidth="1" opacity="0.5" />

      {/* Window with glow */}
      <circle cx="600" cy="380" r="35" fill="url(#windowGlow)" />
      <circle cx="600" cy="380" r="32" fill="#FFE682" />
      <circle cx="600" cy="380" r="28" fill="#FFD662" />
      
      {/* Window frame */}
      <circle cx="600" cy="380" r="35" fill="none" stroke="#8B5A3C" strokeWidth="4" />
      <line x1="600" y1="345" x2="600" y2="415" stroke="#8B5A3C" strokeWidth="3" />
      <line x1="565" y1="380" x2="635" y2="380" stroke="#8B5A3C" strokeWidth="3" />

      {/* Balcony platform */}
      <rect x="450" y="480" width="300" height="20" rx="4" fill="url(#woodGradient)" />
      <rect x="450" y="495" width="300" height="8" fill="#8B5A3C" opacity="0.6" />
      
      {/* Balcony support beams */}
      <rect x="470" y="500" width="15" height="60" fill="#8B5A3C" />
      <rect x="550" y="500" width="15" height="60" fill="#8B5A3C" />
      <rect x="635" y="500" width="15" height="60" fill="#8B5A3C" />
      <rect x="715" y="500" width="15" height="60" fill="#8B5A3C" />

      {/* Balcony railing */}
      <rect x="450" y="460" width="300" height="8" rx="2" fill="#A67C52" />
      <rect x="460" y="468" width="6" height="20" rx="1" fill="#8B5A3C" />
      <rect x="490" y="468" width="6" height="20" rx="1" fill="#8B5A3C" />
      <rect x="520" y="468" width="6" height="20" rx="1" fill="#8B5A3C" />
      <rect x="550" y="468" width="6" height="20" rx="1" fill="#8B5A3C" />
      <rect x="580" y="468" width="6" height="20" rx="1" fill="#8B5A3C" />
      <rect x="610" y="468" width="6" height="20" rx="1" fill="#8B5A3C" />
      <rect x="640" y="468" width="6" height="20" rx="1" fill="#8B5A3C" />
      <rect x="670" y="468" width="6" height="20" rx="1" fill="#8B5A3C" />
      <rect x="700" y="468" width="6" height="20" rx="1" fill="#8B5A3C" />
      <rect x="730" y="468" width="6" height="20" rx="1" fill="#8B5A3C" />

      {/* Owl on balcony */}
      {/* Owl body */}
      <ellipse cx="520" cy="445" rx="25" ry="30" fill="#8B6F47" />
      <ellipse cx="520" cy="450" rx="22" ry="25" fill="#A68968" />
      
      {/* Owl wings */}
      <ellipse cx="500" cy="450" rx="12" ry="20" fill="#8B6F47" />
      <ellipse cx="540" cy="450" rx="12" ry="20" fill="#8B6F47" />
      
      {/* Owl head */}
      <circle cx="520" cy="425" r="18" fill="#8B6F47" />
      
      {/* Owl eyes */}
      <circle cx="513" cy="423" r="7" fill="#FFFFFF" />
      <circle cx="527" cy="423" r="7" fill="#FFFFFF" />
      <circle cx="513" cy="423" r="4" fill="#2D2D2D" />
      <circle cx="527" cy="423" r="4" fill="#2D2D2D" />
      
      {/* Owl beak */}
      <path d="M 520 428 L 517 433 L 523 433 Z" fill="#E8A547" />
      
      {/* Owl ear tufts */}
      <path d="M 510 412 L 508 405 L 512 410 Z" fill="#8B6F47" />
      <path d="M 530 412 L 532 405 L 528 410 Z" fill="#8B6F47" />

      {/* Books on balcony */}
      {/* Blue book */}
      <rect x="555" y="465" width="18" height="25" rx="2" fill="#5B9BD5" />
      <rect x="556" y="466" width="16" height="23" rx="1" fill="#7BB3E8" opacity="0.7" />
      <line x1="557" y1="477" x2="571" y2="477" stroke="#4A7FB0" strokeWidth="1" />
      
      {/* Pink book */}
      <rect x="575" y="463" width="18" height="27" rx="2" fill="#E88BB5" />
      <rect x="576" y="464" width="16" height="25" rx="1" fill="#F5A5C8" opacity="0.7" />
      <line x1="577" y1="476" x2="591" y2="476" stroke="#D67A9F" strokeWidth="1" />
      
      {/* Green book */}
      <rect x="595" y="467" width="18" height="23" rx="2" fill="#7FBF7F" />
      <rect x="596" y="468" width="16" height="21" rx="1" fill="#9FD59F" opacity="0.7" />
      <line x1="597" y1="478" x2="611" y2="478" stroke="#6AA66A" strokeWidth="1" />
      
      {/* Yellow book */}
      <rect x="615" y="465" width="18" height="25" rx="2" fill="#FFD662" />
      <rect x="616" y="466" width="16" height="23" rx="1" fill="#FFE682" opacity="0.7" />
      <line x1="617" y1="477" x2="631" y2="477" stroke="#E8C050" strokeWidth="1" />

      {/* Foreground foliage - in front of treehouse - grounded at y=700 */}
      <ellipse cx="300" cy="580" rx="130" ry="120" fill="url(#foliageOrange1)" />
      <ellipse cx="400" cy="600" rx="110" ry="100" fill="url(#foliageYellow1)" />
      <ellipse cx="250" cy="615" rx="95" ry="85" fill="url(#foliagePink1)" />
      
      <ellipse cx="800" cy="585" rx="125" ry="115" fill="url(#foliageGreen1)" />
      <ellipse cx="900" cy="605" rx="105" ry="95" fill="url(#foliageTeal1)" />
      <ellipse cx="850" cy="620" rx="90" ry="80" fill="url(#foliageYellow1)" />

      {/* Ground grass area */}
      <ellipse cx="600" cy="700" rx="400" ry="100" fill="#B8D68C" />
      <ellipse cx="600" cy="720" rx="380" ry="80" fill="#9FD563" />

      {/* Purple flowers at base */}
      {/* Flower 1 */}
      <circle cx="520" cy="680" r="12" fill="#9B59D0" />
      <circle cx="510" cy="675" r="8" fill="#B388E6" />
      <circle cx="530" cy="675" r="8" fill="#B388E6" />
      <circle cx="515" cy="690" r="8" fill="#B388E6" />
      <circle cx="525" cy="690" r="8" fill="#B388E6" />
      <circle cx="520" cy="680" r="5" fill="#FFD662" />
      <line x1="520" y1="692" x2="520" y2="710" stroke="#6B8E4E" strokeWidth="3" />
      
      {/* Flower 2 */}
      <circle cx="580" cy="690" r="12" fill="#9B59D0" />
      <circle cx="570" cy="685" r="8" fill="#B388E6" />
      <circle cx="590" cy="685" r="8" fill="#B388E6" />
      <circle cx="575" cy="700" r="8" fill="#B388E6" />
      <circle cx="585" cy="700" r="8" fill="#B388E6" />
      <circle cx="580" cy="690" r="5" fill="#FFD662" />
      <line x1="580" y1="702" x2="580" y2="720" stroke="#6B8E4E" strokeWidth="3" />
      
      {/* Flower 3 */}
      <circle cx="640" cy="685" r="12" fill="#9B59D0" />
      <circle cx="630" cy="680" r="8" fill="#B388E6" />
      <circle cx="650" cy="680" r="8" fill="#B388E6" />
      <circle cx="635" cy="695" r="8" fill="#B388E6" />
      <circle cx="645" cy="695" r="8" fill="#B388E6" />
      <circle cx="640" cy="685" r="5" fill="#FFD662" />
      <line x1="640" y1="697" x2="640" y2="715" stroke="#6B8E4E" strokeWidth="3" />
      
      {/* Flower 4 */}
      <circle cx="480" cy="695" r="10" fill="#9B59D0" />
      <circle cx="472" cy="691" r="7" fill="#B388E6" />
      <circle cx="488" cy="691" r="7" fill="#B388E6" />
      <circle cx="476" cy="703" r="7" fill="#B388E6" />
      <circle cx="484" cy="703" r="7" fill="#B388E6" />
      <circle cx="480" cy="695" r="4" fill="#FFD662" />
      <line x1="480" y1="705" x2="480" y2="720" stroke="#6B8E4E" strokeWidth="2.5" />
      
      {/* Flower 5 */}
      <circle cx="690" cy="700" r="10" fill="#9B59D0" />
      <circle cx="682" cy="696" r="7" fill="#B388E6" />
      <circle cx="698" cy="696" r="7" fill="#B388E6" />
      <circle cx="686" cy="708" r="7" fill="#B388E6" />
      <circle cx="694" cy="708" r="7" fill="#B388E6" />
      <circle cx="690" cy="700" r="4" fill="#FFD662" />
      <line x1="690" y1="710" x2="690" y2="725" stroke="#6B8E4E" strokeWidth="2.5" />

      {/* Small blue flowers scattered */}
      <circle cx="450" cy="710" r="4" fill="#7BB3E8" />
      <circle cx="450" cy="710" r="2" fill="#FFFFFF" />
      <circle cx="550" cy="715" r="4" fill="#7BB3E8" />
      <circle cx="550" cy="715" r="2" fill="#FFFFFF" />
      <circle cx="620" cy="720" r="4" fill="#7BB3E8" />
      <circle cx="620" cy="720" r="2" fill="#FFFFFF" />
      <circle cx="710" cy="715" r="4" fill="#7BB3E8" />
      <circle cx="710" cy="715" r="2" fill="#FFFFFF" />

      {/* Additional depth - more background foliage - grounded at y=700 */}
      <ellipse cx="200" cy="625" rx="80" ry="75" fill="url(#foliageGreen1)" opacity="0.7" />
      <ellipse cx="1000" cy="620" rx="85" ry="80" fill="url(#foliagePink1)" opacity="0.7" />
      <ellipse cx="100" cy="635" rx="70" ry="65" fill="url(#foliageTeal1)" opacity="0.7" />
      <ellipse cx="1100" cy="630" rx="75" ry="70" fill="url(#foliageOrange1)" opacity="0.7" />
    </svg>
  );
}
