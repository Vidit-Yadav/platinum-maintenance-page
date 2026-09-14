interface WheelConfig {
  id: string;
  name: string;
  cx: number;
  cy: number;
  tilt: number;
  aspect: number;
  r_tire: number;
  r_rim_outer: number;
  r_rim_inner: number;
  r_holes: number;
  hole_w: number;
  hole_h: number;
  r_lugs: number;
  lug_r: number;
  hub_r: number;
}

// Sub-pixel measured wheel axle centers and 3D perspective dimensions
const WHEELS: WheelConfig[] = [
  {
    id: 'front',
    name: 'Front Steer Wheel',
    cx: 468,
    cy: 595,
    tilt: -4.0,
    aspect: 0.618,
    r_tire: 98,
    r_rim_outer: 55,
    r_rim_inner: 24,
    r_holes: 40,
    hole_w: 4.8,
    hole_h: 7.5,
    r_lugs: 23,
    lug_r: 2.0,
    hub_r: 16,
  },
  {
    id: 'tractor1',
    name: 'Tractor Drive Wheel 1',
    cx: 828,
    cy: 576,
    tilt: -1.5,
    aspect: 0.565,
    r_tire: 72,
    r_rim_outer: 46,
    r_rim_inner: 20,
    r_holes: 33,
    hole_w: 3.6,
    hole_h: 5.8,
    r_lugs: 18,
    lug_r: 1.6,
    hub_r: 13,
  },
  {
    id: 'tractor2',
    name: 'Tractor Drive Wheel 2',
    cx: 889,
    cy: 570,
    tilt: -1.5,
    aspect: 0.568,
    r_tire: 70,
    r_rim_outer: 44,
    r_rim_inner: 19,
    r_holes: 31,
    hole_w: 3.4,
    hole_h: 5.5,
    r_lugs: 17,
    lug_r: 1.5,
    hub_r: 12,
  },
  {
    id: 'trailer1',
    name: 'Trailer Tandem Wheel 1',
    cx: 1198,
    cy: 552,
    tilt: -1.0,
    aspect: 0.529,
    r_tire: 56,
    r_rim_outer: 34,
    r_rim_inner: 14,
    r_holes: 24,
    hole_w: 2.7,
    hole_h: 4.2,
    r_lugs: 14,
    lug_r: 1.2,
    hub_r: 9,
  },
  {
    id: 'trailer2',
    name: 'Trailer Tandem Wheel 2',
    cx: 1236,
    cy: 550,
    tilt: -1.0,
    aspect: 0.515,
    r_tire: 54,
    r_rim_outer: 33,
    r_rim_inner: 13,
    r_holes: 23,
    hole_w: 2.5,
    hole_h: 4.0,
    r_lugs: 13,
    lug_r: 1.1,
    hub_r: 9,
  },
];

