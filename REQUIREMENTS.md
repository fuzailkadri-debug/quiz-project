# What's Your Coffee Personality? - Requirements

## Personality → Coffee Pairings

| # | Personality | Coffee | Tagline |
|---|-------------|--------|---------|
| 1 | Bold Adventurer | Double Espresso | "You live for intensity" |
| 2 | Zen Minimalist | Black Coffee, Single Origin | "Simple. Clean. Perfect." |
| 3 | Practical Pragmatist | Large Drip, Whatever's Fresh | "Just make it work" |
| 4 | Night Owl | Red Eye (coffee + espresso shot) | "Sleep is optional" |

## Result Display Style
**Single recommendation** - User gets one result, e.g.:
> "You're a Bold Adventurer! Your coffee: Double Espresso."

The personality with the most answer matches wins. No percentages shown.

## Visual Style
**Bold & Dramatic** (Style 3):
- Dark background (`#0a0a0a` / `#111111`)
- Amber accent color (`#f59e0b`)
- Space Grotesk font (clean, modern)
- High contrast white text on dark cards
- Dot progress indicator
- Percentage shown at top right

## Images
None for now - can be added later during iteration.

## Icons
Yes - emoji icons next to each answer option.

## Quiz Questions

### Q1: What does your morning routine look like?
- 🏃 Up early, straight into action → **Bold Adventurer**
- 🧘 Slow and intentional — stretch, breathe, ease in → **Zen Minimalist**
- ⏰ Just enough time to get ready and go → **Practical Pragmatist**
- 😴 Snooze button, every time → **Night Owl**

### Q2: It's Friday night — what's the move?
- 🏔️ Spontaneous road trip, no plan needed → **Bold Adventurer**
- 🍵 Quiet evening in, peaceful and recharging → **Zen Minimalist**
- 📺 Whatever's easy — order food, pick a show → **Practical Pragmatist**
- 🌙 Out late — the night is still young → **Night Owl**

### Q3: How do you approach a big work project?
- ⚡ Dive straight in, figure it out as I go → **Bold Adventurer**
- 📋 Plan carefully before touching anything → **Zen Minimalist**
- ✅ Break it into tasks and work through them → **Practical Pragmatist**
- 🌅 My best work happens after midnight → **Night Owl**

### Q4: Your ideal weekend trip?
- 🧗 A trail I've never hiked before → **Bold Adventurer**
- 🏯 A quiet retreat somewhere peaceful → **Zen Minimalist**
- 🚗 Road trip with a clear route and good stops → **Practical Pragmatist**
- 🏙️ City break — late dinners, explore at night → **Night Owl**

### Q5: How do you handle your to-do list?
- 🎯 Pick the hardest thing and attack it first → **Bold Adventurer**
- 🌿 One thing at a time, with full focus → **Zen Minimalist**
- 📝 Write it all down and work through it steadily → **Practical Pragmatist**
- 🌛 Crush it all at 11pm — that's when I peak → **Night Owl**

### Q6: What's your exercise style?
- 🏋️ HIIT or weights — push hard → **Bold Adventurer**
- 🧘 Yoga or long walks — mindful movement → **Zen Minimalist**
- 🚴 Whatever's quick and actually gets done → **Practical Pragmatist**
- 😴 Does late-night scrolling count? → **Night Owl**

## Scoring Logic
- Each answer maps to one personality
- Tally total answers per personality at the end
- Show the personality with the highest count as the result
- On a tie: pick the first tied personality in order (Bold Adventurer > Zen Minimalist > Practical Pragmatist > Night Owl)
