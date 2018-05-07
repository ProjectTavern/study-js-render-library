let data = {
    title: "My list",
    list: [2, 10.3, 77, -44, -5.5]

};

let tmpl = $.templates({
    markup: "#myTemplate",
    allowCode: true
});

let html = tmpl.render(data);

$("#result").html(html);
