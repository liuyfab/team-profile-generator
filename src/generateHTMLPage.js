function generateHTMLPage(employeeArr){
    console.log(employeeArr);
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <div>Manager </div>
        <div>Employee </div>
        <div>Intern </div>
    </body>
    </html>`;
}

module.exports = generateHTMLPage;