const Header = () => {
    return (
        <>
            <header class="fixed">
                <div class="container">
                    <nav class="navbar navbar-expand-lg">
                        <a class="navbar-brand" href="/">
                            <img src="assets/images/new/logo_white.png" alt="title-replaced" />
                        </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon">
                                    {/* <!-- <i class="icofont-navigation-menu ico_menu"></i> --> */}
                                    <div class="toggle-wrap">
                                    <span class="toggle-bar"></span>
                                    </div>
                                </span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="/">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/about">About us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/services
                                        ">Services</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="/blog">News</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="/contact">Contact</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link dark_btn" href="#getstarted">TRY IT FREE <i class="icofont-arrow-right"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
        </>
    )
}

export default Header