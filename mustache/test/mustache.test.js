import Mustache from "mustache";

test('Menggunakan Mustache', () => {
    const data = Mustache.render("Hello {{name}}", {name: "Hardi"});
    expect(data).toBe("Hello Hardi");
});

test('Mustache Cache, melakukan compile', () => {
    Mustache.parse("Hello, {{name}}"); // compile template ke memori agar penggunaan memori lebih ringan

    const data = Mustache.render("Hello {{name}}", {name: "Hardi"});
    expect(data).toBe("Hello Hardi");
});

test('Tags', () => {
    const data = Mustache.render("Hello {{name}}, my hobby is {{{hobby}}}", {
        name: "Hardi",
        hobby: "<b>Programming</b>"
    });

    expect(data).toBe("Hello Hardi, my hobby is <b>Programming</b>");
});

test('Nested Object', () => {
    const data = Mustache.render('Hello, {{person.name}}', {
        person: {
            name: 'Hardi'
        }
    });

    expect(data).toBe("Hello, Hardi");
});

test('Functions', async () => {
    const parameter = {
        name: 'Hardi',
        upper: () => {
            return (text, render) => { // render adalah parameter function bawaan dari mustache
                return render(text).toUpperCase();
            }
        }
    }

    const data = Mustache.render("Hello {{#upper}}{{name}}{{/upper}}", parameter);
    
    console.info (data);
    expect(data).toBe("Hello HARDI");
});
