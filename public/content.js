// This file is injected as a content script
const header = document.createElement("h1");
header.innerHTML = "Christmas!";

const body = document.getElementsByTagName("body");
body[0]?.prepend(header);