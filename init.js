// Extrauppgift: Fixa så att headern och footern laddas in i varje sida från denna fil


 let header = document.getElementsByTagName("header")[0].innerHTML = `
      <nav class="navbar navbar-expand-lg luxury-navbar mb-3">
        <div class="container-fluid">
          
          <img src="images/logo.png" alt="Optimus Auto Market Logo" class="navbar-brand logo">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="index.html">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="cars.html">cars</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="AboutUs.html">About Us</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>`

    let footer = document.getElementsByTagName("footer")[0].innerHTML = `
    <div class="luxury-footer card text-center">
  <h5 class="card-header">Optimus Auto Market</h5>
  <div class="card-body">
    <h5 class="card-title">Contact Information</h5>
    <p class="card-text">123 Auto Street, Car City<br>Email: info@optimusautomarket.com<br>Phone: (123) 456-7890</p>
    <a href="#" class="btn luxury-btn">Top page</a>
  </div>
</div>`
