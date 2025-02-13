<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Photo Store Project - README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2, h3 {
      color: #444;
    }
    code {
      background-color: #f4f4f4;
      padding: 2px 5px;
      border-radius: 3px;
      font-family: monospace;
    }
    pre {
      background-color: #f4f4f4;
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
    }
    a {
      color: #007BFF;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <h1>Photo Store Project 📸</h1>
  <p>Welcome to the <strong>Photo Store</strong> project! This is a simple web application built using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>. It allows users to upload, view, and manage photos, with data stored locally in the browser using <strong>localStorage</strong>.</p>

  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#technologies-used">Technologies Used</a></li>
    <li><a href="#setup-and-installation">Setup and Installation</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#how-it-works">How It Works</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ul>

  <h2 id="features">Features ✨</h2>
  <ul>
    <li><strong>Photo Upload</strong>: Users can upload photos from their device.</li>
    <li><strong>Photo Gallery</strong>: Display uploaded photos in a responsive gallery.</li>
    <li><strong>Local Storage</strong>: Photos and their metadata are stored in the browser's <code>localStorage</code>.</li>
    <li><strong>Delete Photos</strong>: Users can delete photos from the gallery.</li>
    <li><strong>Responsive Design</strong>: The application works seamlessly on all devices.</li>
  </ul>

  <h2 id="technologies-used">Technologies Used 💻</h2>
  <ul>
    <li><strong>HTML5</strong>: For structuring the web pages.</li>
    <li><strong>CSS3</strong>: For styling and layout.</li>
    <li><strong>JavaScript</strong>: For interactivity and managing <code>localStorage</code>.</li>
    <li><strong>localStorage</strong>: For storing photos and data locally in the browser.</li>
  </ul>

  <h2 id="setup-and-installation">Setup and Installation 🛠️</h2>
  <ol>
    <li><strong>Clone the Repository</strong>:
      <pre><code>git clone https://github.com/your-username/photo-store.git</code></pre>
    </li>
    <li><strong>Navigate to the Project Directory</strong>:
      <pre><code>cd photo-store</code></pre>
    </li>
    <li><strong>Open the Project</strong>:
      <ul>
        <li>Open the <code>index.html</code> file in your browser.</li>
        <li>Alternatively, use a live server extension in your code editor (e.g., VS Code) to run the project.</li>
      </ul>
    </li>
  </ol>

  <h2 id="project-structure">Project Structure 📂</h2>
  <pre>
photo-store/
├── index.html          # Main HTML file
├── styles/             # CSS styles folder
│   └── style.css       # Main stylesheet
├── scripts/            # JavaScript folder
│   └── main.js         # Main JavaScript file
├── images/             # Folder for uploaded photos (dynamically managed)
├── README.html         # Project documentation (this file)
└── LICENSE             # License file (if applicable)
  </pre>

  <h2 id="how-it-works">How It Works 🧠</h2>
  <ul>
    <li><strong>Photo Upload</strong>: Users can upload photos using an <code>&lt;input type="file"&gt;</code> element. The photos are converted to a base64 string and stored in <code>localStorage</code>.</li>
    <li><strong>Photo Gallery</strong>: The gallery dynamically displays photos stored in <code>localStorage</code>.</li>
    <li><strong>Delete Photos</strong>: Users can delete photos, which removes them from both the gallery and <code>localStorage</code>.</li>
  </ul>

  <h2 id="contributing">Contributing 🤝</h2>
  <p>Contributions are welcome! If you'd like to contribute to this project, please follow these steps:</p>
  <ol>
    <li>Fork the repository.</li>
    <li>Create a new branch (<code>git checkout -b feature/your-feature</code>).</li>
    <li>Commit your changes (<code>git commit -m 'Add some feature'</code>).</li>
    <li>Push to the branch (<code>git push origin feature/your-feature</code>).</li>
    <li>Open a pull request.</li>
  </ol>

  <h2 id="license">License 📜</h2>
  <p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>

  <hr>
  <p>Enjoy managing your photos with the <strong>Photo Store</strong> project! 📷✨</p>

</body>
</html>
