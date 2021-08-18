import Image from "next/image";

import { RiArrowRightSLine } from "react-icons/ri";
import styles from "./topServices.module.css";

const TopServices = ({ topServicesData }) => {
  return (
    <div className="container py-5">
      <div className="py-5">
        <h6 className="fs-28 text-center textCenterAfterEffect">
          Our TOP 3 Services for Amazon FBA/Kindle Business
        </h6>
        <div className="row">
          {topServicesData.map((service, index) => (
            <div
              key={service._id}
              className={`${styles.serviceCard} col-4 p-4  mt-md-5`}
            >
              <div className="d-flex justify-content-center">
                <Image
                  className={`${styles.bannerContainer} img-fluid`}
                  src={service.img}
                  alt=""
                  height={120}
                  width={190}
                />
              </div>
              <h6 className="text-center mt-5">{service.title}</h6>
              <p className="text-center fs-15 mt-3 text-color ">
                {service.description}
              </p>
              <p className="text-center order-color">
                Order <RiArrowRightSLine />
              </p>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <p
            className={`${styles.viewButonStyle} borderColor text-center fs-14  py-2 px-3`}
          >
            View all Amazon Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopServices;
