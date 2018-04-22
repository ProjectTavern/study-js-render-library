const personTmpl = $.templates("#4privateSubTemplateTpl");
$.templates("labelTmpl",
    "<label>Name: </label>", personTmpl);

const person = {name: "Robert"};
console.log($("#privateSubTemplate"));
const html = personTmpl.render(person);

$("#privateSubTemplate").html(html);
