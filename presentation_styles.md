# Monochrome Editorial Presentation System

## 1. Style definition

This presentation style uses **monochrome editorial minimalism** with progressive, click-based reveals.

The visual language is based on:

* white backgrounds
* black typography
* condensed sans-serif type
* large centred statements
* strong spacing
* minimal borders
* no decorative colour
* no gradients
* no shadows
* no smooth entrance animations
* one idea revealed at a time

The result feels technical, modern, direct, and presentation-focused. It works especially well for:

* hackathon pitches
* startup presentations
* technical product demos
* research projects
* educational technology
* architecture explanations
* software concepts
* science presentations

The slides should feel like a live visual script rather than a document filled with information.

## 2. Core design principles

### One idea per slide

Each slide should communicate one main point.

Examples:

* Most tools show the answer.
* Students need the process.
* It works end to end.
* No expensive hardware.

Avoid placing several unrelated ideas on the same slide.

### Speech leads, slides support

The presentation should not repeat the full spoken pitch.

Slides should show:

* key phrases
* formulas
* short lists
* process steps
* visual evidence
* demo instructions

The presenter provides the detail verbally.

### Reveal information gradually

When a sentence contains several important ideas, reveal each one separately.

For example:

```text
The project integrates:
```

Click:

```text
computer vision
```

Click:

```text
hand tracking
```

Click:

```text
stroke processing
```

Click:

```text
multimodal AI
```

The audience receives each term at the same time it is spoken.

### Prioritize contrast

All important content should remain readable from the back of a classroom or conference room.

Use:

* black on white
* large text
* short lines
* generous spacing
* minimal visual noise

## 3. Colour system

### Primary colours

```text
Background: #FFFFFF
Primary text: #000000
Secondary text: #666666
Inactive text: #AAAAAA
```

### Borders

```text
Primary border: #000000
Secondary border: rgba(0, 0, 0, 0.25)
```

### Default rule

Use black and white only.

Colour may be introduced only when it carries information, such as:

* distinguishing graph lines
* indicating an active selection
* separating datasets
* identifying an error
* highlighting one critical object

When colour is necessary, use one accent colour per presentation.

Example:

```text
Accent blue: #2563EB
```

The accent should appear in less than 10% of the visible content.

## 4. Typography

### Primary font

```css
font-family: "Arial Narrow", Arial, sans-serif;
```

Arial Narrow creates the condensed editorial character of the design.

If Arial Narrow is unavailable, use:

* Arial
* Liberation Sans Narrow
* Roboto Condensed
* Helvetica Neue Condensed
* system sans-serif

Do not distribute or embed external font files unless licensing clearly allows it.

### Typography hierarchy

#### Presentation title

```text
68–138 px
weight: 400
line-height: 0.90
letter-spacing: -0.06em
```

Used for:

```text
Sign2Graph
```

#### Main slide statement

```text
48–92 px
weight: 400
line-height: 0.92
letter-spacing: -0.055em
```

Used for:

```text
Most tools show the answer.
```

#### Large supporting statement

```text
34–72 px
line-height: 1.02
letter-spacing: -0.045em
```

Used for:

```text
Students need the process.
```

#### Standard presentation text

```text
28–50 px
line-height: 1.08
letter-spacing: -0.035em
```

#### Small metadata

```text
15–28 px
colour: #666666
```

Used for:

* slide category
* slide number
* instructions
* subtitles
* secondary labels

### Capitalisation

Use sentence case for most content.

Good:

```text
It works end to end.
```

Avoid:

```text
IT WORKS END TO END
```

Uppercase is reserved for small metadata labels:

```text
IMPACT
DEMO
ORIGINALITY
```

## 5. Slide composition

### General slide structure

Each slide contains:

1. a small section label at the top
2. one centred content area
3. an optional slide number in the bottom-right corner

Example:

```text
                 IMPACT

          No expensive hardware.

       laptop   webcam   projector

     realistic for underfunded schools

                                      11 / 14
```

### Content width

Use a maximum content width of approximately:

```text
1100–1200 px
```

Avoid allowing text to stretch across the full screen.

### Page padding

Recommended desktop slide padding:

```css
padding: 7vh 8vw;
```

### Alignment

Primary alignment:

