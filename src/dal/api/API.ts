import { AxiosResponse } from "axios";
import { RootHash } from "../../interfaces/Hash";
import { instanse } from "../axios/axios";

const testObject = {
    hash: {
        hash1: {
            "id": "new",
            "content": "new"
        },
        hash2: [
            {
                "id": "new",
                "content": "new"
            },
            {
                "id": "new",
                "content": "new"
            }
        ],
        hash: {
            key: "content-new"
        },
        hash4: {
            key: "content-new"
        }
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async GET(): Promise<AxiosResponse<RootHash>> {
        const { data } = await instanse.get("/hash");
        return data
    },
    async POST(): Promise<AxiosResponse<RootHash>> {
        const { data } = await instanse.post("/hash", testObject)
        return data;
    }
}