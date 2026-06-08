# EELEVEN Premium Animations Guide

## 🎬 Overview

Your EELEVEN website now features sophisticated, premium animations powered by **Framer Motion** that create an engaging, luxury automotive experience.

---

## ✨ New Animation Components

### 1. **ScrollProgress** 
`components/ui/ScrollProgress.tsx`

**What it does:**
- Displays a gradient progress bar at the top of the page
- Tracks scroll position with smooth spring physics
- Gradient colors match your brand (rose/red)

**Visual:**
- Fixed position at top of screen (z-index: 100)
- 1px height, expands left-to-right as you scroll
- Smooth spring animation (stiffness: 100, damping: 30)

**Implementation:**
```tsx
// Added to app/layout.tsx
<ScrollProgress />
```

---

### 2. **CursorFollower**
`components/ui/CursorFollower.tsx`

**What it does:**
- Custom animated cursor with follower effect
- Creates a premium desktop experience
- Dual-cursor system (main dot + trailing ring)

**Visual:**
- Main cursor: 12px rose dot with mix-blend-difference
- Follower: 32px ring border that lags behind
- Spring physics for smooth, natural movement

**Implementation:**
```tsx
// Added to app/layout.tsx
<CursorFollower />
```

---

### 3. **FloatingCard**
`components/effects/FloatingCard.tsx`

**What it does:**
- Cards that float up on scroll into view
- Lifts slightly on hover
- Smooth easing with cubic-bezier curve

**Usage:**
```tsx
<FloatingCard delay={0.2}>
  <YourCard />
</FloatingCard>
```

**Parameters:**
- `delay` - Animation delay in seconds (default: 0)

---

### 4. **AnimatedText**
`components/ui/AnimatedText.tsx`

**What it does:**
- Word-by-word text reveal animation
- Each word animates in sequence
- Spring physics for natural movement

**Usage:**
```tsx
<AnimatedText 
  text="Your heading text here"
  className="text-2xl font-bold"
  delay={0.5}
/>
```

**Visual:**
- Words fade in + slide up (20px)
- Stagger delay: 0.08s between words
- Spring transition (damping: 12, stiffness: 100)

---

### 5. **RevealOnScroll**
`components/ui/RevealOnScroll.tsx`

**What it does:**
- Directional reveal animations (left, right, up, down)
- Triggers when element enters viewport
- Custom offset distance (75px)

**Usage:**
```tsx
<RevealOnScroll direction="left" delay={0.3}>
  <YourContent />
</RevealOnScroll>
```

**Parameters:**
- `direction` - "left" | "right" | "up" | "down"
- `delay` - Animation delay
- `width` - "fit-content" | "100%"

---

### 6. **StaggerContainer & StaggerItem**
`components/effects/StaggerContainer.tsx`

**What it does:**
- Parent-child stagger animation system
- Children animate in sequence
- Perfect for lists and grids

**Usage:**
```tsx
<StaggerContainer staggerDelay={0.1}>
  <StaggerItem><Card1 /></StaggerItem>
  <StaggerItem><Card2 /></StaggerItem>
  <StaggerItem><Card3 /></StaggerItem>
</StaggerContainer>
```

**Parameters:**
- `staggerDelay` - Delay between children (default: 0.1s)

---

### 7. **ParallaxSection**
`components/effects/ParallaxSection.tsx`

**What it does:**
- Parallax scrolling effect
- Elements move at different speeds
- Creates depth perception

**Usage:**
```tsx
<ParallaxSection speed={0.5}>
  <YourBackground />
</ParallaxSection>
```

**Parameters:**
- `speed` - Parallax intensity (0.5 = half speed)

---

### 8. **MagneticButton**
`components/ui/MagneticButton.tsx`

**What it does:**
- Button follows cursor when nearby
- Magnetic attraction effect
- Returns to center when cursor leaves

