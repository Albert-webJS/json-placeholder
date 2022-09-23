import { Layout } from "./layout/Layout";
import { ManageRequest, DisplayJson } from "./components";
import { useEffect, useState } from "react";
import { HashType } from "./interfaces/Hash";
import API from "./dal/api/API";
import { loadavg } from "os";

export const App = (): JSX.Element => {
  const [data, setData] = useState<HashType>({});
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const axiosGetDb = async () => {
      const db = await API.GET();
      setData((data: any) => {
        return {
          ...data,
          ...db,
        };
      });
    };
    axiosGetDb();
  }, [isLoading]);

  const postRequest = (): void => {
    const postDb = API.POST();
    setData((data: any) => {
      return {
        ...data,
        ...postDb,
      };
    });
    setLoading((loading) => !loading);
  };

  return (
    <Layout>
      <ManageRequest handlePostRequest={postRequest} />
      <DisplayJson data={data} />
    </Layout>
  );
};
