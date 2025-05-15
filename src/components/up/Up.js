import { useEffect, useState } from "react";
import { AiFillUpCircle } from "react-icons/ai";

const Up = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        setShow(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
    <AiFillUpCircle
        className="up"
        onClick={scrollToTop}
        style={{ display: show ? "grid" : "none" }}
    />
    );
};

export default Up;
