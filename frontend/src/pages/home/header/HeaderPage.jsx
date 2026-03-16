import SearchBar from "./SearchBar";
import { NavBar } from "./NavBar";
import { Avatar } from "../../../components/avatar/Avatar";
import DropdownMenu from "../../../components/dropdown/DropdownMenu";
import "./header.css"
import DropdownContent from "./DropdownContent";
import { AnimatePresence, motion } from "framer-motion";
import { useHeaderTheme } from "../../../custom-hook/useSetHeaderTheme";



const slideVariants = {
    enter: (direction) => ({
        x: direction > 0 ? '100%' : '-100%'
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => ({
        zIndex: 0,
        x: direction > 0 ? '-100%' : '100%',
        opacity: 0,
    }),
}

function HeaderPage() {
    const { theme, direction } = useHeaderTheme();

    return (
        <div className="header-page">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={theme.theme}
                    src={theme.theme}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 50 },
                        opacity: { duration: 1 }
                    }}
                    style={{
                        position: "absolute",
                        objectFit: 'cover',
                        height: '100%',
                        width: '100%',
                        borderRadius: '0',
                        zIndex: 0,
                    }} />
            </AnimatePresence>
            <div className="team-logo" ></div>

            <DropdownMenu>
                <DropdownMenu.Trigger>
                    <div className="register-bar" style={{ cursor: 'pointer', zIndex: 100 }}>
                        <Avatar src={"src/assets/images/silent-lake.jpg"} />
                        <DropdownMenu.Content>
                            <DropdownContent />
                        </DropdownMenu.Content>
                    </div>
                </DropdownMenu.Trigger>
            </DropdownMenu>

            <NavBar />
        </div>
    );
}


export default HeaderPage;