export const projectDetails=[

  {
    heading:"Todo List",
    summary:"MyTask is a production-ready full-stack task management application deployed at mytask-dusky-chi.vercel.app. Built with modern JavaScript technologies, it includes a React TypeScript frontend, Express.js backend, PostgreSQL database, and Prisma ORM. With 96.4% TypeScript coverage, the project emphasizes strong type safety and code quality.",
    description:`<h1 className='text-3xl font-medium  p-2 text-slate-300'>Overview & Architecture</h1>
                    <p className='text-lg font-sans p-2  inset-7'>
                        MyTask is a production-ready full-stack task management application deployed at mytask-dusky-chi.vercel.app. Built with modern JavaScript technologies, it includes a React TypeScript frontend, Express.js backend, PostgreSQL database, and Prisma ORM. With 96.4% TypeScript coverage, the project emphasizes strong type safety and code quality.
                    </p>
                    <p className='text-lg font-sans p-2  inset-7'>
                        The application follows a RESTful API architecture separating frontend and backend. The frontend uses React Hooks and Context API for state management, while the backend follows the MVC pattern with controllers, services, and middleware for handling authentication and validation.
                    </p>

                    <h1 className='text-3xl font-medium  p-2 text-slate-300'>Technology Stack & Implementation</h1>
                    <p className='text-lg font-sans p-2  inset-7'>
                        The frontend is built with React and TypeScript. Tailwind CSS provides styling through utility-first classes for consistent responsive design. The component architecture separates presentation and container components for maintainability. State Management uses React Context API and form validation with React Hook Form and Zod.
                    </p>
                    <p className='text-lg font-sans p-2  inset-7'>
                        Key frontend features include user authentication pages, a task dashboard, CRUD operations with optimistic updates, and responsive design.
                    </p>

                    <h1 className='text-3xl font-medium  p-2 text-slate-300'>Backend Architecture</h1>
                    <p className='text-lg font-sans p-2  inset-7'>
                        The Express.js backend in TypeScript follows a stateless architecture. It includes routing, authentication, middleware, services, and Prisma-based database interactions.
                    </p>
                    <p className='text-lg font-sans p-2  inset-7'>
                        Routing endpoints include:
                    </p>
                    <p className='text-lg font-sans p-2  inset-7'>
                        User: POST /user/sign-up, POST /user/sign-in<br/>
                            Task: GET /task/all, POST /task/add, PUT /task/:taskId, DELETE /task/:taskId
                    </p>

                    <h1 className='text-3xl font-medium  p-2 text-slate-300'>Authentication & Middleware</h1>
                    <p className='text-lg font-sans p-2  inset-7'>
                        JWT-based authentication ensures stateless security. During registration, passwords are hashed with bcrypt. On login, a JWT is generated, validated in middleware, and added to the request. Invalid tokens return 401 or 403 errors.
                    </p>

                    <h1 className='text-3xl font-medium  p-2 text-slate-300'>Service Layer</h1>
                    <p className='text-lg font-sans p-2  inset-7'>
                        Business logic resides in independent service modules. TaskService manages database operations through Prisma and ensures tasks belong to authenticated users.
                    </p>

                    <h1 className='text-3xl font-medium  p-2 text-slate-300'>Database Design with Prisma</h1>
                    <p className='text-lg font-sans p-2  inset-7'>
                        Prisma ORM offers type-safe access with auto-generated types. The database models include User (email, password, name, timestamps) and Task (title, description, status, priority, due date, userId). Each task has a one-to-many relationship with a user.
                    </p>
                    <p className='text-lg font-sans p-2  inset-7'>
                        Key Prisma features include type generation, parameterized queries, optimized fetching using select, and version-controlled migrations. The schema.prisma defines IDs with cuid(), timestamps with now(), and foreign key relationships.
                    </p>

                    <h1 className='text-3xl font-medium  p-2 text-slate-300'>Security, Performance & Deployment</h1>
                    <p className='text-lg font-sans p-2  inset-7'>
                        Security includes bcrypt password hashing, JWT token security, Prisma’s SQL injection prevention, and HTTPS with CORS configuration for authorized origins.
                    </p>
                    <p className='text-lg font-sans p-2  inset-7'>
                        Performance optimizations: React lazy loading, memoization, debounced inputs, Prisma query optimization, database indexing, and PostgreSQL connection pooling.
                    </p>

                    <h1 className='text-3xl font-medium  p-2 text-slate-300'>Deployment on Vercel</h1>
                    <p className='text-lg font-sans p-2  inset-7'>
                        Vercel hosts both frontend and backend as serverless functions. It provides automatic HTTPS, scaling, and global CDN distribution. Environment variables such as DATABASE_URL and JWT_SECRET are securely managed via Vercel. Database migrations are executed through build scripts.
                    </p>
                    <p className='text-lg font-sans p-2  inset-7'>
                        The vercel.json file defines routing and deployment configurations, mapping frontend routes and API endpoints.
                    </p>

                    <h1 className='text-3xl font-medium  p-2 text-slate-300'>Features & API Endpoints</h1>
                    <p className='text-lg font-sans p-2  inset-7'>
                        User Authentication:
                    </p>
                    <p className='text-lg font-sans p-2  inset-7'>
                        Sign Up (POST /api/v1/user/sign-up): Create new account<br/>
                            Sign In (POST /api/v1/user/sign-in): Authenticate and receive JWT
                    </p>
                    <p className='text-lg font-sans p-2  inset-7'>
                        Task Management:
                    </p>
                    <p className='text-lg font-sans p-2  inset-7'>
                        GET /api/v1/task/all: Retrieve user’s tasks<br/>
                            POST /api/v1/task/add: Add new task<br/>
                                PUT /api/v1/task/:taskId: Update task details<br/>
                                    DELETE /api/v1/task/:taskId: Delete task
                                </p>

                                <h1 className='text-3xl font-medium  p-2 text-slate-300'>Features</h1>
                                <p className='text-lg font-sans p-2  inset-7'>
                                    Includes task filtering and sorting, validation on both frontend and backend, responsive design with Tailwind CSS, and protected routes enforcing JWT authentication.
                                </p>

                                <h1 className='text-3xl font-medium  p-2 text-slate-300'>Strengths & Conclusion</h1>
                                <p className='text-lg font-sans p-2  inset-7'>
                                    MyTask demonstrates end-to-end full-stack best practices: type safety, a modern stack with React, Express, Prisma, PostgreSQL, robust security with password hashing and JWT, and scalable stateless architecture. The project’s production readiness, consistent use of TypeScript, and developer-focused tools make it a model full-stack implementation.
                                </p>`,
    image:"/todo_list.png",
    githubLink:"https://github.com/jagdishsinghboura/mytask",
    liveLink:"https://mytask-rust.vercel.app/",
  },

  {
    heading:"Thread App ",
    summary:" The Threads-app is a web application project built with Next.js, intended as a scalable, modern template for creating robust web applications. Bootstrapped using the create-next-app utility, this project leverages cutting-edge web technologies and a thoughtfully organized structure to achieve high performance, type safety, and ease of use for both developers and future contributors.",
    description:`<h1 className='text-3xl font-medium  p-2 text-slate-300'>Threads-app</h1>

                        <p className='text-lg font-sans p-2  inset-7'>
                            The Threads-app is a web application project built with Next.js, intended as a scalable, modern template for creating robust web applications.
                            Bootstrapped using the create-next-app utility, this project leverages cutting-edge web technologies and a thoughtfully organized structure to achieve
                            high performance, type safety, and ease of use for both developers and future contributors.
                        </p>

                        <h1 className='text-3xl font-medium  p-2 text-slate-300'>1. Project Structure and Foundation</h1>

                        <p className='text-lg font-sans p-2  inset-7'>
                            Threads-app builds upon the established architecture provided by Next.js, one of the most popular frameworks for React-based development.
                            Next.js provides several out-of-the-box features:
                        </p>

                        <ul>
                            <li>Server-side rendering (SSR)</li>
                            <li>Static site generation (SSG)</li>
                            <li>Dynamic routing</li>
                            <li>API routes</li>
                        </ul>

                        <p className='text-lg font-sans p-2  inset-7'>
                            The project is primarily written in <strong>TypeScript (93.3%)</strong>, ensuring strong type safety, clear documentation, and maintainability.
                            Other parts include <strong>CSS (5.0%)</strong> for styling and <strong>JavaScript (1.7%)</strong> for scripting, making the app modular and extensible.
                        </p>

                        <h1 className='text-3xl font-medium  p-2 text-slate-300'>2. Getting Started: Development Workflow</h1>

                        <p className='text-lg font-sans p-2  inset-7'>
                            Developers can start easily by cloning the repository and running the development server with their preferred package manager:
                        </p>

                        <ul>
                            <li><code>npm run dev</code></li>
                            <li><code>yarn dev</code></li>
                            <li><code>pnpm dev</code></li>
                            <li><code>bun dev</code></li>
                        </ul>

                        <p className='text-lg font-sans p-2  inset-7'>
                            Once the server is running, the application can be accessed at <code>http://localhost:3000</code>.
                            The main page content is located in <code>app/page.tsx</code>. Thanks to Next.js hot-reloading, changes are reflected instantly in the browser.
                        </p>

                        <small>
                            The project demonstrates modularity and organization best practices. Page components, assets, and configurations are arranged for clarity, reuse, and scalability.
                        </small>

                        <h1 className='text-3xl font-medium  p-2 text-slate-300'>3. Key Technologies and Features</h1>

                        <ul>
                            <li>
                                <p className='text-lg font-sans p-2  inset-7'><strong>Next.js Framework</strong> — provides automatic code splitting, optimized images, fast refresh, and full-stack capabilities for performance and efficiency.</p>
                            </li>
                            <li>
                                <p className='text-lg font-sans p-2  inset-7'><strong>TypeScript Integration</strong> — offers advanced type checking, reduces bugs, and enhances developer tooling with autocompletion and in-editor documentation.</p>
                            </li>
                            <li>
                                <p className='text-lg font-sans p-2  inset-7'><strong>Font Optimization</strong> — uses <code>next/font</code> to load the Geist font family by Vercel, ensuring fast and aesthetic typography.</p>
                            </li>
                            <li>
                                <p className='text-lg font-sans p-2  inset-7'><strong>Customizability</strong> — easily extendable with the main structure in <code>app/page.tsx</code>; changes are live via Next.js fast refresh.</p>
                            </li>
                        </ul>

                        <h1 className='text-3xl font-medium  p-2 text-slate-300'>4. Deployment and Scalability</h1>

                        <p className='text-lg font-sans p-2  inset-7'>
                            Threads-app is optimized for deployment on <strong>Vercel</strong>, offering smooth integration with automated optimizations for SSR, SSG, and ISR.
                            Deployment is as simple as connecting your Git repository to Vercel and following the guided setup.
                        </p>

                        <small>
                            This setup ensures continuous integration, quick go-live transitions, and dependable scalability as the project grows.
                        </small>

                        <h1 className='text-3xl font-medium  p-2 text-slate-300'>5. Community and Future Directions</h1>

                        <p className='text-lg font-sans p-2  inset-7'>
                            As an open-source project on GitHub, Threads-app invites community contributions.
                            Currently, the project has no stars, forks, or public releases — suggesting an early development stage.
                        </p>

                        <ul>
                            <li>Future additions may include advanced authentication.</li>
                            <li>User-generated content and backend APIs using Next.js API routes.</li>
                            <li>Integration with evolving Next.js features and best practices.</li>
                        </ul>

                        <small>
                            Developers are encouraged to explore:
                            <ul>
                                <li><a href="https://nextjs.org/docs">Next.js Documentation</a></li>
                                <li><a href="https://nextjs.org/learn">Learn Next.js interactive tutorials</a></li>
                            </ul>
                        </small>

                        <h1 className='text-3xl font-medium  p-2 text-slate-300'>6. Conclusion</h1>

                        <p className='text-lg font-sans p-2  inset-7'>
                            Threads-app provides a solid foundation for building scalable, maintainable, and modern web applications with Next.js and TypeScript.
                            It emphasizes developer experience, best practices, and production readiness.
                        </p>

                        <ul>
                            <li><strong>Modern Technology Stack:</strong> Next.js + TypeScript</li>
                            <li><strong>Ready-to-Deploy:</strong> Seamless deployment on Vercel</li>
                            <li><strong>Hot-Reload Development:</strong> Real-time visual feedback</li>
                            <li><strong>Open for Expansion:</strong> Encourages community growth and enhancements</li>
                        </ul>`,
    image:"/thread_app.png",
    githubLink:"https://github.com/jagdishsinghboura/Threads-app",
    liveLink:"https://thread-app-phi.vercel.app/",
  },
  {
    heading:"Insta Clone  ",
    summary:" The instagram-clone repository appears to be a full-stack web application replicating core Instagram features (user signup/login, photo posts, likes, comments, follow/unfollow, etc.). While the specific jagdishsinghboura/instagram-clone code wasn’t directly accessible, similar Instagram clone projects use a modern JavaScript tech stack. For example, one such clone uses the MERN stack (MongoDB, Express, React, Node.js), and another uses React with TypeScript on the front end and Node/Express on the back end. These stacks typically allow users to register accounts, upload images to a feed, follow other users, like and comment on posts, and perform user searches – emulating Instagram’s core functionality.",
    description:`<div>
                        <h1 className='text-4xl font-medium  p-2 text-slate-300 w-full text-center'>Instagram Clone Project Overview</h1>
                        <p className='text-lg font-sans p-2  inset-7'>
                            The <strong className='text-lg font-sans'>instagram-clone</strong> repository appears to be a full-stack
                            web application replicating core Instagram features (user signup/login,
                            photo posts, likes, comments, follow/unfollow, etc.). While the specific
                            <em> jagdishsinghboura/instagram-clone </em> code wasn’t directly
                            accessible, similar Instagram clone projects use a modern JavaScript tech
                            stack. For example, one such clone uses the MERN stack (MongoDB, Express,
                            React, Node.js), and another uses React with TypeScript on the front end and
                            Node/Express on the back end. These stacks typically allow users to register
                            accounts, upload images to a feed, follow other users, like and comment on
                            posts, and perform user searches – emulating Instagram’s core functionality.
                        </p>

                        <p className='text-lg font-sans p-2  inset-7'>
                            In broad terms, the project likely comprises a client-side application
                            (built with React or React Native) and a server-side API (built with
                            Node/Express) connecting to a database (such as MongoDB). In one reference
                            Instagram clone, the frontend uses React and TypeScript with TailwindCSS for
                            styling, while the backend runs on Node.js/Express with MongoDB (via
                            Mongoose) plus image upload (Multer/Cloudinary) and JSON Web Token
                            authentication. This combination enables user data persistence, file
                            storage, and secure login.
                        </p>

                        <h2 className='text-3xl font-medium  p-2 text-slate-300'>Tech Stack</h2>
                        <h3 className='text-2xl font-medium  p-2 text-slate-300'>Frontend</h3>
                        <p className='text-lg font-sans p-2  inset-7'>
                            Most Instagram clones use React (sometimes with TypeScript) or React Native.
                            In one example, the UI is built with React 18 and TypeScript, employing
                            <code>react-router-dom</code> for navigation and Tailwind CSS for styling.
                            Another clone explicitly lists React and React Native in its README.
                            Client-side libraries often include Axios for API calls and state management
                            via React hooks or Redux (not explicitly shown but common practice).
                        </p>

                        <h3 className='text-2xl font-medium  p-2 text-slate-300'>Backend</h3>
                        <p className='text-lg font-sans p-2  inset-7'>
                            The server is typically Node.js with Express.js. The backend defines
                            RESTful routes for posts, comments, likes, and user data. File uploads (for
                            post images) often use Multer and a cloud service like Cloudinary, enabling
                            storage of user photos. Authentication is usually token-based (e.g. using
                            JSON Web Tokens) for secure login and session management.
                        </p>

                        <h3 className='text-2xl font-medium  p-2 text-slate-300'>Database</h3>
                        <p className='text-lg font-sans p-2  inset-7'>
                            A NoSQL database (MongoDB) is common. Schemas store user profiles, posts
                            (with image URLs, captions, timestamps), and relationships
                            (followers/following). Some simpler clones may even use a mock JSON server,
                            but a production-like clone should use a real database for scalability.
                        </p>

                        <h3 className='text-2xl font-medium  p-2 text-slate-300'>Tools and Services</h3>
                        <ul>
                            <li className='text-sm list-disc list-inside font-sans'>Tailwind CSS – for responsive UI</li>
                            <li className='text-sm list-disc list-inside font-sans'>Axios – for HTTP requests</li>
                            <li className='text-sm list-disc list-inside font-sans'>Socket.IO/WebSockets – for real-time chat or notifications</li>
                            <li className='text-sm list-disc list-inside font-sans'>Cloudinary – for image hosting</li>
                        </ul>

                        <h2 className='text-3xl font-medium  p-2 text-slate-300'>Key Features</h2>
                        <ul>
                            <li className='text-sm list-disc list-inside font-sans'>
                                <strong className='text-lg font-sans'>User Authentication:</strong> Sign up and login using email or
                                username with JWT-based session management.
                            </li>
                            <li className='text-sm list-disc list-inside font-sans'>
                                <strong className='text-lg font-sans'>User Profiles:</strong> Profile page with avatar, bio, and post
                                gallery.
                            </li>
                            <li className='text-sm list-disc list-inside font-sans'>
                                <strong className='text-lg font-sans'>Image Posts:</strong> Upload photos with captions; stored on the
                                backend and served via Cloudinary.
                            </li>
                            <li className='text-sm list-disc list-inside font-sans'>
                                <strong className='text-lg font-sans'>Feed &amp; Gallery:</strong> Feed showing recent posts from users
                                you follow.
                            </li>
                            <li className='text-sm list-disc list-inside font-sans'>
                                <strong className='text-lg font-sans'>Likes and Comments:</strong> Like/unlike posts, comment, and edit
                                or delete your comments.
                            </li>
                            <li className='text-sm list-disc list-inside font-sans'>
                                <strong className='text-lg font-sans'>Follow/Unfollow:</strong> Follow users, see followers/following,
                                and affect feed content.
                            </li>
                            <li className='text-sm list-disc list-inside font-sans'>
                                <strong className='text-lg font-sans'>Search Functionality:</strong> Search users by name or username.
                            </li>
                            <li className='text-sm list-disc list-inside font-sans'>
                                <strong className='text-lg font-sans'>Private Messaging:</strong> Optional chat via WebSockets.
                            </li>
                            <li className='text-sm list-disc list-inside font-sans'>
                                <strong className='text-lg font-sans'>Notifications:</strong> Alerts for likes, follows, and comments.
                            </li>
                            <li className='text-sm list-disc list-inside font-sans'>
                                <strong className='text-lg font-sans'>Extras:</strong> Password reset, bookmarking, hashtags, and
                                responsive design.
                            </li>
                        </ul>

                        <h2 className='text-3xl font-medium  p-2 text-slate-300'>Code Structure and Organization</h2>
                        <p className='text-lg font-sans p-2  inset-7'>
                            While the exact folder layout of <em>jagdishsinghboura/instagram-clone</em>{" "}
                            isn’t visible, most full-stack clones follow a clear organization. Typically
                            the project has separate directories for frontend and backend code.
                        </p>

                        <pre>
                            {'backend/
├─ app.js            (Express app setup)
├─ routes/
│   ├ userRoutes.js
│   └ postRoutes.js
├─ models/
│   ├ User.js
│   └ Post.js
├─ config/
│   └ db.js         (database connection)
├─ middleware/
│   └ auth.js       (JWT auth middleware)
└─ .env             (environment variables)
'}
                        </pre>

                        <p className='text-lg font-sans p-2  inset-7'>
                            The frontend uses a <code>src/</code> directory containing components,
                            pages, and assets. Routing is handled by <code>react-router-dom</code>, and
                            state management uses React Context or Redux.
                        </p>

                        <h2 className='text-3xl font-medium  p-2 text-slate-300'>State Management and Routing</h2>
                        <p className='text-lg font-sans p-2  inset-7'>
                            For client-side routing, <strong className='text-lg font-sans'>React Router</strong> is used. It allows
                            defining routes like <code>/profile/:id</code> and <code>/post/:id</code>{" "}
                            without full reloads. State is managed using React hooks or Redux. On the
                            backend, Express handles routing (<code>POST /api/users/register</code>,{" "}
                            <code>GET /api/posts/feed</code>) and JWT middleware protects private
                            routes.
                        </p>

                        <h3 className='text-2xl font-medium  p-2 text-slate-300'>Strengths</h3>
                        <ul>
                            <li className='text-sm list-disc list-inside font-sans'>Modern MERN/TypeScript tech stack.</li>
                            <li className='text-sm list-disc list-inside font-sans'>Core social media features implemented cleanly.</li>
                            <li className='text-sm list-disc list-inside font-sans'>Separation between client and server for scalability.</li>
                            <li className='text-sm list-disc list-inside font-sans'>Good potential for UI improvements with Tailwind or Material-UI.</li>
                        </ul>


                        <h2 className='text-3xl font-medium  p-2 text-slate-300'>Comparison to Original Instagram</h2>
                        <p className='text-lg font-sans p-2  inset-7'>
                            This project mirrors Instagram’s basic features — posting, liking,
                            following, and commenting — but lacks advanced capabilities such as Stories,
                            Reels, live streaming, and large-scale optimization. The UI and performance
                            are simpler, as most clones target web or student-level applications rather
                            than mobile-first billion-user platforms.
                        </p>

                        <p className='text-lg font-sans p-2  inset-7'>
                            Still, this clone effectively demonstrates how social media mechanics work
                            in a full-stack JavaScript ecosystem and serves as a strong educational
                            project or portfolio piece.
                        </p>
                    </div>`,
    image:"/instagram_clone.png",
    githubLink:"https://github.com/jagdishsinghboura/instagram-clone",
    liveLink:"https://instagram-clone-rho-eight.vercel.app/",
  },
  {
    heading:"Animate Clone Frontend ",
    summary:` The Animated-Website project is a responsive landing-page that clones the WizardZ digital marketing site to showcase advanced GSAP-powered animation skills
repos.ecosyste.ms
. It is built with HTML, CSS, and JavaScript and uses the GSAP (GreenSock) library to recreate the original site’s sleek, animated design with smooth, scroll-triggered effects. Core features include high-performance animations and a modern, responsive layout, demonstrating proficiency in contemporary front-end web development practices.`,
    description:`
    <h1 className='w-full text-3xl font-mono text-slate-300'>Animated Frontend</h1>
    <p className='text-lg font-sans p-2  inset-7'>The Animated-Website project is a responsive landing-page that clones the WizardZ digital marketing site to showcase advanced GSAP-powered animation skills
repos.ecosyste.ms
. It is built with HTML, CSS, and JavaScript and uses the GSAP (GreenSock) library to recreate the original site’s sleek, animated design with smooth, scroll-triggered effects. Core features include high-performance animations and a modern, responsive layout, demonstrating proficiency in contemporary front-end web development practices.</p>`,
    image:"/animated_website.png",
    githubLink:"https://github.com/jagdishsinghboura/animated-website",
    liveLink:"",
  },

  
]
// {
//   heading:"My Task",
//   content:"The MyTask project is a task management web application designed to help users organize and track their daily activities efficiently. It features functionalities such as task creation, updating, deletion, and marking tasks as completed. The project implements user authentication for secure access, ensuring personalized task management. Built with React, TypeScript, and Tailwind CSS on the frontend, and Node.js, Express.js, and Prisma on the backend, it follows modern web development practices. The application is deployed on Vercel for seamless accessibility. 🚀",
//   image:"",
//   githubLink:"https://github.com/jagdishsinghboura/mytask",
//   liveLink:"https://mytask-rust.vercel.app/",
// },
//   {
//   heading:"My Listing ",
//   content:"The Listing project is a backend application developed by jagdishsinghboura. It utilizes JavaScript (50.2%), EJS (27.5%), and CSS (22.3%) to manage and serve data effectively. The project structure includes directories such as controllers, models, routes, and views, indicating a well-organized MVC architecture. Additional folders like public and uploads suggest functionalities for serving static files and handling file uploads. Configuration files like .env and cloudConfig.js are present, highlighting the use of environment variables and cloud services.",
//   image:"",
//   githubLink:"https://github.com/jagdishsinghboura/Listing",
//   liveLink:"",
// },
// {
//   heading:"University-library",
//   content:"The university-library-JB project, developed by jagdishsinghboura, is a web application designed to manage university library resources efficiently. Built with Next.js, it leverages modern web development practices for server-side rendering and seamless user experiences. The project's structure includes directories such as components, constants, database, and lib, indicating a modular and organized codebase. Configuration files like drizzle.config.ts, eslint.config.mjs, and tailwind.config.ts suggest the use of tools like Drizzle ORM, ESLint, and Tailwind CSS for database management, code linting, and styling, respectively. Deployment configurations point towards hosting on platforms like Vercel, ensuring scalability and reliability.",
//   image:"",
//   githubLink:"https://github.com/jagdishsinghboura/university-library-JB",
//   liveLink:"https://university-library-jb.vercel.app/",
// },


