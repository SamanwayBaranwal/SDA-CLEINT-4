export const images = [
  {
    url: './School Building.jpeg',
    caption: 'School Building',
    category: 'Campus'
  }
];

export const gkpMahotsavImages = [
  {
    url: '/GKPMahotsav/Image1.jpeg',
    caption: 'GKP Mahotsav Cultural Program',
    category: 'GKP Mahotsav'
  },
  {
    url: '/GKPMahotsav/Image2.jpeg',
    caption: 'GKP Mahotsav Celebration',
    category: 'GKP Mahotsav'
  }
];

export const christmasImages = [
  {
    url: '/Christmas/Christmas1.jpeg',
    caption: 'Christmas Celebration',
    category: 'Christmas'
  },
  {
    url: '/Christmas/Christmas2.jpeg',
    caption: 'Christmas Event',
    category: 'Christmas'
  }
];

export const sportsImages = [
  {
    url: '/Sports/Sports1.jpeg',
    caption: 'Sports Day Celebration',
    category: 'Sports'
  },
  // ... other sports images
];

export const diwaliImages = [
  {
    url: '/Diwali/Diwali1.jpeg',
    caption: 'Diwali Celebration',
    category: 'Diwali'
  }
];

export const yogaImages = [
  {
    url: '/Yoga/Yoga1.jpeg',
    caption: 'Yoga Session',
    category: 'Yoga'
  }
];

export const celebrationsImages = Array.from({ length: 29 }, (_, i) => ({
  url: `/Celebrations and Programs/image${i + 1}.jpg`,
  caption: `School Celebration ${i + 1}`,
  category: 'Celebrations'
})); 