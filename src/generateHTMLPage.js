function generateManagerCard(employeeInfo){
return `<div class="card md-col-3">
    <div class="card-header">
      <h4 class="card-title,name">${employeeInfo.getName()}</h4>
      <h4 class="card-title,role ">${employeeInfo.getRole()}</h4>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${employeeInfo.getId()}</li>
      <li class="list-group-item">Email:${employeeInfo.getEmail()}<a href="${employeeInfo.getEmail()}" class="card-link"></a></li>
      <li class="list-group-item">Office Number: ${employeeInfo.getOfficeNumber()}</li>
    </ul>
</div>
`
}

function generateEngineerCard(employeeInfo){
    return ` <!--engineer card-->
    <div class="card md-col-3">
        <div class="card-header">
        <h4 class="card-title,name">${employeeInfo.getName()}</h4>
        <h4 class="card-title,role ">${employeeInfo.getRole()}</h4>
        </div>
        <ul class="list-group list-group-flush">
           <li class="list-group-item">ID: ${employeeInfo.getId()}</li>
           <li class="list-group-item">Email: ${employeeInfo.getEmail()}<a href="${employeeInfo.getEmail()}" class="card-link"></a></li>
           <li class="list-group-item">Github:${employeeInfo.getGithub()}</li>
        </ul>
     </div>`; 
}

function generateInternCard(employeeInfo){
    return ` <!--Intern card-->
    <div class="card md-col-3">
        <div class="card-header">
        <h4 class="card-title,name">${employeeInfo.getName()}</h4>
        <h4 class="card-title,role ">${employeeInfo.getRole()}</h4>
        </div>
        <ul class="list-group list-group-flush">
           <li class="list-group-item">ID: ${employeeInfo.getId()}</li>
           <li class="list-group-item">Email: ${employeeInfo.getEmail()}<a href="${employeeInfo.getEmail()}" class="card-link"></a></li>
           <li class="list-group-item">School:${employeeInfo.getSchool()}</li>
        </ul>
     </div>`; 
}

function generateHTMLPage(employeeArr){
    console.log("All employees", employeeArr);
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="./style.css" />
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="jumbotron">My Team</header>
        <main class="container">
            <!--team members cards holder-->
            <div id="card-section" class = "row ">
            ${employeeArr.map(employee =>{
                console.log("Looping through all employees", employee.getRole()); 
                if(employee.getRole() === "Manager"){
                    return generateManagerCard(employee)
                } else if(employee.getRole() === "Engineer"){
                    return generateEngineerCard(employee)
                }else {
                    return generateInternCard(employee)
                }
            })}

            </div>
        </main>
    </body>
    </html>
    ` 

   
}

module.exports = generateHTMLPage;

