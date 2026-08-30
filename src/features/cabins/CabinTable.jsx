import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const CabinTable = () => {
  const { isLoading, cabins } = useCabins();

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="0.6fr 1fr 1fr 1.5fr 1.2fr 0.3fr">
        <Table.Header>
          <div></div>
          <div>کلبه</div>
          <div>ظرفیت</div>
          <div>قیمت</div>
          <div>تخفیف</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={cabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
};

export default CabinTable;
