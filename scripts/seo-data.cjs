/* ============================================================
 Magical Aura Pro Painters Ltd — SEO silo content data
 Unique copy per service & per location lives here.
 Edit this file to tweak page content, then run:
 node scripts/generate-seo-pages.cjs
 ============================================================ */

const SITE = {
  name: "Magical Aura Pro Painters Ltd",
  phone: "",
  phoneIntl: "",
  phoneDigits: "",
  email: "",
  domain: "https://magicalaurapainting.ca",
  address: { street: "", city: "Surrey", region: "BC", postal: "", country: "CA" },
  rating: "", reviewCount: "", reviewsUrl: "",
  whatsapp: "/contact.html",
  geo: { lat: "", lng: "" },
  sameAs: [],
  founded: "", yearsExperience: "", jobsCompleted: "", licenseNumber: "",

  sisterSites: [
    { name: "PowerX Electrical Ltd.", url: "https://powerxelectrical.ca/", tagline: "Surrey & Lower Mainland Electrician" },
    { name: "RapidFlow Plumbing Ltd.", url: "https://rapidflowplumbing.ca", tagline: "Surrey & Lower Mainland Plumber" },
    { name: "Benra Framing", url: "https://benra-framing.netlify.app", tagline: "Surrey & Lower Mainland Framing" },
    { name: "East Coast AC & Heating", url: "https://eastcoastheating.netlify.app", tagline: "Surrey & Lower Mainland HVAC" },
    { name: "Precision Tile & Stone Ltd.", url: "https://precisiontileandstone.ca", tagline: "Surrey & Lower Mainland Tile Contractor" },
    { name: "TrueLevel Drywall Ltd.", url: "https://trueleveldrywall.ca", tagline: "Surrey & Lower Mainland Drywall Contractor" },
  ],
};

/* Services that get a programmatic page for every city (service × city matrix).
 All 14 services now produce a page per city (14 × 16 = 224 combo pages). */
const COMBO_SERVICE_SLUGS = [
 "trim-and-doors",
 "interior-painting",
 "exterior-painting",
 "cabinet-painting",
 "drywall-repair",
 "ceiling-painting",
 "colour-consult",
 "deck-fence-staining",
 "wood-staining",
 "commercial-painting",
 "tenant-improvements",
 "strata-painting",
 "paint-prep",
 "new-home-painting",
];

