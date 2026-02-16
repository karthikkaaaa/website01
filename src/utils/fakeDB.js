

export const initDB = () => {
 
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  if (existingUsers.length < 9) {
    const fakeUsers = [
      { id: 1, name: "Rahul", email: "rahul@gmail.com", status: "pending" },
      { id: 2, name: "Anu", email: "anu@gmail.com", status: "accepted" },
      { id: 3, name: "Karthik", email: "karthik@gmail.com", status: "pending" },
      { id: 4, name: "Meena", email: "meena@gmail.com", status: "accepted" },
      { id: 5, name: "Vishal", email: "vishal@gmail.com", status: "pending" },
      { id: 6, name: "Sneha", email: "sneha@gmail.com", status: "accepted" },
      { id: 7, name: "Arjun", email: "arjun@gmail.com", status: "pending" },
      { id: 8, name: "Priya", email: "priya@gmail.com", status: "accepted" },
      { id: 9, name: "Rohit", email: "rohit@gmail.com", status: "pending" }
    ];

    localStorage.setItem("users", JSON.stringify(fakeUsers));
  }


  const existingBookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  if (existingBookings.length < 9) {
    const fakeBookings = [
      {
        id: 101,
        userId: 1,
        userName: "Rahul",
        event: "Wedding",
        date: "2025-02-10",
        status: "pending"
      },
      {
        id: 102,
        userId: 2,
        userName: "Anu",
        event: "Birthday",
        date: "2025-02-15",
        status: "accepted"
      },
      {
        id: 103,
        userId: 3,
        userName: "Karthik",
        event: "Reception",
        date: "2025-03-01",
        status: "pending"
      },
      {
        id: 104,
        userId: 4,
        userName: "Meena",
        event: "Engagement",
        date: "2025-03-10",
        status: "accepted"
      },
      {
        id: 105,
        userId: 5,
        userName: "Vishal",
        event: "Corporate Meet",
        date: "2025-03-18",
        status: "pending"
      },
      {
        id: 106,
        userId: 6,
        userName: "Sneha",
        event: "Baby Shower",
        date: "2025-04-01",
        status: "accepted"
      },
      {
        id: 107,
        userId: 7,
        userName: "Arjun",
        event: "Music Concert",
        date: "2025-04-12",
        status: "pending"
      },
      {
        id: 108,
        userId: 8,
        userName: "Priya",
        event: "House Warming",
        date: "2025-04-20",
        status: "accepted"
      },
      {
        id: 109,
        userId: 9,
        userName: "Rohit",
        event: "Anniversary",
        date: "2025-04-30",
        status: "pending"
      }
    ];

    localStorage.setItem("bookings", JSON.stringify(fakeBookings));
  }
};
