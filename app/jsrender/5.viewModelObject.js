const tmpl = $.templates('#personTmpl');

function addPhone ( phoneNo ) {
    this.phones().push( Phone( phoneNo ) );
}

const Person = $.views.viewModels({
   getters: ["name", "address", "phones"],
   extend: {addPhone: addPhone}
});

const Address = $.views.viewModels({getters: ["street"]});
const Phone = $.views.viewModels({getters: ["number"]});

const person = Person(
    "Pete",
    Address("1st Ave"),
    [Phone("010-1111-1111"), Phone("010-2222-2222")]
);

$("#result").html(tmpl.render((person)));

$("#changeName").on("click", () => {
   person.name("newName");
   $("#result").html(tmpl.render(person));
});

$("#addPhone").on("click", () => {
    person.addPhone("xxx-xxxx-xxxx");
    $("#result").html(tmpl.render(person));
});
