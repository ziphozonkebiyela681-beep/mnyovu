import React from 'react';
import { useAppImages } from '../context/ImageContext';

interface LogoBadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const LogoBadge: React.FC<LogoBadgeProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const { logoUrl, isCustomLogo } = useAppImages();

  const sizeMap = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-48 h-48',
    xl: 'w-72 h-72 sm:w-84 sm:h-84',
  };

  const dimensionClass = sizeMap[size];

  // If user uploaded their exact file via the "Load Exact Uploaded Photos" tool, use it directly
  if (isCustomLogo && logoUrl) {
    return (
      <div
        className={`relative inline-flex items-center justify-center select-none shrink-0 ${dimensionClass} ${className}`}
      >
        <img
          src={logoUrl}
          alt="Mnyovu's Sneaker Wash & Shoe Care Official Logo"
          className="w-full h-full object-contain rounded-full transition-transform duration-300 hover:scale-[1.02]"
          loading="eager"
        />
      </div>
    );
  }

  // Exact vector badge calibrated with the 100% original colors from your uploaded image:
  // - Dark Navy Blue: #0A183D
  // - Deep Crimson Red: #8F1426
  // - Sky Blue Suds: #38BDF8 / #48CAE4
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none shrink-0 ${dimensionClass} ${className}`}
    >
      <svg
        viewBox="0 0 1000 1000"
        className="w-full h-full drop-shadow-sm transition-transform duration-300 hover:scale-[1.02]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="originalSudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#48CAE4" />
            <stop offset="60%" stopColor="#0096C7" />
            <stop offset="100%" stopColor="#0077B6" />
          </linearGradient>
          <linearGradient id="originalSudLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ADE8F4" />
            <stop offset="100%" stopColor="#48CAE4" />
          </linearGradient>
        </defs>

        {/* Outer White Matting */}
        <circle cx="500" cy="500" r="496" fill="#FFFFFF" />

        {/* 1. Outer Dark Navy Blue Ring (#0A183D) */}
        <circle cx="500" cy="500" r="472" fill="#0A183D" />

        {/* 2. White Separator Gap */}
        <circle cx="500" cy="500" r="446" fill="#FFFFFF" />

        {/* 3. Deep Crimson Red Ring (#8F1426) */}
        <circle cx="500" cy="500" r="436" fill="#8F1426" />

        {/* 4. Inner White Field Disc */}
        <circle cx="500" cy="500" r="424" fill="#FFFFFF" />

        {/* ==================== SUDS & BUBBLES ==================== */}
        <g id="suds-cluster">
          {/* Main bubble cloud */}
          <circle cx="365" cy="335" r="58" fill="url(#originalSudGrad)" opacity="0.9" />
          <circle cx="410" cy="275" r="74" fill="url(#originalSudLight)" opacity="0.95" />
          <circle cx="480" cy="260" r="78" fill="url(#originalSudGrad)" opacity="0.95" />
          <circle cx="560" cy="275" r="70" fill="url(#originalSudLight)" opacity="0.9" />
          <circle cx="620" cy="325" r="54" fill="url(#originalSudGrad)" opacity="0.85" />
          <circle cx="330" cy="355" r="42" fill="url(#originalSudLight)" opacity="0.9" />
          <circle cx="450" cy="320" r="62" fill="url(#originalSudGrad)" opacity="0.9" />

          {/* Small floating satellite bubbles */}
          <circle cx="500" cy="235" r="16" fill="#0096C7" />
          <circle cx="535" cy="260" r="10" fill="#0077B6" />
          <circle cx="635" cy="275" r="17" fill="#0096C7" />
          <circle cx="655" cy="305" r="12" fill="#48CAE4" />
          <circle cx="340" cy="305" r="11" fill="#0096C7" />

          {/* Sparkle star 1 on top-left bubble */}
          <path
            d="M 410 256 Q 410 276 430 276 Q 410 276 410 296 Q 410 276 390 276 Q 410 276 410 256 Z"
            fill="#FFFFFF"
          />
          {/* Sparkle star 2 on right bubble */}
          <path
            d="M 580 286 Q 580 298 592 298 Q 580 298 580 310 Q 580 298 568 298 Q 580 298 580 286 Z"
            fill="#FFFFFF"
          />
        </g>

        {/* ==================== SNEAKER SILHOUETTE ==================== */}
        <g id="sneaker-art">
          {/* Under-sole Dynamic Cleaning Wave Shadow (#0A183D) */}
          <path
            d="M 335 410 
               C 335 435 410 448 480 435 
               C 540 425 610 440 670 415 
               C 630 430 550 415 480 424 
               C 420 432 355 425 335 410 Z"
            fill="#0A183D"
          />

          {/* Sneaker Main Upper Body (Solid Navy #0A183D) */}
          <path
            d="M 345 325 
               C 335 345 330 380 335 405 
               L 665 405 
               C 672 400 672 385 660 375 
               C 635 355 585 340 540 325 
               C 525 305 500 285 470 280 
               C 440 305 405 320 375 320 
               C 355 315 350 318 345 325 Z"
            fill="#0A183D"
          />

          {/* White Collar Interior Curve */}
          <path
            d="M 350 325 
               C 355 335 365 340 380 338 
               C 375 328 368 322 350 325 Z"
            fill="#FFFFFF"
          />

          {/* Classic White Jazz Wave / Side Curved Stripe */}
          <path
            d="M 352 350 
               C 390 350 435 375 515 372 
               C 555 370 580 360 600 352 
               C 575 365 540 384 505 384 
               C 435 384 390 362 352 350 Z"
            fill="#FFFFFF"
          />

          {/* White Laces (4 Diagonal Crossovers) */}
          <g stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round">
            <line x1="435" y1="305" x2="455" y2="325" />
            <line x1="458" y1="302" x2="480" y2="322" />
            <line x1="482" y1="300" x2="505" y2="320" />
            <line x1="507" y1="298" x2="530" y2="318" />
          </g>

          {/* Sneaker Thick White Vulcanized Midsole */}
          <path
            d="M 335 395 
               C 335 418 360 426 400 426 
               L 640 426 
               C 668 426 675 412 670 395 
               L 335 395 Z"
            fill="#FFFFFF"
            stroke="#0A183D"
            strokeWidth="3"
          />

          {/* Midsole Top Pinstripe */}
          <line x1="340" y1="398" x2="665" y2="398" stroke="#0A183D" strokeWidth="1.5" />
        </g>

        {/* ==================== TYPOGRAPHY WITH ORIGINAL COLORS ==================== */}
        {/* MNYOVU’S (#0A183D) */}
        <text
          x="500"
          y="552"
          textAnchor="middle"
          fill="#0A183D"
          fontFamily="'Cabinet Grotesk', Impact, Arial Black, sans-serif"
          fontWeight="900"
          fontSize="114"
          letterSpacing="2"
        >
          MNYOVU’S
        </text>

        {/* SNEAKER WASH (Original Deep Crimson Red #8F1426) */}
        <text
          x="500"
          y="614"
          textAnchor="middle"
          fill="#8F1426"
          fontFamily="'Cabinet Grotesk', Impact, Arial Black, sans-serif"
          fontWeight="900"
          fontSize="63"
          letterSpacing="4"
        >
          SNEAKER WASH
        </text>

        {/* & SHOE CARE (#0A183D) */}
        <text
          x="500"
          y="648"
          textAnchor="middle"
          fill="#0A183D"
          fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
          fontWeight="800"
          fontSize="26"
          letterSpacing="3.5"
        >
          &amp; SHOE CARE
        </text>

        {/* ==================== DIVIDER & EST. 2026 (#0A183D) ==================== */}
        <g id="est-divider">
          {/* Left Divider Line */}
          <line
            x1="235"
            y1="682"
            x2="390"
            y2="682"
            stroke="#0A183D"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Center Navy Capsule Pill */}
          <rect x="402" y="662" width="196" height="40" rx="20" fill="#0A183D" />

          {/* EST. 2026 Text in Crisp White */}
          <text
            x="500"
            y="689"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
            fontWeight="800"
            fontSize="20"
            letterSpacing="2"
          >
            EST. 2026
          </text>

          {/* Right Divider Line */}
          <line
            x1="610"
            y1="682"
            x2="765"
            y2="682"
            stroke="#0A183D"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </g>

        {/* ==================== TAGLINE & DOUBLE UNDERLINE ==================== */}
        {showSubtitle && (
          <g id="tagline">
            <text
              x="500"
              y="744"
              textAnchor="middle"
              fill="#0A183D"
              fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
              fontWeight="800"
              fontSize="19.5"
              letterSpacing="1"
            >
              WE'VE GOT YOU COVERED, MANJE CLEAN !!
            </text>

            {/* Top Full Width Horizontal Underline */}
            <line
              x1="295"
              y1="758"
              x2="705"
              y2="758"
              stroke="#0A183D"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Bottom Centered Shorter Underline */}
            <line
              x1="380"
              y1="772"
              x2="620"
              y2="772"
              stroke="#0A183D"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
        )}
      </svg>
    </div>
  );
};
