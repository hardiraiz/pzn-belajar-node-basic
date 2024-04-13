import Mustache from "mustache";
import fs from "fs/promises";

test('Mustache File', async() => {
    const helloTemplate = await fs.readFile("./templates/hello.mustache")
        .then(data => data.toString());
    
    const data = Mustache.render(helloTemplate, {
        title: "Hardi"
    });

    console.info(data);
    expect(data).toContain('Hardi');
});

test('Section Not Show, Inverted', async () => {
    const helloTemplate = await fs.readFile("./templates/person.mustache")
        .then(data => data.toString());
    
    const data = Mustache.render(helloTemplate, {});

    console.info(data);
    expect(data).not.toContain("Hello Person");
});

test('Section Show', async () => {
    const helloTemplate = await fs.readFile("./templates/person.mustache")
        .then(data => data.toString());
    
    const data = Mustache.render(helloTemplate, {
        person: {
            name: 'Hardi'
        }
    });

    console.info(data);
    expect(data).toContain("Hello Person");
});

test('Section Data', async () => {
    const helloTemplate = await fs.readFile("./templates/person.mustache")
        .then(data => data.toString());
    
    const data = Mustache.render(helloTemplate, {
        person: {
            name: 'Hardi'
        }
    });

    console.info(data);
    expect(data).toContain("Hello Person Hardi");
});

test('List Data', async () => {
    const hobbiesTemplate = await fs.readFile("./templates/hobbies.mustache")
        .then(data => data.toString());

    const data = Mustache.render(hobbiesTemplate, {
        hobbies: ["Coding", "Template", "Mustache"]
    });

    console.info(data);
    expect(data).toContain("Coding");
});

test('List Object', async () => {
    const studentsTemplate = await fs.readFile("./templates/students.mustache")
        .then(data => data.toString());

    const data = Mustache.render(studentsTemplate, {
        students: [
            { name: 'Hardi', value: 100 },
            { name: 'Raiz', value: 95 }
        ]
    });

    console.info(data);
    expect(data).toContain("Hardi");
});

test('Comment', async () => {
    const studentsTemplate = await fs.readFile("./templates/comment.mustache")
        .then(data => data.toString());

    const data = Mustache.render(studentsTemplate, {
        title: 'Komentar Pada Mustache'
    });

    console.info(data);
    expect(data).toContain("Komentar Pada Mustache");
});

test('Partials', async () => {
    const headerTemplates = await fs.readFile("./templates/header.mustache")
        .then(data => data.toString());
    const footerTemplates = await fs.readFile("./templates/footer.mustache")
        .then(data => data.toString());
    const contentTemplates = await fs.readFile("./templates/content.mustache")
        .then(data => data.toString());

    /* 
        Parameter Render
        Pertama template yang dirender
        Kedua value yang dikirim ke template
        Ketiga value dari partial atau template yang lain
    */
    const data = Mustache.render(contentTemplates, {
        title: "Belajar Partials",
        content: "M Hardi Raiz"
    }, {
        header: headerTemplates,
        footer: footerTemplates
    });

    console.info(data);
    expect(data).toContain('Belajar Partials');
    expect(data).toContain('M Hardi Raiz');
    expect(data).toContain('Programmer Zaman Now');
});
