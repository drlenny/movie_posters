var API_KEY = config.API_KEY;

let myForm = document.getElementById("myForm");

var posters = [];


function submitForm(event) {
    event.preventDefault();
    console.log(`Form submitted!`);
    let movieTitle = document.getElementById("movieTitle").value;
    console.log(movieTitle);

    fetch("http://www.omdbapi.com/?apikey=" + API_KEY + "&t=" + movieTitle)
        .then(response => response.json())
        .then(data => addPoster(data))
        .catch((error) => console.log("error", error));

    let addPoster = (data) => {
        console.log(data);
        if (data.Response === "False") {
            alert("Movie Not Found");
        } else {

            //create and get poster
            let poster = document.createElement("img");
            poster.src = data.Poster;

            //put posters into array
            posters.push(poster);
            console.log(posters);

            //create div containers for each new poster to put into
            posters.forEach(function(image){
                var div = document.createElement("div");
                div.className = "container";
                document.body.appendChild(div);
                div.appendChild(image);
            });



            //////////////////

            // let div = document.createElement("div");
            // div.className = "container";
            // document.body.appendChild(div);
            // let containers = document.querySelectorAll(".container");

            // let poster = document.createElement("img");
            // poster.src = data.Poster;


            // containers.forEach(function (data) {
            //         let test = document.createElement("h1");
            //         document.div.appendChild(test);
            //         test.innerHTML("test");
            //         document.body.appendChild(poster);
            //     })

        }

    }

    this.reset();
}

myForm.addEventListener("submit", submitForm);