```text
horizontal: centre
vertical: centre
text alignment: centre
```

Left alignment should be used only for:

* document-style explanations
* detailed diagrams
* technical specifications
* longer quotations
* code
* comparison tables

## 6. Spacing system

Use viewport-based spacing so the slides scale with screen size.

Recommended values:

```text
Small gap: 1.5vh
Standard gap: 2.4vh
Section gap: 3vh
Large gap: 5vh
```

Avoid filling empty space.

Whitespace is part of the design. It directs attention and makes each reveal feel intentional.

## 7. Slide labels

Each slide may include a small category label at the top.

Examples:

```text
PROBLEM
IDEA
GRAPH MODE
OTHER SUBJECTS
ORIGINALITY
EFFORT
IMPACT
PROJECT CONDITION
```

Recommended style:

```css
font-size: 18px;
text-transform: uppercase;
letter-spacing: 0.1em;
color: #666666;
```

The label should describe the function of the slide rather than repeat its headline.

## 8. Reveal system

### Reveal behaviour

Elements should appear instantly.

Do not use:

* fades
* slides
* scaling
* easing
* bouncing
* blur
* typewriter effects

The visibility change should be binary:

```css
.fragment {
  visibility: hidden;
}

.fragment.visible {
  visibility: visible;
}
```

This creates a presentation rhythm controlled entirely by the speaker.

### Click behaviour

One click should perform one action:

1. reveal the next hidden item
2. when all items are visible, move to the next slide

Recommended controls:

```text
Next:
Arrow Right
Page Down
Space
Enter
Mouse click

Previous:
Arrow Left
Page Up
Backspace
```

### Reveal order

Reveal items in the exact order they appear in the speech.

For example, if the speaker says:

> The project integrates computer vision, hand tracking, stroke processing, multimodal AI, mathematical parsing, graph rendering, animation, speech synthesis, and captioning.

The slide should reveal:

```text
computer vision
hand tracking
stroke processing
multimodal AI
mathematical parsing
graph rendering
animation
speech synthesis
captioning
```

one item at a time.

## 9. Text tags

Tags provide short category labels inside the main content.

Examples:

```text
GRAPH
OTHER
LIVE DEMO
AI
LOCAL
WORKING
```

Recommended style:

```css
.tag {
  display: inline-block;
  border: 2px solid #000;
  padding: 10px 18px;
  font-size: 20–32px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}
```

Use square corners.

Avoid:

* rounded pills
* coloured backgrounds
* shadows
* gradients
* small icons inside tags

A tag should contain one or two words.

## 10. Lists

Lists should not look like standard document bullet lists.

Recommended style:

* no bullet symbols
* centred
* one item per line
* large text
* each item revealed separately

Example:

```text
computer vision

hand tracking

stroke processing

multimodal AI
```

Recommended CSS:

```css
.list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5vh;
}
```

## 11. Equations

Equations should be treated as primary visual objects.

Recommended style:

```text
52–102 px
centred
black
generous spacing
```

Example:

[
y=(x-2)^2-4
]

Use KaTeX or MathJax for rendering complex LaTeX.

Do not place equations inside small boxes unless the box represents a clear input or output field.

For graph explanations, reveal transformations individually:

```text
y=x²
```

then:

```text
y=(x−2)²
```

then:

```text
y=(x−2)²−4
```

## 12. Demo slides

Demo slides create a deliberate transition from presentation to live product use.

Use a large bordered area with minimal text.

Example:

```text
┌────────────────────────────────────────┐
│              LIVE DEMO                 │
│                                        │
│                 Draw                   │
│                                        │
│          y = (x − 2)² − 4              │
│                                        │
│       Recognize → Add → Explain        │
└────────────────────────────────────────┘
```

Recommended style:

```css
.demo-box {
  border: 2px solid #000;
  padding: 5vh 4vw;
  min-width: min(72vw, 980px);
}
```

The slide should clearly tell the presenter what to demonstrate without exposing implementation notes to the audience.

Recommended demo slide sequence:

1. show “Live Demo”
2. reveal the equation
3. reveal the interaction sequence
4. switch to the live application

## 13. Image styling

Images should follow the same monochrome editorial system.

Two image styles are recommended.

