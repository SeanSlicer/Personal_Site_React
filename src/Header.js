import React, { useState } from "react";
import { Spiral as Hamburger } from "hamburger-react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import Projects from "./Components/Projects/Projects";
import Profile from "./Components/Profile/Profile";

export default function Header(props) {
  const [isOpen, setOpen] = useState(false);

  const handleContentChange = (content) => {
    props.setShowContent(content);

    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header>
      <nav className="navbar">
        <button className="navbar-brand">ReactJS</button>
        <Hamburger
          className="menuToggle navbar-nav float-right text-right pr-3"
          toggled={isOpen}
          toggle={setOpen}
          direction="right"
          size={35}
          rounded
        />
        <div className="menu">
          {isOpen && (
            <>
              <Navigation
                activeItemId={"./Components/Profile/Profile"}
                onSelect={({ itemId }) => handleContentChange(itemId)}
                // maybe push to the route

                items={[
                  {
                    title: "Home",
                    itemId: "Profile",
                  },
                  {
                    title: "Projects",
                    itemId: "Projects",
                  },
                ]}
              />
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
