const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="stylesheet" href="port.css">
    <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"> -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</head>
<body>
    <header class="header">
        <a href="#" class="logo">Portfolio</a>
        <nav class="navbar">
            <a href="#home" style="--i:1" class="active">Home</a>
            <a href="#about" style="--i:2" class="active">About</a>
            <a href="#skills"style="--i:3" class="active">Skills</a>
            <a href="#edu"style="--i:4"class="active">Education</a>
            <a href="#project"style="--i:5"class="active">Project</a>
            <a href="#contact"style="--i:6"class="active">Contact</a>
        </nav>
    </header>
    <section class="home" id="home">
        <div class="home-content">
            <h3>Hello, It's Me</h3>
            <h1>Nikhil Kumar Yadav</h1>
            <h3>And I'm a passionate to</h3>
            <span class="text"></span>
             <div class="home-sci">
                <div class="buttons">
                    <button class="btn-box1"z>Download Resume</button>
                    <button class="btn-box1">
                  <a href="https://github.com/nik-1718y" style="text-decoration: none;">Visit Github</a></button>
                  <button class="btn-box1">
                    <a href="https://leetcode.com/u/N_17k/" style="text-decoration: none;">Visit leetcode</a>
                  </button>
                </div>
             </div>
            </div>
             <div class="rightsection">
                <img src="nikhil.jpeg" alt="">
             </div>
    </section>
    <hr>
    <section class="about"id="about">
        <div class="about-img">
            <img  src="nikhil.jpeg" alt="">
  </div>
  <div class="about-text">
    <h2>About <span>Me</span></h2>
    <p>Hello! I'm Nikhil Kumar Yadav, a dynamic B.Tech student with a passion for web development, graphic design, and problem-solving. I thrive on transforming ideas into visually stunning and highly functional web solutions. My journey in the tech and design world is driven by a blend of creativity and analytical thinking, enabling me to tackle challenges with innovative approaches.</p>
    <a href="#" class="btn-box">More About Me</a>
  </div>
    </section>
    <section>
        <div class="project" id="project">
            <div class="container">
                <h1 class="sub-title"> My <span>Project</span></h1>
                <div class="project-list">
                    <div>
                        <i class='bx bx-calculator' style='color: aqua;'></i>
                        <h2>Calculator</h2>
                        <p>This project involves creating a simple, functional calculator using <span>HTML</span> for the structure, <span>CSS</span> for styling, and <span>JavaScript</span> for the logic and interactivity. The calculator can perform basic arithmetic operations such as addition, subtraction, multiplication, and division.</p>
                        <a href="#" class="read">Link to see</a>
                    </div>
                    <div>
                        <i class= 'bx bx-qr-scan' style='color: aqua;'></i>
                        <h2>QR code generator</h2>
                        <p>This project focuses on building a QR code generator using HTML for the structure, CSS for styling, and JavaScript for functionality. The generator allows users to input text or URLs and create corresponding QR codes</p>
                        <a href="file:///C:/Users/nikhi/Desktop/java/qr.htm" class="read">Link to see</a>
                    </div>
                    <div>
                        <i class=' bx bx-time'style='color: aqua;'></i>
                        <h2>Amazone Clone</h2>
                        <p>This project aims to create a basic clone of the Amazon website using HTML for the structure and CSS for styling. The clone will mimic the layout and design of the Amazon homepage, including the header, navigation bar, product listings, and footer.

                        </p>
                        <a href="file:///C:/Users/nikhi/Desktop/java/amzo.html" class="read">Link to see</a>
                    </div>
                </div>
            </div>
         </div>
        </section>
    
    <!-- <h1 class="sub-title">My <span>Skills</span></h1> -->
    <section class="skills" id="skills">
        <h1 class="sub-title">My <span>Skills</span></h1>
        <div class="container1" id="Skills">
             <h1 class="heading1">Technical Skills</h1>
             <ul class="omg">
                <!-- <li class="tech">Java</li> -->
                <img class="tech-img" src="p-80-java.webp" alt="">
                <!-- <li class="tech">HTML5</li> -->
                <img class="tech-img" src="free-html-5-1-1175208.webp" alt="">
                <!-- <li class="tech">CSS3</li> -->
                <img class="tech-img" src="CSS3_logo.svg.png" alt="">
                <!-- <li class="tech">Javascript</li> -->
                <img class="tech-img" src="javascript-logo-javascript-icon-transparent-free-png.webp" alt="">
                <!-- <li class="tech">React</li> -->
                <img class="tech-img" src="React-icon.svg.png" alt="">
                <!-- <li class="tech">C</li> -->
                <img class="tech-img" src="C_Logo.png" alt="">
                <!-- <li class="tech">Git and Github</li> -->
                <img class="tech-img" src="25231.png" alt="">

             </ul>
             <h1 class="heading1">Professional Skills</h1>
             <ul>
                <li class="tech">Communication Skills</li>
                <li class="tech">creativity</li>
                <li class="tech">Problem Solving</li>
                <li class="tech">Team-Work</li>
             </ul>      

    </div>
