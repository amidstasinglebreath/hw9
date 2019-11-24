function startHTML() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team</title>
    </head>
    <body>
        <header class="nav justify-content-center bg-info mb-2">
            <h1>My Team</h1>
        </header>`;
}

function fillHTML(data) {
    return ` <div class="card m-2" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title" id="name">${data.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Role: <span id="role">${data.role}</span></h6>
        <p class="card-text">
            <ul class="list-group">
                <li class="list-group-item">ID #: <span id="identity">${data.id}</span></li>
                <li class="list-group-item">Email:<span id="email">${data.email}</span> </li>
            </ul>
        </p>
    </div>
    </div>`;
}

function endHTML() {
    return `</body>

    </html>`;
}

module.exports = startHTML;
module.exports = fillHTML;
module.exports = endHTML;