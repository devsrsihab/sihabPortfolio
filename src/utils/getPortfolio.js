const portfolio = [
  {
    _id: 1,
    title: "SRS Sports",
    details:
      "SRS Sports is a comprehensive sports management platform designed to streamline the organization of sporting events and athlete management. This project focuses on providing a seamless experience for sports enthusiasts, offering features such as event scheduling, live scores, team management, and performance tracking. The user-friendly interface allows sports clubs and organizers to manage their events efficiently, while athletes can track their performance and achievements.",
    thumbnail:
      "https://res.cloudinary.com/dzkmp0xxd/image/upload/v1725282900/Screenshot_1_n818i6.png",
    image:
      "https://res.cloudinary.com/dzkmp0xxd/image/upload/v1725282900/Screenshot_1_n818i6.png",
    liveLink: "https://srs-sport-client.vercel.app",
    sourceCode: {
      client: "https://github.com/devsrsihab/Sports-Facility-Booking-Client-",
      server: "https://github.com/devsrsihab/Sports-Facility-Booking-Server",
    },
  },
  {
    _id: 3,
    title: "SRS Library",
    details:
      "SRS Library is a comprehensive online library management system designed to streamline the management of books, users, and borrowing processes. This project focuses on providing a user-friendly interface for library staff to manage their inventory, track book availability, and handle user requests efficiently. The system includes features such as book cataloging, user management, and borrowing/return tracking, ensuring a smooth and efficient library operation.",
    thumbnail:
      "https://res.cloudinary.com/dzkmp0xxd/image/upload/v1729085524/Screenshot_4_cyf8jw.png",
    image:
      "https://res.cloudinary.com/dzkmp0xxd/image/upload/v1729085524/Screenshot_4_cyf8jw.png",
    liveLink: "https://srs-library-client.vercel.app",
    sourceCode: {
      client:
        "https://github.com/devsrsihab/library-management/tree/master/client",
      server:
        "https://github.com/devsrsihab/library-management/tree/master/server",
    },
  },
  {
    _id: 2,
    title: "Recipe Community",
    details:
      "Recipe Community is an online platform developed for managing tree nurseries, focusing on efficient inventory tracking, plant care schedules, and customer management. It allows users to explore a diverse catalog of plants, manage their nursery stock, and handle orders seamlessly. This project emphasizes ease of use for both nursery owners and customers, providing a modern, intuitive shopping and management experience for tree lovers and garden enthusiasts.",
    thumbnail:
      "https://res.cloudinary.com/dzkmp0xxd/image/upload/v1729084966/Screenshot_3_y4svg6.png",
    image:
      "https://res.cloudinary.com/dzkmp0xxd/image/upload/v1729084966/Screenshot_3_y4svg6.png",
    liveLink: "https://client-4.vercel.app",
    sourceCode: {
      client: "https://github.com/devsrsihab/Client-Recipe-Sharing-Community",
      server: "https://github.com/devsrsihab/Server-Recipe-Sharing-Community",
    },
  },
];

export const getAllPortflio = async () => {
  const data = portfolio;
  return data;
};