# Image Style A: Full Bleed Monochrome

Use this style for:

* product photography
* classroom scenes
* hardware setup
* users interacting with the system
* dramatic contextual images

### Treatment

* use one large image
* crop it aggressively
* convert it to black and white
* increase contrast slightly
* avoid rounded corners
* avoid drop shadows
* allow the image to touch one or more slide edges
* place minimal text over empty image space or beside the image

Example layout:

```text
┌───────────────────────────────┐
│                               │
│      FULL-HEIGHT IMAGE        │
│                               │
│                               │
├───────────────────────────────┤
│ Spatial learning              │
│ without AR glasses.           │
└───────────────────────────────┘
```

### Recommended CSS

```css
.image-full {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.08);
}
```

### Overlay rules

If text is placed over the image:

* use solid black or white text
* place it over a low-detail area
* use a solid white text panel if contrast is unreliable
* never use translucent gradient overlays

Example:

```css
.image-label {
  background: #fff;
  color: #000;
  padding: 18px 24px;
}
```

# Image Style B: Editorial Cutout

Use this style for:

* product screenshots
* diagrams
* devices
* hand-tracking images
* interface previews
* isolated objects

### Treatment

* remove the background where possible
* place the object on white
* use a thin black outline or rectangular frame
* maintain sharp corners
* add a small caption beneath
* avoid floating-card shadows
* use one dominant image rather than several thumbnails

Example:

```text
             [ LAPTOP SCREEN ]

      webcam-based spatial learning

```

### Frame style

```css
.image-frame {
  border: 2px solid #000;
  padding: 12px;
  background: #fff;
}
```

### Screenshot treatment

Screenshots should be simplified before insertion:

* crop browser chrome
* remove unnecessary sidebars
* enlarge the relevant interface
* hide personal data
* keep only the area being discussed
* use black annotations
* use one highlight rectangle at a time

## 14. Diagram and scheme styling

Schemes should explain systems through simple geometry and typography.

Two scheme styles are recommended.

# Scheme Style A: Linear Process

Use this style for:

* product flows
* technical pipelines
* user journeys
* AI processing stages
* architecture summaries

Example:

```text
air-written input
        ↓
gesture tracking
        ↓
AI interpretation
        ↓
scene plan
        ↓
animated explanation
```

### Design rules

* use equal-width boxes
* use thin black borders
* use straight arrows
* align everything to one axis
* keep labels to one or two lines
* reveal one stage at a time

Recommended style:

```css
.process-box {
  border: 2px solid #000;
  padding: 14px 22px;
  font-size: 24–38px;
}
```

Arrow style:

```text
→
↓
```

Avoid curved arrows unless they represent feedback.

# Scheme Style B: System Map

Use this style for:

* architecture
* feature relationships
* module interactions
* technical complexity
* multi-input systems

Example:

```text
                Webcam
                   │
                   ▼
          Hand Tracking Engine
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
 Stroke Processing       Gesture State
        │                     │
        └──────────┬──────────┘
                   ▼
              Multimodal AI
                   │
                   ▼
          Structured Scene Plan
         ┌─────────┴─────────┐
         ▼                   ▼
       Graph              Other
```

### Design rules

* use rectangular nodes
* use 2 px black lines
* keep the background white
* do not colour-code every node
* use one accent only when a node needs emphasis
* avoid icons unless they materially improve understanding
* keep line crossings to a minimum
* place labels outside lines, not over them

### Active node styling

```css
.node-active {
  background: #000;
  color: #fff;
}
```

This can be used during a progressive explanation to show the current stage.

## 15. Graph styling

Graphs should match the overall design.

Recommended graph style:

```text
Background: white
Axes: black
Grid: light grey
Primary curve: black
Secondary curve: grey
Selected curve: one accent colour
Labels: Arial Narrow
```

Avoid:

* coloured chart backgrounds
* 3D graphs unless required
* excessive grid lines
* legends with many colours
* shadows
* decorative data markers

For transformation explanations:

* previous graph: thin grey
* current graph: solid black
* selected point: filled black circle
* temporary guides: thin grey lines

Example:

```text
base graph     grey
current graph  black
vertex         black dot
movement path  light grey
```

## 16. Chart styling

For bar, line, or comparison charts:

