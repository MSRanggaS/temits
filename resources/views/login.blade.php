<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Login</title>

  <!-- bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" 
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <!-- external css -->
  <link rel="stylesheet" type="text/css" href="src/css/main.css">

  <!-- icon -->
  <script src="https://kit.fontawesome.com/f74dca3203.js" crossorigin="anonymous"></script>
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'> -->

  <!-- fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"> 

  <style>
    .login {
      width: 100%;
      min-height: 100vh;
      overflow: hidden;
    }
    .c-blue {
      color: #009dfb !important;
    }
    .img-cover {
      width: 100%;
      height: 100vh;
      overflow: hidden;
    }
    .login-bg {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
    .login-bg img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .overlay {
      margin-top: -100vh;
      padding: 4rem 3rem;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      width: 100%;
      height: 100vh;
      position: relative;
      background-color: #FFB20096;
    }
    .overlay a {
      width: max-content;
    }
    .overlay-text {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #fff;
    }
    .overlay-text h1 {
      font-size: 48px;
      font-weight: 600;
    }
    .overlay-text h5 {
      font-weight: 400;
      line-height: 2rem;
    }
    .input {
      padding: 3rem 3rem;
      color: #636363;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .title {
      padding: 0;
      font-size: 48px;
      color: #009dfb;
      background-color: #fff;
      font-weight: 600;
    }
    .input-login {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .input-group-text {
      color: #fff;
      background-color: #6C757D;
    }
    .form-control {
      background-color: #f6f8fc;
      border: none;
      font-weight: 300;
    }
    .btn-showpass {
      color: #6C757D;
      background-color: #f6f8fc;
    }
  </style>
</head>

<body class="login">
  <div class="row">
    <div class="col img-cover" style="background-color: #fff">
      <div class="login-bg">
        <img src="/src/img/field_2.jpg" alt="">
      </div>
      <div class="overlay">
        <div class="overlay-text">
          <h1>TemIts</h1>
          <br />
          <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisi mauris, imperdiet vel pulvinar in, 
          tempus vel nulla. Vestibulum in velit tortor. Nulla pharetra vulputate neque et venenatis.
          </h5>
        </div>
      </div>
    </div>

    <div class="col" style="background-color: #fff">
      <div class="input">
        <div>
          <img src="/src/img/logo.png" alt="" style="height: 80px;">
        </div>
        <div class="input-login">
          <h1 class="mb-5" style="text-align: center;">Login</h1>
          <h6>Website pemantauan dan pendataan perkebunan tembakau</h6>
          <p class="body-2">Silahkan login dengan akun yang telah terdaftar</p>
          <br />
          <form action="/login" method="POST">
            <div class="input-group mb-3 input-group-lg">
              <span class="input-group-text" id="basic-addon1">
                <i class="fa fa-user"></i>
              </span>
              <input type="text" class="form-control" name="username" id="username" placeholder="Masukkan Username"
                aria-label="Username" aria-describedby="basic-addon1" autofocus required />
            </div>
            <div class="input-group mb-3 input-group-lg">
              <span class="input-group-text">
                <i class="fa fa-lock"></i>
              </span>
              <input type="password" id="inputpw" class="form-control" name="password" placeholder="Masukkan Password"
                aria-label="Password" required />
              <button class="btn btn-showpass btn-lg" type="button" onclick="showpass()">
                <i class="fa fa-eye"></i>
              </button>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault" style="color: #aaaaaa">
                Remember Me
              </label>
            </div>
            <br />
            <div class="d-grid gap-2">
              <button class="btn btn-primary btn-lg" type="submit">
                Login
              </button>
            </div>
          </form>
          <br />
          <div class="form-group forgot">
            <div class="d-flex gap-2 justify-content-center mt-3">
              Belum memiliki akun? <a href="/register" style="text-decoration: none;">Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    function showpass() {
      pass = document.getElementById("inputpw")
      if (pass.type == "password") {
        pass.attributes["type"].value = "text";
      } else {
        pass.attributes["type"].value = "password";
      }
    }
  </script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>

</body>

</html>