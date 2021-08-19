import Sidebar from "../../src/components/dashboard/sidebar/sidebar";

const Service = () => {
  return (
    <div className="row">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="col-10">Hello this is service section</div>
    </div>
  );
};

export default Service;

Service.getLayout = function PageLayout(page) {
  return <>{page}</>;
};