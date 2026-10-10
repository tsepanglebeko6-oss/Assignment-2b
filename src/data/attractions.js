const attractions = [
  {
    id: 1,
    name: 'Maletsunyane Falls',
    image:
      'https://africanlanders.com/wp-content/uploads/2023/05/1676141200882.jpg',
    location: 'Semonkong, Maseru District',
    category: 'Nature',
    shortDescription:
      'One of Africa’s highest single-drop waterfalls, plunging about 192 metres into a dramatic gorge.',
    fullDescription:
      'Maletsunyane Falls is the centrepiece of Semonkong, “the Place of Smoke”. Visitors come for the roar of the water, pony treks into the gorge, and the famous abseil beside the cascade. Sunrise and late afternoon light turn the spray into a lasting memory of the mountain kingdom.',
    activities: ['Abseiling', 'Pony trekking', 'Photography', 'Gorge hiking'],
    estimatedCost: 'LSL 250 – 800',
    bestTime: 'October to April',
    duration: 'Half day to 2 days',
  },
  {
    id: 2,
    name: 'Sani Pass',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80',
    location: 'Mokhotlong District (Lesotho–South Africa border)',
    category: 'Adventure',
    shortDescription:
      'A legendary mountain pass linking KwaZulu-Natal with the highlands, famous for switchbacks and alpine views.',
    fullDescription:
      'Sani Pass is a 4x4 adventure that climbs from the foothills into Lesotho’s roof of southern Africa. At the summit, the Sani Mountain Lodge offers one of the highest pubs in Africa, while the surrounding ridges reward hikers with endless views across the Drakensberg.',
    activities: ['4x4 touring', 'Hiking', 'Border sightseeing', 'Pub visit'],
    estimatedCost: 'LSL 400 – 1,200',
    bestTime: 'March to November',
    duration: 'Full day',
  },
  {
    id: 3,
    name: 'Katse Dam',
    image:
      'https://i.pinimg.com/originals/2d/64/25/2d64252b858af1fcc91b4bef58549792.jpg',
    location: 'Katse, Thaba-Tseka District',
    category: 'Heritage',
    shortDescription:
      'An engineering landmark of the Lesotho Highlands Water Project, set in a deep highland valley.',
    fullDescription:
      'Katse Dam is a double-curvature arch dam that supplies water to South Africa and hydropower to Lesotho. Guided tours explain how the highlands were reshaped, while the reservoir offers boat trips and quiet viewpoints. The visitor centre and nearby botanical garden round out a full highland day.',
    activities: ['Dam tours', 'Boat trips', 'Botanical garden', 'Scenic viewpoints'],
    estimatedCost: 'LSL 80 – 350',
    bestTime: 'Year-round',
    duration: '2 – 4 hours',
  },
  {
    id: 4,
    name: 'Thaba-Bosiu',
    image:
      'https://tse3.mm.bing.net/th/id/OIP.PSD9wwFIpc-cTjIRzKRtDwHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    location: 'Maseru District',
    category: 'Culture',
    shortDescription:
      'The mountain fortress of King Moshoeshoe I and a founding place of the Basotho nation.',
    fullDescription:
      'Thaba-Bosiu, “Mountain at Night”, was Moshoeshoe I’s stronghold in the 19th century. Walking the plateau, visitors hear stories of nation-building, visit royal graves, and look out toward Qiloane, the hill that inspired the mokorotlo hat. It is essential cultural ground for anyone travelling in Lesotho.',
    activities: ['Guided heritage walks', 'Cultural storytelling', 'Viewpoints', 'Museum visit'],
    estimatedCost: 'LSL 50 – 200',
    bestTime: 'Year-round',
    duration: '2 – 3 hours',
  },
  {
    id: 5,
    name: 'AfriSki',
    image:
      'https://th.bing.com/th/id/R.76e2ef2efa56d923f8f72fe3cb7ff231?rik=V3kfouk5VRm3VQ&pid=ImgRaw&r=0',
    location: 'Mahlasela, Butha-Buthe District',
    category: 'Adventure',
    shortDescription:
      'Southern Africa’s best-known ski resort, with snow in winter and mountain biking in the warmer months.',
    fullDescription:
      'AfriSki sits high in the Maloti Mountains and turns Lesotho into a snow destination from about June to August. Beginners and experienced skiers share the slope, while summer visitors switch to hiking and mountain biking. Lodges around Mahlasela make it an easy highland escape from Maseru.',
    activities: ['Skiing', 'Snowboarding', 'Mountain biking', 'Alpine walks'],
    estimatedCost: 'LSL 600 – 1,800',
    bestTime: 'June to August (snow), September to May (trails)',
    duration: '1 – 3 days',
  },
  {
    id: 6,
    name: 'Sehlabathebe National Park',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80',
    location: 'Qacha’s Nek District',
    category: 'Nature',
    shortDescription:
      'A UNESCO-listed wilderness of sandstone arches, rock pools and quiet highland grassland.',
    fullDescription:
      'Sehlabathebe is Lesotho’s oldest national park and part of a transboundary World Heritage landscape with the uKhahlamba Drakensberg. Travellers come for remote hiking, trout pools, San rock art and night skies almost free of light pollution. It rewards those willing to travel slowly.',
    activities: ['Wilderness hiking', 'Rock-art viewing', 'Birdwatching', 'Camping'],
    estimatedCost: 'LSL 150 – 500',
    bestTime: 'October to April',
    duration: '2 – 4 days',
  },
  {
    id: 7,
    name: 'Kome Cave Dwellings',
    image:
      'https://tse2.mm.bing.net/th/id/OIP.neUrhH5Qj2JqPP9XhrWbqgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    location: 'Ha Kome, Berea District',
    category: 'Culture',
    shortDescription:
      'Historic sandstone cave homes still associated with Basotho families and living heritage.',
    fullDescription:
      'At Ha Kome, dwellings were carved under a massive sandstone overhang more than two centuries ago. The site remains a powerful example of highland architecture and hospitality. Local guides explain daily life, craft traditions and how families used the caves for shelter and defence.',
    activities: ['Cultural tours', 'Craft shopping', 'Photography', 'Village walks'],
    estimatedCost: 'LSL 40 – 150',
    bestTime: 'Year-round',
    duration: '1 – 2 hours',
  },
  {
    id: 8,
    name: 'Ts’ehlanyane National Park',
    image:
      'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1400&q=80',
    location: 'Botha-Bothe District',
    category: 'Nature',
    shortDescription:
      'A forested mountain park of rivers, indigenous trees and well-marked trails close to Butha-Buthe.',
    fullDescription:
      'Ts’ehlanyane protects one of Lesotho’s last significant indigenous forests. Trails follow the Hlotse and Ts’ehlanyane rivers through yellowwood and berg bamboo. It is a favourite for day hikers, picnic groups and travellers combining the park with nearby Liphofung Cultural Heritage Site.',
    activities: ['Forest hiking', 'Picnics', 'Birdwatching', 'River walks'],
    estimatedCost: 'LSL 60 – 250',
    bestTime: 'September to May',
    duration: 'Half day to 2 days',
  },
  {
    id: 9,
    name: 'Liphofung Cave',
    image:
      'https://tse1.mm.bing.net/th/id/OIP.Ofs5MmS55Tl1T_m6dpqYFAHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    location: 'Butha-Buthe District',
    category: 'Heritage',
    shortDescription:
      'A sandstone shelter with San paintings and a stop on Moshoeshoe I’s historic journey.',
    fullDescription:
      'Liphofung, “place of the eland”, is a cultural heritage site combining San rock art with Basotho history. The visitor centre interprets the paintings and the cave’s later use as a stopover for Moshoeshoe I. It pairs well with AfriSki and Ts’ehlanyane on a northern Lesotho circuit.',
    activities: ['Rock-art tours', 'Museum exhibits', 'Short walks', 'Cultural talks'],
    estimatedCost: 'LSL 40 – 120',
    bestTime: 'Year-round',
    duration: '1 – 2 hours',
  },
];

export const categories = ['All', ...Array.from(new Set(attractions.map((item) => item.category)))];

export default attractions;