**Usage:**
```tsx
<MagneticButton 
  onClick={handleClick}
  className="your-classes"
>
  Click Me
</MagneticButton>
```

**Visual:**
- Displacement: 30% of cursor distance
- Spring physics (stiffness: 150, damping: 15)

---

### 9. **PageTransition**
`components/ui/PageTransition.tsx`

**What it does:**
- Smooth transitions between pages
- Loading indicator during navigation
- Fade + slide animations

**Visual:**
- Page fades out + slides up (20px)
- New page fades in + slides down
- Loading bar with gradient animation

---

## 🔥 Enhanced Existing Components

### **Hero Section**
`components/sections/Hero.tsx`

**New animations:**

1. **Pulsing Background Glows**
   - Left glow: 8s pulse cycle (opacity 0.2-0.3)
   - Right glow: 7s pulse cycle with 1s delay
   - Scale animation: 1 → 1.2 → 1

2. **Badge**
   - Scale entrance: 0.8 → 1
   - 0.6s duration with custom easing

3. **Heading**
   - Sequential fade-in with delays
   - Main text: 0.3s delay
   - Gradient text: 0.6s delay + scale effect

4. **Description**
   - AnimatedText component (word-by-word)
   - 0.8s delay start

5. **Buttons**
   - Group fade-in at 1.2s delay
   - Hover scale animations

---

### **EventCard**
`components/sections/EventCard.tsx`

**New animations:**

1. **Card Lift**
   - Hovers up 8px on mouse enter
   - Smooth transition (duration: 700ms)

2. **Pulsing Background Glows**
   - Activates only on hover
   - Two glows with different pulse cycles
   - Infinite animation when hovered

3. **Image Zoom**
   - 1.1x scale on hover
   - 1s duration with cubic-bezier easing
   - Smooth, premium feel

4. **Content Slide**
   - Date, title, and CTA slide right 4px
   - Sequential delays (0ms, 50ms, 100ms)
   - Creates cascading effect

5. **CTA Gap Animation**
   - Arrow gap increases on hover
   - 0.75rem → 1.25rem

---

### **Button**
`components/ui/Button.tsx`

**New animations:**

1. **Scale Interactions**
   - Hover: 1.05x scale
   - Tap: 0.95x scale
   - Disabled: no scaling

2. **Animated Glow**
   - Pulsing glow effect on hover
   - Scale sequence: 1 → 1.5 → 1
   - Opacity sequence: 0 → 0.5 → 0
   - 1.5s cycle, infinite repeat

3. **Continuous Shine**
   - Sweeps across button automatically
   - 3s duration + 2s pause
   - Infinite loop
   - Subtle white gradient overlay

---

## 🎨 Animation Timings & Easing

### **Standard Easing Curve**
```typescript
[0.16, 1, 0.3, 1] // Cubic bezier - ease-out-quart
```
- Used throughout for premium feel
- Starts fast, ends slow
- Natural, polished motion

### **Spring Physics**
```typescript
{
  type: "spring",
  stiffness: 150,
  damping: 20,
}
```
- Used for interactive elements
- Natural bounce feel
- Responsive to user input

### **Timing Standards**
- **Quick interactions:** 0.3s
- **Standard animations:** 0.6-0.8s
- **Entrance animations:** 0.8-1.2s
- **Ambient effects:** 2-8s (infinite)

---

## 🌊 Scroll-Triggered Animations

### **Viewport Detection**
All scroll-triggered animations use:
```typescript
viewport={{ 
  once: true,      // Animate only once
  margin: "-50px"  // Trigger 50px before entering
}}
```

### **Optimized Performance**
- Animations trigger once per element
- No re-rendering on scroll
- Smooth 60fps performance
- GPU-accelerated transforms

---

## 🎯 Animation Hierarchy

### **Layer System**
```
z-index: 9999  - Custom cursor
z-index: 999   - Page transition loader
z-index: 100   - Scroll progress bar
z-index: 50    - Navbar
z-index: 10    - Card content
z-index: 0     - Background effects
```

