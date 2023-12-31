import { useEffect, useState } from "react";
import LineGraph from "./Charts";
import { Axiosadmin } from "../../../API/AxiosInstance";
import Barchart from "./BarChart";
import CountStatus from "./CountStatus";


const Dashboard = () => {
    const token = localStorage.getItem('adminToken');
    const [data, setData] = useState([]);
    const [counts, setCounts] = useState([]);
    const fetchData = async () => {
      try {
        const headers = { authorization: token }
        const response = await Axiosadmin.get(`getCounts`, {headers});
        const result = await Axiosadmin.get(`booking`, {headers});
        if (result.status === 200 && response.status === 200) {
          setData(result.data);
          setCounts(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    console.log(data,'//datraaaa///')
  
    useEffect(() => {
      fetchData();
    }, []);

  return (
    <div>
      <CountStatus counts={counts} />
      <div className="flex justify-between ">
        <Barchart data={data} />
        <LineGraph data={data} />
        
      </div>
    </div>
  );
};
export default Dashboard;
