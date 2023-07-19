import React from 'react'

import "./UserLogin.css";
const UserLogin = () => {
  return (
    <>
    <div >
      <header
        className="light__Header-lj69nl-0 fWgQqk headerfixed"
        style={{ paddingTop: 8, paddingBottom: 8 }}
      >
        <nav className="light__DesktopNavLinks-lj69nl-10 light___StyledDesktopNavLinks-lj69nl-11 jdIlcR kwRNdZ">
          <a href="#" />
          <a className="light__NavLink-lj69nl-2 light__LogoLink-lj69nl-4 hHyvAg fvQBfT">
            Hola9
          </a>
          <div className="light__NavLinks-lj69nl-1 glhKJH">
            <a className="light__NavLink-lj69nl-2 hHyvAg"> </a>
            <a href="#">Home</a>
            <a className="light__NavLink-lj69nl-2 hHyvAg"> </a>
            <a href="#">About Us</a>
            <a className="light__NavLink-lj69nl-2 hHyvAg" />
            <a href="#">Login</a>
            
          
            
            
            {/* <a className="light__NavLink-lj69nl-2 hHyvAg" /> */}
            <div>
              {/* <a className="light__NavLink-lj69nl-2 hHyvAg" />
              <a className="light__NavLink-lj69nl-2 light__PrimaryLink-lj69nl-3 hHyvAg jhRBpd" /> */}
              {/* <a
                href="/LoginHeader"
                style={{ color: "white", borderRadius: "15%" }}
              >
                Log in
              </a>
              <a
                className="light__NavLink-lj69nl-2 hHyvAg"
                style={{ marginLeft: 4 }}
              /> */}
              {/* <a className="light__NavLink-lj69nl-2 light__PrimaryLink-lj69nl-3 hHyvAg jhRBpd" />
              <a
                href="/SignupHeader2"
                style={{ color: "white", borderRadius: "15%" }}
              >
                Sign Up
              </a> */}
            </div>
          </div>
        </nav>
        {/* <nav className="light__MobileNavLinksContainer-lj69nl-5 light___StyledMobileNavLinksContainer-lj69nl-6 bILKTV fBlDYP">
          <a href="/" />
          <a className="light__NavLink-lj69nl-2 light__LogoLink-lj69nl-4 hHyvAg fvQBfT">
            
          </a>
          <div
            className="light__MobileNavLinks-lj69nl-8 cexrZF light___StyledMobileNavLinks-lj69nl-9 hLvcjv"
            style={{
              display: "block",
              transform: "translateX(0%) translateZ(0px)"
            }}
          >
            <div className="light__NavLinks-lj69nl-1 glhKJH">
              <a className="light__NavLink-lj69nl-2 hHyvAg"> </a>
              <a href="/">Home</a>
              <a className="light__NavLink-lj69nl-2 hHyvAg"> </a>
              <a href="/about">About Us</a>
              <a className="light__NavLink-lj69nl-2 hHyvAg" />
              <a href="/Training">Login</a>
              <a className="light__NavLink-lj69nl-2 hHyvAg">
                <div className="py-1">
                  <div className="group inline-block relative">
                    <button className="font-semibold text-[#2b5876] py-2 px-0 inline-flex items-center">
                      <span className="mr-1">Training / Certificate</span>
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </button>
                    <ul
                      className="absolute h-80 overflow-y-auto hidden  bg-white pt-1 group-hover:block"
                      style={{ zIndex: 1 }}
                    >
                      <div className="" />
                    </ul>
                  </div>
                </div>
              </a>
              <a className="light__NavLink-lj69nl-2 hHyvAg" />
              <a href="/hire-talent">Hire Talent</a>
              <a className="light__NavLink-lj69nl-2 hHyvAg" />
              <a href="/CareerPage">Career</a>
              <a className="light__NavLink-lj69nl-2 hHyvAg" />
              <a href="/contact">Contact Us</a>
              <a className="light__NavLink-lj69nl-2 hHyvAg" />
              <a href="/Batch">Batch Trainings</a>
              <a className="light__NavLink-lj69nl-2 hHyvAg">
                <div className="py-1">
                  <div className="group inline-block relative">
                    <button className="font-semibold text-[#2b5876] py-2 px-0 inline-flex items-center">
                      <span className="mr-1">Internship</span>
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </button>
                    <ul className="absolute h-60 overflow-y-auto hidden  bg-white pt-1 group-hover:block">
                      <div className="" />
                    </ul>
                  </div>
                </div>
              </a>
              <a className="light__NavLink-lj69nl-2 hHyvAg" />
              <div>
                <a className="light__NavLink-lj69nl-2 hHyvAg" />
                <a className="light__NavLink-lj69nl-2 light__PrimaryLink-lj69nl-3 hHyvAg jhRBpd" />
                <a
                  href="/LoginHeader"
                  style={{ color: "white", borderRadius: "15%" }}
                >
                  Log in
                </a>
                <a
                  className="light__NavLink-lj69nl-2 hHyvAg"
                  style={{ marginLeft: 4 }}
                />
                <a className="light__NavLink-lj69nl-2 light__PrimaryLink-lj69nl-3 hHyvAg jhRBpd" />
                <a
                  href="/SignupHeader2"
                  style={{ color: "white", borderRadius: "15%" }}
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
          <button className="light__NavToggle-lj69nl-7 fztIrI open">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="light___StyledCloseIcon-lj69nl-12 kqapxU"
              data-tw="w-6 h-6"
            >
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
          </button>
        </nav> */}
      </header>
      <div className="sc-bcXHqe kwmBMO App">
        <div>
          <section style={{ transform: "none" }}>
            <div className="colorofBody">
              <section>
                <div className="container-fluid h-custom">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div
                      className="col-md-9 col-lg-6 col-xl-5"
                      style={{ padding: 20, marginTop: 25 }}
                    >
                      <img
                        src="https://media.licdn.com/dms/image/C4D0BAQGCaEawctgXaw/company-logo_200_200/0/1656670188043?e=2147483647&v=beta&t=FeBFKhQfCn37uX1_w-Mx-Kydko3ExjBa-GQ4GvYSFuk"
                        className="img-fluid"
                        alt="Sample image"
                        style={{ borderRadius: "50%",height:"70%",width:"70%" }}
                      />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                      <form>
                        <div className="d-flex flex-row  justify-content-around justify-content-lg-start">
                          <div
                            className="lead fw-normal mb-0 me-4"
                            style={{
                              width: "100%",
                              justifyContent: "start",
                              color: "white",
                              marginTop: 5
                            }}
                          >
                            Sign in with
                          </div>
                          <div style={{ width: "100%", justifyContent: "end" }}>
                            <div className="sc-fnGiBr gtzknt">
                              <a
                                href="https://www.facebook.com/people/Procareers/100087744926174/"
                                className="sc-fEXmlR fQqPJe"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-facebook"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                              </a>
                              <a
                                href="https://www.linkedin.com/in/procareers-infotech-solutions-54567124b/"
                                className="sc-fEXmlR fQqPJe"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-linkedin"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                </svg>
                              </a>
                              <a
                                href="https://www.instagram.com/procareers_infotech_solutions/"
                                className="sc-fEXmlR fQqPJe"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-instagram"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <br />
                        <center style={{ marginTop: "-20px" }}>
                          <div className="divider d-flex align-items-center my-2" />
                        </center>
                        <div className="form-outline mt-3">
                         
                          {/* <lable
                          className="form-label"
                          htmlFor="form3Example3"
                          style={{ color: "white", marginBottom: "-10px" }}
                        >
                          email address</lable> */}
                          <input
                            type="email"
                            placeholder="Enter valid email address"
                            name="email"
                            
                            className="form-control form-control-lg"
                           
                          
                            style={{ backgroundColor: "white" }}
                          />
                        </div>
                        <br />
                        <div className="form-outline mt-3">
                          <div className="row">
                            {/* <div className="col-6">
                              <label
                                className="form-label"
                                htmlFor="form3Example4"
                                style={{ color: "white", marginBottom: "-10px" }}
                              >
                                Password
                              </label>
                            </div> */}
                            <div className="col-6">
                              {/* <p
                                
                                style={{
                                  color: "white",
                                  padding: 2,
                                  float: "right",
                                  marginBottom: "-5px",
                                  width: "auto",
                                  fontSize: 15
                                }}
                              >
                                Show Password
                              </p> */}
                            </div>
                          </div>
                          <input
                            type="email"
                            placeholder="Enter valid Password"
                            name="email"
                            
                            className="form-control form-control-lg"
                           
                          
                            style={{ backgroundColor: "white" }}
                          />
                          
                          {/* <lable
                          type="password"
                          placeholder="enter your password"
                           className="form-control form-control-lg"
                          ></lable> */}
                        </div>
                        <br />
                        <div
                          className="row"
                          style={{ marginTop: "-10px", marginLeft: 10 }}
                        >
                          <div className="col-6">
                            <a
                              data-target="#myModal"
                              data-toggle="modal"
                              className="text-decoration-underline "
                              href="#"
                              style={{
                                color: "white",
                                padding: 2,
                                float: "left",
                                marginBottom: 5,
                                width: "auto"
                              }}
                            >
                              Forgot password ?
                            </a>
                          </div>
                          <br />
                          <div className="col-6">
                            <a
                              data-target="#myModal"
                              data-toggle="modal"
                              className=" text-decoration-underline"
                              href="/SignupHeader2"
                              style={{
                                color: "white",
                                padding: 2,
                                float: "right",
                                marginBottom: 5,
                                width: "auto"
                              }}
                            >
                              Create an account ?
                            </a>
                          </div>
                          <br />
                        </div>
                        <div className="mx-3 mt-2 ">
                          <div className="form-check d-flex justify-content-center mb-1">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              id="form2Example3c"
                              required=""
                              defaultValue="true"
                            />
                            <div style={{ color: "white", fontSize: 12 }}>
                              I agree all condition in{" "}
                            </div>
                            <a
                              href="/TermsAndCond"
                              style={{
                                color: "white",
                                marginLeft: 10,
                                fontSize: 15
                              }}
                            >
                              <u>Terms &amp; Conditions</u>
                            </a>
                          </div>
                        </div>
                        <a href='/Dashboard'>
                        <button
                          className="button"
                          type="button"
                          name="button"
                          fdprocessedid="gr9i7y"
                          style={{
                            width: "100%",
                            justifyContent: "center",
                            border: "1px solid white",
                            fontSize: 18,
                            borderRadius: 5,
                            padding: 4,
                            textAlign: "center"
                          }}
                        >
                          Login
                        </button>
                        </a>
                      </form>
                     
                    </div>
                  </div>
                </div>
                <br />
              </section>
            </div>
          </section>
        </div>
        <div>
          <section style={{ transform: "none" }}>
            <br />
          </section>
        </div>
        
      </div>
      <div>
        
      </div>
    </div>
    
    
    {/* <div>
      <div className="ant-modal-root">
        <div tabIndex={-1} className="ant-modal-wrap" style={{ display: "none" }}>
          <div
            role="dialog"
            aria-labelledby=":r0:"
            aria-modal="true"
            className="ant-modal bg-white"
            style={{ margin: "auto", width: 520 }}
          >
            <div
              tabIndex={0}
              aria-hidden="true"
              style={{ width: 0, height: 0, overflow: "hidden", outline: "none" }}
            />
            <div className="ant-modal-content">
              <button
                type="button"
                aria-label="Close"
                className="ant-modal-close"
                fdprocessedid="8c1ktu"
              >
                <span className="ant-modal-close-x">
                  <span
                    role="img"
                    aria-label="close"
                    className="anticon anticon-close ant-modal-close-icon"
                  >
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="close"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
                    </svg>
                  </span>
                </span>
              </button>
              <div className="ant-modal-header">
                <div className="ant-modal-title" id=":r0:">
                  Please fill the form
                </div>
              </div>
              <div className="ant-modal-body">
                <div className="row bg-white" style={{ marginLeft: "auto" }}>
                  <div className="col-xl-12" style={{ margin: "auto" }}>
                    <div className=" ">
                      <form className="ant-form ant-form-horizontal">
                        <b className="mx-1">Name</b>
                        <div
                          className="ant-form-item mb-3"
                          style={{ width: "100%" }}
                        >
                          <div className="ant-row ant-form-item-row">
                            <div className="ant-col ant-form-item-control">
                              <div className="ant-form-item-control-input">
                                <div className="ant-form-item-control-input-content">
                                  <input
                                    placeholder="Name"
                                    id="user_name"
                                    aria-required="true"
                                    className="ant-input form-control "
                                    type="text"
                                    defaultValue=""
                                    fdprocessedid="20925c"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <b className="mx-1">Email</b>
                        <div className="ant-form-item">
                          <div className="ant-row ant-form-item-row">
                            <div className="ant-col ant-form-item-control">
                              <div className="ant-form-item-control-input">
                                <div className="ant-form-item-control-input-content">
                                  <input
                                    id="email"
                                    aria-required="true"
                                    className="ant-input"
                                    type="text"
                                    defaultValue=""
                                    fdprocessedid="rv5bqj"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <b className="mx-1">Phone Number</b>
                        <div className="ant-form-item">
                          <div className="ant-row ant-form-item-row">
                            <div className="ant-col ant-form-item-control">
                              <div className="ant-form-item-control-input">
                                <div className="ant-form-item-control-input-content">
                                  <span className="ant-input-group-wrapper">
                                    <span className="ant-input-wrapper ant-input-group">
                                      <span className="ant-input-group-addon">
                                        <b id="prefix">+91</b>
                                      </span>
                                      <input
                                        placeholder="99XXXXXX21"
                                        minLength={10}
                                        maxLength={10}
                                        id="phone"
                                        aria-required="true"
                                        className="ant-input"
                                        type="text"
                                        defaultValue=""
                                        fdprocessedid="dvxkgd"
                                      />
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <b className="mx-1 ">DOB </b>
                        <div className="ant-form-item mb-3">
                          <div className="ant-row ant-form-item-row">
                            <div className="ant-col ant-form-item-control">
                              <div className="ant-form-item-control-input">
                                <div className="ant-form-item-control-input-content">
                                  <div className="ant-picker form-control">
                                    <div className="ant-picker-input">
                                      <input
                                        id="DOB"
                                        readOnly=""
                                        placeholder="Select date"
                                        title=""
                                        size={12}
                                        autoComplete="off"
                                        defaultValue=""
                                        fdprocessedid="pqbvp8"
                                      />
                                      <span className="ant-picker-suffix">
                                        <span
                                          role="img"
                                          aria-label="calendar"
                                          className="anticon anticon-calendar"
                                        >
                                          <svg
                                            viewBox="64 64 896 896"
                                            focusable="false"
                                            data-icon="calendar"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            aria-hidden="true"
                                          >
                                            <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" />
                                          </svg>
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <b className="mx-1">Gender</b>
                        <div className="ant-form-item  mb-3">
                          <div className="ant-row ant-form-item-row">
                            <div className="ant-col ant-form-item-control">
                              <div className="ant-form-item-control-input">
                                <div className="ant-form-item-control-input-content">
                                  <div
                                    className="ant-select ant-select-in-form-item h-30 ant-select-single ant-select-allow-clear ant-select-show-arrow"
                                    aria-required="true"
                                  >
                                    <div className="ant-select-selector">
                                      <span className="ant-select-selection-search">
                                        <input
                                          type="search"
                                          id="gender"
                                          autoComplete="off"
                                          className="ant-select-selection-search-input"
                                          role="combobox"
                                          aria-haspopup="listbox"
                                          aria-owns="gender_list"
                                          aria-autocomplete="list"
                                          aria-controls="gender_list"
                                          aria-activedescendant="gender_list_0"
                                          aria-required="true"
                                          readOnly=""
                                          unselectable="on"
                                          defaultValue=""
                                          style={{ opacity: 0 }}
                                        />
                                      </span>
                                      <span className="ant-select-selection-placeholder">
                                        Select an option{" "}
                                      </span>
                                    </div>
                                    <span
                                      className="ant-select-arrow"
                                      unselectable="on"
                                      aria-hidden="true"
                                      style={{ userSelect: "none" }}
                                    >
                                      <span
                                        role="img"
                                        aria-label="down"
                                        className="anticon anticon-down ant-select-suffix"
                                      >
                                        <svg
                                          viewBox="64 64 896 896"
                                          focusable="false"
                                          data-icon="down"
                                          width="1em"
                                          height="1em"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
                                        </svg>
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <b className="mx-1">Introduction</b>
                        
                        <input
                          required=""
                          className="form-control mb-3"
                          type="file"
                          accept=".pdf"
                        />
                        <div className="ant-form-item form-group text-center align-items-center">
                          <div className="ant-row ant-form-item-row">
                            <div className="ant-col ant-form-item-control">
                              <div className="ant-form-item-control-input">
                                <div className="ant-form-item-control-input-content">
                                  <button
                                    type="submit"
                                    className="ant-btn ant-btn-primary buttons mt-3 "
                                    style={{
                                      backgroundColor: "darkblue",
                                      borderRadius: 5
                                    }}
                                    fdprocessedid="bcp0jr"
                                  >
                                    <span>Submit</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div> */}
  </>
  
  )
}

export default UserLogin