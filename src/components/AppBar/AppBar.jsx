import { Outlet } from "react-router-dom";
import { Header, NavContainer, NavLinks } from "./AppBar.styled";

export const AppBar = () => {

    return (
        <>
            <Header>
                <NavContainer>
                    <NavLinks to={"/"}>Home</NavLinks>
                    <NavLinks to={"movies"}>Movies</NavLinks>
                </NavContainer>
            </Header>

            <Outlet/>
        </>
        
    );
};