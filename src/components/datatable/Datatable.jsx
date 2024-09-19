import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchIcon from "@mui/icons-material/Search";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import UpdateIcon from "@mui/icons-material/Update";

const Datatable = () => {
  const [data, setData] = useState(userRows);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFileUpload = (event) => {
    // Handle file upload here
    console.log(event.target.files[0]); // Just for demonstration
  };

  // Inline Widget Code for "Number of Guidelines"
  const Widget = () => {
    const amount = 50; // Example number of guidelines
    const diff = 10;

    return (
      <div className="widget">
        <div className="left">
          <span className="title">Number of Guidelines</span>
          <span className="counter">{amount}</span>
          <span className="link">See all guidelines</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff} %
          </div>
          <DevicesOutlinedIcon
            className="icon"
            style={{
              color: "blue",
              backgroundColor: "rgba(0, 0, 255, 0.2)",
              fontSize: "24px",
              marginRight: "10px",
              verticalAlign: "middle",
            }}
          />
        </div>
      </div>
    );
  };

  const actionColumn = [
    {
      field: "Issue ticket",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Update</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  const filteredData = data.filter(row =>
    row.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="datatable">
      {/* Widget Section */}
      <div className="widgetSection">
        <Widget />
      </div>

      {/* Datatable Section */}
      <div className="datatableTitle">
        Guidelines
        <div className="actions">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="searchBar"
          />
          <button className="searchButton">
            <SearchIcon />
          </button>
          <button className="uploadButton">
            <label htmlFor="file-upload" className="uploadLabel">
              <UploadFileIcon />
              Upload CSV
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
          </button>
          <button className="updateButton">
            <UpdateIcon />
            Update Guidelines
          </button>
        </div>
      </div>
      <DataGrid
        className="datagrid"
        rows={filteredData}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
