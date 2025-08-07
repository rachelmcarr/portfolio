// data/projectsData.js
const projectsData = [
  {
    slug: "rare-oddities",
    title: "Rare Oddities Tattoos & Piercings",
    client: "[ Rare Oddities Tattoos & Piercings ]",
    role: "Sole Developer",
    timeline: "May 2025 - July 2025",
    category: "Web Application",
    projectNumber: "01",
    liveLink: "https://rare-oddities-live-link.com",
    description: "Get inked. Get pierced. Get unique. Come experience the world of Rare Oddities Tattoos & Piercings.",
    mainImage: "/images/rare-oddities-main.jpg",
    sections: [
      {
        heading: "The Ask",
        text: "Rare Oddities is seeking a centralized digital solution to modernize how they manage customers, artists, services, and portfolio display. Currently reliant on manual paperwork and social media messaging, the shop faces issues with inconsistent communication, data security, and operational inefficiencies. Their ask is for a full-stack web application that includes a customer-facing portal and an internal admin dashboard, enabling streamlined customer management, secure digital recordkeeping, and improved accessibility to customer and portfolio data, all with the goal of enhancing client experience, reducing manual overhead, and supporting future business growth."
      },
      {
        heading: "The Design",
        text: "The application is designed with a clean, modern, and responsive user interface that aligns with Rare Oddities’ brand aesthetic. The customer-facing side features an intuitive layout with clearly defined sections for browsing artist portfolios and viewing shop information. Visual elements such as gallery-style image displays, artist bios, and contact information are arranged to create an engaging and professional browsing experience. On the backend, the staff dashboard offers a functional, easy-to-navigate design with role-based access, allowing team members to securely manage customer and artist records, view and update services, and easily intake new customers. Data is structured for quick access and real-time updates, reducing the need for physical paperwork and improving workflow efficiency. The overall design emphasizes user experience, accessibility, and operational clarity."
      },
      {
        heading: "The Development",
        text: "This application was developed as a full-stack web solution using Angular for the frontend and Java Spring Boot for the backend, with a MySQL database for persistent data storage. The backend exposes RESTful API endpoints that manage all business logic, including customer intake, service tracking, consent form handling, and appointment management. On the frontend, Angular dynamically renders views for both public users and staff, supporting a mobile-responsive design and interactive components like a multi-step intake wizard. Staff log in through a secure, role-based authentication system to access customer data, manage portfolios, and update service records. The frontend is deployed on Firebase, while the backend is hosted on Railway. Development emphasized maintainability, secure data handling, and a user-friendly experience aligned with Rare Oddities' operational needs and long-term growth goals."
      },
      {
        heading: "The Takeaway",
        text: "Building the Rare Oddities web application was a deep dive into full-stack development, allowing me to apply real-world problem solving to a client with specific operational challenges. I designed and implemented a fully functional, scalable solution that replaced manual, paper-based processes with a modern digital platform. Through this project, I strengthened my skills in Angular, Spring Boot, MySQL, and RESTful API design, while also deploying to cloud platforms like Firebase and Railway. I gained valuable experience in data modeling, user experience design, secure authentication, and conditional workflows like multi-step intake forms and role-based access. More importantly, I learned how to bridge the gap between business needs and technical implementation, delivering a product that’s both functional and impactful."
      }
    ],
    gallery: [
      "/images/rare-oddities-1.jpg",
      "/images/rare-oddities-2.jpg"
    ]
  },

  {
    slug: "pto-tracker",
    title: "PTO Tracker",
    client: "[ GuardTech Pest Management, Inc. ]",
    role: "Sole Developer",
    timeline: "July 2025",
    category: "Web Application",
    projectNumber: "02",
    liveLink: "N/A",
    description: "Walnut league dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient",
    mainImage: "/images/pto-tracker-main.jpg",
    sections: [
      {
        heading: "The Ask",
        text: "GuardTech tracks employee time off with an Excel document. Although it is functional, it leads to easy data integrity issues and difficult maintainability."
      },
      {
        heading: "The Design",
        text: "GuardTech's PTO tracker is built with a Spring Boot backend, temporary H2 database for development, and a React front-end."
      },
      {
        heading: "The Development",
        text: "GuardTech's PTO tracker is built with a Spring Boot backend, temporary H2 database for development, and a React front-end."
      },
      {
        heading: "The Takeaway",
        text: "This was my first React project which gave me extremely valuable experience for the current market."
      }
    ],
    gallery: [
      "/images/pto-tracker-1.jpg",
      "/images/pto-tracker-2.jpg",
    ]
  },

  {
    slug: "inventory-manager",
    title: "Inventory Manager",
    client: "[ D287 - Java Frameworks ] ",
    role: "Sole Developer",
    timeline: "[ 2024 ]",
    category: "Web Application",
    projectNumber: "03",
    liveLink: "N/A",
    description: "Walnut league dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient",
    mainImage: "/images/inventory-manager-main.jpg",
    sections: [
      {
        heading: "The Ask",
        text: "For the D287 Java Frameworks course at WGU, the task was to develop a functional full-stack web application using Java and Spring Boot. The application needed to demonstrate mastery of Spring MVC, RESTful API design, and data persistence using Spring Data JPA. The project required the implementation of CRUD operations, entity relationships, input validation, and the ability to handle real-world business logic in a structured and secure way. The goal was to showcase the ability to create scalable, maintainable, and professional-grade applications using industry-standard Java frameworks."
      },
      {
        heading: "The Design",
        text: "The application was designed using a layered architecture following MVC (Model-View-Controller) principles. Entity models represented the domain data and were mapped to a relational database using JPA annotations. REST controllers handled client requests, while service layers managed business logic and communication between controllers and repositories. The frontend interface was built using Thymeleaf to render dynamic content server-side, with a clean and intuitive layout that made navigation and form submissions straightforward for users. The design prioritized usability, modularity, and a logical flow from data entry to data retrieval."
      },
      {
        heading: "The Development",
        text: "The project was developed using Java Spring Boot, with Spring Data JPA managing database interactions and Hibernate handling ORM. RESTful endpoints were created for all core entities, enabling create, read, update, and delete operations. Validation was applied using Hibernate Validator annotations to enforce business rules and improve data integrity. Thymeleaf was used for rendering server-side HTML views and forms, allowing users to interact with the application through a clean UI. The app was connected to a MySQL or H2 database for data storage and thoroughly tested to ensure functionality and reliability. Application configuration was managed through application.properties, and the codebase followed best practices for package organization and separation of concerns."
      },
      {
        heading: "The Takeaway",
        text: "Completing this project deepened my understanding of the Spring ecosystem and reinforced how Java frameworks support scalable, enterprise-level application development. I gained hands-on experience in designing RESTful APIs, managing complex data models with JPA, and securing data through input validation and layered architecture. The project helped bridge theory with practice and gave me confidence in building backends that can support real-world use cases. It was a pivotal step in solidifying my skills in full-stack Java development and applying them to future professional projects."
      }
    ],
    gallery: [
      "/images/inventory-manager-1.jpg",
      "/images/inventory-manager-2.jpg",
    ]
  },

  {
    slug: "travel",
    title: "Travel Agency Booking",
    client: "[ WGU D288 - Back-End Programming ] ",
    role: "Sole Developer",
    timeline: "[ 2025 ]",
    category: "Web Application",
    projectNumber: "04",
    liveLink: "N/A",
    description: "Walnut league dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient",
    mainImage: "/images/travel-main.jpg",
    sections: [
      {
        heading: "The Ask",
        text: "In the D288 – Back-End Programming course at WGU, the objective was to build a functional Java-based application that demonstrates foundational skills in object-oriented programming (OOP), business logic implementation, and backend data handling. The project needed to showcase core Java concepts such as encapsulation, inheritance, and polymorphism, while also incorporating error handling, input validation, and persistent data storage. The goal was to build a maintainable, reusable codebase that reflects industry standards for clean, organized backend development."
      },
      {
        heading: "The Design",
        text: "The application was designed using object-oriented principles to create a modular and extendable structure. Core entities were modeled as Java classes with clearly defined fields and behaviors, organized into logical packages. Interfaces and abstract classes were used to support polymorphism and encourage code reusability. A user-friendly console menu or command interface provided clear options for navigating functionality such as creating, updating, viewing, or deleting records. The design emphasized separation of concerns, allowing the data, business logic, and user interaction layers to operate independently for easier maintenance and scalability."
      },
      {
        heading: "The Development",
        text: "Development was completed using core Java, with a focus on writing clean, maintainable code that adhered to object-oriented design principles. The program included class hierarchies, constructors, getter/setter methods, and overridden behavior where appropriate. Input validation and exception handling were implemented to ensure the application handled edge cases and user errors gracefully. Data persistence was managed through text or CSV files (or optionally a lightweight database, if permitted), allowing for record storage between sessions. The code followed best practices for readability and structure, with reusable methods and logical control flow that reflected real-world backend processes."
      },
      {
        heading: "The Takeaway",
        text: "This project gave me hands-on experience with core backend programming in Java, reinforcing my understanding of object-oriented design and backend logic. I learned how to structure code for scalability, how to model real-world entities as class hierarchies, and how to handle data input/output with reliability and clarity. The experience solidified my ability to write clean, efficient Java code and laid the foundation for more advanced backend work using frameworks like Spring Boot. D288 was a key step in my progression from Java fundamentals to building fully functional backend systems."
      }
    ],
    gallery: [
      "/images/travel-1.jpg",
      "/images/travel-2.jpg",
    ]
  },

  {
    slug: "hotel",
    title: "Hotel Booking",
    client: "[ WGU D387 - Advanced Java ] ",
    role: "Sole Developer",
    timeline: "[] 2025 ]",
    category: "Web Application",
    projectNumber: "05",
    liveLink: "N/A",
    description: "Walnut league dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient",
    mainImage: "/images/hotel-main.jpg",
    sections: [
      {
        heading: "The Ask",
        text: "In the D387 – Advanced Java course at WGU, the challenge was to design and implement a robust Java application using advanced object-oriented programming techniques. The project required the use of abstraction, inheritance, interfaces, and design patterns to structure the application for scalability and maintainability. Students were expected to follow a layered architecture and apply industry best practices, including the use of testing frameworks, data persistence, and modular design. The purpose of the project was to simulate real-world development scenarios and demonstrate a mature understanding of Java software architecture."
      },
      {
        heading: "The Design",
        text: "The application was architected using a multi-layered structure, separating responsibilities into distinct components such as the data access layer, business logic layer, and user interaction layer. Design patterns such as Data Access Object (DAO) or Model-View-Controller (MVC) were applied to improve modularity and code reusability. Classes and interfaces were used strategically to allow for polymorphism and reduce tight coupling. The user interface, whether console-based or graphical, was designed to guide users through application features while abstracting underlying complexity. The design focused on extensibility and clean code structure, reflecting real-world enterprise software practices."
      },
      {
        heading: "The Development",
        text: "Development was carried out in Java using advanced OOP concepts, emphasizing clean separation of concerns and maintainable code. Key features included complex class hierarchies, interface-driven development, and implementation of design patterns. Persistent storage was handled via file I/O or database connections, and unit testing was integrated using JUnit to ensure reliability and correctness of business logic. Exception handling, validation, and reusable utility classes contributed to a stable and user-friendly application. Each component was developed with scalability in mind, allowing for future expansion or refactoring without disrupting the overall system."
      },
      {
        heading: "The Takeaway",
        text: "This project was a major step forward in mastering professional-grade Java development. It deepened my understanding of architectural design, modular development, and pattern-based problem solving. I learned how to structure large codebases using abstraction and interfaces, how to write testable and maintainable code, and how to apply design patterns to real-world software challenges. D387 solidified my readiness to work on enterprise-level Java applications and strengthened my ability to contribute meaningfully to backend architecture and code quality in a collaborative environment."
      }
    ],
    gallery: [
      "/images/hotel-1.jpg",
      "/images/hotel-2.jpg",
    ]
  },

  {
    slug: "vacation-scheduler",
    title: "Vacation Scheduler",
    client: "[ WGU D308 – MOBILE APPLICATION DEVELOPMENT (ANDROID) ] ",
    role: "Sole Developer",
    timeline: "[ 2025 ]",
    category: "Mobile Application",
    projectNumber: "06",
    liveLink: "N/A",
    description: "Walnut league dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient",
    mainImage: "/images/vacation-scheduler-main.jpg",
    sections: [
      {
        heading: "The Ask",
        text: "For the D308 – Mobile Application Development (Android) course at WGU, the project required the development of a functional Android app using Java and Android Studio. The application needed to demonstrate key mobile development concepts including Activity lifecycle management, local data persistence with Room, input validation, user interaction through UI components, and at least one advanced feature such as notifications or data sharing. The goal was to simulate the real-world process of designing, building, and testing a native Android application that offers a meaningful user experience and leverages modern mobile architecture."
      },
      {
        heading: "The Design",
        text: "The application was designed as a Vacation Scheduler, enabling users to create, view, and manage vacations and associated excursions. The UI followed Android best practices for mobile usability, with intuitive navigation, clearly labeled input fields, and responsive layouts optimized for small screens. Each Activity served a specific purpose — such as listing vacations, displaying vacation details, adding excursions, or setting alerts. Room was used as the local database to persist vacation and excursion data, while custom dialogs and menus improved user interaction. The design prioritized ease of use, efficient data flow, and a clean, mobile-friendly experience."
      },
      {
        heading: "The Development",
        text: "The app was built in Java using Android Studio and followed a modular, object-oriented approach. Room provided persistent local data storage with entities, DAOs, and a database class to manage relationships between vacations and excursions. Users could add, edit, and delete vacations and excursions, with data validated and retained locally. Advanced features included SMS alert scheduling using AlarmManager and BroadCastReceiver, allowing users to receive timely reminders for upcoming trips. Sharing functionality enabled users to send vacation details through other apps. The app was fully tested on an emulator and real device, with attention to lifecycle handling, layout constraints, and data integrity."
      },
      {
        heading: "The Takeaway",
        text: "This project solidified my skills in Android development and gave me hands-on experience building a complete mobile application from scratch. I learned how to manage app lifecycles, implement local databases with Room, design intuitive mobile interfaces, and incorporate advanced features like notifications and content sharing. D308 challenged me to think like a mobile developer, balancing performance, usability, and architecture, and gave me the confidence to continue building native Android apps professionally. It also reinforced my understanding of Java, UI design patterns, and Android-specific frameworks and APIs."
      }
    ],
    gallery: [
      "/images/vacation-scheduler-1.jpg",
      "/images/vacation-scheduler-2.jpg",
    ]
  },
  // Add more projects here
];

export default projectsData;
