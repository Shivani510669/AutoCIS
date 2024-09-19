export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "guideline name",
    headerName: "Guideline Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "applicableForOS",
    headerName: "Applicable For OS",
    width: 180,
  },
  {
    field: "dateUpdated",
    headerName: "Date Updated",
    width: 180,
  },
  {
    field: "guidelineLevel",
    headerName: "Guideline Level",
    width: 160,
  },
  {
    field: "userGroup",
    headerName: "User Group",
    width: 160,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];


//temporary data
export const userRows = [
  {
    id: 1,
    username: "Guideline",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    applicableForOS: "Windows",
    dateUpdated: "2024-09-15",
    guidelineLevel: "Level 1",
    userGroup: "Intern",
  },
  {
    id: 2,
    username: "Guideline",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    applicableForOS: "Linux,Windows",
    dateUpdated: "2024-08-22",
    guidelineLevel: "Level 2",
    userGroup: "SDE1",
    status: "passive",
  },
  {
    id: 3,
    username: "Guideline",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    applicableForOS: "Windows",
    dateUpdated: "2024-07-10",
    guidelineLevel: "Level 3",
    userGroup: "SDE2",
    status: "pending",
  },
  {
    id: 4,
    username: "Guideline",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    applicableForOS: "Linux",
    dateUpdated: "2024-06-05",
    guidelineLevel: "Level 1",
    userGroup: "Intern",
    status: "active",
  },
  {
    id: 5,
    username: "Guideline",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    applicableForOS: "Windows,Linux",
    dateUpdated: "2024-05-15",
    guidelineLevel: "Level 2",
    userGroup: "SDE1",
    status: "passive",
  },
  {
    id: 6,
    username: "Guideline",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    applicableForOS: "Linux",
    dateUpdated: "2024-04-10",
    guidelineLevel: "Level 3",
    userGroup: "SDE2",
    status: "active",
  },
  {
    id: 7,
    username: "Guideline",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    applicableForOS: "Windows",
    dateUpdated: "2024-03-20",
    guidelineLevel: "Level 1",
    userGroup: "Intern",
    status: "passive",
  },
  {
    id: 8,
    username: "Guideline",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    applicableForOS: "Linux",
    dateUpdated: "2024-02-18",
    guidelineLevel: "Level 2",
    userGroup: "SDE1",
    status: "active",
  },
  {
    id: 9,
    username: "Guideline",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    applicableForOS: "Windows",
    dateUpdated: "2024-01-05",
    guidelineLevel: "Level 3",
    userGroup: "SDE2",
    status: "pending",
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    applicableForOS: "Linux",
    dateUpdated: "2023-12-25",
    guidelineLevel: "Level 1",
    userGroup: "Intern",
    status: "active",
  },
];
