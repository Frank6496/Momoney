import React from "react";
import './LandingPage.css';
import { Link } from "react-router-dom";

function LandingPage () {
    return (
    <div className="container-fluid main">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-0 py-3">
            <div class="container-xl max-w-screen-xl">
            
                <a class="navbar-brand" href="#">
                <img src="https://preview.webpixels.io/web/img/logos/clever-light.svg" class="h-8" alt="..."/>
                </a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarCollapse">
                
                <ul class="navbar-nav mx-lg-auto">
                    <li class="nav-item">
                    <a class="nav-link" href="#"></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#"></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#"></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#"></a>
                    </li>
                </ul>
                
                <div class="navbar-nav ms-lg-4">
                    <a class="nav-item nav-link" href="#">
                    <Link to="/login">Sign in</Link>
                        </a>
                </div>
                
                <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
                    <a href="#" class="btn btn-sm btn-light w-full w-lg-auto">
                    <Link to="/registration">Register</Link>
                    </a>
                </div>
                </div>
            </div>
        </nav>
        <div class="pt-10 pt-md-24 bg-primary content-home">
            <div class="container-xl max-w-screen-">
                <div class="row justify-content-md-center">
                    <div class="col-md-10 col-xl-8 text-md-center">
                        <div>
                            <h1 class="ls-tight font-bolder display-3 text-white p-5">
                            Build <span class="d-inline-block py-1 bg-success">anything</span> you want
                            </h1>
                            <p class="lead text-white text-opacity-75 mb-10">
                            With an intuitive markup, powerful and lightning fast build tools, Clever has everything you need to turn your ideas into incredible products.
                            </p>
                            <div class="mx-sm-n2">
                                <a href="#" class="btn btn-lg btn-white my-2 mx-sm-2 w-full w-sm-auto">Get started</a>
                                <a href="#" class="btn btn-lg btn-primary bg-shade-primary my-2 mx-sm-2 w-full w-sm-auto">
                                    Learn more<span class="ms-2">-&gt;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
  </div>
    )
}

export default LandingPage;