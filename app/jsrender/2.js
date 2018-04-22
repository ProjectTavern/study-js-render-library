const myTemplate = $.templates("#peopleTmpl");

const people = [
    {
        name: "Adriana"
    },
    {
        name: "Robert",
        nickname: "Bob"
    }
];

const app = {
    people: people
};
console.log( app );

const html = myTemplate.render( app );

$("#peopleList").html( html );
