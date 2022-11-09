import React from 'react';
import './../App.css';

function Sidebar() {

    // $(document).ready(function () {
    //     $('#sidebarCollapse').on('click', function () {
    //         $('#sidebar').toggleClass('active');
    //         $(this).toggleClass('active');
    //     });
    // });

  return (
    <nav class="navbar navbar-expand-lg  navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Momoney</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">Home <span class="sr-only"></span></a>
                <a class="nav-item nav-link" href="#">Deposit Funds</a>
                <a class="nav-item nav-link" href="#">Transfer funds</a>
                <a class="nav-item nav-link" href="#">Logout</a>
            </div>
        </div>
    </nav>
  )
}

export default Sidebar;