* use black for the primary dataset
* use grey for comparison data
* label values directly
* remove unnecessary legends
* remove outer chart borders
* minimise grid lines
* use large axis labels
* reveal series one at a time

Good:

```text
Recognition      ██████████
Graph rendering  ████████
Speech           ██████
```

Avoid multi-colour dashboards.

## 17. Icon styling

Icons are optional.

When used:

* use outline icons
* use consistent stroke width
* use black only
* avoid filled colourful icon sets
* keep icons secondary to text
* use icons only when they reduce reading time

Recommended icon stroke:

```text
1.5–2 px
```

Avoid placing icons inside coloured circles.

## 18. Borders and shapes

### Standard border

```text
2 px solid black
```

### Secondary border

```text
1–2 px solid rgba(0,0,0,0.25)
```

### Corner style

Default:

```text
square corners
```

Rounded corners should be avoided unless they represent a real interface component from the product.

### Shapes

Preferred:

* rectangles
* straight lines
* circles used as graph points
* arrows
* simple axes

Avoid decorative blobs and abstract background shapes.

## 19. Animation system

The presentation uses **state changes**, not cinematic transitions.

### Allowed

* instant appear
* instant disappear
* slide change
* graph construction during a live demo
* product animation shown inside the demo

### Avoid

* fade in
* fade out
* fly in
* zoom
* bounce
* elastic movement
* rotation
* blur
* parallax

The slides themselves remain static. Motion belongs to the product demonstration.

## 20. Accessibility

### Text size

Do not use presentation text below approximately 24 px on a standard laptop screen.

### Contrast

Maintain strong black-on-white contrast.

### Captions

Videos and product demonstrations should use visible captions.

### Information redundancy

Do not rely only on colour.

Use:

* labels
* line styles
* position
* shapes
* text

### Reveal pacing

Do not reveal items faster than the audience can read them.

## 21. Content writing style

Slide language should be:

* concise
* declarative
* concrete
* easy to say aloud
* free from filler

Good:

```text
It works end to end.
```

Good:

```text
No expensive hardware.
```

Good:

```text
Students need the process.
```

Avoid:

```text
Our innovative and revolutionary platform aims to completely transform the way students interact with educational content.
```

## 22. Recommended slide types

### Title slide

```text
Project name
Short product statement
Optional category
```

### Problem slide

```text
One strong problem statement
One supporting line
```

### Product flow slide

```text
Input → AI → output
```

### Equation slide

```text
Large equation
Three progressive steps
```

### Demo slide

```text
Live Demo
One task
One expected outcome
```

### Technical effort slide

```text
One technology per reveal
```

### Impact slide

```text
One audience or benefit per reveal
```

### Accessibility slide

```text
Laptop
Webcam
Projector
```

### Closing slide

```text
Project name
Final product value
```

## 23. CSS design tokens

```css
:root {
  --background: #ffffff;
  --foreground: #000000;
  --muted: #666666;
  --inactive: #aaaaaa;

  --border-primary: 2px solid #000000;
  --border-secondary: 1px solid rgba(0, 0, 0, 0.25);

  --font-display: \"Arial Narrow\", Arial, sans-serif;

  --slide-padding-y: 7vh;
  --slide-padding-x: 8vw;

  --gap-small: 1.5vh;
  --gap-standard: 2.4vh;
  --gap-large: 5vh;
}
```

## 24. Do and do not

### Do

* use one main message per slide
* place text in the centre
* make headlines large
* reveal technical lists one item at a time
* use square black borders
* keep screenshots focused
* use monochrome diagrams
* use dedicated demo slides
* preserve generous whitespace
* synchronise reveal order with speech

### Do not

* fill slides with paragraphs
* use more than one accent colour
* add decorative gradients
* use rounded cards everywhere
* use stock illustrations without purpose
* animate every element
* use small text
* place several graphs on one slide
* use complex diagrams without progressive reveals
* use colour as decoration

## 25. Summary

The style can be described as:

> A monochrome, condensed editorial presentation system built around centred statements, strong whitespace, square geometry, and click-based progressive disclosure.

Its visual identity comes from restraint.

The audience sees only the information required at that exact moment. Every slide supports the speaker, and every reveal follows the spoken pitch.
