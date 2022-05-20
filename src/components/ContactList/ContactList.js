import React from "react";
import { Button, Card } from "react-bootstrap";
import "./ContactList.css";

const ContactList = (props) => {
  return (
    <div className="d-flex justify-content-center m-5 p-5 flex-wrap">
      {props.contacts.map((item, index) => (
        // <ul key={item.id}>
        //   <li>{item.name}</li>
        //   <li>{item.lastName}</li>
        //   <img src={item.photo} alt="photo" className="imgContact" />
        //   <li>
        //     <button onClick={() => props.handleDeleteContact(item.id)}>
        //       Delete
        //     </button>
        //     <button onClick={() => props.handleEditIndex(index)}>Edit</button>
        //   </li>
        // </ul>
        <Card className="m-3" key={item.id} style={{ width: "17rem" }}>
          <Card.Img className="" variant="top" src={item.photo} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Button
            className="m-1 bg-danger"
            onClick={() => props.handleDeleteContact(item.id)}
          >
            Delete
          </Button>
          <Button
            className="m-1 bg-warning"
            onClick={() => props.handleEditIndex(index)}
          >
            Edit
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default ContactList;
