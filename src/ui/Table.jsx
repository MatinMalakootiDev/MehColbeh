import { createContext, useContext } from "react";

const TableContext = createContext();

const Table = ({ children, columns }) => {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="overflow-x-auto rounded-md border border-neutral-200 bg-neutral-0 text-sm">
        <div role="table" className="min-w-2xl">
          {children}
        </div>
      </div>
    </TableContext.Provider>
  );
};

const Header = ({ children }) => {
  const { columns } = useContext(TableContext);

  return (
    <header
      role="row"
      style={{ gridTemplateColumns: columns }}
      className="grid items-center gap-6 border-b border-neutral-100 bg-neutral-50 px-6 py-3 text-xs font-semibold text-neutral-500"
    >
      {children}
    </header>
  );
};

const Row = ({ children }) => {
  const { columns } = useContext(TableContext);

  return (
    <div
      role="row"
      style={{ gridTemplateColumns: columns }}
      className="grid items-center gap-6 border-b border-b-neutral-100 px-6 py-3 last:border-b-0"
    >
      {children}
    </div>
  );
};

const Body = ({ data, render }) => {
  if (!data.length)
    return (
      <p className="m-6 text-center text-base font-medium">
        دیتایی برای نمایش وجود ندارد
      </p>
    );

  return <section>{data.map(render)}</section>;
};

const Footer = ({ children }) => {
  return (
    <footer className="flex justify-center bg-neutral-50 p-3 empty:hidden">
      {children}
    </footer>
  );
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
