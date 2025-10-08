import React from "react";

const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-header">
                    <h1 className="navbar-title">🍽️ Tasty Treats</h1>
                    <p className="navbar-subtitle">Delicious Food, Just for You</p>
                </div>

                <div className="btn-group">
                    {menuList.map((curElem) => (
                        <button
                            key={curElem}
                            className="btn-group__item"
                            onClick={() => filterItem(curElem)}
                        >
                            {curElem}
                        </button>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
