var index = 0;

const testimonials = [
    {
        image: "./assets/avatar/man-1.png",
        name: "Maxie James",
        testimony: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur asperiores quaerat dolores hic, ullam officia quas ea dolor similique non sequi blanditiis vero ad est minima sapiente iusto, expedita cum."
    },

    {
        image: "./assets/avatar/woman-1.png",
        name: "Courtney Tremor",
        testimony: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur asperiores quaerat dolores hic, ullam officia quas ea dolor similique non sequi blanditiis vero ad est minima sapiente iusto, expedita cum."
    },

    {
        image: "./assets/avatar/man-2.png",
        name: "Jacques Tally",
        testimony: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur asperiores quaerat dolores hic, ullam officia quas ea dolor similique non sequi blanditiis vero ad est minima sapiente iusto, expedita cum."
    }
]

function getImage() {
  switch (index) {
    case 0:
      return "assets/banner/college.jpg";
    case 1:
      return "assets/banner/college-students.jpg";
    default:
      return "assets/banner/offices.jpg";
  }
}

function setSource() {
  const bannerIMG = document.getElementById("bannerIMG");
  bannerIMG.src = getImage();
}

function getNextImage() {
  index = (index + 1) % 3;
  setSource();
}

function getPrevImage() {
  switch (index) {
    case 0:
      index = 2;
      break;
    case 1:
      index = 0;
      break;
    default:
      index = 1;
      break;
  }
  setSource();
}

function setTestimonyData(){
    var data = "<h2>Testimonials</h2>";
    testimonials.forEach((entry) => {
        data += `<div class="testimonialCard">
        <img src="${entry.image}" alt="${entry.name}" class="testimonialProfile"/>
        <div>
            <strong class="testimonialName">${entry.name}</strong>
            <p>
            ${entry.testimony}
            </p>
        </div>
        </div>`;
    })

    data += "<button style='background-color: #1976d2; color: #ffffff; padding: 10px 5px; border-radius: 10px'><strong>Show More</strong></button>"
    
    document.getElementById("testimony-display").innerHTML = data;
}

setSource();
setTestimonyData();