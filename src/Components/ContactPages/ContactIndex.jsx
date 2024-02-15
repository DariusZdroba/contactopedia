import React, { Component } from "react";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

export default class ContactIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Zdroba Darius",
          phone: "+40-786-152-726",
          email: "dariuszdroba@gmail.com",
          isFavorite: false,
        },
        {
          id: 2,
          name: "Mark Wiens",
          phone: "+40-733-412-896",
          email: "markwiens@gmail.com",
          isFavorite: true,
        },
        {
          id: 3,
          name: "Jack Spicer",
          phone: "+40-722-234-777",
          email: "jackspicer@hotmail.com",
          isFavorite: false,
        },
      ],
    };
  }
  handleDeleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.filter((c) => c.id != contactId),
      };
    });
  };
  handleToggleFavorite = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.id === contact.id)
            return { ...obj, isFavorite: !obj.isFavorite };
          return obj;
        }),
      };
    });
  };

  handleAddContact = (newContact) => {
    if (newContact.name === "") {
      return { status: "failure", msg: "Please enter a valid name" };
    } else if (newContact.phone === "") {
      return { status: "failure", msg: "Please enter a valid phone number" };
    }
    const duplicateRecord = this.state.contactList.filter((x) => {
      if (x.name === newContact.name || x.phone === newContact.phone)
        return true;
    });
    if (duplicateRecord.length > 0) {
      return { status: "failure", msg: "Duplicate record !" };
    } else {
      const newFinalContact = {
        ...newContact,
        id: this.state.contactList.length + 1,
        isFavorite: false,
      };
      this.setState((prevState) => {
        return {
          contactList: prevState.contactList.concat([newFinalContact]),
        };
      });
      return { status: "success", msg: "Contact added successfully" };
    }
  };
  handleAddRandomContact = (newContact) => {
    const newFinalContact = {
      ...newContact,
      id: this.state.contactList.length + 1,
      isFavorite: false,
    };
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.concat([newFinalContact]),
      };
    });
  };
  handleRemoveAllContact = () => {
    this.setState((state) => {
      return {
        ...state,
        contactList: [],
      };
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2 row">
              <AddRandomContact
                handleAddRandomContact={this.handleAddRandomContact}
              />
            </div>
            <div className="col-4 row">
              <RemoveAllContact
                handleRemoveAllContact={this.handleRemoveAllContact}
              />
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <AddContact handleAddContact={this.handleAddContact} />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <FavoriteContacts
                  handleDeleteContact={this.handleDeleteContact}
                  handleToggleFavorite={this.handleToggleFavorite}
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavorite === true
                  )}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContacts
                  handleDeleteContact={this.handleDeleteContact}
                  handleToggleFavorite={this.handleToggleFavorite}
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavorite === false
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