/* ---------------------------------------------------------------
 SERVICES — each becomes /services/<slug>.html
 category: "residential" | "commercial"
--------------------------------------------------------------- */
const SERVICES = [
 {
 slug: "trim-and-doors",
 category: "residential",
 nav: "Trim & Doors",
 h1: "Trim, Doors & Woodwork Painting",
 metaTitle:
 "Trim & Door Painting Surrey & Lower Mainland | Magical Aura",
 metaDesc:
 "Trim, doors and interior woodwork painted cleanly, with floors and hardware protected. Serving Surrey and the Lower Mainland. Request a Free Quote.",
 image: "trade-cabinets.png",
 heroSub:
 "Trim, doors and interior woodwork painted cleanly, with floors and hardware protected.",
 intro: [
 "Scuffed baseboards, tired doors and chipped casings make a room look older than it is. Magical Aura sands, primes and paints trim and doors so the finish is even and the hardware stays clean.",
 "Before any work starts you get a clear, written quote through the contact form. We protect floors and furniture, cut in carefully, and leave the space tidy.",
 ],
 bulletsTitle: "Trim and door work we handle",
 bullets: [
 "Interior doors and frames",
 "Baseboards, casings and crown",
 "Window trim and sills",
 "Stair rails and spindles",
 "Built-ins and millwork",
 "Sanding, filling and priming",
 "Colour matching existing finishes",
 "Hardware removal and protection",
 ],
 stepsTitle: "How we paint trim and doors",
 steps: [
 ["Walkthrough & quote", "Send photos through the form. We confirm the scope and send a written quote."],
 ["Prep & protect", "Floors, hardware and adjacent walls are masked. Doors can be painted off the hinges when it helps."],
 ["Prime & coat", "Fills, sanding and primer first, then even coats for a smooth finish."],
 ["Tidy handover", "Hardware goes back on, dust is cleaned up, and you get a space ready to use."],
 ],
 faqs: [
 ["Do you paint doors on or off the hinges?", "Either works. Taking doors off often gives a cleaner finish; we will recommend based on your home and timeline."],
 ["Can you match my existing trim colour?", "Yes. Bring a sample or we will work from what is already on the wall so new work blends in."],
 ["How do I request a quote?", "Use the contact form. A phone number is coming soon."],
 ],
 related: ["interior-painting", "drywall-repair", "colour-consult"],
 },
 {
 slug: "interior-painting",
 category: "residential",
 nav: "Interior Painting",
 h1: "Interior Painting for Homes & Suites",
 metaTitle:
 "Interior Painting Surrey & Lower Mainland | Magical Aura",
 metaDesc:
 "Interior walls, ceilings and rooms painted with clean prep and no mess left behind. Serving Surrey and the Lower Mainland. Request a Free Quote.",
 image: "trade-interior-living-room.png",
 heroSub:
 "Walls, ceilings and rooms painted with careful prep, even coats and a tidy finish.",
 intro: [
 "A fresh interior coat is the fastest way to make a home feel new. Magical Aura paints living rooms, bedrooms, kitchens, hallways and suites across Surrey and the Lower Mainland.",
 "We patch small marks, sand and prime as needed, protect floors and furniture, and leave the space ready to live in. Quotes are written and sent after we see photos or walk the job.",
 ],
 bulletsTitle: "What interior painting includes",
 bullets: [
 "Living rooms, bedrooms and hallways",
 "Kitchens and bathrooms (paint-grade surfaces)",
 "Ceilings and accent walls",
 "Suites and rental turnovers",
 "Patching, sanding and priming",
 "Floor, furniture and fixture protection",
 "Colour matching and sheen advice",
 "Tidy cleanup at the end of each day",
 ],
 stepsTitle: "Our interior painting process",
 steps: [
 ["Photos & quote", "Send room photos and a short note through the form. We reply with a written quote."],
 ["Prep", "We move or cover furniture, mask floors and fixtures, and patch what the finish will show."],
 ["Paint", "Even coats with the sheen you chose — walls, ceilings and cut-ins done carefully."],
 ["Handover", "Tape comes off, rooms are swept, and you get a clean space — not a leftover mess."],
 ],
 faqs: [
 ["How long does interior painting take?", "A typical room can be done in a day once prep is finished. Whole-home work is scheduled room by room so you can still live in the house."],
 ["Do I need to move all the furniture?", "We can work around large pieces and cover what stays. Smaller items are easier if you clear them first."],
 ["How do I get a quote?", "Use the contact form. Number coming soon."],
 ],
 related: ["trim-and-doors", "drywall-repair", "colour-consult"],
 },
 {
 slug: "exterior-painting",
 category: "residential",
 nav: "Exterior Painting",
 h1: "Exterior Painting for Lower Mainland Weather",
 metaTitle:
 "Exterior Painting Surrey & Lower Mainland | Magical Aura Pro Painters Ltd",
 metaDesc:
 "Siding, fascia, soffits and trim painted for Lower Mainland rain and sun. Clean prep, durable coats. Request a Free Quote.",
 image: "trade-exterior-home.png",
 heroSub:
 "Siding, fascia, soffits and exterior trim painted to stand up to Lower Mainland weather.",
 intro: [
 "Rain, moss and sun wear paint faster here than inland. Magical Aura preps exterior surfaces properly — wash, scrape, sand, prime — then applies coats that hold up on Surrey and Lower Mainland homes.",
 "We schedule around dry weather, protect landscaping, and keep the job tidy. You get a written quote before work starts.",
 ],
 bulletsTitle: "What's covered",
 bullets: [
 "Wood, vinyl-adjacent trim and fibre-cement siding",
 "Fascia, soffits and eaves",
 "Window and door trim",
 "Garage doors and entry doors",
 "Washing, scraping and sanding",
 "Priming bare or stained areas",
 "Caulking and small repairs before paint",
 "Landscaping and walkway protection",
 ],
 stepsTitle: "How it works",
 steps: [
 ["Site review", "We look at the current finish, access and weather window, then send a written quote."],
 ["Prep", "Wash, scrape, sand and prime so new coats actually stick."],
 ["Paint", "Even exterior coats on siding, trim and details, with neat cut-ins."],
 ["Walkthrough", "We check coverage together and leave the property tidy."],
 ],
 faqs: [
 ["When is the best time to paint outside?", "Late spring through early fall is typical in the Lower Mainland. We watch the forecast and will not coat in rain."],
 ["Do you paint stucco and wood?", "Yes, when the surface is sound. We will tell you if repairs should happen first."],
 ["How do I book?", "Send photos through the contact form. Number coming soon."],
 ],
 related: ["deck-fence-staining", "wood-staining", "paint-prep"],
 },
 {
 slug: "cabinet-painting",
 category: "residential",
 nav: "Cabinet Painting",
 h1: "Kitchen & Bathroom Cabinet Painting",
 metaTitle:
 "Cabinet Painting Surrey & Lower Mainland | Magical Aura Pro Painters Ltd",
 metaDesc:
 "Kitchen and bathroom cabinets painted for a fresh finish without a full replacement. Surrey and the Lower Mainland. Request a Free Quote.",
 image: "trade-cabinets.png",
 heroSub:
 "Kitchen and bathroom cabinets painted for a fresh finish without a full replacement.",
 intro: [
 "Cabinet painting is a practical way to update a kitchen or bathroom without the cost and downtime of new boxes. Magical Aura sands, primes and coats doors, drawers and frames so the finish is smooth and durable.",
 "We work in occupied homes, keep dust down, and return hardware neatly. Quotes are written after we see photos of your cabinets.",
 ],
 bulletsTitle: "Our cabinet painting services",
 bullets: [
 "Kitchen cabinet doors, drawers and frames",
 "Bathroom vanity cabinets",
 "Sanding, filling and bonding primer",
 "Spray or brush-and-roll finishes",
 "Hardware removal and reinstall",
 "Colour matching and sheen options",
 "Island and pantry cabinets",
 "Tidy on-site protection",
 ],
 stepsTitle: "From quote to finished cabinets",
 steps: [
 ["Photos & quote", "Send clear photos of doors, drawers and any damage. We reply with a written quote."],
 ["Prep", "Doors come off, hardware is bagged, and boxes are masked."],
 ["Prime & paint", "Bonding primer then even finish coats for a durable surface."],
 ["Rehang", "Doors go back on, hardware is aligned, and the kitchen is ready to use."],
 ],
 faqs: [
 ["Is cabinet painting as durable as new cabinets?", "A proper prime and finish holds up to daily kitchen use. It is not a new box, but it is a fraction of the disruption."],
 ["Can you paint laminate cabinets?", "Often yes, with the right primer. We will confirm from photos."],
 ["How do I request a quote?", "Use the contact form. Number coming soon."],
 ],
 related: ["interior-painting", "trim-and-doors", "colour-consult"],
 },
 {
 slug: "drywall-repair",
 category: "residential",
 nav: "Drywall Repair & Paint Prep",
 h1: "Drywall Repair & Paint Prep",
 metaTitle:
 "Drywall Repair Surrey & Lower Mainland | Magical Aura Pro Painters Ltd",
 metaDesc:
 "Patch, sand and prime so the finish coat looks even. Drywall repair and paint prep in Surrey and the Lower Mainland. Request a Free Quote.",
 image: "trade-interior-living-room.png",
 heroSub:
 "Holes, cracks and texture mismatches patched, sanded and primed so the paint looks even.",
 intro: [
 "Paint only looks as good as the wall underneath. Magical Aura patches holes, settles cracks, and sands repairs flush so the finish coat does not telegraph every mark.",
 "We handle the repair and the paint in one visit when that is the cleanest path, or prep for a larger interior job. Quotes are written and sent through the form.",
 ],
 bulletsTitle: "Prep work we do",
 bullets: [
 "Nail pops, cracks and dents",
 "Picture-hanger and TV-mount holes",
 "Water-stain sealing (once dry)",
 "Texture matching on small patches",
 "Sanding and dust control",
 "Priming repairs before finish coats",
 "Caulking along trim",
 "Full-room paint after repairs",
 ],
 stepsTitle: "How a repair works",
 steps: [
 ["Photos & quote", "Show us the damage through the form. We send a written quote."],
 ["Patch", "Fills and tape where needed, then dry time before sanding."],
 ["Prime", "Repairs get primed so the finish coat does not flash."],
 ["Paint", "We blend into the surrounding wall or coat the whole room if that looks better."],
 ],
 faqs: [
 ["Can you match orange-peel or knockdown texture?", "On small patches, yes, close enough that paint hides the rest. Large areas may need a wider blend."],
 ["Do you paint after the repair?", "Usually. A patch without paint is obvious. We will quote repair-only if you prefer."],
 ["How do I book?", "Contact form. Number coming soon."],
 ],
 related: ["interior-painting", "ceiling-painting", "paint-prep"],
 },
 {
 slug: "ceiling-painting",
 category: "residential",
 nav: "Ceiling & Popcorn Removal",
 h1: "Ceiling Painting & Popcorn Texture",
 metaTitle:
 "Ceiling Painting & Popcorn Removal Surrey | Magical Aura",
 metaDesc:
 "Ceiling coats, popcorn skim or paint, and even coverage without splatter. Surrey and the Lower Mainland. Request a Free Quote.",
 image: "trade-interior-living-room.png",
 heroSub:
 "Ceilings painted evenly — including popcorn and other textures you want to keep, skim, or coat.",
 intro: [
 "Ceilings show roller marks and old stains more than walls do. Magical Aura coats ceilings with even coverage and protected floors, and we can skim or paint popcorn and other textures.",
 "Older Lower Mainland homes often still have popcorn. We will tell you honestly whether a coat, a skim or a fuller flatten is the better look for your rooms.",
 ],
 bulletsTitle: "Ceiling work we do",
 bullets: [
 "Flat and eggshell ceiling coats",
 "Popcorn ceilings painted in place",
 "Skim or flatten where it makes sense",
 "Stain-blocking primer on marks",
 "Hallway, bedroom and living-room ceilings",
 "Floor and furniture protection",
 "Cut-ins at crown and walls",
 "Whole-room painting with the ceiling",
 ],
 stepsTitle: "Our process",
 steps: [
 ["Look & quote", "Photos of the ceiling and any stains. Written quote follows."],
 ["Protect", "Floors, fixtures and walls are covered before a drop of paint."],
 ["Prime if needed", "Stains and repairs get sealed so they do not bleed."],
 ["Coat", "Even ceiling coats, then a tidy cleanup."],
 ],
 faqs: [
 ["Can you paint popcorn without it falling off?", "If the texture is sound, yes. Loose areas need repair first. We will say so from photos or a visit."],
 ["Do you remove popcorn?", "We can skim or flatten in many rooms. Full scrape of every ceiling is quoted separately because of dust and time."],
 ["How do I get a quote?", "Use the contact form. Number coming soon."],
 ],
 related: ["drywall-repair", "interior-painting", "paint-prep"],
 },
 {
 slug: "colour-consult",
 category: "residential",
 nav: "Colour Consult",
 h1: "Colour Consults for Homes",
 metaTitle:
 "Colour Consult Surrey & Lower Mainland | Magical Aura Pro Painters Ltd",
 metaDesc:
 "Help choosing paint colours and sheens for rooms, exteriors and cabinets. Surrey and the Lower Mainland. Request a Free Quote.",
 image: "trade-interior-living-room.png",
 heroSub:
 "Help choosing colours and sheens that work with your light, floors and trim — then we paint them.",
 intro: [
 "The wrong white can make a room feel cold; the right one makes it calm. Magical Aura helps you pick colours and sheens that suit Lower Mainland light, then paints the job so the sample matches the wall.",
 "Bring photos, flooring samples or a starting colour. We keep the advice practical — not a long design process — and quote the painting with the consult.",
 ],
 bulletsTitle: "What a colour consult covers",
 bullets: [
 "Interior wall and ceiling colours",
 "Trim, door and cabinet colours",
 "Exterior body and accent colours",
 "Sheen advice (matte, eggshell, semi-gloss)",
 "Sample patches on your actual walls",
 "Flow between open-plan rooms",
 "Working with existing floors and stone",
 "Paint the rooms once you decide",
 ],
 stepsTitle: "How we work",
 steps: [
 ["Tell us the rooms", "Send photos and any colours you already like through the form."],
 ["Shortlist", "We suggest a tight list of colours and sheens that fit the space."],
 ["Sample", "Test patches on the wall so you can see them in morning and evening light."],
 ["Paint", "Once you pick, we schedule the painting with the same crew."],
 ],
 faqs: [
 ["Is a colour consult separate from painting?", "It can be. Most clients want both. We will quote the consult and the paint so you can choose."],
 ["Do you work with a specific paint brand?", "We use quality interior and exterior lines suited to the surface. If you have a brand preference, say so in the form."],
 ["How do I start?", "Contact form. Number coming soon."],
 ],
 related: ["interior-painting", "cabinet-painting", "exterior-painting"],
 },

 {
 slug: "deck-fence-staining",
 category: "residential",
 nav: "Deck & Fence Staining",
 h1: "Deck & Fence Staining",
 metaTitle:
 "Deck & Fence Staining Surrey & Lower Mainland | Magical Aura",
 metaDesc:
 "Decks and fences stained to handle Lower Mainland weather. Wash, prep and even coats. Request a Free Quote.",
 image: "trade-exterior-home.png",
 heroSub:
 "Decks and fences stained to handle Lower Mainland weather.",
 intro: [
 "Decks and fences take rain, sun and foot traffic all year. Magical Aura washes, sands where needed, and stains so the wood is protected and the colour is even.",
 "We work on cedar, pressure-treated and similar outdoor wood. You get a written quote before we start, and we leave the yard tidy.",
 ],
 bulletsTitle: "Staining work we do",
 bullets: [
 "Decks, stairs and railings",
 "Privacy and boundary fences",
 "Gates and arbor wood",
 "Washing and mill-glaze prep",
 "Sanding splinters and old flaking stain",
 "Transparent, semi-transparent and solid stains",
 "Cut-ins against siding and concrete",
 "Yard and planting protection",
 ],
 stepsTitle: "Our approach",
 steps: [
 ["Look & quote", "Photos of the deck or fence and a note on the look you want. Written quote follows."],
 ["Prep", "Wash, dry time, then sand or scrape what will not take stain."],
 ["Stain", "Even coats with the product suited to your wood and weather."],
 ["Cure", "We tell you when it is safe to walk on and how to keep it looking good."],
 ],
 faqs: [
 ["Stain or paint for a deck?", "Most decks last longer with stain that soaks in. Solid colour is an option when the wood is uneven. We will recommend from photos."],
 ["How often should a Lower Mainland deck be stained?", "Many decks want attention every few seasons, depending on sun and traffic. We will be honest if it can wait."],
 ["How do I book?", "Contact form. Number coming soon."],
 ],
 related: ["exterior-painting", "wood-staining", "paint-prep"],
 },
 {
 slug: "wood-staining",
 category: "residential",
 nav: "Wood Staining",
 h1: "Interior & Exterior Wood Staining",
 metaTitle:
 "Wood Staining Surrey & Lower Mainland | Magical Aura",
 metaDesc:
 "Accent walls, millwork, fences and outdoor wood stained evenly. Surrey and the Lower Mainland. Request a Free Quote.",
 image: "trade-exterior-home.png",
 heroSub:
 "Accent walls, millwork and outdoor wood stained evenly, with nearby surfaces protected.",
 intro: [
 "Stain shows the grain instead of hiding it. Magical Aura preps wood so the colour takes evenly — interior feature walls, millwork, and outdoor pieces that sit beside painted siding.",
 "We protect floors and adjacent paint, and we quote in writing before any stain goes on.",
 ],
 bulletsTitle: "What's included",
 bullets: [
 "Interior wood feature walls",
 "Rails, beams and millwork",
 "Exterior wood accents",
 "Sanding and conditioners when needed",
 "Even colour without lap marks",
 "Clear topcoats where they belong",
 "Protection of nearby painted surfaces",
 "Colour-sample patches",
 ],
 stepsTitle: "How it works",
 steps: [
 ["Photos & quote", "Show us the wood and the look you want. Written quote follows."],
 ["Prep", "Sand, clean and mask. Old flaking finish comes off first."],
 ["Stain", "Even application, wiping or brushing to the look you chose."],
 ["Protect", "Topcoat if the surface needs it, then a tidy handover."],
 ],
 faqs: [
 ["Can you stain over old paint?", "Usually no — paint has to come off first. We will say so up front rather than guessing."],
 ["Do you stain and paint on the same project?", "Yes. Many exteriors mix painted siding with stained decks or fences."],
 ["How do I request a quote?", "Contact form. Number coming soon."],
 ],
 related: ["deck-fence-staining", "trim-and-doors", "exterior-painting"],
 },

 /* ---------------- COMMERCIAL ---------------- */
 {
 slug: "commercial-painting",
 category: "commercial",
 nav: "Commercial Painting",
 h1: "Commercial Painting Services",
 metaTitle:
 "Commercial Painter Surrey & Lower Mainland | Magical Aura",
 metaDesc:
 "Offices, retail, warehouses and light industrial painted around your hours. Surrey and the Lower Mainland. Request a Free Quote.",
 image: "service-commercial-painting.jpg",
 heroSub:
 "Retail, office, warehouse and light industrial — painted around your hours, with clean prep and a tidy finish.",
 intro: [
 "Commercial painting lives on scheduling. Magical Aura paints offices, shops, warehouses and light industrial spaces across the Lower Mainland, planned around the hours you need to stay open.",
 "We coordinate with your other trades when the job is part of a larger renovation, keep communication clear, and quote in writing before work starts.",
 ],
 bulletsTitle: "Commercial services",
 bullets: [
 "Office and reception interiors",
 "Retail and shop interiors",
 "Warehouse and shop walls",
 "Common corridors and stairwells",
 "After-hours and weekend scheduling",
 "Colour matching brand standards",
 "Prep, patch and prime",
 "Tidy daily cleanup",
 ],
 stepsTitle: "Working with us",
 steps: [
 ["Scope & quote", "Walk the site or send drawings and photos. You get a written quote."],
 ["Schedule", "We plan around your hours and other trades."],
 ["Paint", "Crews work cleanly, with areas reopened as they finish."],
 ["Handover", "A walkthrough and a tidy space ready for business."],
 ],
 faqs: [
 ["Can you work after hours?", "Yes. Evenings and weekends are common so your operation can stay open."],
 ["Do you work with general contractors and property managers?", "Yes. We coordinate, keep one point of contact, and stick to the agreed scope."],
 ["How do I start?", "Contact form. Number coming soon."],
 ],
 related: ["tenant-improvements", "strata-painting", "paint-prep"],
 },
 {
 slug: "tenant-improvements",
 category: "commercial",
 nav: "Commercial Unit Painting",
 h1: "Tenant Improvements & Commercial Fit-Out Painting",
 metaTitle:
 "Tenant Improvement Painter Surrey & Lower Mainland | Magical Aura",
 metaDesc:
 "Painting for commercial unit painting, retail and office fit-outs. On-schedule, coordinated with your trades. Request a Free Quote.",
 image: "service-commercial-painting.jpg",
 heroSub:
 "Opening or renovating a commercial space? We deliver the painting scope on time — walls, ceilings, millwork — coordinated with every other trade.",
 intro: [
 "A tenant improvement only succeeds if the trades stay in sync. Magical Aura paints retail, restaurant, office and clinic fit-outs across the Lower Mainland, from patch and prime to the final coat.",
 "We work from your drawings, coordinate with the GC, and keep the paint schedule honest so you can open on time.",
 ],
 bulletsTitle: "Fit-out painting scope",
 bullets: [
 "Patch, sand and prime new drywall",
 "Walls, ceilings and bulkheads",
 "Doors, frames and millwork",
 "Feature walls and brand colours",
 "After-hours coats when needed",
 "Coordination with other trades",
 "Punch-list touch-ups",
 "Tidy handover for opening day",
 ],
 stepsTitle: "How we deliver",
 steps: [
 ["Drawings & quote", "We price from your TI drawings or a site walk."],
 ["Schedule", "Paint days lock into the project calendar."],
 ["Prime to finish", "Prep, prime, then finish coats once other trades are clear."],
 ["Punch", "Touch-ups so the space is ready to open."],
 ],
 faqs: [
 ["Can you hit our opening deadline?", "We plan crew and materials around your date and flag conflicts early."],
 ["Can you work from a designer's drawings?", "Yes. We paint to the specified colours and sheens."],
 ["How do I request a quote?", "Contact form. Number coming soon."],
 ],
 related: ["commercial-painting", "paint-prep", "strata-painting"],
 },
 {
 slug: "strata-painting",
 category: "commercial",
 nav: "Strata Painting",
 h1: "Strata & Multi-Unit Painting",
 metaTitle:
 "Strata Painter Surrey & Lower Mainland | Magical Aura",
 metaDesc:
 "Strata and multi-unit painting: common areas, parkade walls, suites and exterior buildings. Request a Free Quote.",
 image: "trade-interior-living-room.png",
 heroSub:
 "Property managers and strata councils trust Magical Aura for common-area, suite and building painting across the Lower Mainland.",
 intro: [
 "Strata buildings need painting that residents can live with — common corridors, parkade walls, suite turnovers and exterior buildings. Magical Aura works with property managers and councils on clear scopes and tidy sites.",
 "We schedule around residents, protect common floors, and document the work so councils can follow along. Quotes are written.",
 ],
 bulletsTitle: "Strata services",
 bullets: [
 "Common-area corridors and lobbies",
 "Parkade and stairwell walls",
 "Suite turnover painting",
 "Exterior building coats",
 "Doors, frames and railings",
 "Resident notices and tidy sites",
 "Punch-list walkthroughs",
 "Clear quotes for council packages",
 ],
 stepsTitle: "Why managers choose us",
 steps: [
 ["Single point of contact", "One crew lead for common areas, suites and follow-up."],
 ["Clear quotes", "Scopes councils can review without guessing."],
 ["Resident-aware scheduling", "Work planned around access and quiet hours."],
 ["Tidy sites", "Floors protected, debris hauled, areas reopened promptly."],
 ],
 faqs: [
 ["Do you work directly with strata councils and property managers?", "Yes. We provide quotes and a single contact for the building."],
 ["Can you paint suites between tenants?", "Yes. Turnover painting is a regular part of our strata work."],
 ["How do I start?", "Contact form. Number coming soon."],
 ],
 related: ["commercial-painting", "interior-painting", "paint-prep"],
 },
 {
 slug: "paint-prep",
 category: "commercial",
 nav: "Paint Prep",
 h1: "Paint Prep for Homes & Commercial Spaces",
 metaTitle:
 "Paint Prep Surrey & Lower Mainland | Magical Aura Pro Painters Ltd",
 metaDesc:
 "Masking, sanding, priming and protection so the finish coat looks even. Homes and commercial spaces. Request a Free Quote.",
 image: "trade-interior-living-room.png",
 heroSub:
 "Masking, sanding, priming and protection so the finish coat looks even — and the mess stays off your floors.",
 intro: [
 "Most of a good paint job is prep. Magical Aura masks floors and fixtures, sands glossy surfaces, primes stains and repairs, and only then starts finish coats.",
 "We do this on homes and commercial sites. If you only need prep for another trade, we can quote that too.",
 ],
 bulletsTitle: "Prep services",
 bullets: [
 "Floor, furniture and fixture protection",
 "Washing and deglossing",
 "Sanding and dust control",
 "Patching and caulking",
 "Stain-blocking primer",
 "Window, door and hardware masking",
 "Commercial after-hours prep",
 "Ready-for-paint handover",
 ],
 stepsTitle: "Our prep process",
 steps: [
 ["Scope", "We list what needs protection, repair and primer."],
 ["Protect", "Floors and fixtures are covered before sanding starts."],
 ["Repair & prime", "Patches, caulk and primer so finish coats hide the work."],
 ["Ready", "Either we paint next, or we hand you a site ready for finish coats."],
 ],
 faqs: [
 ["Do you always prime?", "When the surface needs it — stains, repairs, bare wood, or a big colour change. Skipping primer is how jobs fail."],
 ["Can you prep without painting?", "Yes, if another trade is coating. Most clients want both from us."],
 ["How do I book?", "Contact form. Number coming soon."],
 ],
 related: ["interior-painting", "commercial-painting", "drywall-repair"],
 },
 {
 slug: "new-home-painting",
 category: "commercial",
 nav: "New-Home Painting",
 h1: "New-Home Painting",
 metaTitle:
 "New-Home Painting Surrey & Lower Mainland | Magical Aura Pro Painters Ltd",
 metaDesc:
 "New construction finishing, builder touch-ups and first coats for new homes. Surrey and the Lower Mainland. Request a Free Quote.",
 image: "trade-interior-living-room.png",
 heroSub:
 "New construction finishing, builder touch-ups and first coats so a new home looks complete.",
 intro: [
 "New homes still need paint that looks finished — drywall that was rushed, builder-white that feels flat, and punch-list scuffs from other trades. Magical Aura handles first coats, colour changes and touch-ups on new builds across the Lower Mainland.",
 "We work with homeowners after handover and with builders who need a reliable paint trade. Quotes are written.",
 ],
 bulletsTitle: "New-home painting services",
 bullets: [
 "Full interior first coats",
 "Builder-white upgrades to chosen colours",
 "Ceiling and wall finishing",
 "Trim, doors and millwork",
 "Punch-list touch-ups",
 "Garage and feature walls",
 "Coordination with other finishing trades",
 "Tidy site at handover",
 ],
 stepsTitle: "How we help",
 steps: [
 ["Walkthrough", "We list rooms, sheens and punch items, then send a written quote."],
 ["Prep", "New drywall gets the primer and sanding it still needs."],
 ["Paint", "Even coats room by room, with other trades scheduled around us."],
 ["Punch", "Final touch-ups so the home is ready to live in."],
 ],
 faqs: [
 ["Do you paint right after the builder hands over?", "Yes. Many clients want colour and sheen upgrades once they have the keys."],
 ["Can you work with a builder's schedule?", "Yes. We slot paint days around drywall, flooring and millwork."],
 ["How do I request a quote?", "Contact form. Number coming soon."],
 ],
 related: ["interior-painting", "trim-and-doors", "paint-prep"],
 },
];