</section> 
<h1 class="sub-title">My <span>Qualification</span></h1>
<section class="edu" id="edu">
    <div class="card" style="width:27rem;">
        <div class="card-body">
          <h2 class="card-title">Bachelor of Technology(CSE)</h2>
          <h3 class="card-subtitle mb-2 text-muted">Babu Banarasi Das University,Lucknow</h3>
          <h4 class="card-text">2021-till present</h4>
          <h3 class="card-text">SCGPA 8/10</h3>
          <a href="#" class="read">Card link</a>
        </div>
    </div>
      <div class="card" style="width: 27rem;">
        <div class="card-body">
          <h2 class="card-title">Intermediate (CBSE)</h2>
          <h3 class="card-subtitle mb-2 text-muted">Saraswati Shishu Mandir Senior Secondary School,Gorakhpur</h3>
          <h4 class="card-text">2021</h4>
          <h3 class="card-text">Percentage:79%</h3>
          <a href="#" class="read">Card link</a>
        </div>
    </div>
      <div class="card" style="width: 27rem;">
        <div class="card-body">
          <h2 class="card-title">High School</h2>
          <h3 class="card-subtitle mb-2 text-muted">Saraswati Shishu Mandir Senior Secondary School,Gorakhpur</h3>
          <h4 class="card-text">2019</h4>
          <h3 class="card-text">Percentage:69%</h3>
          <a href="#" class="read">Card link</a>
        </div>
    </div>
</section>
    <section class="contact" id="contact">
        <div class="contact-text">
            <h2>Contact <span>Me</span></h2>
            <h4>Let's work together</h4>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum corrupti, at tenetur et, voluptates nostrum obcaecati, laboriosam quae deleniti molestiae incidunt voluptatem facere accusantium? Harum possimus quisquam doloribus quidem.</p>
            <div class="contact-list">
                <li><i class='bx bxs-send'></i>nikhilyadavmrj470@gmail.com</li>
                <li><i class='bx bxs-phone'></i> 9918332990</li>
            </div>
            <div class="contact-icons">
                <a href=""><i class='bx bxl-instagram'></i></a>
                <a href=""><i class='bx bxl-linkedin'></i></a>
                <!-- <a href=""><i class='bx bxl-instagram-circle'></i></a> -->
            </div>
        </div>
        <div class="contact-form">
            <form action="">
                <input type=""placeholder=" Enter Your Name" required>
                <input type=" email"placeholder=" Enter Your Name" required>
                <input type=""placeholder="Enter your Subject" required>
                <textarea name="" id="" cols="40" rows="10" placeholder="Enter Your Name"></textarea>
                <input type=" submit" value="submit"class="send">
            </form>
        </div>
    </section>
      
    <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script> 
    <script src="port.js"></script>

</body>
</html> `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

