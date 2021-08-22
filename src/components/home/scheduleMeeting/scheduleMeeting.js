import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";

const ScheduleMeeting = () => {
  const [scheduleTitle, setScheduleTitle] = useState({});

  useEffect(() => {
    fetch("https://virtual-expert.herokuapp.com/scheduleMeeting")
      .then((res) => res.json())
      .then((data) => setScheduleTitle(data));
  }, []);
  return (
    <>
      <div className="container my-5 pb-3 px-md-5">
        <div className="background-color-skyblue py-5 px-2 borderRadius">
          <div className="col-12 col-md-6 mx-auto mb-3 text-center">
            {scheduleTitle.title && (
              <h3 className="fs-24 lh-base font-family-roboto">
                {ReactHtmlParser(scheduleTitle.title)}
              </h3>
            )}
            <button className="button px-4 py-1 mt-4">
              <h4 className="d-inline fs-14 font-family-roboto">Schedule a Meeting</h4>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleMeeting;