/* ---------------------------------------------------------------
 LOCATIONS — each becomes /locations/painters-<slug>.html
--------------------------------------------------------------- */
const LOCATIONS = [
 {
 slug: "surrey",
 city: "Surrey",
 metaTitle:
 "Painter Surrey BC | Interior & Exterior Painting | Magical Aura Pro Painters Ltd",
 metaDesc:
 "Painter in Surrey, BC. Interior and exterior painting, cabinets, drywall repair and decks. Request a Free Quote.",
 heroSub:
 "Magical Aura is based in Surrey. Whether you are in Newton, Guildford, Fleetwood or South Surrey, send the form for a free written quote.",
 intro: [
 "Surrey is home base for Magical Aura Pro Painters Ltd. We know the city's housing stock — older Whalley and Newton homes that need careful prep and interior coats, and newer builds across Clayton and Grandview Heights that want cabinets, colour and tidy first coats.",
 "We cover all of Surrey for interior and exterior painting, cabinet painting, drywall repair, decks and fences, and commercial work. Quotes are written; a phone number is coming soon.",
 ],
 neighbourhoods: ["Whalley / City Centre", "Guildford", "Newton", "Fleetwood", "Cloverdale", "South Surrey", "Panorama Ridge", "Grandview Heights", "Clayton Heights"],
 localNote:
 "Many Surrey homes from the 1970s–80s need fresh interior coats, patched drywall and exterior prep before the next wet season — some of our most common Surrey jobs.",
 faqs: [
 ["Are you actually based in Surrey?", "Yes — Magical Aura Pro Painters Ltd is a Surrey, BC painting company, not a call centre routing jobs from out of town."],
 ["How do I reach you in Surrey?", "Use the contact form. Number coming soon."],
 ],
 nearby: ["langley", "white-rock", "delta", "new-westminster"],
 },
 {
 slug: "vancouver",
 city: "Vancouver",
 metaTitle:
 "Painter Vancouver BC | Interior & Exterior Painting | Magical Aura Pro Painters Ltd",
 metaDesc:
 "Painter serving Vancouver, BC. Interior painting, cabinets, popcorn ceilings, drywall repair and commercial work. Request a Free Quote.",
 heroSub:
 "From Kitsilano character homes to East Van and downtown suites, Magical Aura paints Vancouver interiors, exteriors and cabinets.",
 intro: [
 "Vancouver's older neighbourhoods are full of character homes that still have popcorn ceilings, patched plaster and trim that deserves a careful coat. Magical Aura paints these homes without treating them like a gut job, and we also paint modern condos and commercial spaces.",
 "We serve the city for interior and exterior painting, cabinet painting, ceiling work, drywall repair and commercial fit-outs. Licensed, insured painting on every job.",
 ],
 neighbourhoods: ["Downtown", "West End", "Kitsilano", "Mount Pleasant", "East Vancouver", "Commercial Drive", "Dunbar", "Marpole", "Hastings-Sunrise"],
 localNote:
 "Popcorn ceilings and older plaster are common in Vancouver's pre-1950s homes. We patch, skim or paint so the finish looks even.",
 faqs: [
 ["Do you handle popcorn ceilings in Vancouver?", "Yes. Many Vancouver character homes still have popcorn. We can paint it, skim it, or quote a fuller flatten."],
 ["Do you serve downtown condos?", "Yes. We paint suites and coordinate with strata and building management as needed."],
 ],
 nearby: ["burnaby", "north-vancouver", "richmond", "new-westminster"],
 },
 {
 slug: "burnaby",
 city: "Burnaby",
 metaTitle:
 "Painter Burnaby BC | Interior & Exterior Painting | Magical Aura Pro Painters Ltd",
 metaDesc:
 "Painter in Burnaby, BC. Interior painting, cabinets, drywall repair and commercial painting. Request a Free Quote.",
 heroSub:
 "Brentwood, Metrotown, Heights or the SFU area — Magical Aura paints homes, condos and businesses across Burnaby.",
 intro: [
 "Burnaby blends established post-war homes with new towers around Brentwood and Metrotown. Magical Aura paints both: interiors and drywall repair for older houses, plus cabinet painting, condo suites and commercial spaces in the busy centres.",
 "We cover Burnaby for interior and exterior painting, cabinets, ceilings and commercial projects. Send the form for a written quote.",
 ],
 neighbourhoods: ["Brentwood", "Metrotown", "Burnaby Heights", "North Burnaby", "South Burnaby", "Edmonds", "Capitol Hill", "Lougheed", "SFU / Burnaby Mountain"],
 localNote:
 "With so much density around Brentwood and Metrotown, condo suite painting and strata common areas are among our most common Burnaby projects.",
 faqs: [
 ["Can you paint a Burnaby condo or townhouse?", "Yes — subject to strata rules. We protect hallways and work within building hours."],
 ["How do I get a quote in Burnaby?", "Contact form. Number coming soon."],
 ],
 nearby: ["vancouver", "new-westminster", "coquitlam", "north-vancouver"],
 },
 {
 slug: "langley",
 city: "Langley",
 metaTitle:
 "Painter Langley BC | Interior & Exterior Painting | Magical Aura Pro Painters Ltd",
 metaDesc:
 "Painter in Langley, BC. Interior painting, cabinets, decks, fences and acreage exteriors. Request a Free Quote.",
 heroSub:
 "From Willoughby's new builds to Fort Langley character homes and Aldergrove acreages, Magical Aura paints the City and Township of Langley.",
 intro: [
 "Langley spans dense new neighbourhoods like Willoughby, established Langley City streets, and rural acreages toward Aldergrove and Fort Langley. Each needs different painting — first coats and cabinets on one end, barns, shops, decks and fences on the other.",
 "We serve the City and Township for interior and exterior painting, cabinets, drywall repair, decks and commercial work.",
 ],
 neighbourhoods: ["Willoughby", "Walnut Grove", "Langley City", "Fort Langley", "Murrayville", "Brookswood", "Aldergrove", "Fernridge"],
 localNote:
 "Acreage exteriors, shop walls and fence staining are common in Langley's rural areas, while Willoughby's newer homes often want cabinets and interior colour.",
 faqs: [
 ["Do you paint shops, barns and acreages in Langley?", "Yes. Outbuildings, fences, decks and home interiors on rural properties are regular work."],
 ["Do you serve both Langley City and the Township?", "Yes — from Willoughby and Walnut Grove to Fort Langley, Murrayville and Aldergrove."],
 ],
 nearby: ["surrey", "abbotsford", "maple-ridge", "white-rock"],
 },
 {
 slug: "coquitlam",
 city: "Coquitlam",
 metaTitle:
 "Painter Coquitlam BC | Interior & Exterior Painting | Magical Aura Pro Painters Ltd",
 metaDesc:
 "Painter in Coquitlam, BC. Interior painting, cabinets and drywall repair. Request a Free Quote.",
 heroSub:
 "Burke Mountain, Town Centre or Maillardville — Magical Aura paints homes and businesses across Coquitlam.",
 intro: [
 "Coquitlam ranges from the slopes of Burke Mountain to Town Centre towers and the older homes of Maillardville. Magical Aura paints new builds and additions, interiors in established homes, and cabinets as families update kitchens.",
 "We cover Coquitlam for interior and exterior painting, cabinets, drywall repair, decks and commercial work.",
 ],
 neighbourhoods: ["Burke Mountain", "Coquitlam Town Centre", "Maillardville", "Austin Heights", "Westwood Plateau", "Eagle Ridge", "Como Lake", "River Springs"],
 localNote:
 "Burke Mountain's newer homes frequently want cabinets and interior colour, while Maillardville and Austin Heights homes often need prep, drywall repair and exterior coats.",
 faqs: [
 ["Do you serve Burke Mountain and Westwood Plateau?", "Yes — all Coquitlam neighbourhoods, including the hillside developments."],
 ["How do I request a quote?", "Contact form. Number coming soon."],
 ],
 nearby: ["port-coquitlam", "port-moody", "burnaby", "new-westminster"],
 },
 {
 slug: "port-coquitlam",
 city: "Port Coquitlam",
 metaTitle:
 "Painter Port Coquitlam BC | Interior & Exterior Painting | Magical Aura",
 metaDesc:
 "Painter in Port Coquitlam (PoCo), BC. Interior painting, cabinets and drywall repair. Request a Free Quote.",
 heroSub:
 "Magical Aura paints throughout Port Coquitlam — from downtown PoCo to Citadel Heights and the Mary Hill area.",
 intro: [
 "Port Coquitlam mixes established homes and newer developments. Many PoCo kitchens and interiors are ready for cabinet painting, colour updates and tidy drywall repair — work Magical Aura handles every week.",
 "We serve Port Coquitlam for interior and exterior painting, cabinets, decks, drywall repair and small commercial work.",
 ],
 neighbourhoods: ["Downtown PoCo", "Citadel Heights", "Mary Hill", "Lincoln Park", "Birchland Manor", "Riverwood", "Oxford Heights"],
 localNote:
 "Interior painting and cabinet painting are especially common in Port Coquitlam as established homes get a fresh finish.",
 faqs: [
 ["Do you cover all of Port Coquitlam?", "Yes — downtown PoCo, Citadel Heights, Mary Hill, Riverwood and the surrounding neighbourhoods."],
 ["Can you paint cabinets in a PoCo kitchen?", "Yes. Send photos through the form for a written quote."],
 ],
 nearby: ["coquitlam", "port-moody", "maple-ridge", "pitt-meadows"],
 },
 {
 slug: "port-moody",
 city: "Port Moody",
 metaTitle:
 "Painter Port Moody BC | Interior & Exterior Painting | Magical Aura Pro Painters Ltd",
 metaDesc:
 "Painter in Port Moody, BC. Interior painting, cabinets, drywall repair and condo painting. Request a Free Quote.",
 heroSub:
 "From Newport Village condos to Heritage Mountain homes, Magical Aura paints across the City of the Arts.",
 intro: [
 "Port Moody combines walkable condo communities around Newport Village and Suter Brook with established homes on Heritage Mountain and College Park. Magical Aura paints suites, townhomes, interiors and exteriors throughout.",
 "We cover Port Moody for interior and exterior painting, cabinets, decks, drywall repair and commercial work.",
 ],
 neighbourhoods: ["Newport Village", "Suter Brook", "Heritage Mountain", "Heritage Woods", "College Park", "Glenayre", "Pleasantside"],
 localNote:
 "Condo and townhouse painting is common in Port Moody's transit-oriented communities, alongside interior and exterior work for hillside homes.",
 faqs: [
 ["Do you paint condos and townhouses in Port Moody?", "Yes — suite interiors and renovations, coordinating with strata where required."],
 ["How do I get a quote?", "Contact form. Number coming soon."],
 ],
 nearby: ["coquitlam", "port-coquitlam", "burnaby", "north-vancouver"],
 },
 {
 slug: "new-westminster",
 city: "New Westminster",
 metaTitle:
 "Painter New Westminster BC | Interior & Exterior Painting | Magical Aura",
 metaDesc:
 "Painter in New Westminster, BC. Popcorn ceilings, interior painting, cabinets and heritage homes. Request a Free Quote.",
 heroSub:
 "New West's heritage homes need a painter who respects them. Magical Aura paints the Royal City's character houses and modern condos alike.",
 intro: [
 "As one of BC's oldest cities, New Westminster is full of heritage homes — many still carrying popcorn ceilings, old plaster and trim that needs a careful coat. Magical Aura paints these houses properly, plus Quayside condos and Uptown commercial spaces.",
 "We serve New Westminster for interior and exterior painting, popcorn and ceiling work, cabinets and commercial painting.",
 ],
 neighbourhoods: ["Uptown", "Downtown / Quayside", "Sapperton", "Queens Park", "West End", "Connaught Heights", "Glenbrooke North", "Brow of the Hill"],
 localNote:
 "Queens Park and other heritage areas are full of pre-war homes where popcorn ceilings, plaster repair and interior painting need a careful hand — a Magical Aura specialty.",
 faqs: [
 ["Do you work on heritage homes in Queens Park?", "Yes. We paint and repair New West heritage interiors carefully, protecting original trim where we can."],
 ["Can you paint popcorn ceilings in New Westminster?", "Yes. Paint, skim or flatten — we will recommend from photos."],
 ],
 nearby: ["burnaby", "coquitlam", "surrey", "vancouver"],
 },
 {
 slug: "white-rock",
 city: "White Rock",
 metaTitle:
 "Painter White Rock BC | Interior & Exterior Painting | Magical Aura Pro Painters Ltd",
 metaDesc:
 "Painter in White Rock and South Surrey, BC. Interior painting, cabinets, decks and coastal exteriors. Request a Free Quote.",
 heroSub:
 "By the beach or up the hill, Magical Aura paints White Rock and the Semiahmoo Peninsula with weather-ready exterior work.",
 intro: [
 "White Rock's seaside setting is beautiful but hard on exterior paint — salt air and rain wear siding, trim and decks faster than inland. Magical Aura preps properly and uses finishes suited to coastal homes.",
 "We serve White Rock and the Semiahmoo Peninsula for interior and exterior painting, cabinets, decks and fences, and drywall repair.",
 ],
 neighbourhoods: ["White Rock Beach / Waterfront", "Semiahmoo", "Ocean Park", "Crescent Beach", "Five Corners", "Hillside"],
 localNote:
 "Coastal weather means White Rock homes often need exterior prep, deck staining and trim coats sooner than inland properties.",
 faqs: [
 ["Does salt air really affect exterior paint?", "Yes — coastal weather wears outdoor finishes faster. We prep thoroughly and choose products that belong outside."],
 ["Do you cover Ocean Park and Crescent Beach?", "Yes — White Rock, Ocean Park, Crescent Beach and the Semiahmoo Peninsula."],
 ],
 nearby: ["surrey", "delta", "langley", "tsawwassen"],
 },
 {
 slug: "delta",
 city: "Delta",
 metaTitle:
 "Painter Delta BC | Interior & Exterior Painting | Magical Aura Pro Painters Ltd",
 metaDesc:
 "Painter in Delta, BC — Ladner, Tsawwassen and North Delta. Interior painting, cabinets, decks and drywall repair. Request a Free Quote.",
 heroSub:
 "North Delta, Ladner or Tsawwassen — Magical Aura paints all three Delta communities, for homes, farms and businesses.",
 intro: [
 "Delta's three communities each have their own character — suburban North Delta, riverside Ladner and seaside Tsawwassen. Magical Aura paints interiors in established North Delta homes, farm and acreage exteriors around Ladner, and coastal-grade work in Tsawwassen.",
 "We cover Delta for interior and exterior painting, cabinets, decks, fences, drywall repair and commercial work.",
 ],
 neighbourhoods: ["North Delta", "Ladner", "Tsawwassen", "Sunshine Hills", "Tilbury", "Annieville", "Boundary Bay"],
 localNote:
 "Acreage exteriors around Ladner, coastal-grade work in Tsawwassen and interior painting in North Delta make up much of our Delta work.",
 faqs: [
 ["Do you paint farms and acreages in Ladner?", "Yes. Outbuildings, fences, decks and home interiors around Ladner and rural Delta."],
 ["Do you serve all three Delta communities?", "Yes — North Delta, Ladner and Tsawwassen."],
 ],
 nearby: ["surrey", "tsawwassen", "richmond", "white-rock"],
 },
 {
 slug: "richmond",
 city: "Richmond",
 metaTitle:
 "Painter Richmond BC | Interior & Exterior Painting | Magical Aura Pro Painters Ltd",
 metaDesc:
 "Painter in Richmond, BC. Interior painting, cabinets, drywall repair and commercial painting. Request a Free Quote.",
 heroSub:
 "From Steveston's character homes to Richmond's condos and commercial corridors, Magical Aura paints across the island city.",
 intro: [
 "Richmond mixes historic Steveston, dense residential and condo neighbourhoods, and commercial corridors. Magical Aura paints home interiors, cabinets, condo suites, and commercial fit-outs.",
 "We cover Richmond for interior and exterior painting, cabinets, drywall repair and commercial painting.",
 ],
 neighbourhoods: ["Steveston", "Brighouse / City Centre", "Broadmoor", "Seafair", "Hamilton", "Thompson", "Terra Nova", "Ironwood"],
 localNote:
 "Richmond's mix of condos and commercial corridors means plenty of suite painting, strata common areas and commercial fit-out work alongside home interiors.",
 faqs: [
 ["Do you do commercial painting in Richmond?", "Yes. Retail, office and light-industrial interiors, plus maintenance coats."],
 ["Can you paint Richmond condos?", "Yes, subject to building rules. We coordinate with strata when needed."],
 ],
 nearby: ["vancouver", "delta", "burnaby", "new-westminster"],
 },
 {
 slug: "north-vancouver",
 city: "North Vancouver",
 metaTitle:
 "Painter North Vancouver BC | Interior & Exterior Painting | Magical Aura",
 metaDesc:
 "Painter in North Vancouver, BC. Interior painting, cabinets, decks, drywall repair and hillside homes. Request a Free Quote.",
 heroSub:
 "From Lonsdale to the Upper Levels and Deep Cove, Magical Aura paints North Vancouver homes and businesses.",
 intro: [
 "North Vancouver's mountainside homes, mature trees and wet winters are hard on exterior paint and decks. Magical Aura paints interiors, cabinets, ceilings and weather-ready exteriors on the North Shore.",
 "We cover the City and District of North Vancouver for interior and exterior painting, cabinets, drywall repair, decks and commercial work.",
 ],
 neighbourhoods: ["Lower Lonsdale", "Central Lonsdale", "Upper Lonsdale", "Lynn Valley", "Deep Cove", "Edgemont", "Capilano", "Seymour"],
 localNote:
 "Tree cover and winter weather make exterior prep, deck staining and interior colour updates common on the North Shore, alongside hillside-home interiors and cabinets.",
 faqs: [
 ["Do you stain decks in North Vancouver?", "Yes. Decks and fences see a lot of moisture on the North Shore; staining is regular work."],
 ["Do you cover Deep Cove and Lynn Valley?", "Yes — City and District, including Deep Cove, Lynn Valley, Edgemont and the Upper Levels."],
 ],
 nearby: ["vancouver", "burnaby", "port-moody", "richmond"],
 },
 {
 slug: "maple-ridge",
 city: "Maple Ridge",
 metaTitle:
 "Painter Maple Ridge BC | Interior & Exterior Painting | Magical Aura Pro Painters Ltd",
 metaDesc:
 "Painter in Maple Ridge, BC. Interior painting, cabinets, decks, fences and acreage exteriors. Request a Free Quote.",
 heroSub:
 "From Silver Valley's new homes to acreages along the Alouette, Magical Aura paints throughout Maple Ridge.",
 intro: [
 "Maple Ridge stretches from growing neighbourhoods like Silver Valley and Albion to rural acreages along the Alouette. Magical Aura paints new-home interiors and cabinets in town, and shops, fences, decks and exteriors in the rural areas.",
 "We serve Maple Ridge for interior and exterior painting, cabinets, decks, drywall repair and commercial work.",
 ],
 neighbourhoods: ["Silver Valley", "Albion", "Hammond", "Websters Corners", "Cottonwood", "Whonnock", "Yennadon", "Town Centre"],
 localNote:
 "Acreage exteriors, shop walls and fence staining are common in rural Maple Ridge, while Silver Valley and Albion's newer homes want cabinets and interior colour.",
 faqs: [
 ["Do you paint shops and acreages in Maple Ridge?", "Yes. Outbuildings, fences, decks and home interiors on rural properties."],
 ["How do I request a quote?", "Contact form. Number coming soon."],
 ],
 nearby: ["pitt-meadows", "port-coquitlam", "langley", "coquitlam"],
 },
 {
 slug: "pitt-meadows",
 city: "Pitt Meadows",
 metaTitle:
 "Painter Pitt Meadows BC | Interior & Exterior Painting | Magical Aura Pro Painters Ltd",
 metaDesc:
 "Painter in Pitt Meadows, BC. Interior painting, cabinets, farm and acreage exteriors. Request a Free Quote.",
 heroSub:
 "Magical Aura paints Pitt Meadows — from the town centre to the farms and acreages of the flats.",
 intro: [
 "Pitt Meadows pairs a compact town centre with the agricultural flats of Pitt Polder. Magical Aura paints home interiors, cabinets and drywall repair in town, and barns, fences and acreage exteriors out on the farms.",
 "We cover Pitt Meadows for interior and exterior painting, cabinets, decks, drywall repair and commercial work.",
 ],
 neighbourhoods: ["Town Centre", "Bonson", "South Bonson", "Mid Meadows", "Pitt Polder", "North Meadows"],
 localNote:
 "Farm and acreage exteriors are common out on the Pitt Meadows flats, alongside cabinets and interiors in the newer town-centre homes.",
 faqs: [
 ["Do you paint farm buildings in Pitt Meadows?", "Yes. Barns, shops, fences and home interiors on agricultural properties."],
 ["Do you also serve Maple Ridge?", "Yes — Pitt Meadows and neighbouring Maple Ridge."],
 ],
 nearby: ["maple-ridge", "port-coquitlam", "coquitlam", "langley"],
 },
 {
 slug: "abbotsford",
 city: "Abbotsford",
 metaTitle:
 "Painter Abbotsford BC | Interior & Exterior Painting | Magical Aura Pro Painters Ltd",
 metaDesc:
 "Painter serving Abbotsford, BC. Interior painting, cabinets, farm and acreage exteriors. Request a Free Quote.",
 heroSub:
 "Magical Aura paints Abbotsford — from city neighbourhoods to the farms and acreages of the Fraser Valley.",
 intro: [
 "Abbotsford mixes urban homes, new developments and farmland. Magical Aura paints residential interiors and cabinets in town, plus barns, shops, fences and acreage exteriors that rural properties need.",
 "We cover Abbotsford for interior and exterior painting, cabinets, decks, drywall repair and commercial work.",
 ],
 neighbourhoods: ["Abbotsford City Centre", "Clearbrook", "Sumas Mountain", "McKee", "Bradner", "Matsqui", "Mount Lehman", "Sandy Hill"],
 localNote:
 "Farm and acreage painting — barns, shops, fences and home exteriors — is a big part of our Abbotsford work, alongside residential interiors and cabinets.",
 faqs: [
 ["Do you paint agricultural buildings in Abbotsford?", "Yes. Barns, shops, fences and home interiors on farm properties."],
 ["How do I get a quote?", "Contact form. Number coming soon. We give a clear, written price before any work begins."],
 ],
 nearby: ["langley", "surrey", "maple-ridge", "white-rock"],
 },
 {
 slug: "tsawwassen",
 city: "Tsawwassen",
 metaTitle:
 "Painter Tsawwassen BC | Interior & Exterior Painting | Magical Aura Pro Painters Ltd",
 metaDesc:
 "Painter in Tsawwassen, BC. Interior painting, cabinets, decks and coastal-home exteriors. Request a Free Quote.",
 heroSub:
 "Magical Aura paints Tsawwassen's seaside community with exterior work built to stand up to coastal weather.",
 intro: [
 "Tsawwassen's seaside setting is tough on outdoor paint, plus a growing community around Tsawwassen Shores. Magical Aura paints weather-ready exteriors, interiors, cabinets and commercial spaces.",
 "We cover Tsawwassen for interior and exterior painting, cabinets, decks, fences, drywall repair and commercial work.",
 ],
 neighbourhoods: ["Tsawwassen Beach", "Tsawwassen Shores", "Boundary Bay", "English Bluff", "Pebble Hill", "Cliff Drive"],
 localNote:
 "Coastal weather means Tsawwassen homes often need exterior prep, deck staining and trim coats sooner, much like neighbouring White Rock.",
 faqs: [
 ["Do you use finishes suited to coastal homes?", "Yes. In Tsawwassen and other seaside areas we prep thoroughly and choose products that belong outside."],
 ["Do you serve Tsawwassen Shores?", "Yes — Tsawwassen Shores, the beach area and all of Tsawwassen."],
 ],
 nearby: ["delta", "richmond", "white-rock", "surrey"],
 },
];

