const probGenre = document.getElementById("inputGenre");
const probName = document.getElementById("inputName");
const probLink = document.getElementById("inputLink");
const diffSelect = document.getElementById("inputDifficulty");
const langSelect = document.getElementById("inputLanguage");
const timeComplexitySelect = document.getElementById("inputTimeComplexity");
const spaceComplexitySelect = document.getElementById("inputSpaceComplexity");
const tagsSelect = document.getElementById("inputTags");
const outputMd = document.getElementById("output");

const genBtn = document.getElementById("btnId");

let genre,
    nameOfProblem,
    url,
    diff,
    lang,
    timeComplexity,
    spaceComplexity,
    tags,
    fileName;

genBtn.addEventListener("click", () => {
    genre = probGenre.value;
    nameOfProblem = probName.value;
    url = probLink.value;
    diff = diffSelect.value;

    if (langSelect.value === "Choose...") {
        alert("Enter a language!!");
    } else {
        lang = langSelect.value;
    }

    timeComplexity = timeComplexitySelect.value;
    spaceComplexity = spaceComplexitySelect.value;
    tags = tagsSelect.value;

    fileName = nameOfProblem.slice();
    fileName = fileName.replace(" ", "-");

    let mdStr = `|  [${nameOfProblem}](${url})                                                           | [${lang}](./${genre}/${fileName}.${lang})                                                                             | _O(${timeComplexity})_          | _O(${spaceComplexity})_                | ${diff}                 | ${tags}                        |`;

    outputMd.value = mdStr;
});
