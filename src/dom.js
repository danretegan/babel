console.log("dom.js file");

const body = document.querySelector("body");

const styleBody = () => {
  body.style.background = "aqua";
};

const addTitle = (text) => {
  const title = document.createElement("h1");
  title.textContent = text;
  body.appendChild(title);
};

const contact = "danretegan@yahoo.com";

export { styleBody, addTitle, contact };
