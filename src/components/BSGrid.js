import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./components.css";
import moment from "moment";

function BAGrid(props) {
  const { datasource, gridCols, loading} = props;
  return (
    <>
      {loading ? (
        <Typography>Loading..</Typography>
        // <BALoader />
      ) : datasource && datasource.length < 1 ? (
        <div className="d-flex justify-content-center align-items-center">
          {/* <img src={nodata} width="30%" /> */}
          <Typography>No Data Found</Typography>
        </div>
      ) : (
        <Box>
          <table className="table table-striped rounded overflow-hidden text-start">
            <thead className="bgPrimary text-white">
              <tr>
                {Array.isArray(gridCols)
                  ? gridCols.map((e, i) => <th className="tables" style={{backgroundColor:'black',color:'white',fontSize:15,padding:12}} key={i}>{e.label}</th>)
                  : null}
              </tr>
            </thead>
            <tbody className="gridBody">
              {Array.isArray(datasource)
                ? datasource.map((e, i) => (
                  <tr key={i}>
                    {gridCols
                      ? gridCols.map((a, b) => (
                        <td
                          className={
                            a.editRow || a.deleteRow
                              ? "btnCell"
                              : a.className
                                ? a.className
                                : ""
                          }
                          key={b}
                        >
                          {a.displayField
                            ? a.displayField(e, i)
                            : a.displayType == "date"
                              ? moment(e[a.key]).format("DD/MMM/YYYY")
                              : e[a.key]}
                        </td>
                      ))
                      : null}
                  </tr>
                ))
                : null}
            </tbody>
          </table>
        </Box>
      )}
    </>
  );
}
export default BAGrid;
