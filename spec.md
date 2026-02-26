# Specification

## Summary
**Goal:** Build a dark streetwear clothing brand landing page for "Tri Vibe" with a Motoko backend for newsletter email subscriptions.

**Planned changes:**
- Fixed navigation bar with TRI VIBE logo (triangle SVG icon), nav links (Collections, About, Contact), and a "Shop Now" button with frosted glass blur effect
- Hero section filling the viewport with tagline "Define Your Energy", display heading "TRI VIBE", subtext, two CTAs ("Explore Collection", "Our Story"), a featured Apex Hoodie product card (glass-card style, $89, Add to Cart), hero background image with dark overlay, and animated fade-in/slide-in entrance effects
- Three Vibes collections grid (BOLD, FLOW, EDGE) in a 3-column layout using glass-card style
- Best Sellers product grid (Vibe Tee $45, Track Pants $75, Logo Cap $35, Crew Socks $25) with responsive 1-2-4 column breakpoints
- Newsletter "Join the Tribe" section with email form offering 15% off; on submit calls backend `subscribeEmail` function, clears input, and changes button to "Subscribed! ✓"; shows "Already subscribed" message on duplicate
- Four-column footer with Shop, Help, Connect link groups, social icons, and copyright notice
- Dark streetwear design using #0f0f0f background, #e94560 crimson red accent, #ff6b6b coral accent, Bebas Neue for headings, Inter for body, glass-card style on all cards, decorative triangle SVG motifs, and radial blur blobs in hero background
- Motoko backend with a single actor exposing `subscribeEmail(email: Text) : async Bool` that persists emails in stable storage and returns false on duplicates

**User-visible outcome:** Visitors see a fully responsive dark streetwear landing page for Tri Vibe, can browse collections and best sellers, and can subscribe to the newsletter with duplicate detection handled gracefully.