export default function App() {
  return (
    <main className="relative w-full h-[100dvh] min-h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between bg-gradient-to-b from-[#FF8233] to-[#FDAC55] select-none py-4 sm:py-6 md:py-8 px-3 sm:px-6">
      {/* TOP HEADER: Subtle System Status Badge */}
      <header className="relative z-30 flex items-center justify-center pointer-events-none pt-1 sm:pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] sm:text-xs font-semibold tracking-wider uppercase shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#FF5230] animate-pulse" />
          <span>Platinum Trucking • Under Maintenance</span>
        </div>
      </header>

      {/* CENTER STAGE: High-End 404 Typography Watermark, Lower Ground Platform, and Heroic Truck */}
      <div className="relative flex-1 w-full max-w-7xl mx-auto flex items-center justify-center pointer-events-none my-auto">
        {/* 1. HIGH-END EXPERT DISPLAY "404" TYPOGRAPHY WATERMARK */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to bottom, black 30%, transparent 92%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 92%)',
          }}
        >
          <div
            className="font-black leading-none tracking-[-0.05em] whitespace-nowrap select-none pointer-events-none text-white/25 drop-shadow-sm"
            style={{
              fontSize: 'clamp(160px, 32vw, 560px)',
              WebkitTextStroke: 'clamp(1.2px, 0.22vw, 2.5px) rgba(255, 255, 255, 0.45)',
              transform: 'scaleY(1.08)',
            }}
          >
            404
          </div>
        </div>

        {/* 2. HEROIC CLASS 8 SEMI-TRUCK ASSEMBLY WITH SMART BRAND PAINT & REVOLVING WHEELS */}
        <div className="relative w-[96vw] max-w-[480px] sm:w-[84vw] sm:max-w-none md:w-[74vw] lg:w-[65vw] flex flex-col items-center justify-center z-10">
          {/* Suspension vibration */}
          <div className="relative w-full animate-road-drive-bounce">
            {/* Lower Ground Stage Oval below truck */}
            <div className="absolute -bottom-3 sm:-bottom-5 left-[2%] right-[2%] h-[28px] sm:h-[42px] rounded-[100%] bg-white/60 blur-md pointer-events-none" />

            {/* Ground Contact Shadow under tires */}
            <div
              className="absolute -bottom-1.5 sm:-bottom-2.5 left-[4%] right-[4%] h-[16px] sm:h-[22px] bg-black/45 rounded-[100%] blur-md pointer-events-none animate-shadow-pulse"
              style={{ transformOrigin: 'center' }}
            />

            {/* Pavement speed blur stream (truck moving in place sensation) */}
            <div
              className="absolute -bottom-1 left-[14%] right-[10%] h-[10px] overflow-hidden pointer-events-none opacity-30 blur-[1px]"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              }}
            >
              <div className="w-[200%] h-full flex animate-road-speed">
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-black/40 to-transparent" />
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-black/40 to-transparent" />
              </div>
            </div>

            {/* Photorealistic Class 8 Truck with Smart Brand Paint Job */}
            <img
              src="/platinum_truck_photoreal.png"
              alt="Platinum Trucking Class 8 Heavy-Duty Semi Truck"
              className="relative w-full h-auto object-contain select-none pointer-events-none drop-shadow-xl z-10"
              draggable={false}
            />

            {/* HIGH-PRECISION 3D PERSPECTIVE REVOLVING WHEELS OVERLAY */}
            <svg
              viewBox="0 0 1376 768"
              className="absolute inset-0 w-full h-full pointer-events-none z-20"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Metallic chrome rim reflection gradient */}
                <radialGradient id="chrome-rim-specular" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#454b52" stopOpacity="0.2" />
                  <stop offset="65%" stopColor="#d4dee8" stopOpacity="0.7" />
                  <stop offset="85%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#7a828c" stopOpacity="0.4" />
                </radialGradient>

                {/* Sweeping sunlight glint on spinning rim */}
                <linearGradient id="specular-sweep" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                  <stop offset="45%" stopColor="#c8d6e5" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#8395a7" stopOpacity="0.0" />
                </linearGradient>

                {/* Chrome lug nut glint filter */}
                <filter id="lug-glow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="0.6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Wheel contour clipping paths (keeps rotation strictly inside tire boundary) */}
                {WHEELS.map((wheel) => (
                  <clipPath key={`clip-${wheel.id}`} id={`clip-${wheel.id}`}>
                    <circle cx="0" cy="0" r={wheel.r_tire} />
                  </clipPath>
                ))}
              </defs>

              {WHEELS.map((wheel) => (
                <g
                  key={wheel.id}
                  transform={`translate(${wheel.cx}, ${wheel.cy}) rotate(${wheel.tilt})`}
                >
                  {/* Perspective projection into 3D ellipse */}
                  <g transform={`scale(${wheel.aspect}, 1)`}>
                    {/* Fixed wheel boundary clip so outer tire shape never wobbles */}
                    <g clipPath={`url(#clip-${wheel.id})`}>
                      {/* Rotating wheel contents on own axle axis (counter-clockwise forward rotation) */}
                      <g className="animate-wheel-spin">
                        {/* Native SMIL SVG rotation fallback for guaranteed cross-browser 60fps spin */}
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 0 0"
                          to="-360 0 0"
                          dur="0.36s"
                          repeatCount="indefinite"
                        />

                        {/* 1. Tire sidewall radial ribs / tread texture rotating */}
                        <g opacity="0.35">
                          {Array.from({ length: 24 }).map((_, i) => {
                            const angle = (i * 360) / 24;
                            const rad = (angle * Math.PI) / 180;
                            const x1 = Math.cos(rad) * (wheel.r_rim_outer + 2);
                            const y1 = Math.sin(rad) * (wheel.r_rim_outer + 2);
                            const x2 = Math.cos(rad) * (wheel.r_tire - 2);
                            const y2 = Math.sin(rad) * (wheel.r_tire - 2);
                            return (
                              <line
                                key={i}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke={i % 2 === 0 ? '#ffffff' : '#000000'}
                                strokeWidth={i % 2 === 0 ? '1.5' : '2'}
                                opacity={i % 2 === 0 ? '0.35' : '0.55'}
                              />
                            );
                          })}
                        </g>

                        {/* Tire concentric rib rings */}
                        <circle
                          cx="0"
                          cy="0"
                          r={(wheel.r_rim_outer + wheel.r_tire) * 0.52}
                          fill="none"
                          stroke="rgba(255,255,255,0.14)"
                          strokeWidth="1.2"
                          strokeDasharray="16,12"
                        />

                        {/* 2. Machined chrome rim face with rotating specular reflection */}
                        <circle
                          cx="0"
                          cy="0"
                          r={(wheel.r_rim_outer + wheel.r_rim_inner) * 0.5}
                          fill="none"
                          stroke="url(#chrome-rim-specular)"
                          strokeWidth={wheel.r_rim_outer - wheel.r_rim_inner}
                          opacity="0.65"
                          style={{ mixBlendMode: 'screen' }}
                        />

                        {/* 3. 10 Alcoa semi-truck rim holes rotating */}
                        <g>
                          {Array.from({ length: 10 }).map((_, i) => {
                            const angle = (i * 360) / 10;
                            const rad = (angle * Math.PI) / 180;
                            const hx = Math.cos(rad) * wheel.r_holes;
                            const hy = Math.sin(rad) * wheel.r_holes;
                            return (
                              <g
                                key={i}
                                transform={`translate(${hx}, ${hy}) rotate(${angle})`}
                              >
                                <ellipse
                                  cx="0"
                                  cy="0"
                                  rx={wheel.hole_w}
                                  ry={wheel.hole_h}
                                  fill="#121417"
                                  opacity="0.9"
                                />
                                <ellipse
                                  cx="0"
                                  cy="0"
                                  rx={wheel.hole_w}
                                  ry={wheel.hole_h}
                                  fill="none"
                                  stroke="#e8edf2"
                                  strokeWidth="1.1"
                                  opacity="0.85"
                                />
                              </g>
                            );
                          })}
                        </g>

                        {/* 4. 10 Chrome lug nuts circle */}
                        <g>
                          {Array.from({ length: 10 }).map((_, i) => {
                            const angle = (i * 360) / 10 + 18;
                            const rad = (angle * Math.PI) / 180;
                            const lx = Math.cos(rad) * wheel.r_lugs;
                            const ly = Math.sin(rad) * wheel.r_lugs;
                            return (
                              <circle
                                key={i}
                                cx={lx}
                                cy={ly}
                                r={wheel.lug_r}
                                fill="#ffffff"
                                stroke="#707984"
                                strokeWidth="0.8"
                                filter="url(#lug-glow)"
                              />
                            );
                          })}
                        </g>

                        {/* 5. Dynamic sweeping specular light fan on chrome rim */}
                        <path
                          d={`M 0 0 L ${-wheel.r_rim_outer * 0.45} ${-wheel.r_rim_outer * 0.88} A ${wheel.r_rim_outer} ${wheel.r_rim_outer} 0 0 1 ${wheel.r_rim_outer * 0.45} ${-wheel.r_rim_outer * 0.88} Z`}
                          fill="url(#specular-sweep)"
                          opacity="0.45"
                          style={{ mixBlendMode: 'screen' }}
                        />
                        <path
                          d={`M 0 0 L ${wheel.r_rim_outer * 0.45} ${wheel.r_rim_outer * 0.88} A ${wheel.r_rim_outer} ${wheel.r_rim_outer} 0 0 1 ${-wheel.r_rim_outer * 0.45} ${wheel.r_rim_outer * 0.88} Z`}
                          fill="url(#specular-sweep)"
                          opacity="0.38"
                          style={{ mixBlendMode: 'screen' }}
                        />

                        {/* 6. Center chrome hubcap dome highlight */}
                        <circle
                          cx="0"
                          cy="0"
                          r={wheel.hub_r}
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="1.2"
                          opacity="0.5"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER: Clean, Prominent Responsive Notice */}
      <footer className="relative z-30 pb-4 sm:pb-8 flex flex-col items-center text-center px-4 pointer-events-none max-w-lg mx-auto">
        <h1 className="text-white text-lg sm:text-2xl md:text-3xl font-bold tracking-tight drop-shadow-md">
          Our site is under maintenance.
        </h1>
        <p className="text-white/90 text-xs sm:text-sm md:text-base font-medium mt-1 drop-shadow-sm">
          We'll be back soon.
        </p>
      </footer>
    </main>
  );
}
