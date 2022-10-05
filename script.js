// value that deterimines current banner image
var index = 0;

// student testimonials
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

//pricing data
const pricing = [
    {
        image: "./assets/pricing/basic.png",
        name: "Basic",
        features: [
            {
                name: "Recorded Classes",
                availability: 1
            },
            {
                name: "Doubt Solving Classes",
                availability: 1
            },
            {
                name: "Study Material",
                availability: 0
            },
            {
                name: "Live Classes",
                availability: 0
            },
            {
                name: "Test Papers",
                availability: 0
            },
        ]
    },

    {
        image: "./assets/pricing/advanced.png",
        name: "Advanced",
        features: [
            {
                name: "Recorded Classes",
                availability: 1
            },
            {
                name: "Doubt Solving Classes",
                availability: 1
            },
            {
                name: "Study Material",
                availability: 1
            },
            {
                name: "Live Classes",
                availability: 1
            },
            {
                name: "Test Papers",
                availability: 1
            },
        ]
    },

    {
        image: "./assets/pricing/custom.png",
        name: "Custom",
        features: [
            {
                name: "Recorded Classes",
                availability: 2
            },
            {
                name: "Doubt Solving Classes",
                availability: 2
            },
            {
                name: "Study Material",
                availability: 2
            },
            {
                name: "Live Classes",
                availability: 2
            },
            {
                name: "Test Papers",
                availability: 2
            },
        ]
    }
]

const attributions = [
    // availability
    {
        name: "klwir art",
        link: "https://www.flaticon.com/authors/kliwir-art",
        attributeFor: "assets/availability/available.png"
    },

    {
        name: "Pixel Perfect",
        link: "https://www.flaticon.com/authors/pixel-perfect",
        attributeFor: "assets/availability/not-applicable.png"
    },

    {
        name: "Pixel Perfect",
        link: "https://www.flaticon.com/authors/pixel-perfect",
        attributeFor: "assets/availability/unavailable.png"
    },

    // avatar
    {
        name: "Internet Search",
        link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hAvqPPsKmzogXulPg8HVqQHaME%26pid%3DApi&f=1&ipt=3a7ff22c9d26c7fd050472ca925c970cc6bf9f4c3667fae4a9100c4c1cf4b845&ipo=images",
        attributeFor: "assets/avatar/man-1.png"
    },

    {
        name: "Internet Search",
        link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.g2QL3Nv8j-BzQV-d3FJPXQHaKg%26pid%3DApi&f=1&ipt=14d1fb34e595d7cd0309e111082c3e68c55a870cb26edc61f8f70869f0baca0f&ipo=images",
        attributeFor: "assets/avatar/man-2.png"
    },

    {
        name: "Internet Search",
        link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DKvqsGoTKBkDYbLRHlxLZQHaKQ%26pid%3DApi&f=1&ipt=241485d15067dbb87422f6da8dc8f0963d6bf661448b54f3f00c0dad3d5735cc&ipo=images",
        attributeFor: "assets/avatar/woman-1.png"
    },

    // banner
    {
        name: "marcela_net",
        link: "https://pixabay.com/users/marcela_net-9103609/",
        attributeFor: "assets/banner/college-students.jpg"
    },

    {
        name: "sativis",
        link: "https://pixabay.com/users/sativis-18702/",
        attributeFor: "assets/banner/college.jpg"
    },

    {
        name: "Inactive account – ID 12019",
        link: "https://pixabay.com/users/12019-12019/",
        attributeFor: "assets/banner/offices.jpg"
    },

    // logo
    {
        name: "Ilham Fitrotul Hayat",
        link: "https://www.flaticon.com/authors/ilham-fitrotul-hayat",
        attributeFor: "assets/logo/logo.png"
    },

    // navigator
    {
        name: "icon_small",
        link: "https://www.flaticon.com/authors/icon-small",
        attributeFor: "assets/navigator/before.png"
    },

    {
        name: "icon_small",
        link: "https://www.flaticon.com/authors/icon-small",
        attributeFor: "assets/navigator/next.png"
    },

    // pricing
    {
        name: "Flat Icons",
        link: "https://www.flaticon.com/authors/flat-icons",
        attributeFor: "assets/pricing/advanced.png"
    },

    {
        name: "lutfix",
        link: "https://www.flaticon.com/authors/lutfix",
        attributeFor: "assets/pricing/basic.png"
    },

    {
        name: "Freepik",
        link: "https://www.flaticon.com/authors/freepik",
        attributeFor: "assets/pricing/custom.png"
    }
]

// return image source to display in card data 
function getPricingImageSrc(inp){
    switch(inp){
        case 0: return "./assets/availability/unavailable.png"
        case 1: return "./assets/availability/available.png";
        default: return "./assets/availability/not-applicable.png";
    }
}

// returns image data based on index's value
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

// function to set banner image source
function setSource() {
  const bannerIMG = document.getElementById("bannerIMG");
  bannerIMG.src = getImage();
}

// get next image for banner
function getNextImage() {
  index = (index + 1) % 3;
  setSource();
}

// get previous image for banner
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

// sets data in testimony div
function setTestimonyData(){
    var data = "<h2>Testimonials</h2>";

    // set cards for each testimony
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

    data += `<button class='button-primary' onClick="alert('No more testimony data to display in demo site')"><strong>Show More</strong></button>`
    
    // set data in testimony display
    document.getElementById("testimony-display").innerHTML = data;
}

// function to add cards to card-holder div
function planCardFiller(){
    let data = "";

    // add card to data
    pricing.forEach((entry) => {
        data += `
        <div class="plan-card">
        <div class="plan-card-header">
            <img src=${entry.image} alt=${entry.name} class="plan-card-image" />
            <h2>${entry.name}</h2>
        </div>
        <div style="width: 100%;">
        `

        entry.features.forEach((feature) => {

            data += `
            <p class="plan-card-data">
                <span>${feature.name}</span>
                <img style="width: 20px; height: 20px;" src="${getPricingImageSrc(feature.availability)}" alt="available"/>
            </p>
            `
        })

        data += `</div>
        <button class="button-primary" style="width: 50%" onClick="alert('This is a demo site and no transaction can be made.')">
            <strong>
                Buy
            </strong>
        </button>
    </div>
        `
    })

    // add data to pricing-container div
    document.getElementById("pricing-container").innerHTML = data;
}

// function to fill footer-attributions div
function attributionsFiller(){
    let data = "";

    attributions.forEach((entry) => {
        data += `
            <p>
                <a href=${entry.link} style="color: #ffffff">${entry.name}</a>
            </p>
        `;
    })

    document.getElementById("footer-attributions").innerHTML = data;
}

// set initial banner image source
setSource();

// set testimony data
setTestimonyData();

// set plans data
planCardFiller();

// fill atrributions display
attributionsFiller();