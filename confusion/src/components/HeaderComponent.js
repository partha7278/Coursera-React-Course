import React , { Component } from 'react';
import { Navbar,NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component{
    render(){
        return(
            <>
                <Navbar dark >
                    <div className="container">
                        <NavbarBrand href="/">Resturant Confusion</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Restorant ConFusion</h1>
                                <p>We inspire from world best Restorant. We maintain our food quality Good. You can get best Quality Food at our Restorant.  </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Header;
