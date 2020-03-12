var fakeData = [
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Lina",
      last: "Fontai"
    },
    email: "lina.fontai@example.com",
    dob: {
      date: "1951-03-23T09:25:21.760Z",
      age: 69
    },
    phone: "02-26-94-00-37",
    picture: {
      large: "https://randomuser.me/api/portraits/women/47.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/47.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/47.jpg"
    }
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Troy",
      last: "Macrae"
    },
    email: "troy.macrae@example.com",
    dob: {
      date: "1972-12-04T07:47:00.328Z",
      age: 48
    },
    phone: "015242 29809",
    picture: {
      large: "https://randomuser.me/api/portraits/men/13.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/13.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/13.jpg"
    }
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Elias",
      last: "Perez"
    },
    email: "elias.perez@example.com",
    dob: {
      date: "1984-03-09T05:33:40.053Z",
      age: 36
    },
    phone: "03-74-83-51-90",
    picture: {
      large: "https://randomuser.me/api/portraits/men/88.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/88.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/88.jpg"
    }
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Gökhan",
      last: "Baturalp"
    },
    email: "gokhan.baturalp@example.com",
    dob: {
      date: "1972-11-08T01:34:46.449Z",
      age: 48
    },
    phone: "(725)-224-1721",
    picture: {
      large: "https://randomuser.me/api/portraits/men/44.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/44.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/44.jpg"
    }
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Charles",
      last: "Robinson"
    },
    email: "charles.robinson@example.com",
    dob: {
      date: "1977-03-19T11:12:38.477Z",
      age: 43
    },
    phone: "(975)-710-4431",
    picture: {
      large: "https://randomuser.me/api/portraits/men/29.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/29.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/29.jpg"
    }
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Walter",
      last: "Howard"
    },
    email: "walter.howard@example.com",
    dob: {
      date: "1965-08-06T14:21:29.887Z",
      age: 55
    },
    phone: "09-6539-3756",
    picture: {
      large: "https://randomuser.me/api/portraits/men/2.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/2.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/2.jpg"
    }
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Natalie",
      last: "Lopez"
    },
    email: "natalie.lopez@example.com",
    dob: {
      date: "1991-07-24T23:10:19.601Z",
      age: 29
    },
    phone: "(848)-066-8902",
    picture: {
      large: "https://randomuser.me/api/portraits/women/43.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/43.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/43.jpg"
    }
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Tomas",
      last: "Calvo"
    },
    email: "tomas.calvo@example.com",
    dob: {
      date: "1967-04-10T20:54:05.115Z",
      age: 53
    },
    phone: "985-121-455",
    picture: {
      large: "https://randomuser.me/api/portraits/men/9.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/9.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/9.jpg"
    }
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Maya",
      last: "Muller"
    },
    email: "maya.muller@example.com",
    dob: {
      date: "1974-01-10T23:21:00.032Z",
      age: 46
    },
    phone: "04-09-42-14-82",
    picture: {
      large: "https://randomuser.me/api/portraits/women/94.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/94.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/94.jpg"
    }
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Florence",
      last: "Otoole"
    },
    email: "florence.otoole@example.com",
    dob: {
      date: "1982-09-08T08:39:45.660Z",
      age: 38
    },
    phone: "041-383-3721",
    picture: {
      large: "https://randomuser.me/api/portraits/women/74.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/74.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/74.jpg"
    }
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Hugh",
      last: "Montgomery"
    },
    email: "hugh.montgomery@example.com",
    dob: {
      date: "1958-10-21T04:10:25.753Z",
      age: 62
    },
    phone: "08-1634-1168",
    picture: {
      large: "https://randomuser.me/api/portraits/men/11.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/11.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/11.jpg"
    }
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Ikrame",
      last: "Brakel"
    },
    email: "ikrame.brakel@example.com",
    dob: {
      date: "1993-11-17T10:20:13.363Z",
      age: 27
    },
    phone: "(585)-173-0173",
    picture: {
      large: "https://randomuser.me/api/portraits/women/14.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/14.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/14.jpg"
    }
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Filippa",
      last: "Pedersen"
    },
    email: "filippa.pedersen@example.com",
    dob: {
      date: "1950-05-31T09:48:31.987Z",
      age: 70
    },
    phone: "26901409",
    picture: {
      large: "https://randomuser.me/api/portraits/women/81.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/81.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/81.jpg"
    }
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "حسین",
      last: "پارسا"
    },
    email: "hsyn.prs@example.com",
    dob: {
      date: "1952-05-19T17:17:28.211Z",
      age: 68
    },
    phone: "044-34557297",
    picture: {
      large: "https://randomuser.me/api/portraits/men/98.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/98.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/98.jpg"
    }
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Brandão",
      last: "Santos"
    },
    email: "brandao.santos@example.com",
    dob: {
      date: "1965-06-12T06:48:16.404Z",
      age: 55
    },
    phone: "(16) 6567-2565",
    picture: {
      large: "https://randomuser.me/api/portraits/men/11.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/11.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/11.jpg"
    }
  }
];
export default fakeData;
