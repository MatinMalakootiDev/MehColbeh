import CabinTable from "../features/cabins/CabinTable";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

const Cabins = () => {
  return (
    <>
      <Row type ="horizontal">
        <h1>کلبه ها</h1>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
};

export default Cabins;
