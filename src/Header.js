import React from "react";
import Link from "./Link";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            
            <Link href="/list" className="item">
                Search
            </Link>
            <Link href="/dropdown" className="item">
                Dropdown
            </Link>
            <Link href="/translate" className="item">
                Translate
            </Link>
            <Link href="/season" className="item">
                Season
            </Link>
            <Link href="/video" className="item">
                Video
            </Link>
            <Link href="/pics" className="item">
                Pics
            </Link>
            <Link href="/comment" className="item">
                Comment
            </Link>
            
        </div>
    );
};

export default Header;