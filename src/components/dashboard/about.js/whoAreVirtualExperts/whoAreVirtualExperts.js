import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";

const AdminWhoAreVirtualExperts = () => {
  const [number, setNumber] = useState(0);
  const [aboutData, setAboutData] = useState({});

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const loadData = async (req, res) => {
      const aboutResponse = await fetch(
        "https://virtual-expert.herokuapp.com/about"
      );
      const aboutData = await aboutResponse.json();
      setAboutData(aboutData[0]);
    };
    loadData();
  }, [number]);

  const onSubmit = (data) => {
    // const title = data.title || titleData;
    // const description = data.description || descriptionData;
    // fetch("https://virtual-expert.herokuapp.com/banner/update", {
    //   method: "PUT",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify({ title, _id: bannerData._id, description }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setNumber(number + 1);
    //   });
  };

  return (
    <>
      <section className="my-2 boxShadow me-3 p-3">
        <div className="d-flex justify-content-between">
          <h1 className="fs-24">{aboutData?.title}</h1>
          <AiFillEdit
            size={24}
            className="text-warning cursor-pointer "
            data-bs-toggle="modal"
            data-bs-target="#aboutID"
          />
        </div>
        <h6 className="fs-18 mt-2">Title</h6>
        <p className="fs-14">{aboutData?.title}</p>
        <h6 className="fs-18 mt-2">Sub Title</h6>
        <p className="fs-14">{aboutData?.discription}</p>
      </section>
      <div
        className="modal fade"
        id="aboutID"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Banner
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
                <textarea
                  rows="5"
                  cols="5"
                  defaultValue={aboutData?.title}
                  {...register("title")}
                  name="title"
                  id="title"
                  className="form-control mb-2"
                ></textarea>
                <textarea
                  rows="5"
                  cols="5"
                  defaultValue={aboutData?.discription}
                  {...register("description")}
                  name="description"
                  id="description"
                  className="form-control mb-2"
                ></textarea>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Save Changes"
                  data-bs-dismiss="modal"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminWhoAreVirtualExperts;
