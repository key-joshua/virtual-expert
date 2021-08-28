import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiMenu } from "react-icons/bi";
import { GiCrossedPistols } from "react-icons/gi";
import Sidebar from "../../src/components/dashboard/sidebar/sidebar";

const MyDocument = dynamic(import("../../src/components/pdf"), {
  ssr: false,
});

const Invoice = ({ serviceData }) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [info, setInfo] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    setInfo(data);
  };

  const handleSelect = (e) => {
    const newArray = [...selectedServices];
    setSelectedServices([...newArray, e.target.value]);
  };

  console.log(selectedServices);

  return (
    <>
      <section className="overflow-hidden">
        <div className="row">
          <div className="col-12 col-md-2 d-none d-md-block">
            <Sidebar />
          </div>
          <div className="d-md-none col-12 mt-2 me-2">
            <BiMenu
              size={32}
              className="ms-2"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight4"
              aria-controls="offcanvasRight"
            />
            <div
              className="offcanvas offcanvas-start bg-dark"
              tabIndex="-1"
              id="offcanvasRight4"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <GiCrossedPistols
                  size={32}
                  className="text-reset d-block ms-auto mt-2"
                  style={{ color: "#fff!important" }}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <Sidebar />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-10 scroll vh-100">
            <div>
              <button data-bs-toggle="modal" data-bs-target="#invoiceModal">
                Create Invoice
              </button>
            </div>
            <div className="my-5">
              <MyDocument info={info} selectedServices={selectedServices} />
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="invoiceModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create Invoice
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="text"
                    defaultValue=""
                    name="date"
                    id="date"
                    autoComplete="off"
                    className="form-control"
                    {...register("date", { required: true })}
                  />
                  {errors.date && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="invoiceNo">Invoice No</label>
                  <input
                    type="text"
                    defaultValue=""
                    name="invoiceNo"
                    id="invoiceNo"
                    autoComplete="off"
                    className="form-control"
                    {...register("invoiceNo", { required: true })}
                  />
                  {errors.invoiceNo && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="clientName">Client Name</label>
                  <input
                    type="text"
                    defaultValue=""
                    name="clientName"
                    id="clientName"
                    autoComplete="off"
                    className="form-control"
                    {...register("clientName", { required: true })}
                  />
                  {errors.clientName && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="clientEmail">Client Email</label>
                  <input
                    type="email"
                    defaultValue=""
                    name="clientEmail"
                    id="clientEmail"
                    autoComplete="off"
                    className="form-control"
                    {...register("clientEmail", { required: true })}
                  />
                  {errors.clientEmail && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="clientAddress">Client Address</label>
                  <textarea
                    rows="5"
                    cols="5"
                    defaultValue=""
                    name="clientAddress"
                    id="clientAddress"
                    autoComplete="off"
                    className="form-control"
                    {...register("clientAddress", { required: true })}
                  ></textarea>
                  {errors.clientAddress && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Service</label>
                  <select className="form-control" onChange={handleSelect}>
                    <option value="Select Service">Select Service</option>
                    {serviceData.map((service) => (
                      <option key={service._id}>{service.title}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group mt-3">
                  <input
                    type="submit"
                    name="submit"
                    className="btn btn-primary"
                    value="Submit"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;

export async function getServerSideProps() {
  const res = await fetch(
    "https://sleepy-mesa-08037.herokuapp.com/servicesCard"
  );
  const serviceData = await res.json();

  return {
    props: {
      serviceData,
    },
  };
}