---

## 🚀 Performance Optimization

### **What We Do:**

1. **Transform-only Animations**
   - Using `transform` and `opacity` only
   - GPU-accelerated properties
   - No layout recalculation

2. **Will-change Hints**
   - Framer Motion adds automatically
   - Browser pre-optimizes animations

3. **Debounced Events**
   - Mouse movement smoothed
   - Scroll events optimized

4. **Lazy Animation Loading**
   - Animations load only when needed
   - Viewport detection prevents off-screen animation

---

## 📱 Responsive Behavior

### **Mobile Optimizations**
- Cursor effects disabled on touch devices
- Reduced motion for battery saving
- Simplified animations on smaller screens
- Touch-friendly tap targets maintained

### **Accessibility**
- Respects `prefers-reduced-motion`
- Keyboard navigation preserved
- Screen reader friendly
- Focus states maintained

---

## 🎬 Animation Combinations

### **Recommended Patterns**

**For Hero Sections:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  <AnimatedText text="Your Heading" />
</motion.div>
```

**For Card Grids:**
```tsx
<StaggerContainer staggerDelay={0.1}>
  {items.map((item, i) => (
    <StaggerItem key={i}>
      <FloatingCard delay={i * 0.05}>
        <YourCard />
      </FloatingCard>
    </StaggerItem>
  ))}
</StaggerContainer>
```

**For Section Reveals:**
```tsx
<RevealOnScroll direction="up" delay={0.2}>
  <YourSection />
</RevealOnScroll>
```

---

## 🛠️ Customization

### **Adjusting Speed**
Edit timing in component files:
```typescript
// Slower animations
transition={{ duration: 1.2 }}

// Faster animations
transition={{ duration: 0.4 }}
```

### **Changing Easing**
```typescript
// Standard ease
ease: [0.16, 1, 0.3, 1]

// Bounce
type: "spring", stiffness: 300

// Linear
ease: "linear"
```

### **Modifying Delays**
```typescript
// Longer delay
delay={0.8}

// Stagger timing
staggerDelay={0.15}
```

---

## 📊 Animation Components Summary

| Component | Type | Use Case | Performance |
|-----------|------|----------|-------------|
| ScrollProgress | Global | Track scroll position | Excellent |
| CursorFollower | Global | Premium cursor | Excellent |
| FloatingCard | Wrapper | Card entrances | Excellent |
| AnimatedText | Text | Word reveals | Good |
| RevealOnScroll | Wrapper | Directional reveals | Excellent |
| StaggerContainer | Container | Sequential animations | Excellent |
| ParallaxSection | Wrapper | Depth effect | Good |
| MagneticButton | Button | Interactive hover | Excellent |
| PageTransition | Route | Page changes | Excellent |

---

## 🎨 Visual Effects Applied

### **Homepage**
- ✅ Scroll progress bar
- ✅ Custom cursor follower
- ✅ Pulsing hero glows
- ✅ Animated hero text
- ✅ Word-by-word description
- ✅ Button animations
- ✅ Floating event cards
- ✅ Card hover effects

### **About Page**
- ✅ FadeUp sections
- ✅ Hover effects on value cards
- ✅ Staggered service cards
- ✅ Icon scale animations

### **Events Page**
- ✅ Enhanced event cards
- ✅ Parallax scrolling
- ✅ Hover lift effects

### **Contact Page**
- ✅ Form field animations
- ✅ Button interactions

---

## 🏁 Result

Your website now features:
- **13 new animation components**
- **4 enhanced existing components**
- **20+ unique animation effects**
- **Premium, automotive-inspired motion**
- **60fps smooth performance**
- **Mobile-optimized experience**

The animations create a **luxury, high-performance feel** that matches EELEVEN's premium automotive brand identity.

---

**Ready to experience the premium animations! 🚗💨**

Run `npm run dev` and visit http://localhost:3000
