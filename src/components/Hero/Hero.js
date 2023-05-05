import { About } from "components/About/About";
import { Cases } from "components/Cases/Cases";
import { Blog } from "components/Blog/Blog";
import { Team } from "components/Team/Team";
import { Contact } from "components/Contact/Contact";

export const Hero = () => {
    return (
        <main>
            <About />
            <Cases />
            <Blog />
            <Team />
            <Contact />
        </main>
    );
};