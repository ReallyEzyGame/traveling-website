import { HeaderThemeProvider } from "../../custom-hook/useSetHeaderTheme";
import HeaderPage from "./header/HeaderPage";
import SearchBar from "./header/SearchBar";
import Body from "./body/Body";
import { ContentProvider } from "../../context/contentContext";

function Home() {
    return (
        <>
            <ContentProvider>
                <HeaderThemeProvider>
                    <HeaderPage />
                    <div className="body-page" style={{ position: "relative" }}>
                        <SearchBar />
                    </div>
                </HeaderThemeProvider>

                <div className="grid-3-4">
                    <h1>Title of the Promotion</h1>
                    <p>Description</p>
                </div>
                
                <Body />
            </ContentProvider>
        </>
    )
}

export default Home;