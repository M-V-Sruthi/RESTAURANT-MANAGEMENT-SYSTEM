import { Button } from "semantic-ui-react";
import Header from "./Container/Header.js";
import { Link } from "react-router-dom";

const First = () => {

    return (
        <Header title="Our Recipes" style={{ 
            background:'linear-gradient(rgba(8,8,8,0.3),rgba(8,8,8,0.3)) ,url("https://thumbs.dreamstime.com/b/wooden-table-food-top-view-cafe-102532611.jpg")',  
            backgroundSize:'cover',
            width:'100%',
            height: '100vh',
            position:'relative',
            // backgroundPosition: 'left 0px bottom -100px',
            display: 'flex',  // Optional: This aligns the content to the center
            justifyContent: 'center',  // Optional: This aligns the content to the center
            alignItems: 'center',  // Optional: This aligns the content to the center
          }}>
            <Button
                content="SEARCH RECIPES"
                color="primary"
                as={Link}
                to="/recipes"
                size="big"
            />
        </Header>
    )
}

export default First;