/* ---------------------------------------------------------------
 NEIGHBOURHOODS — hyper-local pages: /locations/painters-<slug>.html
 parent = city slug (must exist in LOCATIONS)
--------------------------------------------------------------- */
const NEIGHBOURHOODS = [
 // ---- Surrey ----
 { slug: "newton-surrey", name: "Newton", parent: "surrey", blurb: "Newton is one of Surrey's largest communities, with a mix of 1980s homes and newer infill that often need interior painting, drywall repair and exterior prep." },
 { slug: "guildford-surrey", name: "Guildford", parent: "surrey", blurb: "From the streets around Guildford Town Centre to newer townhome complexes, we paint interiors, cabinets and common-area touch-ups." },
 { slug: "fleetwood-surrey", name: "Fleetwood", parent: "surrey", blurb: "Fleetwood's family homes and the density along Fraser Highway keep us busy with interior painting, drywall repair and cabinet painting." },
 { slug: "cloverdale-surrey", name: "Cloverdale", parent: "surrey", blurb: "Cloverdale blends heritage character homes with new Clayton-area builds, so we see both careful interior work and modern new-home painting." },
 { slug: "south-surrey", name: "South Surrey", parent: "surrey", blurb: "South Surrey's larger and waterfront-adjacent homes often want exterior coats, deck and fence staining, and cabinet painting." },
 { slug: "whalley-surrey", name: "Whalley / City Centre", parent: "surrey", blurb: "Around Surrey City Centre we paint condos, older homes and commercial spaces, from suite interiors to tenant-improvement painting." },
 { slug: "panorama-ridge-surrey", name: "Panorama Ridge", parent: "surrey", blurb: "Panorama Ridge's larger lots and custom homes frequently call for exterior painting, cabinets and deck staining." },
 { slug: "clayton-surrey", name: "Clayton Heights", parent: "surrey", blurb: "Clayton's newer homes are prime for cabinets, colour consults and first interior coats as families settle in." },
 // ---- Vancouver ----
 { slug: "kitsilano-vancouver", name: "Kitsilano", parent: "vancouver", blurb: "Kitsilano's character homes often still have popcorn ceilings and tired trim; we specialize in careful interior painting and ceiling work." },
 { slug: "east-vancouver", name: "East Vancouver", parent: "vancouver", blurb: "From Commercial Drive to Hastings-Sunrise, East Van's older housing stock keeps us busy with drywall repair, interiors and exterior prep." },
 { slug: "mount-pleasant-vancouver", name: "Mount Pleasant", parent: "vancouver", blurb: "Mount Pleasant mixes heritage homes with live-work and commercial space, so we handle both cabinet painting and small commercial interiors." },
 { slug: "dunbar-vancouver", name: "Dunbar", parent: "vancouver", blurb: "Dunbar's established homes often need full interiors, exterior coats and modern colour while respecting original trim." },
 { slug: "downtown-vancouver", name: "Downtown Vancouver", parent: "vancouver", blurb: "In downtown towers and the West End we paint condo suites and renovations, coordinating with strata and building management." },
 { slug: "marpole-vancouver", name: "Marpole", parent: "vancouver", blurb: "Marpole's mix of older houses and new development means anything from popcorn ceilings to fresh cabinet painting." },
 // ---- Burnaby ----
 { slug: "metrotown-burnaby", name: "Metrotown", parent: "burnaby", blurb: "Around Metrotown's towers we handle condo painting, cabinets and strata common-area work alongside nearby home interiors." },
 { slug: "brentwood-burnaby", name: "Brentwood", parent: "burnaby", blurb: "Brentwood's high-rise growth means lots of condo suite work, cabinets and strata painting, plus interiors for surrounding homes." },
 { slug: "burnaby-heights", name: "Burnaby Heights", parent: "burnaby", blurb: "The Heights' established homes frequently need interior painting, drywall repair and fresh trim." },
 { slug: "north-burnaby", name: "North Burnaby", parent: "burnaby", blurb: "North Burnaby near SFU and Capitol Hill keeps us busy with interior painting, cabinets and rental-suite turnovers." },
 { slug: "south-burnaby", name: "South Burnaby", parent: "burnaby", blurb: "From Edmonds to Big Bend, South Burnaby's homes and small commercial spaces need interiors, exteriors and cabinets." },
 { slug: "edmonds-burnaby", name: "Edmonds", parent: "burnaby", blurb: "The Edmonds area's growing density brings condo, townhome and small-business painting work." },
 // ---- Langley ----
 { slug: "willoughby-langley", name: "Willoughby", parent: "langley", blurb: "Willoughby's wave of new homes is ideal for cabinets, colour consults and interior first coats as the area grows." },
 { slug: "walnut-grove-langley", name: "Walnut Grove", parent: "langley", blurb: "Walnut Grove's family homes commonly need interior painting, cabinet painting and deck or fence staining." },
 { slug: "fort-langley", name: "Fort Langley", parent: "langley", blurb: "Historic Fort Langley's character homes call for careful drywall repair and interior painting that preserve their charm." },
 { slug: "brookswood-langley", name: "Brookswood", parent: "langley", blurb: "Brookswood's larger treed lots often need exterior coats, deck staining and outbuilding paint." },
 { slug: "aldergrove-langley", name: "Aldergrove", parent: "langley", blurb: "Aldergrove's acreages and rural properties need shop, barn and fence painting along with home exteriors." },
 { slug: "murrayville-langley", name: "Murrayville", parent: "langley", blurb: "Murrayville's established neighbourhoods frequently need interior painting, drywall repair and cabinet painting." },
 // ---- Coquitlam ----
 { slug: "burke-mountain-coquitlam", name: "Burke Mountain", parent: "coquitlam", blurb: "Burke Mountain's newer homes are prime for cabinets, colour consults and extra interior rooms as families settle in." },
 { slug: "maillardville-coquitlam", name: "Maillardville", parent: "coquitlam", blurb: "Historic Maillardville's older homes often need drywall repair, interior painting and exterior prep." },
 { slug: "westwood-plateau-coquitlam", name: "Westwood Plateau", parent: "coquitlam", blurb: "Westwood Plateau's hillside homes commonly want exterior coats, deck staining and cabinet painting." },
 { slug: "coquitlam-town-centre", name: "Coquitlam Town Centre", parent: "coquitlam", blurb: "Around Town Centre's towers we handle condo and strata painting, cabinets and suite interiors." },
 { slug: "austin-heights-coquitlam", name: "Austin Heights", parent: "coquitlam", blurb: "Austin Heights' established homes regularly need interior painting, drywall repair and fresh trim." },
 // ---- Port Coquitlam ----
 { slug: "downtown-port-coquitlam", name: "Downtown PoCo", parent: "port-coquitlam", blurb: "Around downtown PoCo we handle older-home drywall repair, interior painting and small-business painting." },
 { slug: "citadel-heights-port-coquitlam", name: "Citadel Heights", parent: "port-coquitlam", blurb: "Citadel Heights' hillside family homes often want cabinets, exterior coats and deck staining." },
 { slug: "mary-hill-port-coquitlam", name: "Mary Hill", parent: "port-coquitlam", blurb: "Mary Hill's established properties commonly need interior painting, drywall repair and fresh colour." },
 { slug: "riverwood-port-coquitlam", name: "Riverwood", parent: "port-coquitlam", blurb: "Riverwood's newer homes are great candidates for cabinet painting, colour consults and interior coats." },
 { slug: "oxford-heights-port-coquitlam", name: "Oxford Heights", parent: "port-coquitlam", blurb: "Oxford Heights homes frequently need interior painting, drywall repair and cabinets." },
 // ---- Port Moody ----
 { slug: "newport-village-port-moody", name: "Newport Village", parent: "port-moody", blurb: "In walkable Newport Village we handle condo and townhome painting, cabinets and suite interiors." },
 { slug: "suter-brook-port-moody", name: "Suter Brook", parent: "port-moody", blurb: "Suter Brook's transit-oriented condos keep us busy with suite interiors, cabinets and strata painting." },
 { slug: "heritage-mountain-port-moody", name: "Heritage Mountain", parent: "port-moody", blurb: "Heritage Mountain's hillside homes often want exterior coats, cabinet painting and deck staining." },
 { slug: "heritage-woods-port-moody", name: "Heritage Woods", parent: "port-moody", blurb: "Heritage Woods' newer homes are prime for cabinets, colour consults and interior coats." },
 { slug: "college-park-port-moody", name: "College Park", parent: "port-moody", blurb: "College Park's established homes regularly need interior painting, drywall repair and fresh trim." },
 // ---- New Westminster ----
 { slug: "queens-park-new-westminster", name: "Queens Park", parent: "new-westminster", blurb: "Queens Park is full of heritage homes where careful popcorn-ceiling work and interior painting are essential." },
 { slug: "sapperton-new-westminster", name: "Sapperton", parent: "new-westminster", blurb: "Sapperton's character homes and clinics need drywall repair, interior painting and small commercial painting." },
 { slug: "uptown-new-westminster", name: "Uptown", parent: "new-westminster", blurb: "Uptown New West blends older homes and condos, so we handle drywall repair, suite work and interiors." },
 { slug: "quayside-new-westminster", name: "Quayside / Downtown", parent: "new-westminster", blurb: "Along the Quay we handle condo suite interiors, cabinets and strata painting." },
 { slug: "west-end-new-westminster", name: "West End", parent: "new-westminster", blurb: "The West End's older homes frequently need full interiors, popcorn ceilings and exterior prep." },
 // ---- White Rock ----
 { slug: "white-rock-beach", name: "White Rock Beach", parent: "white-rock", blurb: "Waterfront homes near the beach need weather-ready exterior prep, deck staining and trim coats." },
 { slug: "semiahmoo-white-rock", name: "Semiahmoo", parent: "white-rock", blurb: "Semiahmoo's homes often want cabinet painting, exterior coats and deck staining." },
 { slug: "ocean-park-white-rock", name: "Ocean Park", parent: "white-rock", blurb: "Ocean Park's established and treed properties commonly need drywall repair, exteriors and deck and fence staining." },
 { slug: "crescent-beach-white-rock", name: "Crescent Beach", parent: "white-rock", blurb: "Crescent Beach's coastal cottages and homes need weather-ready exteriors, interiors and deck staining." },
 // ---- Delta ----
 { slug: "north-delta", name: "North Delta", parent: "delta", blurb: "North Delta's suburban homes regularly need interior painting, cabinets and drywall repair." },
 { slug: "ladner-delta", name: "Ladner", parent: "delta", blurb: "Riverside Ladner needs everything from character-home interiors to farm, acreage and outbuilding paint." },
 { slug: "sunshine-hills-delta", name: "Sunshine Hills", parent: "delta", blurb: "Sunshine Hills' family homes commonly want exterior coats, cabinet painting and deck staining." },
 { slug: "annieville-delta", name: "Annieville", parent: "delta", blurb: "Annieville's established homes frequently need drywall repair, interior painting and exterior prep." },
 { slug: "boundary-bay-delta", name: "Boundary Bay", parent: "delta", blurb: "Boundary Bay's seaside properties need weather-ready exterior prep and deck staining." },
 // ---- Richmond ----
 { slug: "steveston-richmond", name: "Steveston", parent: "richmond", blurb: "Historic Steveston's character homes call for careful drywall repair and interior painting that preserve their charm." },
 { slug: "brighouse-richmond", name: "Brighouse / City Centre", parent: "richmond", blurb: "Around City Centre we handle condo painting, cabinets and strata common-area work." },
 { slug: "broadmoor-richmond", name: "Broadmoor", parent: "richmond", blurb: "Broadmoor's family homes regularly need interior painting, cabinets and colour consults." },
 { slug: "seafair-richmond", name: "Seafair", parent: "richmond", blurb: "Seafair's established homes often want exterior coats, drywall repair and fresh interiors." },
 { slug: "terra-nova-richmond", name: "Terra Nova", parent: "richmond", blurb: "Terra Nova's newer homes are prime for cabinet painting, colour consults and interior coats." },
 // ---- North Vancouver ----
 { slug: "lonsdale-north-vancouver", name: "Lonsdale", parent: "north-vancouver", blurb: "From Lower to Central Lonsdale we handle condo suites, older homes and small commercial painting." },
 { slug: "lynn-valley-north-vancouver", name: "Lynn Valley", parent: "north-vancouver", blurb: "Tree-shaded Lynn Valley sees a lot of exterior wear, so deck staining and exterior coats are popular here." },
 { slug: "deep-cove-north-vancouver", name: "Deep Cove", parent: "north-vancouver", blurb: "Deep Cove's waterfront and hillside homes often want exterior coats, deck staining and cabinet painting." },
 { slug: "edgemont-north-vancouver", name: "Edgemont", parent: "north-vancouver", blurb: "Edgemont's established homes regularly need interior painting, drywall repair and fresh trim." },
 { slug: "seymour-north-vancouver", name: "Seymour", parent: "north-vancouver", blurb: "Seymour-area homes commonly want cabinets, exterior coats and deck staining." },
 // ---- Maple Ridge ----
 { slug: "silver-valley-maple-ridge", name: "Silver Valley", parent: "maple-ridge", blurb: "Silver Valley's new homes are ideal for cabinets, colour consults and interior first coats." },
 { slug: "albion-maple-ridge", name: "Albion", parent: "maple-ridge", blurb: "Fast-growing Albion keeps us busy with new-home painting, cabinets and interiors." },
 { slug: "hammond-maple-ridge", name: "Hammond", parent: "maple-ridge", blurb: "Historic Hammond's older homes often need drywall repair, interior painting and exterior prep." },
 { slug: "cottonwood-maple-ridge", name: "Cottonwood", parent: "maple-ridge", blurb: "Cottonwood's family homes regularly need exterior coats, cabinets and deck staining." },
 { slug: "websters-corners-maple-ridge", name: "Websters Corners", parent: "maple-ridge", blurb: "Rural Websters Corners needs shop, fence and acreage exteriors along with home interiors." },
 // ---- Pitt Meadows ----
 { slug: "bonson-pitt-meadows", name: "Bonson", parent: "pitt-meadows", blurb: "Bonson's newer town-centre homes are great for cabinets, colour consults and interior coats." },
 { slug: "mid-meadows-pitt-meadows", name: "Mid Meadows", parent: "pitt-meadows", blurb: "Mid Meadows family homes commonly need interior painting, cabinet painting and drywall repair." },
 { slug: "north-meadows-pitt-meadows", name: "North Meadows", parent: "pitt-meadows", blurb: "Out toward North Meadows we handle acreage exteriors, fences and home interiors." },
 { slug: "pitt-polder-pitt-meadows", name: "Pitt Polder", parent: "pitt-meadows", blurb: "On the Pitt Polder flats, farm, barn and fence painting and home exteriors are common work." },
 // ---- Abbotsford ----
 { slug: "clearbrook-abbotsford", name: "Clearbrook", parent: "abbotsford", blurb: "Clearbrook's homes and businesses need drywall repair, interior painting and small commercial painting." },
 { slug: "abbotsford-city-centre", name: "Abbotsford City Centre", parent: "abbotsford", blurb: "Around City Centre we handle home interiors, cabinets and commercial painting." },
 { slug: "matsqui-abbotsford", name: "Matsqui", parent: "abbotsford", blurb: "Matsqui's farms and acreages need barn, shop and fence painting along with home exteriors." },
 { slug: "bradner-abbotsford", name: "Bradner", parent: "abbotsford", blurb: "Rural Bradner relies on us for acreage exteriors, fences and outbuilding paint." },
 { slug: "mount-lehman-abbotsford", name: "Mount Lehman", parent: "abbotsford", blurb: "Mount Lehman's rural properties often need shop paint, deck staining and home exteriors." },
 // ---- Tsawwassen ----
 { slug: "tsawwassen-beach", name: "Tsawwassen Beach", parent: "tsawwassen", blurb: "Beachfront Tsawwassen homes need weather-ready exterior prep, deck staining and trim coats." },
 { slug: "tsawwassen-shores", name: "Tsawwassen Shores", parent: "tsawwassen", blurb: "The growing Tsawwassen Shores community is prime for cabinet painting, colour consults and new-home interiors." },
 { slug: "english-bluff-tsawwassen", name: "English Bluff", parent: "tsawwassen", blurb: "English Bluff's established homes often want exterior coats, deck staining and interior updates." },
 { slug: "pebble-hill-tsawwassen", name: "Pebble Hill", parent: "tsawwassen", blurb: "Pebble Hill homes regularly need interior painting, cabinets and weather-ready exterior prep." },
];

