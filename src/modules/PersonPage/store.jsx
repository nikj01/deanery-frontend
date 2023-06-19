import {devtools} from "zustand/middleware";
import axios from "../../api/axios_helper";
import {create} from "zustand";

export const usePerson = create(devtools((set) => ({
    person: {},
    loading: false,
    error: null,

    fetchPerson: async (personId) => {
        set({loading: true})

        try {
            const response = await axios.get(`/people/${personId}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                    maxRedirects: 0
                })
            set({
                person: await response.data,
                error: null,
                loading: false,
            })
        } catch (error) {
            set({
                error: error.message,
                loading: false
            })
        } finally {
            set({loading: false});
        }
    }
})))
