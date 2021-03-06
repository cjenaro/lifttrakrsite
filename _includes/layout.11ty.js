module.exports = ({ content }) => /*html*/ `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Lift Trakr</title>
        <link rel="stylesheet" href="/css/global.css" />
        <link rel="icon" type="image/png" href="favicon.ico" />

        <meta name="description" content="Anotá tus pesos maximos y calcula la cantidad de repeticiones que necesitas hacer."/>
    </head>
    <body>
        <main>
            ${content}
        </main>
    </body>
</html>
`;
