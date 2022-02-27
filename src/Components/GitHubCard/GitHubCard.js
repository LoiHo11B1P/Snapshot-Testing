import { Card } from "react-bootstrap";

const GitHubCard = () => {
    return(
       
            <Card variant="info" style={{width: "20rem", height: "25rem", backgroundColor: "teal", paddingTop: "2rem", margin: "15rem auto"}}>
                <Card.Img variant="top" src="/VinhCV.jpg" style={{width: "8rem", borderRadius: "25%"}}></Card.Img>
                <Card.Body color="white">
                    <Card.Title style={{fontWeight: "700", color: "white", marginTop: "2rem"}}>Vinh Pham</Card.Title>
                    <Card.Text style={{paddingLeft: "5px", color: "white"}}>I'm a software engineer and love to develope new web application.</Card.Text>
                </Card.Body>
            </Card>

        
    )
}

export default GitHubCard;