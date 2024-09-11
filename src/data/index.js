import moment from "moment/moment";

export const cardsData = [
  {
    title: "Revenue",
    change: 24,
    amount: 43101,
  },
  {
    title: "Orders",
    change: 14,
    amount: 70201,
  },
  {
    title: "Expenses",
    change: 18,
    amount: 15000.2,
  },
  {
    title: "Profit",
    change: 12,
    amount: 62091.87,
  },
];

export const ordersData = [
  {
    name: "MacBook Pro",
    type: "Electronics",
    items: 45,
    change: 15,
  },
  {
    name: "Nike Air Max",
    type: "Footwear",
    items: 120,
    change: 60,
  },
  {
    name: "Ergonomic Office Chair",
    type: "Furniture",
    items: 30,
    change: 10,
  },
];



//* get the value in group number format
export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("en", {
    useGrouping: true,
  });
};


//* calendar Events
let eventGuid = 0
let todayStr = moment().format("YYYY-MM-DD")  // YYYY-MM-DD of today
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Project Kickoff',
    start: todayStr + 'T09:00:00',
  },
  {
    id: createEventId(),
    title: 'Client PPT',
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T16:00:00',
  },
  {
    id: createEventId(),
    title: "Brainstorming",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T20:00:00',
  },
  {
    id: createEventId(),
    title: "Investor Call",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T09:00:00',
  },
  {
    id: createEventId(),
    title: "Budget Review",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T13:00:00',
  },
  {
    id: createEventId(),
    title: "Team Retrospective",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T13:00:00',
  },
]

export function createEventId() {
  return String(eventGuid++)
}


// * tasks
export const boardData = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "API Documentation",
          description: "Create Swagger documentation for the REST API"
        },
        {
          id: 2,
          title: "UI Design",
          description: "Design mockups for the new user dashboard"
        },
      ]
    },
    {
      id: 2,
      title: "TODO",
      cards: [
        {
          id: 9,
          title: "Authentication Module",
          description: "Implement JWT-based authentication system",
        }
      ]
    },
    {
      id: 3,
      title: "Doing",
      cards: [
        {
          id: 10,
          title: "Performance Optimization",
          description: "Optimize the React components to reduce re-rendering"
        },
        {
          id: 11,
          title: "Payment Gateway Integration",
          description: "Integrate Razorpay for processing online transactions"
        }
      ]
    },
    {
      id: 4,
      title: "Completed",
      cards: [
        {
          id: 12,
          title: "User Registration Flow",
          description: "Completed user registration and email verification process"
        },
        {
          id: 13,
          title: "Dark Mode Feature",
          description: "Implemented theme toggle between light and dark modes"
        }
      ]
    }
  ]
}


// * user table data
export const userData = [
  {
    name: {
      firstName: 'Amit',
      lastName: 'Sharma',
    },
    address: '12 MG Road',
    city: 'Bangalore',
    state: 'Karnataka',
  },
  {
    name: {
      firstName: 'Neha',
      lastName: 'Verma',
    },
    address: '54 Park Street',
    city: 'Kolkata',
    state: 'West Bengal',
  },
  {
    name: {
      firstName: 'Raj',
      lastName: 'Patel',
    },
    address: '34 MG Road',
    city: 'Ahmedabad',
    state: 'Gujarat',
  },
  {
    name: {
      firstName: 'Priya',
      lastName: 'Singh',
    },
    address: '78 Sadar Bazar',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
  },
  {
    name: {
      firstName: 'Rohit',
      lastName: 'Kumar',
    },
    address: '90 Brigade Road',
    city: 'Chennai',
    state: 'Tamil Nadu',
  },
  {
    name: {
      firstName: 'Sneha',
      lastName: 'Rao',
    },
    address: '12 Brigade Road',
    city: 'Hyderabad',
    state: 'Telangana',
  },
  {
    name: {
      firstName: 'Anil',
      lastName: 'Desai',
    },
    address: '77 FC Road',
    city: 'Pune',
    state: 'Maharashtra',
  },
  {
    name: {
      firstName: 'Manish',
      lastName: 'Mishra',
    },
    address: '33 Civil Lines',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
  },
  {
    name: {
      firstName: 'Sakshi',
      lastName: 'Chauhan',
    },
    address: '22 Marine Drive',
    city: 'Mumbai',
    state: 'Maharashtra',
  },
];
