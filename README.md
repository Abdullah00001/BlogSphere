# Blog Sphere

**Version**: 1.0

## Introduction

**Blog Sphere** is a dynamic blogging platform that allows users to create, update, delete, and interact with blogs. Users can follow other bloggers, like and comment on posts, save blogs for future reading, and view a personalized feed of content based on their activity. The platform also features user profile management and topic-based filtering. 

Future enhancements will include personalized feeds, an admin dashboard, and premium subscription features.

## Features

- **Create, Update, and Delete Blogs**: Users can create blog posts with text, images, and multimedia, edit them, or delete them.
- **View Blogs**: Users can view all blogs or specific blogs by ID.
- **Like and Comment**: Users can like and comment on blog posts.
- **Follow Users**: Users can follow other bloggers and view their posts (coming soon).
- **Save Blogs**: Users can save blogs for reading later.
- **Reading History**: Automatically track which blogs a user has read.
- **Filter Blogs**: Filter blogs by topic or by time (latest or oldest).
- **User Profiles**: Users can create and manage profiles, including fields like name, bio, address, and work details.

## Upcoming Features

- **Personalized Feed**: Posts from followed users and posts based on user interactions will show in the user’s feed.
- **Admin Dashboard**: Admin features for managing users, posts, and reports.
- **Reporting System**: Users can report inappropriate posts or users.
- **Premium Subscription**: Paid features and exclusive content for premium users.

## Technologies Used

### Frontend

- **React.js**: For building interactive, dynamic user interfaces.
- **Tailwind CSS**: For styling the UI components.

### Backend

- **Express.js**: For handling server-side logic and API routes.
- **Node.js**: Backend runtime environment for executing JavaScript on the server.
- **MongoDB**: NoSQL database used for storing user data, blog posts, comments, likes, etc.

### Other Tools & Services

- **Cloudinary**: For image hosting and cloud storage of media files.
- **JWT (JSON Web Tokens)**: For secure user authentication and authorization.
- **Git & GitHub**: For version control and collaborative development.
- **Vercel**: For deployment and hosting the frontend.
- **Heroku**: For deploying and hosting the backend.
  
## Installation and Setup

### Prerequisites

- Node.js and npm installed.
- MongoDB installed and running locally or access to a MongoDB instance.
- Cloudinary account for image storage.
- Git installed.

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Abdullah00001/BlogSphere.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd BlogSphere/backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables by creating a `.env` file in the `backend` folder and adding the following:
   ```
   PORT=5000
   MONGO_URI=your_mongo_db_uri
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```
5. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and configure:
   ```
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```
4. Start the development server:
   ```bash
   npm start
   ```

### Running the Project Locally

Once both the frontend and backend servers are running, you can visit the application at `http://localhost:3000`.

### Deployment

**Frontend**: The frontend is deployed on **Vercel**.

**Backend**: The backend is deployed on **Vercel**.

To deploy the project, follow the respective deployment guidelines of [Vercel](https://vercel.com/docs)

## API Endpoints

| Method | Endpoint                     | Description                   |
|--------|------------------------------|-------------------------------|
| POST   | `/api/blogs`                  | Create a new blog post         |
| GET    | `/api/blogs`                  | Get all blog posts             |
| GET    | `/api/blogs/:id`              | Get a single blog post by ID   |
| PUT    | `/api/blogs/:id`              | Update a blog post             |
| DELETE | `/api/blogs/:id`              | Delete a blog post             |
| POST   | `/api/users/:id/follow`       | Follow another user            |
| POST   | `/api/blogs/:id/like`         | Like a blog post               |
| POST   | `/api/blogs/:id/comment`      | Comment on a blog post         |
| POST   | `/api/users/save-blog`        | Save a blog for later reading  |
| GET    | `/api/users/history`          | Get user’s reading history     |

## Version Control

This project uses **Git** for version control, and the repository is hosted on **GitHub** at [BlogSphere Repository](https://github.com/Abdullah00001/BlogSphere).

### Branches

- **main**: Stable version of the app.
- **development**: For active development and feature additions.

## Contributing

1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add your feature'`.
4. Push to your branch: `git push origin feature/your-feature-name`.
5. Open a pull request on GitHub.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or suggestions, feel free to contact:

- **Abdullah Bin Omar Chowdhury**: [abdullahbinomarchowdhury02@gmail.com](mailto:abdullahbinomarchowdhury02@gmail.com)
- GitHub: [Abdullah00001](https://github.com/Abdullah00001)

---
