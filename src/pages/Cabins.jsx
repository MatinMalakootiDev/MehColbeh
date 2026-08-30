import CabinTable from "../features/cabins/CabinTable";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";

const Cabins = () => {
  return (
    <>
      <Row type ="horizontal">
        <h1>کلبه ها</h1>
        <p>فیلتر / دسته بندی</p>
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
};

export default Cabins;