/* ---------------------------------------------------------------
 BLOG — cost / how-to posts: /blog/<slug>.html
 These target informational queries that AI engines cite.
--------------------------------------------------------------- */
const BLOG = [
 {
 slug: "interior-painting-quote-bc",
 title: "How Much Does Interior Painting Cost in BC? (2026 Guide)",
 metaTitle: "Interior Painting Cost in BC (2026) | Magical Aura Pro Painters Ltd",
 metaDesc: "What interior painting costs in the Lower Mainland in 2026, what drives the quote, and how to tell if a room is ready. Honest guidance from Magical Aura Pro Painters Ltd.",
 date: "2026-05-30",
 read: "6 min read",
 summary: "A plain-English breakdown of what interior painting costs in the Lower Mainland, the factors that move the quote, and how to tell if you actually need a full coat.",
 body: [
 { h: null, p: ["If rooms look tired, scuffed or mismatched, interior painting is one of the most common projects in the Lower Mainland. Here's how quoting actually works in 2026, without a sales pitch."] },
 { h: "What affects the price of interior painting", p: ["Several factors determine where your quote lands: how many rooms, ceiling height, how much patching and priming the walls need, whether ceilings and trim are included, the colour change (dark to light takes more coats), and how much furniture we need to work around."] },
 { h: "Room painting vs. whole-home", p: ["A single room is usually a short visit once prep is done. A whole home is scheduled room by room so you can still live there. We quote the scope you actually want — not a package you did not ask for."] },
 { h: "Signs a room is ready for paint", p: ["Scuffed walls, faded colour, patched drywall that still flashes, or a colour you no longer like are the usual triggers. A few photos through the form tell us enough to send a written quote."] },
 { h: "Do you need a written quote?", p: ["Yes. Magical Aura quotes in writing before work starts. Beware of anyone who will not put the scope on paper; that is how surprise bills happen."] },
 ],
 faqs: [
 ["Is a whole-home interior worth doing at once?", "If most rooms are due, yes — colour flows better and you only prep once. If only a couple of rooms are tired, we can start there."],
 ["How long does interior painting take?", "A typical room can be done in a day once prep is finished. Whole-home work is scheduled over several days."],
 ],
 related: ["interior-painting", "colour-consult"],
 },
 {
 slug: "exterior-painting-guide-bc",
 title: "Exterior Painting Guide for Lower Mainland Homes (2026)",
 metaTitle: "Exterior Painting Guide BC (2026) | Magical Aura Pro Painters Ltd",
 metaDesc: "When to repaint siding, what prep actually matters in BC rain, and how quotes work. Local 2026 guidance from Magical Aura.",
 date: "2026-05-30",
 read: "6 min read",
 summary: "What exterior painting involves in the Lower Mainland, the prep that makes coats last, and how to tell if your siding is ready.",
 body: [
 { h: null, p: ["Lower Mainland rain, moss and sun wear exterior paint faster than many homeowners expect. Here's what a proper exterior job involves in 2026."] },
 { h: "What drives the quote", p: ["Storey count and access, how much scraping and priming the siding needs, whether fascia, soffits and trim are included, and the weather window all move the number. We quote after seeing photos or the house."] },
 { h: "Prep is the job", p: ["Wash, scrape, sand, prime bare wood and caulk — then paint. Skipping prep is how coats peel before the next winter."] },
 { h: "When to paint outside", p: ["Late spring through early fall is typical. We watch the forecast and will not coat in rain."] },
 { h: "Decks and fences", p: ["Decks and fences are usually stained, not painted the same way as siding. We quote them as their own scope so the product matches the wood."] },
 ],
 faqs: [
 ["Paint or stain for siding?", "Most painted siding stays paint. Bare or previously stained wood may want stain. We will recommend from photos."],
 ["Do I need to be home the whole time?", "Not every hour. We agree access, protect landscaping, and keep the site tidy."],
 ],
 related: ["exterior-painting", "deck-fence-staining"],
 },
 {
 slug: "when-to-repaint-your-home",
 title: "7 Signs You Need to Repaint (Don't Wait)",
 metaTitle: "7 Signs You Need to Repaint | Magical Aura Pro Painters Ltd",
 metaDesc: "Peeling paint, scuffed walls, faded exteriors — seven signs it is time to call a painter, and what to do next.",
 date: "2026-05-30",
 read: "5 min read",
 summary: "Some paint problems can wait. These seven are worth scheduling — here's how to tell the difference and what to do next.",
 body: [
 { h: null, p: ["Most painting is planned. A few problems get worse if you wait. Here are the signs we tell homeowners not to ignore."] },
 { h: "1. Peeling or flaking paint", p: ["Once paint peels, moisture gets behind it. Scrape and prime sooner rather than later, especially outside."] },
 { h: "2. Scuffed, marked interior walls", p: ["Hallways, kids' rooms and kitchens take traffic. A fresh coat is often cheaper than living with walls that look worn."] },
 { h: "3. Faded exterior colour", p: ["Sun and rain bleach south and west walls first. Uneven fade is a sign the film is tired."] },
 { h: "4. Patches that still flash", p: ["Drywall repairs that show through the old colour need primer and a proper coat, not another dab of leftover paint."] },
 { h: "5. Tired cabinets", p: ["Kitchen and bathroom cabinets can look new with a proper prime and finish — without a full replacement."] },
 { h: "6. Popcorn or stained ceilings", p: ["Water stains (once dry) and old popcorn make rooms feel dated. Paint, skim or flatten depending on the ceiling."] },
 { h: "7. You cannot get the rooms clean", p: ["If washing does not bring the colour back, the film is done. Time for paint, not more cleaner."] },
 { h: "What to do next", p: ["Send photos through the contact form. A phone number is coming soon. Magical Aura replies with a written quote for Surrey and the Lower Mainland."] },
 ],
 faqs: [
 ["Should I paint over peeling paint?", "Not without scraping and priming. Paint on a failing film peels again."],
 ["How do I get a quote?", "Use the contact form. Number coming soon."],
 ],
 related: ["interior-painting", "exterior-painting"],
 },
 {
 slug: "popcorn-ceiling-guide",
 title: "Popcorn Ceilings: What Lower Mainland Homeowners Need to Know",
 metaTitle: "Popcorn Ceilings Guide (BC Homes) | Magical Aura Pro Painters Ltd",
 metaDesc: "Paint, skim or flatten? A clear guide to popcorn ceilings for Vancouver, New West and Lower Mainland homeowners, from Magical Aura Pro Painters Ltd.",
 date: "2026-05-30",
 read: "6 min read",
 summary: "If you own an older home in Vancouver, New Westminster or anywhere with pre-1950s housing, here's what popcorn ceilings mean for look, dust and your options.",
 body: [
 { h: null, p: ["Popcorn texture was common in older Lower Mainland homes and is still found across Vancouver, New Westminster and similar neighbourhoods. Here's an honest look at your options."] },
 { h: "Can you just paint popcorn?", p: ["If the texture is sound, a careful coat can freshen it. Loose areas need repair first. Painting does not make popcorn look like a flat ceiling."] },
 { h: "Skim or flatten", p: ["Skimming hides the texture for a smoother look. It is more work than a coat, and we will quote it honestly rather than promising a glass-flat ceiling on every house."] },
 { h: "Dust and protection", p: ["Ceiling work is messy if you skip protection. We cover floors and fixtures before we start."] },
 { h: "Paint the walls at the same time?", p: ["Often yes. Cut-ins look better when ceiling and walls are finished together."] },
 ],
 faqs: [
 ["Do I have to remove all popcorn at once?", "No. We can paint, skim one room, or phase rooms. Photos help us recommend."],
 ["Will painting popcorn make it fall off?", "Not if it is well stuck. Loose texture has to be repaired first."],
 ],
 related: ["ceiling-painting", "drywall-repair"],
 },
 {
 slug: "painting-quote-lower-mainland",
 title: "How Much Does a Painter Cost in the Lower Mainland? (2026)",
 metaTitle: "How Much Does a Painter Cost in BC's Lower Mainland? (2026) | Magical Aura",
 metaDesc: "How painters quote work in Surrey, Vancouver and the Lower Mainland in 2026 — rooms vs whole-home, and why a written quote protects you. From Magical Aura.",
 date: "2026-05-30",
 read: "5 min read",
 summary: "A transparent look at how painters quote work in the Lower Mainland, the difference between a room and a full project, and how to avoid surprise bills.",
 body: [
 { h: null, p: ["How much will this cost? is the first question every homeowner asks. Here's an honest overview of how painting quotes work in the Lower Mainland in 2026."] },
 { h: "Rooms vs. project quotes", p: ["A single room is quoted as a defined scope — walls, maybe ceiling and trim. Larger projects (whole-home interiors, exteriors, cabinets) are written after we see photos or the house, so you know the full cost before work begins."] },
 { h: "Why we quote before we start", p: ["Open-ended hourly billing is where surprise bills come from. Magical Aura gives you a clear, written quote before any work begins so the price you approve is the price you pay."] },
 { h: "What affects your quote", p: ["Scope, how much prep the surface needs, colour change, access, and whether cabinets, decks or exteriors are included. We explain what is driving the number."] },
 { h: "The cheapest quote isn't always cheapest", p: ["Skipped prep fails. Always confirm your painter is a real local company and will put the scope in writing. We do, on every job."] },
 ],
 faqs: [
 ["Do you charge more for evenings and weekends?", "Commercial after-hours work is planned into the quote. You always get a written price before work begins."],
 ["Are quotes free?", "Yes — we provide free written quotes. Use the contact form. Number coming soon."],
 ],
 related: ["interior-painting", "exterior-painting"],
 },
];

/* Existing hand-written posts, listed in the blog hub (files not regenerated). */
const EXISTING_BLOG = [
 { slug: "when-to-repaint-interior", title: "5 Warning Signs Your Interior Needs a Fresh Coat", summary: "Scuffed walls, flashing patches and tired colour are signs a room is ready for paint." },
 { slug: "paint-prep-no-mess-guide", title: "How We Paint Without Leaving a Mess", summary: "A calm, step-by-step look at masking, dust control and tidy handover." },
 { slug: "cabinet-painting-value", title: "Does Cabinet Painting Add Value?", summary: "How a proper cabinet finish can refresh a kitchen without a full replacement." },
];

module.exports = { SITE, SERVICES, LOCATIONS, COMBO_SERVICE_SLUGS, NEIGHBOURHOODS, BLOG, EXISTING_BLOG };
