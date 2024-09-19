import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";



const List = () => {
  const rows = [
    {
      id: 1,
      product: "Asim",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Windows",
      date: "1 March 2024",
      amount: "Followed",
      method: "Issued ticket",
      status: " Approved",
    },
    {
      id: 1,
      product: "Avinav",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Ubuntu",
      date: "1 March 2024",
      amount: "Followed",
      method: "Requested ticket",
      status: "Approved",
    },
    {
      id: 1,
      product: "Chandu",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Windows,Ubuntu",
      date: "1 March 2024",
      amount: "Followed",
      method: "Issued ticket",
      status: "Approved",
    },
    {
      id: 1,
      product: "Saniya",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Windows",
      date: "1 March 2024",
      amount: "Followed",
      method: "Issued ticket",
      status: "Approved",
    },
    {
      id: 1,
      product: "Shivani",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Ubuntu",
      date: "1 March 2024",
      amount: "Followed",
      method: "Requested ticket",
      status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">SI NO</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Device</TableCell>
            <TableCell className="tableCell">Date updated</TableCell>
            <TableCell className="tableCell">Guidelines followed or not</TableCell>
            <TableCell className="tableCell">Issue ticket</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
