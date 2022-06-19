<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>@yield('title')</title>

  <!-- bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" 
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <!-- external css -->
  <link rel="stylesheet" type="text/css" href="src/css/main.css">
  <link rel="stylesheet" type="text/css" href="src/css/navtop.css">

  <!-- datatables -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css"></script>
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.css">

  <!-- icon -->
  <script src="https://kit.fontawesome.com/f74dca3203.js" crossorigin="anonymous"></script>
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'> -->

  <!-- fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"> 

  @yield('style')
</head>

<body class="login">
  
{{-- navbar --}}
  <nav class="navbar fixed-top navbar-expand-md navbar-light shadow-sm">
    <div class="container-fluid">
      <a class="navbar-brand" href="/" style="min-width: 200px; margin-right: 0;">
        <img src="/src/img/logo.png" alt="logo-temits" class="d-block mx-auto" style="height: 40px;">
      </a>
      <span class="navbar-text d-flex align-items-center justify-content-end" style="min-width: 200px;">
        <p class="mb-0 me-3">User</p>
        <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" id="user-dropdown" data-bs-toggle="dropdown"
            aria-expanded="false">
            <img src="/src/img/user.jpg" alt="" height="25px">
            <!-- <i class="fas fa-caret-down ms-2"></i> -->
          </button>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="user-dropdown">
            <li>
              <a class="dropdown-item" href="/settings">
                <i class="fas fa-cog me-2"></i>
                Pengaturan
              </a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <a class="dropdown-item" href="/logout">
                <i class="fas fa-sign-out-alt me-2"></i>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </span>
    </div>
  </nav>
  {{-- end navbar --}}

  {{-- content --}}
  <div class="container-fluid mb-5" style="margin-top: 47px">
    @yield('content')
  </div>

  {{-- end content --}}

  @yield('script')
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
  <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.js"></script>
  <script src="https://cdn.datatables.net/1.12.1/css/dataTables.bootstrap5.min.css"></script>

</body>

</html>