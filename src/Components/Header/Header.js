import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <header>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-md-2 fs-2">
                            logo
                        </div>
                        <div className="col-md-10">
                            <div className="manu-container text-success">
                                <a className="text-success" href="/home">Home</a>
                                <a className="text-success" href="/products">Products</a>
                                <a className="text-success" href="/chart">Chart</a>
                                <a className="text-success" href="/contract">Contract</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;