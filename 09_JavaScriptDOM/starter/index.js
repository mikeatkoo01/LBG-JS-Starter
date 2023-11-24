const colours = ['red', 'green', 'blue', 'orange', 'lime', 'olive', 'black', 'yellow'];

const newParagraph = document.createElement("p");


document.body.appendChild(newParagraph);

const newheading = document.createElement("h1")

document.body.appendChild(newheading);

newheading.textContent = "First Heading";

newheading.style.color = "red"

newheading.style.color = "blue"




const addTenParagraph = () => {

    for (let i = 0; i <= 10; i++) {

       let newpara = document.createElement("P")

        newpara.textContent = `This is paragraph:${i}`;

        document.body.appendChild(newpara)

        newpara.style.color ="red"
    }
}






// this is a loop for 10 paragraphs, This is paragraph:${i}`; temple litral



