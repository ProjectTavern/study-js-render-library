$.templates("highness", {
    markup: "#hcCode",
    converters: {
        upper: val => val.toUpperCase()
    },
    helpers: {
        append: ( prefix, content ) => prefix + content
    }
});

const human = {
    name: "Crowny"
};

const html = $.render.highness( human );
$("#helperconverter").html( html );
