import React, { Component } from "react";
import Header from "../Header";
import Navbar from "../side-navbar";
import "./Profile.css";

export default class Profile extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
      editing: false,
      title: "Juan José Cazarez Gastelum",
      phone: "",
      location: "Tecnológico de Monterrey Campus GDL",
      email: "juanj@gmail.com"
    };
  }

  componentDidMount() {
  }


  render() {
    console.log(this.state.user.title);
    return (
      <div>
        <Header />
        <Navbar />
        {/* <h1 id="profile">Profile</h1> */}
        <div className="container col-lg-7" style={{paddingTop:"7vw"}}>
          <span className="overview">
            <p className="overview-text">Información personal</p>
          </span>
          <div className="title">
            <div className="user-icon">
              <i className="fa fa-user user-i" />
            </div>
            <p>Nombre: Juan José Cazarez Gastelum</p>
            <p
              className="edit-title user-title"
              data-toggle="modal"
              data-target="#editProfile"
            >
              {this.state.user.title}
            </p>
          </div>
          <div className="profile-email">
            <div className="email-icon">
              <i className="fa fa-envelope email-i" />
            </div>
            <p>Email: juanj@gmail.com </p>
            <p
              className="edit-email user-email"
              data-toggle="modal"
              data-target="#editProfile"
            >
              {this.state.user.email}
            </p>
          </div>
          <div className="location">
            <div className="profile-location-icon">
              <i className="fa fa-map-marker marker-i" />
            </div>
            <p>Institución Educativa: Tecnológico de Monterrey Campus GDL</p>
            <p
              className="edit-location user-location"
              data-toggle="modal"
              data-target="#editProfile"
            >
              {this.state.user.location}
            </p>
          </div>
        </div>
        <div className="modal fade" id="editProfile" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered profile-modal-dialog"
            role="document"
          >
            <div className="modal-content p-2 profile-modal-content">
              <div className="modal-header profile-modal-header">
                <i
                  className="fa fa-user envelope-icon mr-2"
                  style={{ fontSize: "20px" }}
                />
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Edit Profile
                </h5>
                <button className="close profile-close" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body ">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="modal-input-box profile-input"
                  name="title"
                  defaultValue={this.state.user.title}
                />
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="modal-input-box profile-input"
                  name="email"
                  defaultValue={this.state.user.email}
                />
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="modal-input-box profile-input"
                  name="phone"
                  defaultValue={this.state.user.phone}
                />
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  className="modal-input-box profile-input"
                  name="location"
                  defaultValue={this.state.user.location}
                />
              </div>
              <div className="modal-footer profile-modal-footer">
                <button
                  className="btn btn-secondary invite-buttn profile-save-btn"
                  data-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
