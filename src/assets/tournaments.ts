export const roomTournaments = [
  {
    pokerRoom: "Poker Stars",
    tournaments: [
      // Daily Bigs (щоденні freezeout турніри)
      { name: "Morning Big $10", buyIn: 10 },
      { name: "The Big $30", buyIn: 30 },
      { name: "The Big $15", buyIn: 15 },
      { name: "The Big $5", buyIn: 5 },
      { name: "Evening Big $20", buyIn: 20 },

      // Hot Turbos (швидкі турніри)
      { name: "Lunchtime Hot $20", buyIn: 20 },
      { name: "Hot $50 Turbo", buyIn: 50 },
      { name: "Hot $10 Turbo", buyIn: 10 },
      { name: "Hot $5 Turbo", buyIn: 5 },
      { name: "Hot $30 Turbo", buyIn: 30 },

      // PKO / Bounty Builder (щоденні PKO)
      { name: "Bounty Builder $10", buyIn: 10 },
      { name: "Bounty Builder $30", buyIn: 30 },
      { name: "Bounty Builder $20", buyIn: 20 },
      { name: "Bounty Builder $15", buyIn: 15 },

      // Nightly & Moonlight
      { name: "Nightly Stars $100", buyIn: 100 },
      { name: "Moonlight Express $20 Hyper", buyIn: 20 },

      // Sunday Majors (щотижневі ключові)
      { name: "Sunday Kickoff $109", buyIn: 109 },
      { name: "Sunday Warm-Up $109", buyIn: 109 },
      { name: "Sunday Storm $11", buyIn: 11 },
      { name: "Sunday Million $109", buyIn: 109 },
      { name: "Sunday Supersonic $215", buyIn: 215 }
    ]
  },
  {
    pokerRoom: "GGPoker",
    tournaments: [
      // Daily Majors (щоденні Guaranteed турніри)
      { name: "Micro Madness $1.88 Hyper", buyIn: 1.88 },
      { name: "Mini Midnight Madness $8.88 Hyper", buyIn: 8.88 },
      { name: "Daily Special $250", buyIn: 250 },
      { name: "Daily Special $50", buyIn: 50 },
      { name: "Midnight Madness $88 Hyper", buyIn: 88 },
      { name: "Daily Special $10", buyIn: 10 },
      { name: "Daily Special $30", buyIn: 30 },

      // Stacks & Turbo
      { name: "Fifty Stack $5.50", buyIn: 5.5 },
      { name: "Fifty Stack $55", buyIn: 55 },
      { name: "Mini Lucky Sevens Superstack $17.77", buyIn: 17.77 },
      { name: "Lucky Sevens Superstack $77", buyIn: 77 },
      { name: "Daily Hypersonic $20", buyIn: 20 },
      { name: "Mini Hypersonic $2.50", buyIn: 2.5 },
      { name: "Mini Saver $5 Hyper", buyIn: 5 },

      // Sunday Specials (гарантії + формати х2 неділя)
      { name: "Sunday Special $4", buyIn: 4 },
      { name: "Sunday Special $40", buyIn: 40 },
      { name: "Sunday Superstack $88", buyIn: 88 },
      { name: "Sunday Kick-Off $125", buyIn: 125 },
      { name: "Sunday Monster Stack $25", buyIn: 25 },
      { name: "Sunday Marathon $30", buyIn: 30 },
      { name: "Grand Prix Europe $125", buyIn: 125 }
    ]
  }
];
