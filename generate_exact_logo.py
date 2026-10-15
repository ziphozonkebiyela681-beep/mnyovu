import subprocess

svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <defs>
    <style>
      .navy { fill: #0C1A3D; }
      .red { fill: #8B1528; }
      .white { fill: #FFFFFF; }
      .stroke-navy { stroke: #0C1A3D; }
      .stroke-red { stroke: #8B1528; }
      .font-brand { font-family: 'Cabinet Grotesk', 'Arial Black', Impact, sans-serif; }
      .font-sans { font-family: 'Plus Jakarta Sans', Arial, Helvetica, sans-serif; }
    </style>
    <!-- Suds gradient -->
    <linearGradient id="sudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7DD3FC" />
      <stop offset="60%" stop-color="#38BDF8" />
      <stop offset="100%" stop-color="#0284C7" />
    </linearGradient>
    <linearGradient id="sudGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#BAE6FD" />
      <stop offset="100%" stop-color="#38BDF8" />
    </linearGradient>
  </defs>

  <!-- Solid pure white canvas background -->
  <rect width="1000" height="1000" fill="#FFFFFF" />

  <!-- Outer Navy Ring -->
  <circle cx="500" cy="500" r="472" fill="#0C1A3D" />

  <!-- White Spacer Ring -->
  <circle cx="500" cy="500" r="446" fill="#FFFFFF" />

  <!-- Inner Crimson Red Ring -->
  <circle cx="500" cy="500" r="436" fill="#8B1528" />

  <!-- Inner White Field Disc -->
  <circle cx="500" cy="500" r="424" fill="#FFFFFF" />

  <!-- ==================== SUDS & BUBBLES ==================== -->
  <g id="suds-cluster">
    <!-- Bubble cluster behind shoe -->
    <circle cx="365" cy="335" r="55" fill="url(#sudGrad)" opacity="0.9" />
    <circle cx="410" cy="280" r="70" fill="url(#sudGradLight)" opacity="0.95" />
    <circle cx="480" cy="265" r="75" fill="url(#sudGrad)" opacity="0.95" />
    <circle cx="560" cy="280" r="68" fill="url(#sudGradLight)" opacity="0.9" />
    <circle cx="615" cy="330" r="52" fill="url(#sudGrad)" opacity="0.85" />
    <circle cx="330" cy="355" r="40" fill="url(#sudGradLight)" opacity="0.9" />
    <circle cx="450" cy="325" r="60" fill="url(#sudGrad)" opacity="0.9" />

    <!-- Small floating satellite bubbles -->
    <circle cx="500" cy="235" r="15" fill="#38BDF8" />
    <circle cx="535" cy="260" r="10" fill="#0284C7" />
    <circle cx="635" cy="275" r="16" fill="#38BDF8" />
    <circle cx="655" cy="305" r="11" fill="#38BDF8" />
    <circle cx="340" cy="305" r="10" fill="#38BDF8" />

    <!-- Sparkle star 1 on top-left bubble -->
    <path d="M 410 260 Q 410 278 428 278 Q 410 278 410 296 Q 410 278 392 278 Q 410 278 410 260 Z" fill="#FFFFFF" />
    <!-- Sparkle star 2 on right bubble -->
    <path d="M 580 290 Q 580 300 590 300 Q 580 300 580 310 Q 580 300 570 300 Q 580 300 580 290 Z" fill="#FFFFFF" />
  </g>

  <!-- ==================== SNEAKER SILHOUETTE ==================== -->
  <g id="sneaker-art">
    <!-- Under-sole Navy Splash / Shadow wave -->
    <path d="M 335 408 
             C 335 435 410 448 480 435 
             C 540 425 610 440 670 415 
             C 630 430 550 415 480 424 
             C 420 432 355 425 335 408 Z" 
          fill="#0C1A3D" />

    <!-- Sneaker Main Upper Body (Solid Navy) -->
    <path d="M 345 325 
             C 335 345 330 380 335 405 
             L 665 405 
             C 672 400 672 385 660 375 
             C 635 355 585 340 540 325 
             C 525 305 500 285 470 280 
             C 440 305 405 320 375 320 
             C 355 315 350 318 345 325 Z" 
          fill="#0C1A3D" />

    <!-- White Collar Opening / Interior Lining -->
    <path d="M 350 325 
             C 355 335 365 340 380 338 
             C 375 328 368 322 350 325 Z" 
          fill="#FFFFFF" />

    <!-- Classic White Jazz Wave / Curved Side Stripe -->
    <path d="M 352 350 
             C 390 350 435 375 515 372 
             C 555 370 580 360 600 352 
             C 575 365 540 384 505 384 
             C 435 384 390 362 352 350 Z" 
          fill="#FFFFFF" />

    <!-- White Laces (Diagonal Crossovers) -->
    <g stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round">
      <line x1="435" y1="305" x2="455" y2="325" />
      <line x1="458" y1="302" x2="480" y2="322" />
      <line x1="482" y1="300" x2="505" y2="320" />
      <line x1="507" y1="298" x2="530" y2="318" />
    </g>

    <!-- Sneaker Thick White Vulcanized Midsole -->
    <path d="M 335 395 
             C 335 418 360 426 400 426 
             L 640 426 
             C 668 426 675 412 670 395 
             L 335 395 Z" 
          fill="#FFFFFF" 
          stroke="#0C1A3D" 
          stroke-width="3" />

    <!-- Midsole Fine Top Pinstripe -->
    <line x1="340" y1="398" x2="665" y2="398" stroke="#0C1A3D" stroke-width="1.5" />
  </g>

  <!-- ==================== TYPOGRAPHY ==================== -->
  <!-- MNYOVU'S -->
  <text x="500" y="552" 
        text-anchor="middle" 
        fill="#0C1A3D" 
        class="font-brand" 
        font-weight="900" 
        font-size="112" 
        letter-spacing="2">MNYOVU’S</text>

  <!-- SNEAKER WASH -->
  <text x="500" y="614" 
        text-anchor="middle" 
        fill="#8B1528" 
        class="font-brand" 
        font-weight="900" 
        font-size="62" 
        letter-spacing="4">SNEAKER WASH</text>

  <!-- & SHOE CARE -->
  <text x="500" y="648" 
        text-anchor="middle" 
        fill="#0C1A3D" 
        class="font-sans" 
        font-weight="800" 
        font-size="26" 
        letter-spacing="3.5">&amp; SHOE CARE</text>

  <!-- ==================== DIVIDER & EST. 2026 ==================== -->
  <g id="est-divider">
    <!-- Left Divider Line -->
    <line x1="235" y1="682" x2="390" y2="682" stroke="#0C1A3D" stroke-width="4.5" stroke-linecap="round" />
    
    <!-- Navy Capsule / Pill -->
    <rect x="402" y="662" width="196" height="40" rx="20" fill="#0C1A3D" />
    
    <!-- EST. 2026 Text -->
    <text x="500" y="689" 
          text-anchor="middle" 
          fill="#FFFFFF" 
          class="font-sans" 
          font-weight="800" 
          font-size="20" 
          letter-spacing="2">EST. 2026</text>
    
    <!-- Right Divider Line -->
    <line x1="610" y1="682" x2="765" y2="682" stroke="#0C1A3D" stroke-width="4.5" stroke-linecap="round" />
  </g>

  <!-- ==================== TAGLINE ==================== -->
  <g id="tagline">
    <text x="500" y="744" 
          text-anchor="middle" 
          fill="#0C1A3D" 
          class="font-sans" 
          font-weight="800" 
          font-size="19.5" 
          letter-spacing="1">WE'VE GOT YOU COVERED, MANJE CLEAN !!</text>
    
    <!-- Top Horizontal Underline -->
    <line x1="295" y1="758" x2="705" y2="758" stroke="#0C1A3D" stroke-width="3" stroke-linecap="round" />
    
    <!-- Bottom Centered Shorter Underline -->
    <line x1="380" y1="772" x2="620" y2="772" stroke="#0C1A3D" stroke-width="3" stroke-linecap="round" />
  </g>
</svg>'''

with open('public/logo.svg', 'w') as f:
    f.write(svg_content)

with open('src/assets/logo.svg', 'w') as f:
    f.write(svg_content)

print("SVG written successfully.")

# Convert to PNG and JPG at 1200x1200 using ImageMagick
try:
    subprocess.run(["convert", "-density", "300", "-background", "none", "public/logo.svg", "-resize", "1200x1200", "public/logo.png"], check=True)
    subprocess.run(["convert", "-density", "300", "-background", "white", "-flatten", "public/logo.svg", "-resize", "1200x1200", "public/logo.jpg"], check=True)
    subprocess.run(["cp", "public/logo.png", "src/assets/logo.png"], check=True)
    subprocess.run(["cp", "public/logo.jpg", "src/assets/mnyovus_logo.jpg"], check=True)
    print("ImageMagick rasterization successful.")
except Exception as e:
    print(f"Error during rasterization: {e}")
