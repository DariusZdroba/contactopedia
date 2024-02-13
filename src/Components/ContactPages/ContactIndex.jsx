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

  handleAddContact = () => {
    alert("hello");
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact />
            </div>
            <div className="col-4">
              <RemoveAllContact />
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <AddContact handleAddContact={this.handleAddContact} />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <FavoriteContacts
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavorite === true
                  )}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContacts
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
