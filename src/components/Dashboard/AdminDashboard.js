import React,{ useState } from 'react'
import "./AdminDashboard.css"
import DatePicker from 'react-datepicker';
const AdminDashboard = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  return (
 
    <>
   
    <div className="sidebar">
      <div className="sidebar-logo">
        <a href="index.html">
          <img
            src="https://excellencetheme.com/templates/doshtan/assets/images/logo.png"
            alt=""
          />
        </a>
        <div className="sidebar-close" id="sidebar-close">
          <i className="bx bx-left-arrow-alt" />
        </div>
      </div>
      {/* SIDEBAR MENU */}
      <div className="simlebar-sc" data-simplebar="init">
        <div className="simplebar-wrapper" style={{ margin: 0 }}>
          <div className="simplebar-height-auto-observer-wrapper">
            <div className="simplebar-height-auto-observer" />
          </div>
          <div className="simplebar-mask">
            <div
              className="simplebar-offset"
              style={{ right: "-16.8px", bottom: 0 }}
            >
              <div
                className="simplebar-content-wrapper"
                style={{ height: "100%", overflow: "hidden scroll" }}
              >
                <div className="simplebar-content" style={{ padding: 0 }}>
                  <ul className="sidebar-menu tf">
                    <li className="sidebar-submenu">
                      <a href="index.html" className="sidebar-menu-dropdown">
                        <i className="bx bxs-home" />
                        <span>Dashboard</span>
                        <div className="dropdown-icon">
                          <i className="bx bx-chevron-down" />
                        </div>
                      </a>
                      <ul className="sidebar-menu sidebar-menu-dropdown-content">
                        <li>
                          <a href="index.html">Dashboard</a>
                        </li>
                        <li>
                          <a href="user-profile.html">User Profile</a>
                        </li>
                        <li>
                          <a href="user-login.html">User Login</a>
                        </li>
                        <li>
                          <a href="new-account.html">New Account</a>
                        </li>
                      </ul>
                    </li>
                    <li className="sidebar-submenu">
                      <a href="project.html" className="sidebar-menu-dropdown">
                        <i className="bx bxs-bolt" />
                        <span>Project</span>
                        <div className="dropdown-icon">
                          <i className="bx bx-chevron-down" />
                        </div>
                      </a>
                      <ul className="sidebar-menu sidebar-menu-dropdown-content">
                        <li>
                          <a href="project.html">Project</a>
                        </li>
                        <li>
                          <a href="project-details.html">Project Details</a>
                        </li>
                        <li>
                          <a href="new-project.html">New Project</a>
                        </li>
                      </ul>
                    </li>
                    <li className="sidebar-submenu">
                      <a href="clients.html" className="sidebar-menu-dropdown">
                        <i className="bx bxs-user" />
                        <span>Client</span>
                        <div className="dropdown-icon">
                          <i className="bx bx-chevron-down" />
                        </div>
                      </a>
                      <ul className="sidebar-menu sidebar-menu-dropdown-content">
                        <li>
                          <a href="clients.html">Manager Client</a>
                        </li>
                        <li>
                          <a href="client-details.html">Client Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="board.html">
                        <i className="bx bxs-dashboard" />
                        <span>Board</span>
                      </a>
                    </li>
                    <li>
                      <a href="calendar.html">
                        <i className="bx bx-calendar" />
                        <span>Calendar</span>
                      </a>
                    </li>
                    <li>
                      <a href="message.html">
                        <i className="bx bxs-message-rounded-detail" />
                        <span>Message</span>
                      </a>
                    </li>
                    <li className="sidebar-submenu">
                      <a href="chart-apex.html" className="sidebar-menu-dropdown">
                        <i className="bx bxs-component" />
                        <span>Components</span>
                        <div className="dropdown-icon">
                          <i className="bx bx-chevron-down" />
                        </div>
                      </a>
                      <ul className="sidebar-menu sidebar-menu-dropdown-content">
                        <li>
                          <a href="chart-apex.html">Apex Charts</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="darkmode-toggle" id="darkmode-toggle">
                        <div>
                          <i className="bx bx-cog mr-10" />
                          <span>darkmode</span>
                        </div>
                        <span className="darkmode-switch" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="simplebar-placeholder"
            style={{ width: "auto", height: 666 }}
          />
        </div>
        <div
          className="simplebar-track simplebar-horizontal"
          style={{ visibility: "hidden" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{ transform: "translate3d(0px, 0px, 0px)", display: "none" }}
          />
        </div>
        <div
          className="simplebar-track simplebar-vertical"
          style={{ visibility: "visible" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{
              height: 158,
              transform: "translate3d(0px, 0px, 0px)",
              display: "block"
            }}
          />
        </div>
      </div>
      {/* END SIDEBAR MENU */}
    </div>
    {/* END SIDEBAR */}
    {/* Main Header */}
    <div className="main-header">
      <div className="d-flex">
        <div className="mobile-toggle" id="mobile-toggle">
          <i className="bx bx-menu" />
        </div>
        <div className="main-title">Dashboard</div>
      </div>
      <div className="d-flex align-items-center">
        {/* App Search*/}
        <form className="app-search d-none d-lg-block">
          <div className="position-relative">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              fdprocessedid="vlwi67l"
            />
            <span className="bx bx-search-alt" />
          </div>
        </form>
        <div className="dropdown d-inline-block d-lg-none ms-2">
          <button
            type="button"
            className="btn header-item noti-icon waves-effect"
            id="page-header-search-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="bx bx-search-alt" />
          </button>
          <div
            className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
            aria-labelledby="page-header-search-dropdown"
          >
            <form className="p-3">
              <div className="form-group m-0">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search ..."
                    aria-label="Recipient's username"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary h-100" type="submit">
                      <i className="bx bx-search-alt" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="dropdown d-inline-block">
          <button
            type="button"
            className="btn header-item"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            fdprocessedid="chsa2"
          >
            <span className="btn dropdown-toggle" id="header-lang-img">
              EN
              <i className="bx bx-caret-down" />
            </span>
          </button>
          <div className="dropdown-menu dropdown-menu-end">
            {/* item*/}
            <a
              href="javascript:void(0);"
              className="dropdown-item notify-item language"
              data-lang="en"
            >
              <img
                src="https://excellencetheme.com/templates/doshtan/assets/images/flags/us.jpg"
                alt="user-image"
                className="me-1"
                height={12}
              />{" "}
              <span className="align-middle">English</span>
            </a>
            {/* item*/}
            <a
              href="javascript:void(0);"
              className="dropdown-item notify-item language"
              data-lang="sp"
            >
              <img
                src="https://excellencetheme.com/templates/doshtan/assets/images/flags/spain.jpg"
                alt="user-image"
                className="me-1"
                height={12}
              />{" "}
              <span className="align-middle">Spanish</span>
            </a>
            {/* item*/}
            <a
              href="javascript:void(0);"
              className="dropdown-item notify-item language"
              data-lang="gr"
            >
              <img
                src="https://excellencetheme.com/templates/doshtan/assets/images/flags/germany.jpg"
                alt="user-image"
                className="me-1"
                height={12}
              />{" "}
              <span className="align-middle">German</span>
            </a>
            {/* item*/}
            <a
              href="javascript:void(0);"
              className="dropdown-item notify-item language"
              data-lang="it"
            >
              <img
                src="https://excellencetheme.com/templates/doshtan/assets/images/flags/italy.jpg"
                alt="user-image"
                className="me-1"
                height={12}
              />{" "}
              <span className="align-middle">Italian</span>
            </a>
            {/* item*/}
            <a
              href="javascript:void(0);"
              className="dropdown-item notify-item language"
              data-lang="ru"
            >
              <img
                src="https://excellencetheme.com/templates/doshtan/assets/images/flags/russia.jpg"
                alt="user-image"
                className="me-1"
                height={12}
              />{" "}
              <span className="align-middle">Russian</span>
            </a>
          </div>
        </div>
        {/* <div class="dropdown d-none d-lg-inline-block ms-1">
            <button type="button" class="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                    <i class="bx bx-fullscreen"></i>
                </button>
        </div> */}
        <div className="dropdown d-inline-block mt-12">
          <button
            type="button"
            className="btn header-item waves-effect"
            id="page-header-user-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            fdprocessedid="xopc1p"
          >
            <img
              className="rounded-circle header-profile-user"
              src="https://excellencetheme.com/templates/doshtan/assets/images/profile/profile.png"
              alt="Header Avatar"
            />
            <span className="pulse-css" />
            <span className="info d-xl-inline-block  color-span">
              <span className="d-block fs-20 font-w600">John Doe</span>
              <span className="d-block mt-7">example@domain.com</span>
            </span>
            <i className="bx bx-chevron-down" />
          </button>
          <div className="dropdown-menu dropdown-menu-end">
            {/* item*/}
            <a className="dropdown-item" href="#">
              <i className="bx bx-user font-size-16 align-middle me-1" />{" "}
              <span>Profile</span>
            </a>
            <a className="dropdown-item" href="#">
              <i className="bx bx-wallet font-size-16 align-middle me-1" />{" "}
              <span>My Wallet</span>
            </a>
            <a className="dropdown-item d-block" href="#">
              <span className="badge bg-success float-end">11</span>
              <i className="bx bx-wrench font-size-16 align-middle me-1" />{" "}
              <span>Settings</span>
            </a>
            <a className="dropdown-item" href="#">
              <i className="bx bx-lock-open font-size-16 align-middle me-1" />{" "}
              <span>Lock screen</span>
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item text-danger" href="user-login.html">
              <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />{" "}
              <span>Logout</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* End Main Header */}
    {/* MAIN CONTENT */}
    <div className="main">
      <div className="main-content dashboard">
        <div className="row">
          <div className="col-12">
            <div className="box card-box">
              <div className="icon-box bg-color-1">
                <div className="icon bg-icon-1">
                  <i className="bx bxs-bell bx-tada bx-tada" />
                </div>
                <div className="content">
                  <h5 className="title-box">Notification</h5>
                  <p className="color-1 mb-0 pt-4">5 Unread notification</p>
                </div>
              </div>
              <div className="icon-box bg-color-2">
                <div className="icon bg-icon-2">
                  <i className="bx bxs-message-rounded" />
                </div>
                <div className="content click-c">
                  <h5 className="title-box">Message</h5>
                  <p className="color-2 mb-0 pt-4">5 Unread notification</p>
                </div>
                <div className="notification-list card">
                  <div className="top box-header">
                    <h5>Notification</h5>
                  </div>
                  <div className="pd-1r">
                    <div className="divider" />
                  </div>
                  <div className="box-body">
                    <ul className="list">
                      <li className="d-flex no-seen">
                        <div className="img-mess">
                          <img
                            className="mr-14"
                            src="https://excellencetheme.com/templates/doshtan/assets/images/avatar/avt-1.png"
                            alt="avt"
                          />
                        </div>
                        <div className="info">
                          <a href="#" className="font-w600 mb-0 color-primary">
                            Elizabeth Holland
                          </a>
                          <p className="pb-0 mb-0 line-h14 mt-6">
                            Proin ac quam et lectus vestibulum
                          </p>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="img-mess">
                          <img
                            className="mr-14"
                            src="https://excellencetheme.com/templates/doshtan/assets/images/avatar/avt-1.png"
                            alt="avt"
                          />
                        </div>
                        <div className="info">
                          <a href="#" className="font-w600 mb-0 color-primary">
                            Elizabeth Holland
                          </a>
                          <p className="pb-0 mb-0 line-h14 mt-6">
                            Proin ac quam et lectus vestibulum
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="btn-view">
                      <a className="font-w600 h5" href="message.html">
                        View All
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="icon-box bg-color-3">
                <a className="create d-flex" href="calendar.html">
                  <div className="icon bg-icon-3">
                    <i className="bx bx-calendar" />
                  </div>
                  <div className="content">
                    <h5 className="title-box">Calendar</h5>
                    <p className="color-3 mb-0 pt-4">5 Unread notification</p>
                  </div>
                </a>
              </div>
              <div className="icon-box bg-color-4">
                <a
                  className="create d-flex"
                  href="#"
                  data-toggle="modal"
                  data-target="#add_project"
                >
                  <div className="icon bg-white">
                    <i className="bx bx-plus" />
                  </div>
                  <div className="content d-flex align-items-center">
                    <h5 className="color-white">Create New Project</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <label htmlFor="name" id="name-label">
        Outlook<span className="required">*</span>
      </label>
      <input
        type="mail"
        name="email"
        id="name"
        className="name2"
        placeholder="Enter your Out look"
        required=""
      />

      <label style={{paddingTop:"20px"}}>Select a date range:</label>
      <div>
        <span>From :{" "}</span>
        <DatePicker 
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="dd-MM-yyyy"
          required
          className='date'
          
        />
      </div>
      <div>
        <span style={{paddingRight:"20px"}}>To : {" "}</span>
        <DatePicker 
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="dd-MM-yyyy"
          required
          className='date'
          
        />
      </div>

      <button className="button2" type="submit">Get Detailes</button>
        
        <div id="add_project" className="modal custom-modal fade" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Project</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-sm-6 mb-0">
                      <div className="form-group">
                        <label>Project Name</label>
                        <input
                          className="form-control"
                          defaultValue=""
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 mb-0">
                      <div className="form-group">
                        <label>Client</label>
                        <select className="select">
                          <option>Client 1</option>
                          <option>Client 2</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 mb-0">
                      <div className="form-group">
                        <label>Start Date</label>
                        <div className="cal-icon">
                          <input className="form-control " type="date" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 mb-0">
                      <div className="form-group">
                        <label>End Date</label>
                        <div className="cal-icon">
                          <input className="form-control" type="date" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 mb-0">
                      <div className="form-group">
                        <label>Rate</label>
                        <input
                          placeholder="$50"
                          className="form-control"
                          defaultValue=""
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 mb-0">
                      <div className="form-group">
                        <label>&nbsp;</label>
                        <select className="select">
                          <option>Hourly</option>
                          <option selected="">Fixed</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6 mb-0">
                      <div className="form-group">
                        <label>Priority</label>
                        <select className="select">
                          <option selected="">High</option>
                          <option>Medium</option>
                          <option>Low</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      rows={4}
                      className="form-control"
                      placeholder="Enter your message here"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <label>Upload Files</label>
                    <input className="form-control" type="file" />
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal custom-modal fade"
          id="delete_project"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Project</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6 mb-0">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-primary continue-btn"
                      >
                        Delete
                      </a>
                    </div>
                    <div className="col-6 mb-0">
                      <a
                        href="javascript:void(0);"
                        data-dismiss="modal"
                        className="btn btn-primary cancel-btn"
                      >
                        Cancel
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal custom-modal fade" id="edit_project" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h5 className="modal-title">Edit Project</h5>
                </div>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-sm-6 mb-0">
                      <div className="form-group">
                        <label>Project Name</label>
                        <input
                          className="form-control"
                          defaultValue="Gold App"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 mb-0">
                      <div className="form-group">
                        <label>Client</label>
                        <select className="select">
                          <option>Client 1</option>
                          <option>Client 2</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    
  </>
  
  
  
  
  )
}

export default AdminDashboard

